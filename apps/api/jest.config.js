module.exports = {
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json',
    },
  },
  moduleFileExtensions: ['js', 'ts'],
  transform: {
    '^.+\\.(ts)$': 'ts-jest',
  },
  testEnvironment: 'node',
  moduleNameMapper: {
    'src(.*)$': '<rootDir>/src/$1',
  },
  preset: 'ts-jest',
}
