import { useContext } from "react";
import Link from "next/link";
import { Context as HeaderContext } from "../context/headerContext";
import { Context as CourseContext } from "../context/courseInfoContext";

export default function Header(props) {
  const [{ section, title, icon }] = useContext(HeaderContext);
  const { frontendMastersLink } = useContext(CourseContext);
  return (
    <header className="navbar">
      <h1 className="navbar-brand">
        <Link href="/">{props.title}</Link>
      </h1>
      <div className="navbar-info">
        {frontendMastersLink ? (
          <a href={frontendMastersLink} className="cta-btn">
            Watch on Frontend Masters
          </a>
        ) : null}
        {section ? (
          <h2>
            {section} <i className={`fas fa-${icon}`} /> {title}
          </h2>
        ) : null}
      </div>
    </header>
  );
}
