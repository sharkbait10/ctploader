const { createClient } = require('@commercetools/sdk-client')
const { createAuthMiddlewareForClientCredentialsFlow } = require('@commercetools/sdk-middleware-auth')
const { createHttpMiddleware } = require('@commercetools/sdk-middleware-http')
const fetch = require('node-fetch')

const projectKey = 'ire-test1-14'

const authMiddleware = createAuthMiddlewareForClientCredentialsFlow({
  host: 'https://auth.sphere.io',
  projectKey,
  credentials: {
    clientId: '8VZ_Qh-3nTqUQSCrJWUhb_zJ',
    clientSecret: 'LxeU03cPCsncZ12Kepgut1hIx6XpZ8Sy',
  },
  scopes: ['manage_project:ire-test1-14 view_api_clients:ire-test1-14 manage_api_clients:ire-test1-14'],
  fetch,
})
const httpMiddleware = createHttpMiddleware({
  host: 'https://api.sphere.io',
  fetch,
})
const client = createClient({
  middlewares: [authMiddleware, httpMiddleware],
})

exports.projectKey = projectKey;
exports.authMiddleware = authMiddleware;
exports.httpMiddleware = httpMiddleware;