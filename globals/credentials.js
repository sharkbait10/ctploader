const { createClient } = require('@commercetools/sdk-client')
const { createAuthMiddlewareForClientCredentialsFlow } = require('@commercetools/sdk-middleware-auth')
const { createHttpMiddleware } = require('@commercetools/sdk-middleware-http')
const fetch = require('node-fetch')

const projectKey = 'testirene'

const authMiddleware = createAuthMiddlewareForClientCredentialsFlow({
  host: 'https://auth.sphere.io',
  projectKey,
  credentials: {
    clientId: 'U-5ljWnkjTBAWj50GLvEh2s-',
    clientSecret: '3ILaQh0OXbKlercaSNxm9p1z4-73jDBy',
  },
  scopes: ['manage_project:testirene view_api_clients:testirene manage_api_clients:testirene'],
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
