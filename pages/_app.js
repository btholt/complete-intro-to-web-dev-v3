import "@fortawesome/fontawesome-free/js/all.js";

import "highlight.js/styles/a11y-light.css";
import "../styles/variables.css";
import "../styles/footer.css";
import "../styles/courses.css";
import "klipse/dist/codemirror.css";
import Layout from "../components/layout";

// TODO favicons

globalThis.klipse_settings = {
  selector_eval_js: ".language-javascript",
  selector_eval_html: ".language-html",
  codemirror_options_in: {
    indentUnit: 2,
    lineWrapping: true,
    lineNumbers: true,
    autoCloseBrackets: true,
  },
  codemirror_options_out: {
    lineWrapping: true,
    lineNumbers: true,
  },
};

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
