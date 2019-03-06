const {
    createClient
} = require('@commercetools/sdk-client')
const {
    createRequestBuilder
} = require('@commercetools/api-request-builder')
const {
    createQueueMiddleware
} = require('@commercetools/sdk-middleware-queue')
var libs = require('require-all')(__dirname + '/../globals');

const projectKey = libs.credentials.projectKey;

const service = createRequestBuilder({
    projectKey
}).zones

const authMiddleware = libs.credentials.authMiddleware;

const httpMiddleware = libs.credentials.httpMiddleware;

const queueMiddleware = createQueueMiddleware({
    concurrency: 5,
})

const client = createClient({
    middlewares: [authMiddleware, httpMiddleware, queueMiddleware],
})

const bodyBE = {
    name: 'Belgium',
    description: '',
    locations: [{
        country: 'BE',
        state: ''
    }]
}
const createPostRequestBE = {
    uri: service.build(),
    method: 'POST',
    body: bodyBE,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
}

var createZones = () => {
    return new Promise((resolve, reject) => {
        client.execute(createPostRequestBE).then(response => {
            console.log('Adding the Belgium zone');
            if (response.statusCode == 400) {
                reject(response)
            }


                const bodyNL = {
                    name: 'Netherlands',
                    description: '',
                    locations: [{
                        country: 'NL',
                        state: ''
                    }
                    ]
                }
                const createPostRequestNL = {
                    uri: service.build(),
                    method: 'POST',
                    body: bodyNL,
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                }

                client.execute(createPostRequestNL).then(response => {
                    if(response.statusCode == 400){
                        reject(response)
                    }
                    console.log('Adding the Netherlands zone');
                    resolve(response)
                }).catch((error) => {
                    console.log('ERROR: ' + error.message)
                })

            
        }).catch((error) => {
            console.log('ERROR: ' + error.message)
        });

    });
};

exports.createZones = createZones;