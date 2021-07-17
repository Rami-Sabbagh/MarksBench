const fs = require('fs');
const path = require('path');

// Extract the version number from package.json
// so it can be displayed in the application
const packageJsonPath = path.resolve(__dirname, './package.json');
const packageJson = fs.readFileSync(packageJsonPath, 'utf-8');
const version = JSON.parse(packageJson).version || 'UNDEFINED';

module.exports = {
  env: {
    VERSION: version
  },
  reactStrictMode: true,
  sassOptions: {
    // TODO: Document this hack in README.md
    includePaths: [path.join(__dirname, 'styles/include')],
  },
}
