import path from "path";
import fs from "fs/promises";
import * as matter from "gray-matter";
import { titleCase } from "title-case";
import { marked } from "marked";
import hljs from "highlight.js";

marked.setOptions({
  baseUrl: process.env.BASE_URL ? process.env.BASE_URL + "/" : "/",
  highlight: function (code, lang) {
    const language = hljs.getLanguage(lang) ? lang : "plaintext";
    return hljs.highlight(code, { language }).value;
  },
  langPrefix: "hljs language-",
});

const DEFAULT_ICON = "info-circle";
const lessonsPath = path.join(process.env.ROOT, "lessons");

function getTitle(slug, override) {
  let title = override;
  if (!title) {
    title = titleCase(slug.split("-").join(" "));
  }

  return title;
}

async function getMeta(section) {
  let meta = {};
  try {
    const file = await fs.readFile(
      path.join(lessonsPath, section, "meta.json")
    );
    meta = JSON.parse(file.toString());
  } catch (e) {
    // no meta.json, nothing to do
  }

  return meta;
}

function slugify(inputPath) {
  const pathParts = inputPath.split("-");
  const pathOrder = pathParts.shift();
  const pathSlug = pathParts.join("-");
  return {
    slug: pathSlug,
    order: pathOrder,
    title: titleCase(pathParts.join(" ")),
  };
}

export async function getLessons() {
  const dir = await fs.readdir(lessonsPath);
  const sections = [];

  for (let dirFilename of dir) {
    const dirStats = await fs.lstat(path.join(lessonsPath, dirFilename));

    if (dirStats.isFile()) {
      continue;
    }

    const lessonsDir = await fs.readdir(path.join(lessonsPath, dirFilename));

    let {
      title: sectionTitle,
      order: sectionOrder,
      slug: sectionSlug,
    } = slugify(dirFilename);

    let icon = DEFAULT_ICON;

    const meta = await getMeta(dirFilename);
    if (meta.title) {
      sectionTitle = meta.title;
    }
    if (meta.icon) {
      icon = meta.icon;
    }

    const lessons = [];
    for (let lessonFilename of lessonsDir) {
      if (lessonFilename.slice(-3) !== ".md") {
        continue;
      }

      const filePath = path.join(lessonsPath, dirFilename, lessonFilename);

      const file = await fs.readFile(filePath);
      const { data } = matter(file.toString());
      let slug = lessonFilename.replace(/\.md$/, "");

      const slugParts = slug.split("-");
      const lessonOrder = slugParts.shift();

      slug = slugParts.join("-");

      const title = getTitle(slug, data.title);

      lessons.push({
        slug,
        fullSlug: `/lessons/${sectionSlug}/${slug}`,
        title,
        order: `${sectionOrder}${lessonOrder}`,
        path: filePath,
      });
    }

    sections.push({
      icon,
      title: sectionTitle,
      slug: sectionSlug,
      lessons,
      order: sectionOrder,
    });
  }

  return sections;
}

export async function getLesson(targetDir, targetFile) {
  const dir = await fs.readdir(lessonsPath);

  for (let i = 0; i < dir.length; i++) {
    const dirPath = dir[i];
    if (dirPath.endsWith(targetDir)) {
      const lessonDir = (
        await fs.readdir(path.join(lessonsPath, dirPath))
      ).filter((str) => str.endsWith(".md"));

      for (let j = 0; j < lessonDir.length; j++) {
        const slugPath = lessonDir[j];
        if (slugPath.endsWith(targetFile + ".md")) {
          const filePath = path.join(lessonsPath, dirPath, slugPath);
          const file = await fs.readFile(filePath);
          const { data, content } = matter(file.toString());
          const html = marked(content);
          const title = getTitle(targetFile, data.title);
          const meta = await getMeta(dirPath);

          const section = getTitle(targetDir, meta.title);
          const icon = meta.icon ? meta.icon : DEFAULT_ICON;

          let nextSlug;
          let prevSlug;

          // get next
          if (lessonDir[j + 1]) {
            // has next in section
            const { slug: next } = slugify(lessonDir[j + 1]);
            nextSlug = `${targetDir}/${next.replace(/\.md$/, "")}`;
          } else if (dir[i + 1]) {
            // has next in next section
            const nextDir = (
              await fs.readdir(path.join(lessonsPath, dir[i + 1]))
            ).filter((str) => str.endsWith(".md"));
            const nextDirSlug = slugify(dir[i + 1]).slug;
            const nextLessonSlug = slugify(nextDir[0]).slug.replace(
              /\.md$/,
              ""
            );
            nextSlug = `${nextDirSlug}/${nextLessonSlug}`;
          } else {
            // last section
            nextSlug = null;
          }

          // get prev
          if (lessonDir[j - 1]) {
            // has prev in section
            const { slug: prev } = slugify(lessonDir[j - 1]);
            prevSlug = `${targetDir}/${prev.replace(/\.md$/, "")}`;
          } else if (dir[i - 1]) {
            // has prev in prev section
            const prevDir = (
              await fs.readdir(path.join(lessonsPath, dir[i - 1]))
            ).filter((str) => str.endsWith(".md"));
            const prevDirSlug = slugify(dir[i - 1]).slug;
            const prevLessonSlug = slugify(
              prevDir[prevDir.length - 1]
            ).slug.replace(/\.md$/, "");
            prevSlug = `${prevDirSlug}/${prevLessonSlug}`;
          } else {
            // first section
            prevSlug = null;
          }

          const base = process.env.BASE_URL ? process.env.BASE_URL : "/";

          return {
            attributes: data,
            html,
            slug: targetFile,
            title,
            section,
            icon,
            filePath,
            nextSlug: nextSlug ? path.join(base, "lessons", nextSlug) : null,
            prevSlug: prevSlug ? path.join(base, "lessons", prevSlug) : null,
          };
        }
      }
    }
  }

  return false;
}
