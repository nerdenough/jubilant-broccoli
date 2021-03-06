const gql = require('graphql-tag')

module.exports = gql`
  fragment product on Product {
    createdAt
    variants {
      id
      name
      sku
      price
      stock
      isDefault
      image {
        url
        altText
      }
    }
  }
`
