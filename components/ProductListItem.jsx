import React from 'react'
import Link from 'next/link'

function ProductListItem({ product }) {
  const defaultVariant = product.variants
    ? product.variants.find(variant => variant.isDefault)
    : null

  return (
    <li key={product.id} className="productListItem">
      <Link href={product.path}>
        <a>
          {defaultVariant && defaultVariant.image ? (
            <img
              src={defaultVariant.image.url}
              alt={defaultVariant.image.altText || product.name}
            />
          ) : (
            <img src="https://placebear.com/200/200" alt={product.name} />
          )}
          <div className="name">
            <h3>{product.name}</h3>
          </div>
        </a>
      </Link>

      <style jsx>{`
        .productListItem {
          background: #efefef;
          display: flex;
          flex-direction: column;
          min-width: 20rem;
        }

        .productListItem img {
          width: 100%;
          height: 20rem;
        }

        .name {
          display: flex;
          height: 4rem;
          color: #444;
          padding: 0.5rem 0.5rem;
          align-items: center;
        }

        .name h3 {
          margin: 0 auto;
        }

        .productListItem a {
          color: #222;
          text-decoration: none;
        }
      `}</style>
    </li>
  )
}

export default ProductListItem
