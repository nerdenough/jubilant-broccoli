import React from 'react'
import { Query } from 'react-apollo'
import TENANT_QUERY from '../lib/data/queries/tenant'

function Header() {
  return (
    <Query query={TENANT_QUERY} variables={{ language: 'en' }}>
      {({ loading, error, data }) => {
        if (loading || error || !data) return null
        console.log(data)

        return (
          <header className="header">
            <h1>{data.tenant.name} | Products</h1>

            <style jsx>{`
              .header {
                display: flex;
                height: 5rem;
                background: #efefef;
                align-items: center;
                padding: 0 1rem;
              }

              .header h1 {
                margin: 0;
                color: #808080;
                font-size: 1.8rem;
                font-weight: 400;
              }
            `}</style>
          </header>
        )
      }}
    </Query>
  )
}

export default Header
