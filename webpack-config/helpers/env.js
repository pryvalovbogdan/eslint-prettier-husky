const isDevMode = process.env.NODE_ENV !== 'production';
const getMode = isDevMode ? 'development' : 'production';
const isNeedSourceMaps = !!process.argv.includes('--source-maps');

export default {
  isDevMode,
  getMode,
  isNeedSourceMaps,
};
