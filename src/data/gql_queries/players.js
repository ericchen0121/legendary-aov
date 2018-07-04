import gql from "graphql-tag";

// export const ADD_PLAYER = gql`
//   mutation addBuild($input: BuildInputType!) {
//     addBuild(input: $input) {
//         id
//         name
//         user_id
//         item_1
//         item_2
//         item_3
//         item_4
//         item_5
//         item_6
//         talent_id
//         hero_id
//         game_mode_id
//         notes
//     }
//   }`

export const ALL_PLAYERS = gql`
  query all_players {
    players {
      name
      real_name
      role
      twitter
      youtube
      instagram
      twitch
      garena
      team_id
      facebook
      team {
        name
        alt_name
      }
    }
  }
`
