import "@fortawesome/fontawesome-free/js/all.js";

import "highlight.js/styles/a11y-light.css";
import "../styles/variables.css";
import "../styles/footer.css";
import "../styles/courses.css";

import Layout from "../components/layout";

// TODO favicons

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
