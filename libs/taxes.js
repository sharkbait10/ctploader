var init = require('../libs/init')
var libs = require('../globals/credentials')

const projectKey = libs.projectKey;

const service = init.createRequestBuilder({
    projectKey
}).taxCategories

const body = {
    name: 'standard',
    description: 'Default tax category',
    key: 'standard'
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

let version = '';
let id = '';

async function createTaxCategoryAsync() {
  try {
    let response = await init.client.execute(createPostRequest);

    version = response.body.version;
    id = response.body.id;

    const service = init.createRequestBuilder({
        projectKey
    }).taxCategories.byId(id)

    const bodyStandardRate = {
        version: version,
        actions: [{
            action: 'addTaxRate',
            taxRate: {
                name: 'standard',
                amount: 0.2,
                includedInPrice: true,
                country: 'IE',
                state: ''
            }
        }]
    }

    const createPostRequestStandardRate = {
        uri: service.build(),
        method: 'POST',
        body: bodyStandardRate,
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    }

    console.log('Adding the standard tax category rate');

    await init.client.execute(createPostRequestStandardRate);
  } catch (e) {
    console.log(e.message);
  }
}

exports.createTaxCategoryAsync = createTaxCategoryAsync;

// var createTaxCategoryVAT = () => {
//     return new Promise((resolve, reject) => {
//         init.client.execute(createPostRequestVAT).then(response => {
//             console.log('Adding the VAT tax category');
//             if (response.statusCode == 400) {
//                 reject(response)
//             }
//
//             version = response.body.version;
//             id = response.body.id;
//
//             const serviceVAT = init.createRequestBuilder({
//                 projectKey
//             }).taxCategories.byId(id)
//
//             const bodyVATBERate = {
//                 version: version,
//                 actions: [{
//                     action: 'addTaxRate',
//                     taxRate: {
//                         name: 'VAT-BE',
//                         amount: 0.21,
//                         includedInPrice: false,
//                         country: 'BE',
//                         state: ''
//                     }
//                 }]
//             }
//
//             const createPostRequestVATBERate = {
//                 uri: serviceVAT.build(),
//                 method: 'POST',
//                 body: bodyVATBERate,
//                 headers: {
//                     Accept: 'application/json',
//                     'Content-Type': 'application/json',
//                 },
//             }
//
//             console.log('Adding the VAT BE tax category rate');
//
//             init.client.execute(createPostRequestVATBERate).then((response) => {
//                 if (response.statusCode == 400) {
//                     reject(response)
//                 }
//
//                 version = response.body.version;
//
//                 const serviceVAT = init.createRequestBuilder({
//                     projectKey
//                 }).taxCategories.byId(id)
//
//                 const bodyVATNLRate = {
//                     version: response.body.version,
//                     actions: [{
//                         action: 'addTaxRate',
//                         taxRate: {
//                             name: 'VAT-NL',
//                             amount: 0.21,
//                             includedInPrice: false,
//                             country: 'NL',
//                             state: ''
//                         }
//                     }]
//                 }
//
//                 const createPostRequestVATNLRate = {
//                     uri: serviceVAT.build(),
//                     method: 'POST',
//                     body: bodyVATNLRate,
//                     headers: {
//                         Accept: 'application/json',
//                         'Content-Type': 'application/json',
//                     },
//                 }
//
//                 console.log('Adding the VAT NL tax category rate');
//
//                 init.client.execute(createPostRequestVATNLRate).then((response) => {
//                     if (response.statusCode == 400) {
//                         reject(response)
//                     }
//
//                     resolve(response)
//                 })
//             })
//
//         }).catch((error) => {
//             console.log('ERROR: ' + error.message)
//         });
//
//     });
// };
//
// var createTaxCategoryStandard = () => {
//     return new Promise((resolve, reject) => {
//
//         init.client.execute(createPostRequestStandard).then(response => {
//
//             console.log('Adding the standard tax category');
//             if (response.statusCode == 400) {
//                 reject(response)
//             }
//
//             version = response.body.version;
//             id = response.body.id;
//
//             const serviceStandard = init.createRequestBuilder({
//                 projectKey
//             }).taxCategories.byId(id)
//
//             const bodyStandardBERate = {
//                 version: version,
//                 actions: [{
//                     action: 'addTaxRate',
//                     taxRate: {
//                         name: 'Standard shipping BE',
//                         amount: 0,
//                         includedInPrice: false,
//                         country: 'BE',
//                         state: ''
//                     }
//                 }]
//             }
//
//             const createPostRequestStandardBERate = {
//                 uri: serviceStandard.build(),
//                 method: 'POST',
//                 body: bodyStandardBERate,
//                 headers: {
//                     Accept: 'application/json',
//                     'Content-Type': 'application/json',
//                 },
//             }
//
//             console.log('Adding the standard BE tax category rate');
//
//             init.client.execute(createPostRequestStandardBERate).then((response) => {
//                 if (response.statusCode == 400) {
//                     reject(response)
//                 }
//
//                 version = response.body.version;
//
//                 const serviceStandard = init.createRequestBuilder({
//                     projectKey
//                 }).taxCategories.byId(id)
//
//                 const bodyStandardNLRate = {
//                     version: version,
//                     actions: [{
//                         action: 'addTaxRate',
//                         taxRate: {
//                             name: 'Standard shipping NL',
//                             amount: 0,
//                             includedInPrice: false,
//                             country: 'NL',
//                             state: ''
//                         }
//                     }]
//                 }
//
//                 const createPostRequestStandardNLRate = {
//                     uri: serviceStandard.build(),
//                     method: 'POST',
//                     body: bodyStandardNLRate,
//                     headers: {
//                         Accept: 'application/json',
//                         'Content-Type': 'application/json',
//                     },
//                 }
//
//                 console.log('Adding the standard NL tax category rate');
//
//                 init.client.execute(createPostRequestStandardNLRate).then((response) => {
//                     if (response.statusCode == 400) {
//                         reject(response)
//                     }
//
//                     resolve(id)
//                 })
//
//             })
//
//         }).catch((error) => {
//             console.log('ERROR: ' + error.message)
//         })
//     });
// };
//
const createGetRequest = {
    uri: service.build(),
    method: 'GET',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
}

async function getTaxCategoriesAsync() {
  try {
    let response = await init.client.execute(createGetRequest);
    return response;
  } catch (e) {
    console.log(e.message);
  }
}

// var getTaxCategories = () => {
//     return new Promise((resolve, reject) => {
//         init.client.execute(createGetRequest).then(response => {
//
//             if (response.statusCode == 400) {
//                 reject(response)
//             }
//
//             resolve(response)
//
//         });
//
//     });
// };

async function getStandardTaxCategoryAsync() {
  try {
    let response = await getTaxCategoriesAsync();
    for(let i=0; i<response.body.results.length; i++) {
      if(response.body.results[i].name === 'standard') {
        return response.body.results[i].id;
      }
    }
  } catch (e) {
    console.log(e.message);
  }
}

exports.getStandardTaxCategoryAsync = getStandardTaxCategoryAsync;

// var getStandardTaxCategory = () => {
//     return new Promise((resolve, reject) => {
//         getTaxCategories().then((response) => {
//
//             response.body.results.forEach(element => {
//                 if (element.name === 'Standard shipping') {
//                     resolve(element.id)
//                 }
//             });
//
//             reject(response)
//         }).catch((error) => {
//             console.log('ERROR: ' + error.message)
//         })
//     });
// }

// exports.getStandardTaxCategory = getStandardTaxCategory;
//
//
// exports.createTaxCategoryVAT = createTaxCategoryVAT;
// exports.createTaxCategoryStandard = createTaxCategoryStandard;
