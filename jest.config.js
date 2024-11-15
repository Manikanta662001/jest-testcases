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
      branches: 80, // Minimum percentage of branches covered
      functions: 80, // Minimum percentage of functions covered
      lines: 80, // Minimum percentage of lines covered
      statements: 80, // Minimum percentage of statements covered
    },
  },
  maxWorkers: "50%"
};
