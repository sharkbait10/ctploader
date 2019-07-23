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
    console.log('Adding the Ireland zone');
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
    console.log(response.body.results[0].id);
    return response.body.results[0].id;
  } catch (e) {
    console.log(e.message);
  }
}

exports.getZoneAsync = getZoneAsync;

// var createZones = () => {
//     return new Promise((resolve, reject) => {
//         init.client.execute(createPostRequestBE).then(response => {
//
//             if (response.statusCode == 400) {
//                 reject(response)
//             }
//
//             const bodyNL = {
//                 name: 'Netherlands',
//                 description: '',
//                 locations: [{
//                     country: 'NL',
//                     state: ''
//                 }
//                 ]
//             }
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
//
//                 init.client.execute(createPostRequestNL).then(response => {
//                     if(response.statusCode == 400){
//                         reject(response)
//                     }
//                     console.log('Adding the Netherlands zone');
//                     resolve(response)
//                 }).catch((error) => {
//                     console.log('ERROR: ' + error.message)
//                 })
//
//
//         }).catch((error) => {
//             console.log('ERROR: ' + error.message)
//         });
//
//     });
// };
//
// exports.createZones = createZones;
