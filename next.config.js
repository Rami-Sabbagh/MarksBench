const fs = require('fs');
const path = require('path');

const CopyPlugin = require('copy-webpack-plugin');

// Extract the version number from package.json
// so it can be displayed in the application
const packageJsonPath = path.resolve(__dirname, './package.json');
const packageJson = fs.readFileSync(packageJsonPath, 'utf-8');
const version = JSON.parse(packageJson).version || 'UNDEFINED';

const pdfJsWorkerPath = path.resolve(__dirname, './node_modules/pdfjs-dist/build/pdf.worker.min.js');

module.exports = {
  env: {
    VERSION: version
  },
  reactStrictMode: true,
  sassOptions: {
    // TODO: Document this hack in README.md
    includePaths: [path.join(__dirname, 'styles/include')],
  },
  webpack: (config) => {
    config.plugins.push(
      new CopyPlugin({
        patterns: [
          { from: pdfJsWorkerPath, to: path.resolve(__dirname, './public/pdfjs/') },
        ],
      })
    );

    return config;
  },
}
