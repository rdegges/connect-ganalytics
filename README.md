# connect-ganalytics

[![NPM Version](https://img.shields.io/npm/v/connect-ganalytics.svg?style=flat)](https://npmjs.org/package/connect-ganalytics)
[![NPM Downloads](http://img.shields.io/npm/dm/connect-ganalytics.svg?style=flat)](https://npmjs.org/package/connect-ganalytics)
[![Build Status](https://img.shields.io/travis/rdegges/connect-ganalytics.svg?style=flat)](https://travis-ci.org/rdegges/connect-ganalytics)

*Ridiculously simple Google Analytics for Express.js.*


## Meta

- Author: Randall Degges
- Email: r@rdegges.com
- Site: http://www.rdegges.com
- Status: production ready


## Installation

To install `connect-ganalytics` using [npm](https://www.npmjs.org/), simply run:

```console
$ npm install connect-ganalytics --save
```

In the root of your project directory.


## Usage

Once you have `connect-ganalytics` installed, you can integrate it into your
[Express.js](http://expressjs.com/) application easily.

The first step is to initialize the `googleAnalytics` middleware.  Below is an
example Express.js application which demonstrates how to configure the
middleware -- simply pass it your Google Analytics Tracking ID (*you can find
this in your Google Analytics dashboard*):

```javascript
var express = require('express');
var googleAnalytics = require('connect-ganalytics');

var app = express();
app.use(googleAnalytics('UA-11364428-12'));
```

Once the middleware is initialized as shown above, you can simply use the
`googleAnalyticsScript` variable in your base template (*regardless of what
templating language you're using*) -- just make sure to escape the output.

Here's an example `layout.jade` template which renders the Google Analytics
script properly, using the [Jade](http://jade-lang.com/) templating language:

```jade
html
  head.
    !{googleAnalyticsScript}
  body
    h1 Welcome!
```

**NOTE**: The `!{}` syntax in Jade means to output the contents of the variable,
but to *not* escape the outputs.  This is important, as if you have escaping
enabled (*which is the default behavior*), your script will render as HTML, not
an actual Javascript script.


## Changelog

v0.0.0: 9-7-2014

    - First release!
