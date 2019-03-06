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
}).project

const authMiddleware = libs.credentials.authMiddleware;

const httpMiddleware = libs.credentials.httpMiddleware;

const queueMiddleware = createQueueMiddleware({
    concurrency: 5,
})

const client = createClient({
    middlewares: [authMiddleware, httpMiddleware, queueMiddleware],
})

const createGetRequest = {
    uri: service.build(),
    method: 'GET',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
}

var changeCountries = (version) => {
    return new Promise((resolve, reject) => {

        const body = {
            version: version,
            actions: [{
                action: 'changeCountries',
                countries: [
                    'BE',
                    'NL'
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

        client.execute(createPostRequest).then(response => {
            console.log('Adding the following countries:' + JSON.stringify(response.body.countries, undefined, 2))
            // console.log("channelResponse = " + JSON.stringify(response.body, undefined, 2))
            // console.log("statusCode = " + response.statusCode)
            resolve(response)
        })
    });
};

exports.changeCountries = changeCountries;