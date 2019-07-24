var init = require('../libs/init')
var libs = require('../globals/credentials')

const projectKey = libs.projectKey;

const service = init.createRequestBuilder({
  projectKey
}).productDiscounts

const serviceCartDiscounts = init.createRequestBuilder({
  projectKey
}).cartDiscounts

const serviceDiscountCodes = init.createRequestBuilder({
  projectKey
}).discountCodes

async function createVEExclusiveProductDiscount(sunglassesCategoryId) {

  const bodyVEExclusive = {
    value: {
      type: "absolute",
      money: [{
        type: "centPrecision",
        currencyCode: "EUR",
        centAmount: 500,
        fractionDigits: 2
      }]
    },
    predicate: 'categories.id = (\"' + sunglassesCategoryId + '\")',
    name: {
      "en": "VE Exclusive"
    },
    description: {
      "en": "VE Exclusive"
    },
    isActive: false,
    sortOrder: "0.9",
    references: [{
      typeId: "category",
      id: sunglassesCategoryId
    }],
    attributeTypes: {}
  }

  const createPostVEEXclusiveRequest = {
    uri: service.build(),
    method: 'POST',
    body: bodyVEExclusive,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }

  try {
    await init.client.execute(createPostVEEXclusiveRequest);
  } catch (e) {
    console.log(e.message);
  }
}

async function createContactLensesProductDiscount(contactLensesCategoryId) {

  const bodyContactLensesDiscount = {
    value: {
      type: "relative",
      permyriad: 1000
    },
    predicate: 'categories.id = (\"' + contactLensesCategoryId + '\")',
    name: {
      "en": "10% Contact lenses"
    },
    description: {
      "en": "10% discount"
    },
    isActive: true,
    sortOrder: "0.99",
    references: [{
      typeId: "category",
      id: contactLensesCategoryId
    }],
    attributeTypes: {}
  }

  const createPostContactLensesDiscountRequest = {
    uri: service.build(),
    method: 'POST',
    body: bodyContactLensesDiscount,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }

  try {
    await init.client.execute(createPostContactLensesDiscountRequest);
  } catch (e) {
    console.log(e.message);
  }
}

async function createNHSProductDiscount() {
  const bodyNHS = {
  value: {
    type: 'absolute',
    money: [
      {
        type: 'centPrecision',
        currencyCode: 'EUR',
        centAmount: 9100,
        fractionDigits: 2
      }
    ]
  },
  predicate: 'sku = "6921103616407"',
  name: {
    en: 'NHS'
  },
  description: {
    en: 'NHS'
  },
  isActive: true,
  sortOrder: '0.999',
  references: [],
  attributeTypes: {}
}

  const createNHSPostRequest = {
    uri: service.build(),
    method: 'POST',
    body: bodyNHS,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }

  try {
    await init.client.execute(createNHSPostRequest);
  } catch (e) {
    console.log(e.message);
  }
}

async function create10EURCartDiscount() {
  const body10EUR = {
    value: {
      type: "absolute",
      money: [{
        type: "centPrecision",
        currencyCode: "EUR",
        centAmount: 1000,
        fractionDigits: 2
      }]
    },
    cartPredicate: "totalPrice > \"10.00 EUR\"",
    target: {
      type: "lineItems",
      predicate: "1 = 1"
    },
    name: {
      "en": "10 EUR discount"
    },
    description: {
      "en": "Get additional 10 euro's off"
    },
    stackingMode: "Stacking",
    isActive: false,
    requiresDiscountCode: false,
    sortOrder: "0.99",
    references: [],
    attributeTypes: {},
    cartFieldTypes: {},
    lineItemFieldTypes: {},
    customLineItemFieldTypes: {}
  }

  const create10EUROPostRequest = {
    uri: serviceCartDiscounts.build(),
    method: 'POST',
    body: body10EUR,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }

  try {
    await init.client.execute(create10EUROPostRequest);
  } catch (e) {
    console.log(e.message);
  }
}

async function createHappySummerVoucherCartDiscount() {
  const bodyHappySummer = {
    value: {
      type: "relative",
      permyriad: 1000
    },
    cartPredicate: "1 = 1",
    target: {
      type: "lineItems",
      predicate: "1 = 1"
    },
    name: {
      "en": "Happy Summer Voucher"
    },
    description: {
      "en": "Happy Summer Voucher"
    },
    stackingMode: "Stacking",
    isActive: true,
    requiresDiscountCode: true,
    sortOrder: "0.9",
    references: [],
    attributeTypes: {},
    cartFieldTypes: {},
    lineItemFieldTypes: {},
    customLineItemFieldTypes: {}
  }

  const createHappySummerPostRequest = {
    uri: serviceCartDiscounts.build(),
    method: 'POST',
    body: bodyHappySummer,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }

  try {
    let happySummerResponse = await init.client.execute(createHappySummerPostRequest);
    return happySummerResponse;
  } catch (e) {
    console.log(e.message);
  }
}

async function createHappySummerVoucher(happySummerId) {
  const bodyHappySummerVoucher = {
    code: "HAPPYSUMMER",
    name: {
      "en": "Happy Summer 10%"
    },
    description: {
      "en": "Happy Summer 10%"
    },
    cartDiscounts: [{
      typeId: "cart-discount",
      id: happySummerId
    }],
    isActive: true,
    references: [],
    attributeTypes: {},
    cartFieldTypes: {},
    lineItemFieldTypes: {},
    customLineItemFieldTypes: {},
    groups: []
  }

  const createHappySummerVoucherPostRequest = {
    uri: serviceDiscountCodes.build(),
    method: 'POST',
    body: bodyHappySummerVoucher,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }

  try {
    await init.client.execute(createHappySummerVoucherPostRequest);
  } catch (e) {
    console.log(e.message);
  }
}

async function getCategoryIdFromKey(categoryKey) {
  const serviceCategories = init.createRequestBuilder({
    projectKey
  }).categories.byKey(categoryKey)

  const createGetRequest = {
    uri: serviceCategories.build(),
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }
  try {
    let response = await init.client.execute(createGetRequest);
    return response.body.id;
  } catch (e) {
    console.log(e.message);
  }
}

async function createProductDiscounts() {
  try {
    console.log('Crating product discounts');
    let sunglassesCategoryId = await getCategoryIdFromKey('sunglasses');
    await createVEExclusiveProductDiscount(sunglassesCategoryId);
    let contactLensesCategoryId = await getCategoryIdFromKey('lenses');
    await createContactLensesProductDiscount(contactLensesCategoryId);
    await createNHSProductDiscount();
  } catch (e) {
    console.log(e.message);
  }
}

exports.createProductDiscounts = createProductDiscounts;

async function createCartDiscounts() {
  try {
    console.log('Creating cart discounts');
    await create10EURCartDiscount();
    let happySummerResponse = await createHappySummerVoucherCartDiscount();
    return happySummerResponse.body.id;
  } catch (e) {
    console.log(e.message);
  }
}

exports.createCartDiscounts = createCartDiscounts;

async function createDiscountCodes(happySummerId) {
  try {
    console.log('Creating discount codes');
    await createHappySummerVoucher(happySummerId);
  } catch (e) {
    console.log(e.message);
  }
}

exports.createDiscountCodes = createDiscountCodes;
