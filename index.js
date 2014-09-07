'use strict';

/**
 * Module dependencies.
 */
var jade = require('jade');

/**
 * Make a *googleAnalyticsScript* variable available in all templates rendered.
 *
 * @param {String} this site's Google Analytics Property Id
 * @return {Function} middleware
 * @api public
 */
module.exports = function(propertyId) {
  var googleAnalyticsScript = jade.renderFile('./views/analytics.jade', {
    googleAnalyticsPropertyId: propertyId
  });

  return function(req, res, next) {
    res.locals.googleAnalyticsScript = googleAnalyticsScript;
    next();
  };
};
