import React from 'react'
import { Query } from 'react-apollo'

import ProductType from './ProductType'
import PRODUCTS_QUERY from '../lib/data/queries/products'

function ProductsList() {
  return (
    <Query query={PRODUCTS_QUERY} variables={{ language: 'en', path: '/' }}>
      {({ loading, error, data }) => {
        if (loading || error || !data) return null

        // This will allow us to display the products in different categories
        // as well as misc products which don't belong to a category.
        const productTypes = data.tree.filter(item => item.type === 'folder')

        return (
          <div className="productsList">
            {productTypes.map(type => (
              <ProductType key={type.id} type={type} />
            ))}
          </div>
        )
      }}
    </Query>
  )
}

export default ProductsList
