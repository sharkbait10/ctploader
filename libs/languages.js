var init = require('../libs/init')
var libs = require('../globals/credentials')

const projectKey = libs.projectKey;

const service = init.createRequestBuilder({
  projectKey
}).project

async function changeLanguagesAsync(version) {
  try {
    const body = {
      version: version,
      actions: [{
        action: 'changeLanguages',
        languages: [
          'en'
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
  } catch (e) {
    console.log(e.message);
  } finally {

  }
}

exports.changeLanguagesAsync = changeLanguagesAsync;
