import Head from "next/head";
import "@fortawesome/fontawesome-free/css/all.css";

import "highlight.js/styles/a11y-light.css";
import "../styles/variables.css";
import "../styles/footer.css";
import "../styles/courses.css";
import "klipse/dist/codemirror.css";
import Layout from "../components/layout";

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
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${process.env.BASE_URL}/images/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={`${process.env.BASE_URL}/images/favicon-32x32.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={`${process.env.BASE_URL}/images/favicon-16x16.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={`${process.env.BASE_URL}/images/favicon-16x16.png`}
        />
        <link
          rel="icon"
          type="image/x-icon"
          href={`${process.env.BASE_URL}/images/favicon.ico`}
        />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}
