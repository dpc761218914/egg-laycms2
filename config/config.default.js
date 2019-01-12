'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1547263775387_1016';

  // add your config here
  config.middleware = [];

  config.view = {
      mapping: {'.html': 'ejs'} //左边写成.html后缀，会自动渲染.html文件
  };

  // static
  config.static = {
      prefix: '/public/',
  };


    return config;
};
