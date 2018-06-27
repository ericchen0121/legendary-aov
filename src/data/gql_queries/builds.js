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

export const ADD_BUILD = gql`
  mutation addBuild($input: BuildInputType!) {
    addBuild(input: $input) {
        id
        name
        user_id
        item_1
        item_2
        item_3
        item_4
        item_5
        item_6
        talent_id
        hero_id
        game_mode_id
        notes
    }
  }`
