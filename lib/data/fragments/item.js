import gql from 'graphql-tag'

export default gql`
  fragment item on Item {
    id
    name
    type
    path
  }
`
