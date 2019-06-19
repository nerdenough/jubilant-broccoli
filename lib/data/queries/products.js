const gql = require('graphql-tag')
const item = require('../fragments/item')
const product = require('../fragments/product')

module.exports = gql`
  query dataQuery($language: String!, $path: String) {
    tenant(language: $language) {
      name
    }

    tree(language: $language, path: $path) {
      ...item
      ...product

      ... on Item {
        children {
          ...item
          ...product
        }
      }
    }
  }

  ${item}
  ${product}
`
