let request = require('request');
let config = require('dotenv').config();
let Hashids = require('hashids');

export function handler(event, context, callback) {
  let rootURL = process.env.URL + '/';

  let link = event.queryStringParameters['link'];
  let code = event.queryStringParameters['code'];

  if (link == undefined) {
    return callback(null, { statusCode: 400, body: "Must specify a link to be shortened"})
  }

  if (code == undefined || code.length == 0) {
    let hash = new Hashids();
    let number = Math.round(new Date().getTime() / 100);
    code = hash.encode(number);
  }

  if (link.indexOf('://') == -1) {
    link = 'https://' + link;
  }

  let payload = {
    'form-name': 'routes',
    link: link,
    code: code
  };

  // post the new route to the Routes form
  request.post({ url: rootURL, formData: payload }, function(
    err,
    httpResponse,
    body
  ) {
    let response;
    if (err) {x
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
  return callback(null, { statusCode: 200, body: 'Done!' });
}
