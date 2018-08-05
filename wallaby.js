require("dotenv-safe").config({
  silent: true,
  path: "./test/.env.test"
});

module.exports = () => {
  return {
    files: ["app/**/*.js"],

    tests: ["test/*.test.js"],

    testFramework: "mocha",

    env: {
      type: "node"
    }
  };
};
