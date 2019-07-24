var init = require('./init')
var libs = require('../globals/credentials')

const projectKey = libs.projectKey;

const service = init.createRequestBuilder({
  projectKey
}).categories

const bodyDiscountsCategory = {
  name: {
    "en-IE": "Discounts"
  },
  slug: {
    "en-IE": "discounts"
  },
  description: {
    "en-IE": "Discounts"
  },
  orderHint: "0.2",
  ancestors: []
}

const createDiscountsCategoryPostRequest = {
  uri: service.build(),
  method: 'POST',
  body: bodyDiscountsCategory,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
}

async function createDiscountsCategory() {
  try {
    await init.client.execute(createDiscountsCategoryPostRequest);
  } catch (e) {
    console.log(e.message);
  }
}

const bodyWebCategory = {
  key: "web",
  name: {
    "en": "Web",
    "en-IE": "Web"
  },
  slug: {
    "en": "web"
  },
  description: {
    "en": "web",
    "en-IE": "web"
  },
  ancestors: [],
  orderHint: "1",
  externalId: "web",
  assets: []
}

const createWebCategoryPostRequest = {
  uri: service.build(),
  method: 'POST',
  body: bodyWebCategory,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
}

async function createWebCategory() {
  try {
    let response = await init.client.execute(createWebCategoryPostRequest);
    return response.body.id;
  } catch (e) {
    console.log(e.message);
  }
}



async function createOpticalCategory(webCategoryId) {
  const bodyOpticalCategory = {
    key: "optical",
    name: {
      "en": "Optical",
      "en-IE": "Optical"
    },
    slug: {
      "en": "optical",
      "en-IE": "optical"
    },
    description: {
      "en": "optical",
      "en-IE": "optical category"
    },
    ancestors: [{
      typeId: "category",
      id: webCategoryId
    }],
    parent: {
      typeId: "category",
      id: webCategoryId
    },
    orderHint: "1",
    externalId: "optical",
    metaTitle: {
      "en": "Optical"
    },
    metaDescription: {
      "en": "optical"
    },
    assets: []
  }

  const createOpticalCategoryPostRequest = {
    uri: service.build(),
    method: 'POST',
    body: bodyOpticalCategory,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }
  try {
    await init.client.execute(createOpticalCategoryPostRequest);
  } catch (e) {
    console.log(e.message);
  }
}

async function createSunglassesCategory(webCategoryId) {
  const bodySunglassesCategory = {
    key: "sunglasses",
    name: {
      "en": "Sunglasses",
      "en-IE": "Sunglasses"
    },
    slug: {
      "en": "sunglasses",
      "en-IE": "sunglasses"
    },
    description: {
      "en": "sunglasses",
      "en-IE": "Sunglasses"
    },
    ancestors: [{
      typeId: "category",
      id: webCategoryId
    }],
    parent: {
      typeId: "category",
      id: webCategoryId
    },
    orderHint: "1",
    externalId: "sunglasses",
    metaTitle: {
      "en": "Sunglasses",
      "en-IE": "Sun glasses"
    },
    metaDescription: {
      "en": "sunglasses",
      "en-IE": "Sun glasses"
    },
    assets: []
  }

  const createSunglassesCategoryPostRequest = {
    uri: service.build(),
    method: 'POST',
    body: bodySunglassesCategory,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }
  try {
    await init.client.execute(createSunglassesCategoryPostRequest);
  } catch (e) {
    console.log(e.message);
  }
}

async function createContactLensesCategory(webCategoryId) {
  const bodyContactLensesCategory = {
    key: "lenses",
    name: {
      "en": "Contact lenses",
      "en-IE": "Contact lenses"
    },
    slug: {
      "en": "contact-lenses",
      "en-IE": "contact-lenses"
    },
    description: {
      "en": "Contact lenses",
      "en-IE": "Contact lenses"
    },
    ancestors: [{
      typeId: "category",
      id: webCategoryId
    }],
    parent: {
      typeId: "category",
      id: webCategoryId
    },
    orderHint: "1",
    externalId: "Contact lenses",
    metaTitle: {
      "en": "Contact lenses"
    },
    metaDescription: {
      "en": "Contact lenses"
    },
    assets: []
  }

  const createContactLensesCategoryPostRequest = {
    uri: service.build(),
    method: 'POST',
    body: bodyContactLensesCategory,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }
  try {
    await init.client.execute(createContactLensesCategoryPostRequest);
  } catch (e) {
    console.log(e.message);
  }
}

async function createCategories() {
  try {
    await createDiscountsCategory();
    let webCategoryId = await createWebCategory();
    await createOpticalCategory(webCategoryId);
    await createSunglassesCategory(webCategoryId);
    await createContactLensesCategory(webCategoryId);
  } catch (e) {
    console.log(e.message);
  }
}

exports.createCategories = createCategories;
