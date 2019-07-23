var init = require('../libs/init')
var libs = require('../globals/credentials')

const projectKey = libs.projectKey;

const service = init.createRequestBuilder({
    projectKey
}).project

async function changeLanguagesAsync(version) {

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
  if(response.statusCode == 400) {
    return response;
  } else {
    return response.body.version;
  }
}

exports.changeLanguagesAsync = changeLanguagesAsync;

// var changeLanguages = (version) => {
//     return new Promise((resolve, reject) => {
//
//       const body = {
//           version: version,
//           actions: [{
//               action: 'changeLanguages',
//               languages: [
//                   'en',
//                   'nl-NL',
//                   'nl-BE'
//               ]
//           }]
//       }
//       const createPostRequest = {
//           uri: service.build(),
//           method: 'POST',
//           body,
//           headers: {
//               Accept: 'application/json',
//               'Content-Type': 'application/json',
//           },
//       }
//
//             init.client.execute(createPostRequest).then(response => {
//
//                 if(response.statusCode == 400){
//                     reject(response)
//                 }
//
//                 // console.log('Adding the following languages:' + JSON.stringify(response.body.languages, undefined, 2))
//                 // console.log("channelResponse = " + JSON.stringify(response.body, undefined, 2))
//                 // console.log("statusCode = " + response.statusCode)
//                 resolve(response.body.version)
//             }).catch((error) => {
//                 console.log('ERROR: ' + error.message)
//             })
//         });
//
// };
//
// exports.changeLanguages = changeLanguages;
