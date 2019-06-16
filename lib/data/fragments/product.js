import gql from 'graphql-tag'

export default gql`
  fragment product on Product {
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
        variants {
          key
          width
        }
      }
    }
  }
`
