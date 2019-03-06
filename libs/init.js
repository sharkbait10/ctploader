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

const authMiddleware = libs.credentials.authMiddleware;

const httpMiddleware = libs.credentials.httpMiddleware;

const queueMiddleware = createQueueMiddleware({
    concurrency: 5,
})

const client = createClient({
    middlewares: [authMiddleware, httpMiddleware, queueMiddleware],
})

exports.createRequestBuilder = createRequestBuilder
exports.client = client