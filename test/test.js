'use strict';

/**
 * Dependencies.
 */
var request = require('supertest');
var express = require('express');

var googleAnalytics = require('..');

/**
 * Tests.
 */
describe('googleAnalytics()', function() {
  it('should set res.locals.googleAnalyticsScript', function(done) {
    var app = express();
    app.set('view engine', 'jade');
    app.use(googleAnalytics('test123'));

    app.get('/', function(req, res) {
      res.render('test');
    });

    request(app)
      .get('/')
      .end(function(err, res) {
        if (err) throw err;
        if (res.text.indexOf('test123') === -1) {
          throw new Error('No Google Analytics script found.');
          done();
        } else {
          done();
        }
      });
  });
});
