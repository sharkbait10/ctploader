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

var changeLanguages = () => {
    return new Promise((resolve, reject) => {
        client.execute(createGetRequest).then(response => {
            // console.log("channelResponse = " + JSON.stringify(response.body, undefined, 2))
            // console.log("statusCode = " + response.statusCode)

            const body = {
                version: response.body.version,
                actions: [{
                    action: 'changeLanguages',
                    languages: [
                        'en',
                        'nl-NL',
                        'nl-BE'
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
                console.log('Adding the following languages:' + JSON.stringify(response.body.languages, undefined, 2))
                // console.log("channelResponse = " + JSON.stringify(response.body, undefined, 2))
                // console.log("statusCode = " + response.statusCode)
                resolve(response)
            })
        });
    });
};

exports.changeLanguages = changeLanguages;


// {
//     "statusCode": 400,
//     "message": "Request body does not contain valid JSON.",
//     "errors": [
//         {
//             "code": "InvalidJsonInput",
//             "message": "Request body does not contain valid JSON.",
//             "detailedErrorMessage": "version: Missing required value"
//         }
//     ]
// }