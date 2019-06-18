import React from 'react'
import { Query } from 'react-apollo'
import PRODUCTS_QUERY from '../lib/data/queries/products'

function Header({ title }) {
  return (
    <Query query={PRODUCTS_QUERY} variables={{ language: 'en' }}>
      {({ loading, error, data }) => {
        if (loading || error || !data) return null

        return (
          <header className="header">
            <h1>
              {data.tenant.name} <span className="light">| {title}</span>
            </h1>

            <style jsx>{`
              .header {
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
              }

              .light {
                color: #666;
              }
            `}</style>
          </header>
        )
      }}
    </Query>
  )
}

export default Header
