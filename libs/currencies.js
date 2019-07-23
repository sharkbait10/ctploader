var init = require('../libs/init')
var libs = require('../globals/credentials')

const projectKey = libs.projectKey;

const service = init.createRequestBuilder({
    projectKey
}).project

async function createCurrenciesAsync(version) {

  const body = {
      version: version,
      actions: [{
          action: 'changeCurrencies',
          currencies: [
              'EUR'
          ]
      }]
  }
  const createPostRequest = {
      uri: service.build(),
      method: 'POST',
      body: body,
      headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
      },
  }

  try {
    await init.client.execute(createPostRequest);
  } catch (e) {
    console.log(e.message);
  }
}

exports.createCurrenciesAsync = createCurrenciesAsync;
