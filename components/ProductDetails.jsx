import React from 'react'
import { format } from 'date-fns'
import VariantList from './VariantList'

function ProductDetails({ product }) {
  // TODO Add more details arond the product descriptions and
  // the stock/price for each variant.
  return (
    <div className="productDetails">
      <h2>{product.name}</h2>
      <h3>Details</h3>
      <p>Created: {format(product.createdAt, 'YYYY-MM-DD')}</p>

      <h3>Variants</h3>
      <VariantList product={product} />

      <style jsx>{`
        .productDetails h2,
        .productDetails h3,
        .productDetails p {
          color: #444;
          font-weight: 400;
          padding: 0 1rem;
        }
      `}</style>
    </div>
  )
}

export default ProductDetails
