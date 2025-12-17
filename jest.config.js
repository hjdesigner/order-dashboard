module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '\\.module\\.css$': 'identity-obj-proxy',
    '\\.(css|sass|scss)$': '<rootDir>/__mocks__/styleMock.js',
    '^@/components$': '<rootDir>/app/components/index.ts',
    '^@/components/(.*)$': '<rootDir>/app/components/$1',
    '^@/types/(.*)$': '<rootDir>/app/types/$1',
    '^@/app/(.*)$': '<rootDir>/app/$1',
    '^@/icons/(.*)\\.svg\\?url$': '<rootDir>/__mocks__/svgrMock.js',
    '^@/(.*)$': '<rootDir>/app/$1',
  },
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
};
