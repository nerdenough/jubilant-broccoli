import React from 'react'
import { Query } from 'react-apollo'
import { withRouter } from 'next/router'
import App from '../components/App'
import Head from '../components/Head'
import Header from '../components/Header'
import ProductDetails from '../components/ProductDetails'
import PRODUCTS_QUERY from '../lib/data/queries/products'

const Product = ({ router }) => {
  return (
    <Query
      query={PRODUCTS_QUERY}
      variables={{ language: 'en', path: router.asPath }}
    >
      {({ loading, error, data }) => {
        if (loading || error || !data) {
          return null
        }

        const product = data.tree[0]

        return (
          <App>
            <Head title={product.name} />
            <Header title={product.name} />
            <ProductDetails product={product} />
          </App>
        )
      }}
    </Query>
  )
}

export default withRouter(Product)
