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