import React from 'react'
import Link from 'next/link'
import { Query } from 'react-apollo'
import PRODUCTS_QUERY from '../lib/data/queries/products'

function Header() {
  return (
    <Query query={PRODUCTS_QUERY} variables={{ language: 'en' }}>
      {({ loading, error, data }) => {
        if (loading || error || !data) {
          // TODO Handle loading and error states separately
          return null
        }

        return (
          <header className="header">
            <nav>
              <h1>{data.tenant.name}</h1>
              <Link href="/">
                <a className="light">Products</a>
              </Link>
            </nav>

            <style jsx>{`
              .header nav {
                display: flex;
                height: 5rem;
                align-items: center;
                padding: 0 1rem;
              }

              .header h1 {
                margin: 0;
                color: #444;
                font-size: 1.6rem;
                font-weight: 400;
                text-transform: capitalize;
                margin-right: 2rem;
              }

              .light {
                color: #666;
                font-size: 1.6rem;
                text-decoration: none;
              }

              .light:hover {
                color: #444;
              }
            `}</style>
          </header>
        )
      }}
    </Query>
  )
}

export default Header
