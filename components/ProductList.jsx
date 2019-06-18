import React from 'react'
import Link from 'next/link'

function ProductList({ products }) {
  return (
    <ul className="productList">
      {products.map(product => {
        const defaultVariant = product.variants
          ? product.variants.find(variant => variant.isDefault)
          : null
        return (
          <li key={product.id}>
            <Link href={product.path}>
              <div className="product">
                {defaultVariant && defaultVariant.image ? (
                  <img src={defaultVariant.image.url} />
                ) : (
                  <img src="https://placebear.com/200/200" alt={product.name} />
                )}
                <div className="name">
                  <h3>{product.name}</h3>
                </div>
              </div>
            </Link>
          </li>
        )
      })}

      <style jsx>{`
        .productType {
          display: flex;
          flex-direction: column;
        }

        .header {
          height: 4rem;
          background: #444;
          color: white;
          width: 100%;
          padding: 0 1rem;
        }

        .header h2 {
          font-size: 1.4rem;
          font-weight: 400;
          align-self: center;
        }

        .productList {
          display: flex;
          flex-wrap: wrap;
          list-style: none;
          padding: 0 1rem;
        }

        .product {
          background: #efefef;
          display: flex;
          flex-direction: column;
          width: 20rem;
          margin-right: 1rem;
          margin-bottom: 1rem;
        }

        .product img {
          width: 20rem;
          height: 20rem;
        }

        .name {
          display: flex;
          height: 4rem;
          padding: 0.5rem 0.5rem;
          align-items: center;
        }

        .name h3 {
          margin: 0 auto;
        }
      `}</style>
    </ul>
  )
}

export default ProductList
