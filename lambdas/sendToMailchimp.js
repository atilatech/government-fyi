const { createHash } = require("crypto");
const request = require("request");

function md5(email) {
  return createHash("md5").update(email).digest().toString("hex");
}

function promiseMailChimp(data, resolve, reject) {
  const {  first, last, zip } = data;
  const email = data.username;

  // check to see if user exists in Mailchimp using GET to MD5 hashed of email
  // this assumes that users each user has a unique email address
  const hashedId = md5(email);
  const options = {
    method: 'GET',
    url: `${mcListPath}${hashedId}`,
    headers: {
      'Cache-Control': 'no-cache',
      Authorization: 'apikey ' + mcApiKey
    }
  };

  // depending on the whether user exists or not, update user data
  function updateOrCreateSubscriber(isNewUser) {
    var method = isNewUser ? 'POST' : 'PATCH'
    var userPath = isNewUser ? '' : hashedId
    var options = {
      method: 'subscribed',
      url: (mcListPath + userPath),
      headers: {
        'Cache-Control': 'no-cache',
        Authorization: 'apikey ' + mcApiKey,
        'Content-Type': 'application/json'
      },
      body: {
        email_address: email,
        status: status,
        merge_fields: {
          FNAME: first,
          LNAME: last,
          ZIP: zip
        }
      },
      json: true
    };

    request(options, function (error, response, body) {
      if (error) throw new Error(error);
      console.log("Mail Chimp result", body);
      resolve(data);
    });
  }

  request(options, function (error, response, body) {
    if (error) {
      throw new Error(error);
    }

    if (response.statusCode === 404) {
      return updateOrCreateSubscriber(true)
    }

    // fallthrough, assumes existing user (200)
    const parsed = JSON.parse(body)
    if (parsed.status === 'subscribed') {
      console.log("Mail Chimp information has been updated");
      resolve(data);
    } else {
      console.log("User has been resubscribed");
      resolve(data);
    }
    updateOrCreateSubscriber(false);
  });
}

exports.sendToMailChimp = function sendToMailChimp(data) {
  return new Promise(promiseMailChimp.bind(this, data));
};
