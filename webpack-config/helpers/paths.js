const fs = require('fs');
const path = require('path');

const ROOT_DIR = fs.realpathSync(process.cwd());

function pathResolve(...args) {
  return path.resolve(ROOT_DIR, ...args);
}

module.exports = {
  ROOT_DIR,
  SRC_DIR: pathResolve('src'),
  BUILD_DIR: pathResolve('dist'),
  PUBLIC_DIR: pathResolve('public'),
  JS_ENTRY: pathResolve('src/index'),
  STYLES_ENTRY: pathResolve('style/style.scss'),
  OUTPUT: pathResolve('dist/'),
  CONTENT_BASE: pathResolve('public/'),
  MODULES_ALIAS: pathResolve('modules/'),
  HTML_ENTRY: pathResolve('public/index.html'),
  ASSETS: pathResolve('assets/'),
  pathResolve,
};
