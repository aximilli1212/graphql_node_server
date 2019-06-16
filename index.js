const { ApolloServer } = require('apollo-server');
const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'typeDefs.graphql' );
const typeDefs = fs.readFileSync(filePath,'uft-8');


//Dot env required to create environment variables and link file
require('dotenv').config({path:'variables.env'});


// Models imports
const User = require('./models/User');
const Post = require('./models/Post');


mongoose
    .connect(process.env.MONGO_URI)
    .then(()=>console.log('MongoDB successfully Connected.'))
        .catch(err =>console.log(err));




const server = new ApolloServer({
    typeDefs,
    context:{
        User,
        Post
    }
});

server.listen(4000).then(({url})=>{
    console.log("server Listening on "+ url);
});