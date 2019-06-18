const express = require('express')
const next = require('next')
const url = require('url')
const initApollo = require('../lib/init-apollo')
const DATA_QUERY = require('../lib/data/queries/products')

const app = next({ dev: process.env.NODE_ENV })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()
  server.get('*', async (req, res) => {
    const path = url.parse(req.url).pathname

    try {
      const client = initApollo()

      await client.query({
        query: DATA_QUERY,
        variables: {
          language: 'en',
          path,
        },
      })

      req.initialApolloState = client.cache.extract()
    } catch (err) {
      // TODO Handle error
      console.error(err)
    }

    if (path !== '/') {
      return app.render(req, res, '/product')
    }

    return handle(req, res)
  })
  server.listen(3000, err => {
    if (err) throw err
    console.log('Listening on http://localhost:3000')
  })
})
