module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: [
    '**/*.test.ts', // Include only test files ending with .test.ts
  ],
  collectCoverageFrom: [
    'src/**/*.ts', // Include all .ts files in the src directory
    '!src/**/*.test.ts', // Exclude test files from coverage
  ],
  coverageReporters: ['text', 'html'],
}
