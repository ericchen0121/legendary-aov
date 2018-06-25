import gql from "graphql-tag";

export const ADD_USER = gql`
  mutation addUser($input: UserInputType!) {
    addUser(input: $input) {
        id
        email
        username
    }
  }`

export const LOGIN_USER =gql`
  mutation loginUser($input: UserInputType!) {
    loginUser(input: $input) {
      id
      username
      email
      password
    }
  }
`
