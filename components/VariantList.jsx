import React from 'react'
import List from './List'
import VariantListItem from './VariantListItem'

function VariantList({ product }) {
  return (
    <List>
      {product.variants.map(variant => (
        <VariantListItem key={variant.id} variant={variant} />
      ))}
    </List>
  )
}

export default VariantList
