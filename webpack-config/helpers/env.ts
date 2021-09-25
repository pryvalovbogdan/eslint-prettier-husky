const isDevMode = process.env.NODE_ENV !== 'production';
const getMode = isDevMode ? 'development' : 'production';
const isNeedSourceMaps = !!process.argv.includes('--source-maps');

module.exports = {
  isDevMode,
  getMode,
  isNeedSourceMaps,
};
