import config from "../course.json";

const DEFAULT_CONFIG = {
  author: {
    name: "An Author",
    company: "An Author's Company",
  },
  title: "A Superb Course",
  subtitle: "That Teaches Nice Things",
  frontendMastersLink: "",
  description: "A nice course for nice people.",
  keywords: ["a nice course", "for people", "to learn", "nice things"],
  social: {
    linkedin: "btholt",
    github: "btholt",
    twitter: "holtbt",
  },
  productionBaseUrl: "/",
};

export default function getCourseConfig() {
  return Object.assign({}, DEFAULT_CONFIG, config);
}
