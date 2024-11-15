module.exports = {
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest",
  },
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"],
  moduleFileExtensions: ["js", "jsx"],
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
  },
  coverageDirectory: "coverage",
  collectCoverageFrom: ["src/**/*.{js,jsx}"],
  coverageThreshold: {
    global: {
      branches: 40, // Minimum percentage of branches covered
      functions: 40, // Minimum percentage of functions covered
      lines: 40, // Minimum percentage of lines covered
      statements: 40, // Minimum percentage of statements covered
    },
  },
  maxWorkers: "50%"
};
