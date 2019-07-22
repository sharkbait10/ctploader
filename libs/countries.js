var init = require('../libs/init')
var libs = require('../globals/credentials')

const projectKey = libs.projectKey;

const service = init.createRequestBuilder({
    projectKey
}).project

async function changeCountriesAsync(version) {
  const body = {
      version: version,
      actions: [{
          action: 'changeCountries',
          countries: [
              'BE',
              'NL'
          ]
      }]
  }
  const createPostRequest = {
      uri: service.build(),
      method: 'POST',
      body,
      headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
      },
  }

  let response = await init.client.execute(createPostRequest);
  return response;
}

exports.changeCountriesAsync = changeCountriesAsync;

var changeCountries = (version) => {
    return new Promise((resolve, reject) => {

        const body = {
            version: version,
            actions: [{
                action: 'changeCountries',
                countries: [
                    'BE',
                    'NL'
                ]
            }]
        }
        const createPostRequest = {
            uri: service.build(),
            method: 'POST',
            body,
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        }

        init.client.execute(createPostRequest).then(response => {
            if(response.statusCode == 400){
                reject(response)
            }
            // console.log('Adding the following countries:' + JSON.stringify(response.body.countries, undefined, 2))
            // console.log("channelResponse = " + JSON.stringify(response.body, undefined, 2))
            // console.log("statusCode = " + response.statusCode)
            resolve(response)
        }).catch((error) => {
            console.log('ERROR: ' + error.message)
        })

    });
};

exports.changeCountries = changeCountries;
