import React from 'react'
import VariantList from './VariantList'

function ProductDetails({ product }) {
  return (
    <div className="productDetails">
      <h2>{product.name}</h2>
      <VariantList product={product} />

      <style jsx>{`
        .productDetails h2 {
          padding: 0 1rem;
        }
      `}</style>
    </div>
  )
}

export default ProductDetails
