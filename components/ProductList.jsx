import React from 'react'
import List from './List'
import ProductListItem from './ProductListItem'

function ProductList({ products }) {
  if (!products.length) {
    return (
      <p className="empty">
        There are no products in this category.
        <style jsx>{`
          .empty {
            color: #222;
            font-size: 1.4rem;
            padding: 0 1rem;
          }
        `}</style>
      </p>
    )
  }

  return (
    <List>
      {products.map(product => (
        <ProductListItem key={product.id} product={product} />
      ))}
    </List>
  )
}

export default ProductList
