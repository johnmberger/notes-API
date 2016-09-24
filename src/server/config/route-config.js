(function (routeConfig) {

  'use strict';

  routeConfig.init = function (app) {

    const routes = require('../routes/index');

    app.use('/api/notes', routes);

  };

})(module.exports);
