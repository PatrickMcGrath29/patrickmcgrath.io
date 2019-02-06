'use strict';

var request = require('request');
var config = require('dotenv').config();
var Hashids = require('hashids');

export function handler(event, context, callback) {
  const rootURL = process.env.URL + '/';
  const destination = event.queryStringParameters['link'];
  const existingRoutes = request.get({ url: rootURL})

  let code = '';
  if (event.queryStringParameters['code']) {
    code = event.queryStringParameters['code']
  } else {

  }
  var hash = new Hashids();
  var number = Math.round(new Date().getTime() / 100);
  var code = hash.encode(number);

  // ensure that a protocol was provided
  if (destination.indexOf('://') == -1) {
    destination = 'http://' + destination;
  }

  var payload = {
    'form-name': 'routes',
    destination: destination,
    code: code,
    expires: ''
  };

  // post the new route to the Routes form
  request.post({ url: rootURL, formData: payload }, function(
    err,
    httpResponse,
    body
  ) {
    var msg;
    if (err) {
      msg = 'Post to Routes stash failed: ' + err;
    } else {
      msg = 'Route registered. Site deploying to include it. ' + rootURL + code;
    }
    console.log(msg);
    // tell the user what their shortcode will be
    return callback(null, {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ url: rootURL + code })
    });
  });

  // ENHANCEMENT: check for uniqueness of shortcode
  // ENHANCEMENT: let the user provide their own shortcode
  // ENHANCEMENT: dont' duplicate existing routes, return the current one
  // ENHANCEMENT: allow the user to specify how long the redirect should exist for
}
