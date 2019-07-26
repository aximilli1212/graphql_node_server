import {gql} from "apollo-boost";

/*Posts Queries*/

export const GET_POSTS = gql`
    query{
        getPosts {
            _id
            title
            imageUrl
            likes
            description
        }
    }
`;

// User Queries

export const GET_USERS = gql`
    query{
        getUser {
            _id
            username
        }
    }
`;

export const GET_CURRENT_USER = gql`
  query{
      getCurrentUser {
            _id
          username
          email
          password
          avatar
          joinDate
          favorites{
              _id
              title
              imageUrl
          }
      }
  }
`;




// Post Mutations
// User Mutations

export const SIGNIN_USER = gql`
     mutation($username: String!, $password: String!){
         signinUser(username:$username, password:$password){
             token
         }
     }
`;

export const SIGNUP_USER = gql`
    mutation($username:String!, $password:String!,$email:String!) {
        signupUser(username:$username,password:$password,email:$email){
            token
        }
    }
`