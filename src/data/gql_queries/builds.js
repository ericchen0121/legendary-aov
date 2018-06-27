import gql from "graphql-tag";

export const MY_BUILDS = gql`
  query myBuilds($user_id: Int!) {
    myBuilds(user_id: $user_id){
      id
      name
      item_1
      item_2
      item_3
      item_4
      item_5
      item_6
      talent_id
      hero_id
      user_id
      notes
    }
  }
`
