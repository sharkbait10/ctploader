var init = require('../libs/init')
var libs = require('../globals/credentials')

const projectKey = libs.projectKey;

const service = init.createRequestBuilder({
    projectKey
}).taxCategories

const bodyVAT = {
    name: 'VAT'
}
const createPostRequestVAT = {
    uri: service.build(),
    method: 'POST',
    body: bodyVAT,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
}

const bodyStandard = {
    name: 'Standard shipping'
}
const createPostRequestStandard = {
    uri: service.build(),
    method: 'POST',
    body: bodyStandard,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
}

let version = '';
let id = '';

var createTaxCategoryVAT = () => {
    return new Promise((resolve, reject) => {
        init.client.execute(createPostRequestVAT).then(response => {
            console.log('Adding the VAT tax category');
            if (response.statusCode == 400) {
                reject(response)
            }

            version = response.body.version;
            id = response.body.id;

            const serviceVAT = init.createRequestBuilder({
                projectKey
            }).taxCategories.byId(id)

            const bodyVATBERate = {
                version: version,
                actions: [{
                    action: 'addTaxRate',
                    taxRate: {
                        name: 'VAT-BE',
                        amount: 0.21,
                        includedInPrice: false,
                        country: 'BE',
                        state: ''
                    }
                }]
            }

            const createPostRequestVATBERate = {
                uri: serviceVAT.build(),
                method: 'POST',
                body: bodyVATBERate,
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            }

            console.log('Adding the VAT BE tax category rate');

            init.client.execute(createPostRequestVATBERate).then((response) => {
                if (response.statusCode == 400) {
                    reject(response)
                }

                version = response.body.version;

                const serviceVAT = init.createRequestBuilder({
                    projectKey
                }).taxCategories.byId(id)

                const bodyVATNLRate = {
                    version: response.body.version,
                    actions: [{
                        action: 'addTaxRate',
                        taxRate: {
                            name: 'VAT-NL',
                            amount: 0.21,
                            includedInPrice: false,
                            country: 'NL',
                            state: ''
                        }
                    }]
                }

                const createPostRequestVATNLRate = {
                    uri: serviceVAT.build(),
                    method: 'POST',
                    body: bodyVATNLRate,
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                }

                console.log('Adding the VAT NL tax category rate');

                init.client.execute(createPostRequestVATNLRate).then((response) => {
                    if (response.statusCode == 400) {
                        reject(response)
                    }

                    resolve(response)
                })
            })

        }).catch((error) => {
            console.log('ERROR: ' + error.message)
        });

    });
};

var createTaxCategoryStandard = () => {
    return new Promise((resolve, reject) => {

        init.client.execute(createPostRequestStandard).then(response => {

            console.log('Adding the standard tax category');
            if (response.statusCode == 400) {
                reject(response)
            }

            version = response.body.version;
            id = response.body.id;

            const serviceStandard = init.createRequestBuilder({
                projectKey
            }).taxCategories.byId(id)

            const bodyStandardBERate = {
                version: version,
                actions: [{
                    action: 'addTaxRate',
                    taxRate: {
                        name: 'Standard shipping BE',
                        amount: 0,
                        includedInPrice: false,
                        country: 'BE',
                        state: ''
                    }
                }]
            }

            const createPostRequestStandardBERate = {
                uri: serviceStandard.build(),
                method: 'POST',
                body: bodyStandardBERate,
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            }

            console.log('Adding the standard BE tax category rate');

            init.client.execute(createPostRequestStandardBERate).then((response) => {
                if (response.statusCode == 400) {
                    reject(response)
                }

                version = response.body.version;

                const serviceStandard = init.createRequestBuilder({
                    projectKey
                }).taxCategories.byId(id)

                const bodyStandardNLRate = {
                    version: version,
                    actions: [{
                        action: 'addTaxRate',
                        taxRate: {
                            name: 'Standard shipping NL',
                            amount: 0,
                            includedInPrice: false,
                            country: 'NL',
                            state: ''
                        }
                    }]
                }

                const createPostRequestStandardNLRate = {
                    uri: serviceStandard.build(),
                    method: 'POST',
                    body: bodyStandardNLRate,
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                }

                console.log('Adding the standard NL tax category rate');

                init.client.execute(createPostRequestStandardNLRate).then((response) => {
                    if (response.statusCode == 400) {
                        reject(response)
                    }

                    resolve(id)
                })

            })

        }).catch((error) => {
            console.log('ERROR: ' + error.message)
        })
    });
};

const createGetRequest = {
    uri: service.build(),
    method: 'GET',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
}

var getTaxCategories = () => {
    return new Promise((resolve, reject) => {
        init.client.execute(createGetRequest).then(response => {

            if (response.statusCode == 400) {
                reject(response)
            }

            resolve(response)

        });

    });
};

var getStandardTaxCategory = () => {
    return new Promise((resolve, reject) => {
        getTaxCategories().then((response) => {

            response.body.results.forEach(element => {
                if (element.name === 'Standard shipping') {
                    resolve(element.id)
                }
            });

            reject(response)
        }).catch((error) => {
            console.log('ERROR: ' + error.message)
        })
    });
}

exports.getStandardTaxCategory = getStandardTaxCategory;


exports.createTaxCategoryVAT = createTaxCategoryVAT;
exports.createTaxCategoryStandard = createTaxCategoryStandard;