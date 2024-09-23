module.exports = {
  rootDir: '.',
  testEnvironment: 'node',
  verbose: true,
  resetModules: true,
  clearMocks: true,
  silent: true,
  testMatch: ['**/src/**/*.test.js'],
  reporters: ['default', ['github-actions', { silent: false }], 'summary'],
  collectCoverageFrom: ['src/**/*.js'],
  coveragePathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/.server',
    '<rootDir>/.*index\\.js$',
    '<rootDir>/src/helpers/',
    '<rootDir>/src/api/router.js',
    '<rootDir>/src/api/server.js'
  ],
  coverageDirectory: '<rootDir>/coverage'
}
