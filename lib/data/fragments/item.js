const gql = require('graphql-tag')

module.exports = gql`
  fragment item on Item {
    id
    name
    type
    path
  }
`
