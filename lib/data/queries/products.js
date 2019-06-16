import gql from 'graphql-tag'
import item from '../fragments/item'
import product from '../fragments/product'

export default gql`
  query productsQuery($language: String!, $path: String) {
    tree(language: $language, path: $path) {
      ...item
      ...product
    }
  }

  ${item}
  ${product}
`
