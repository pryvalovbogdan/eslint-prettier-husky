import fs from 'fs';
import path from 'path';

const pathResolve = (...args) => path.resolve(fs.realpathSync(process.cwd()), ...args);
const getPackageJson = require(pathResolve('package.json'));

export default {
  pathResolve,
  getPackageJson,
};
