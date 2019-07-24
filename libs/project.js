var init = require('../libs/init')
var libs = require('../globals/credentials')

const projectKey = libs.projectKey;

const service = init.createRequestBuilder({
  projectKey
}).project

const createGetRequest = {
  uri: service.build(),
  method: 'GET',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
}

async function getProjectAsync() {
  try {
    let response = await init.client.execute(createGetRequest);
    return response;
  } catch (e) {
    console.log(e.message);
  }
}

exports.getProjectAsync = getProjectAsync;
