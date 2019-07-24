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
