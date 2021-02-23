/** @type {import('@jest/types').Config.InitialOptions} */
// eslint-disable-next-line no-undef
module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  coverageReporters: ["json", "lcov", "html"],
  coveragePathIgnorePatterns: ["/node_modules/"],
};
