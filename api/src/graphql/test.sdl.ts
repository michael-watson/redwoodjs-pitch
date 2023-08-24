export const schema = gql`
  type Query {
    test_a: String @skipAuth
  }
`
