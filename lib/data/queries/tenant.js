import gql from 'graphql-tag'

export default gql`
  query tenantQuery($language: String!) {
    tenant(language: $language) {
      name
    }
  }
`
