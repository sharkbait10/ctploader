var init = require('../libs/init')
var libs = require('../globals/credentials')

const projectKey = libs.projectKey;

const service = init.createRequestBuilder({
  projectKey
}).zones

const body = {
  name: 'Zone',
  description: '',
  locations: [{
    country: 'IE',
    state: ''
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

async function createZonesAsync() {
  try {
    await init.client.execute(createPostRequest);
  } catch (e) {
    console.log(e.message);
  }
}

exports.createZonesAsync = createZonesAsync;

const createGetRequest = {
  uri: service.build(),
  method: 'GET',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
}

async function getZoneAsync() {
  try {
    let response = await init.client.execute(createGetRequest);
    return response.body.results[0].id;
  } catch (e) {
    console.log(e.message);
  }
}

exports.getZoneAsync = getZoneAsync;
