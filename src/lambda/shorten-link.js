'use strict';

var request = require('request');
var config = require('dotenv').config();
var Hashids = require('hashids');

export function handler(event, context, callback) {
  var rootURL = process.env.URL + '/';
  var link = event.queryStringParameters['link'];

  var code = '';
  if (event.queryStringParameters['code']) {
    code = event.queryStringParameters['code'];
  } else {
    var hash = new Hashids();
    var number = Math.round(new Date().getTime() / 100);
    code = hash.encode(number);
  }

  if (destination.indexOf('://') == -1) {
    destination = 'https://' + destination;
  }

  var payload = {
    'form-name': 'routes',
    link: link,
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
    var response;
    if (err) {
      response = {
        statusCode: 400,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ errorMessage: 'Failed to create route, ' + err })
      };
    } else {
      response = {
        statusCode: 200,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url: rootURL + code })
      };
    }
    return callback(null, response);
  });
}
