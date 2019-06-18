import React from 'react'
import ProductListItem from './ProductListItem'

function ProductList({ products }) {
  return (
    <ul className="productList">
      {products.map(product => (
        <ProductListItem key={product.id} product={product} />
      ))}

      <style jsx>{`
        .productList {
          display: flex;
          flex-wrap: wrap;
          list-style: none;
          padding: 0 1rem;
        }
      `}</style>
    </ul>
  )
}

export default ProductList
