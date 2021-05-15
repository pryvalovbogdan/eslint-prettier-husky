import merge from 'webpack-merge';

import { env, paths } from './helpers';
import commonConfig from './config/webpack.config.base';
import devConfig from './config/webpack.config.base';
import prodConfig from './config/webpack.config.base';

const configCreator = options => {
  const envConfig = env.isDevMode ? devConfig : prodConfig;

  return merge.smart(commonConfig(options), envConfig(options));
};

export default {
  configCreator,
  env,
  paths,
};

