import gql from "graphql-tag";

export const USER_HEROES_BY_USER = gql`
  query userHeroes($user_id: Int!) {
    userHeroes(user_id: $user_id) {
        user_id
        hero_id
        type
    }
  }`
