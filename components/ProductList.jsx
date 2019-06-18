import React from 'react'
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
    <ul className="productList">
      {products.map(product => (
        <ProductListItem key={product.id} product={product} />
      ))}

      <style jsx>{`
        .productList {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
          gap: 1rem;
          list-style: none;
          padding: 0 1rem;
        }
      `}</style>
    </ul>
  )
}

export default ProductList
