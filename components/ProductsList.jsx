import React from 'react'
import { Query } from 'react-apollo'
import PRODUCTS_QUERY from '../lib/data/queries/products'

function ProductsList() {
  return (
    <Query query={PRODUCTS_QUERY} variables={{ language: 'en', path: '/' }}>
      {({ loading, error, data }) => {
        if (loading || error || !data) return null

        const productTypes = data.tree.filter(item => item.type === 'folder')

        return (
          <ul>
            {productTypes.map(type => (
              <li key={type.id}>{type.name}</li>
            ))}
          </ul>
        )
      }}
    </Query>
  )
}

export default ProductsList
