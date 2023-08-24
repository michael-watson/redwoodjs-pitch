export const schema = gql`
  type Query {
    hello: String @skipAuth
    test_someting: String @skipAuth
  }
`
