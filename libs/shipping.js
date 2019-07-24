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
