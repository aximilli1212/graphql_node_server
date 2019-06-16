const { ApolloServer, gql } = require('apollo-server');
const mongoose = require('mongoose');
require('dotenv').config({path:'variables.env'});

mongoose
    .connect(process.env.MONGO_URI)
    .then(()=>console.log('MongoDB successfully Connected.'))
        .catch(err =>console.log(err));

// language=GraphQL
const typeDefs = gql`
    type Todo {
        task:String
        completed:Boolean
    }  
    
    type Query {
        getTodos: [Todo]
    }
    
`;



const server = new ApolloServer({
    typeDefs,
});

server.listen(4400).then(({url})=>{
    console.log("server Listening on "+ url);
});