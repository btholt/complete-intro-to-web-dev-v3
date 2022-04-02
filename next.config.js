const course = require("./course.json");
const BASE_URL = course?.productionBaseUrl || "";

module.exports = {
  basePath: BASE_URL,
  env: {
    ROOT: __dirname,
    BASE_URL,
  },
  async redirects() {
    if (BASE_URL) {
      return [
        {
          source: "/",
          destination: BASE_URL,
          basePath: false,
          permanent: false,
        },
      ];
    }
    return [];
  },
};
