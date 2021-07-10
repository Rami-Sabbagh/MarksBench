const path = require('path');

module.exports = {
  reactStrictMode: true,
  sassOptions: {
    // TODO: Document this hack in README.md
    includePaths: [path.join(__dirname, 'styles/include')],
  },
}
