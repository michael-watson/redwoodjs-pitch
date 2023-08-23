export const schema = gql`
  type Query {
    test: String @skipAuth
  }
`
