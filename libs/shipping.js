var init = require('../libs/init')
var libs = require('../globals/credentials')

const projectKey = libs.projectKey;

const service = init.createRequestBuilder({
    projectKey
}).shippingMethods

async function createShippingMethodAsync(standardTaxCategoryId, zoneId) {
  const body = {
      name: 'home-delivery',
      key: 'home-delivery',
      description: 'UK Tracked Courier Delivery Service',
      taxCategory: {
          id: standardTaxCategoryId,
          typeId: 'tax-category'
      },
      zoneRates: [{
        zone: {
          typeId: 'zone',
          id: zoneId
        },
        shippingRates: [{
          price: {
            currencyCode: 'EUR',
            centAmount: 299
          }
        }]
      }],
      isDefault: true
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

  try {
    await init.client.execute(createPostRequest);
  } catch (e) {
    console.log(e.message);
  }
}

exports.createShippingMethodAsync = createShippingMethodAsync;

// var createShippingMethod = (standardTaxCategoryId) => {
//     return new Promise((resolve, reject) => {
//
//         const body = {
//             name: 'Standard shipping method',
//             key: 'standard_shipping_method',
//             description: 'Standard shipping method',
//             taxCategory: {
//                 id: standardTaxCategoryId,
//                 typeId: 'tax-category'
//             },
//             zoneRates: [],
//             isDefault: true
//         }
//
//         const createPostRequest = {
//             uri: service.build(),
//             method: 'POST',
//             body,
//             headers: {
//                 Accept: 'application/json',
//                 'Content-Type': 'application/json',
//             },
//         }
//
//         init.client.execute(createPostRequest).then(response => {
//             if (response.statusCode == 400) {
//                 reject(response)
//             }
//
//             console.log('Created a new standard shipping method')
//             resolve(response)
//         });
//     });
// }
//
// exports.createShippingMethod = createShippingMethod;
