import gql from "graphql-tag";

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
        arcana
        hero_id
        game_mode_id
        notes
    }
  }`

export const EDIT_BUILD = gql`
  mutation editBuild($input: BuildUpdateType!) {
    editBuild(input: $input) {
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
        arcana
        hero_id
        game_mode_id
        notes
    }
  }`

export const ALL_BUILDS = gql`
  {
    builds {
      id
      name
      item_1
      item_2
      item_3
      item_4
      item_5
      item_6
      talent_id
      arcana
      hero_id
      notes
    }
  }
`

export const LATEST_BUILDS = gql`
  query latestBuilds{
    latestBuilds {
      id
      name
      item_1
      item_2
      item_3
      item_4
      item_5
      item_6
      talent_id
      arcana
      hero_id
      notes
    }
  }
`

export const HERO_BUILDS = gql`
  query buildsByHero($hero_id: Int!){
    buildsByHero(hero_id: $hero_id ) {
      id
      name
      item_1
      item_2
      item_3
      item_4
      item_5
      item_6
      talent_id
      arcana
      hero_id
      notes
    }
  }
`

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
      arcana
      hero_id
      user_id
      notes
    }
  }
`

export const ID_QUERY = gql`
  query buildById($id: Int!){
    build(id: $id ) {
      id
      name
      item_1
      item_2
      item_3
      item_4
      item_5
      item_6
      talent_id
      arcana
      hero_id
      notes
    }
  }
`
