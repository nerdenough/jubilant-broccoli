import React from 'react'
import Link from 'next/link'

function ProductType({ type }) {
  return (
    <div className="productType">
      <div className="header">
        <h2>{type.name}</h2>
      </div>

      <ul className="list">
        {type.children.map(item => {
          const defaultVariant = item.variants
            ? item.variants.find(variant => variant.isDefault)
            : null

          return (
            <li key={item.id}>
              <Link href={item.path}>
                <div className="product">
                  {defaultVariant && defaultVariant.image ? (
                    <img src={defaultVariant.image.url} />
                  ) : (
                    <img src="https://placebear.com/200/200" alt={item.name} />
                  )}
                  <div className="name">
                    <h3>{item.name}</h3>
                  </div>
                </div>
              </Link>
            </li>
          )
        })}
      </ul>

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

        .list {
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
    </div>
  )
}

export default ProductType
