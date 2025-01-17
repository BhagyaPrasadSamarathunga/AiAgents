export default {
    testEnvironment: "jsdom",
     transform: {
       '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
     },
     setupFilesAfterEnv: ['@testing-library/jest-dom'],
     moduleNameMapper: {
      '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    },
    setupFilesAfterEnv: ['./setupTests.ts'],
};