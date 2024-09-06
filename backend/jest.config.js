module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/*.test.ts'],
  collectCoverageFrom: [
    'src/**/*.ts',
    '!src/**/*.test.ts',
    '!src/migrations/**',
    '!src/server.ts',
    '!src/env/**',
    '!src/lib/typeorm/typeorm.ts',
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  coverageReporters: ['text', 'html'],
  collectCoverage: true,
  coverageDirectory: 'coverage',
}
