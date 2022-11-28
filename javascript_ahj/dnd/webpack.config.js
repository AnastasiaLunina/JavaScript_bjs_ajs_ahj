const LicenseWebpackPlugin = require('license-webpack-plugin').LicenseWebpackPlugin;

module.exports = {
  plugins: [
    new LicenseWebpackPlugin()
  ],
  mode: 'production',
};