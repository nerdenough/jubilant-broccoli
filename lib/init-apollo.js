import { ApolloClient, InMemoryCache, HttpLink } from 'apollo-boost'
import { IntrospectionFragmentMatcher } from 'apollo-cache-inmemory'
import fetch from 'isomorphic-unfetch'
import introspectionQueryResultData from './fragment-types.json'

let apolloClient = null

const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData,
})

function create(initialState) {
  // Check out https://github.com/zeit/next.js/pull/4611 if you want to use the AWSAppSyncClient
  return new ApolloClient({
    connectToDevTools: process.browser,
    ssrMode: !process.browser, // Disables forceFetch on the server (so queries are only run once)
    link: new HttpLink({
      uri: 'https://graph.crystallize.com/tenant/demo', // Server URL (must be absolute)
      credentials: 'same-origin', // Additional fetch() options like `credentials` or `headers`
      // Use fetch() polyfill on the server
      fetch: !process.browser && fetch,
    }),
    cache: new InMemoryCache({ fragmentMatcher }).restore(initialState || {}),
  })
}

export default function initApollo(initialState) {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (!process.browser) {
    return create(initialState)
  }

  // Reuse client on the client-side
  if (!apolloClient) {
    apolloClient = create(initialState)
  }

  return apolloClient
}
