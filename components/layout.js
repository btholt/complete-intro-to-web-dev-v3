import { useState } from "react";

import Footer from "./footer";
import Header from "./header";
import getCourseConfig from "../data/course";
import { Provider as HeaderProvider } from "../context/headerContext";
import { Provider as CourseInfoProvider } from "../context/courseInfoContext";

function Layout({ children }) {
  const courseInfo = getCourseConfig();
  const headerHook = useState({});
  return (
    <CourseInfoProvider value={courseInfo}>
      <HeaderProvider value={headerHook}>
        <div className="remix-app">
          <Header title={courseInfo.title} />
          <div className="content-container">
            <div className="main">{children}</div>
          </div>
          <Footer
            twitter={courseInfo.social.twitter}
            github={courseInfo.social.github}
            linkedin={courseInfo.social.linkedin}
          />
        </div>
      </HeaderProvider>
    </CourseInfoProvider>
  );
}

export default function App({ children }) {
  return <Layout>{children}</Layout>;
}
