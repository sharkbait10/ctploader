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

// var createChannels = () => {
//     return new Promise((resolve, reject) => {
//
//         console.log('Creating the new channels')
//
//         const bodyBE = {
//             key: 'BE-webshop',
//             roles: ['ProductDistribution'],
//             name: {}
//         }
//
//         const createPostRequestBE = {
//             uri: service.build(),
//             method: 'POST',
//             body: bodyBE,
//             headers: {
//                 Accept: 'application/json',
//                 'Content-Type': 'application/json',
//             },
//         }
//
//         init.client.execute(createPostRequestBE).then(response => {
//             if (response.statusCode == 400) {
//                 reject(response)
//             }
//
//             const bodyNL = {
//                 key: 'NL-webshop',
//                 roles: ['ProductDistribution'],
//                 name: {}
//             }
//
//             const createPostRequestNL = {
//                 uri: service.build(),
//                 method: 'POST',
//                 body: bodyNL,
//                 headers: {
//                     Accept: 'application/json',
//                     'Content-Type': 'application/json',
//                 },
//             }
//
//             init.client.execute(createPostRequestNL).then(() => {
//                 if (response.statusCode == 400) {
//                     reject(response)
//                 }
//
//                 resolve(response)
//
//             }).catch((error) => {
//                 console.log('ERROR: ' + error.message)
//             });
//
//         }).catch((error) => {
//             console.log('ERROR: ' + error.message)
//         });
//     });
// }
//
// exports.createChannels = createChannels;
