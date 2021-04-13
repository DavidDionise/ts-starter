module.exports = {
  roots: [`${__dirname}/src`],
  testMatch: ["**/*.test.ts"],
  transform: {
    "^.+\\.ts$": "ts-jest",
  },
};
