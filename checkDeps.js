const packages = [
  'jest',
  'ts-jest',
  '@types/jest',
  'jest-environment-jsdom',
  '@testing-library/react',
  '@testing-library/jest-dom',
];

packages.forEach((pkg) => {
  try {
    require.resolve(pkg);
    console.log(`${pkg} is installed`);
  } catch {
    console.log(`${pkg} is NOT installed`);
  }
});
