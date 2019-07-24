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
              'IE'
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
