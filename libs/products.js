var init = require('../libs/init')
var libs = require('../globals/credentials')

const projectKey = libs.projectKey;

const service = init.createRequestBuilder({
    projectKey
}).products



var createDemoProducts = (productTypeId) => {
    return new Promise((resolve, reject) => {

        const body = {
            name: {
                en: 'Demo Shirt Garcia A91025 MEN'
            },
            productType: {
                id: productTypeId,
                type: 'product-type'
            },
            slug: {
                en: 'demo_shirt'
            },
            publish: true
        }

        var createPostRequest = {
            uri: service.build(),
            method: 'POST',
            body,
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        }

        console.log(productTypeId)

        init.client.execute(createPostRequest).then(response => {
            if (response.statusCode == 400) {
                reject(response)
            }
            resolve(response)
        }).catch((error) => {
            console.log('ERROR: ' + error.message)
        })
    });
}

exports.createDemoProducts = createDemoProducts;