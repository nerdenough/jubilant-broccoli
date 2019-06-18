import React, { useState } from 'react'
import { Query } from 'react-apollo'
import App from '../components/App'
import Head from '../components/Head'
import Header from '../components/Header'
import ProductListFilter from '../components/ProductListFilter'
import ProductList from '../components/ProductList'
import PRODUCTS_QUERY from '../lib/data/queries/products'

const Home = () => {
  const [path, setPath] = useState('/')

  return (
    <Query query={PRODUCTS_QUERY} variables={{ language: 'en', path: '/' }}>
      {({ loading, error, data }) => {
        if (loading || error || !data) {
          return null
        }

        // Filter items to just include folders.
        const items = data.tree.filter(item => item.type === 'folder')

        // Filter items based on the selected path
        const filteredItems =
          path === '/' ? items : items.filter(item => item.path === path)

        // Ensure we have an array of products to render, excluding any non
        // product types.
        const products = filteredItems
          .flatMap(item => item.children)
          .filter(item => item.type === 'product')

        return (
          <App>
            <Head title="Home" />
            <Header />
            <ProductListFilter
              onFilterChange={event => setPath(event.target.value)}
              items={items}
            />
            <ProductList products={products} />
          </App>
        )
      }}
    </Query>
  )
}

export default Home
