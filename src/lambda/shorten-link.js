const crypto = require('crypto');
const axios = require('axios');

export function handler(event, context, callback) {
  // let rootURL = process.env.URL + '/';
  let rootURL = "https://patrickmcgrath.io/static/done"

  let link = event.queryStringParameters['link'];
  let code = event.queryStringParameters['code'];

  if (link == undefined) {
    return callback(null, {
      statusCode: 400,
      body: 'Must specify a link to be shortened'
    });
  }

  if (code == undefined || code.length == 0) {
    code = crypto.randomBytes(20).toString('hex');
  }

  if (link.indexOf('://') == -1) {
    link = 'https://' + link;
  }

  let payload = {
    'form-name': 'routes',
    link: link,
    code: code
  };

  axios
    .post(rootURL, payload)
    .then(response => {
      return callback(null, {
        statusCode: 200,
        body: 'Success'
      });
    })
    .catch(error => {
      console.log(error.message)
      return callback(null, {
        statusCode: 400,
        body: 'Erorr'
      });
    });
}
