var init = require('../libs/init')
var libs = require('../globals/credentials')

const projectKey = libs.projectKey;

const service = init.createRequestBuilder({
    projectKey
}).channels

const body = {
    key: 'online-store',
    roles: ['InventorySupply'],
    name: {'en-ie': 'online-store'}
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

async function createChannelAsync() {
  try {
    await init.client.execute(createPostRequest);
  } catch (e) {
    console.log(e.message);
  }
}

exports.createChannelAsync = createChannelAsync;
