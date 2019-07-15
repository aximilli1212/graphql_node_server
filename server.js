const { ApolloServer, AuthenticationError } = require("apollo-server");
const mongoose = require("mongoose");
const fs = require("fs");
const path = require("path");
const jwt = require('jsonwebtoken');



// Import typeDefas and resolvers
const filePath = path.join(__dirname, "typeDefs.graphql");
const typeDefs = fs.readFileSync(filePath, "utf-8");
const resolvers = require("./resolvers");


// import Environment Variables & Mongoose Models

require("dotenv").config({ path: "variables.env" });
const User = require("./models/User");
const Post = require("./models/Post");


// Connect to MLab Database -- using connection url in Variables File

mongoose
  .connect(
    process.env.MONGO_URI,
    { useNewUrlParser: true }
  )
  .then(() => console.log("DB connected"))
  .catch(err => console.error(err));

// Verify JWT Token passed from client
const getUser = async token =>{
  if(token){
    try{
      let user = await jwt.verify(token,process.env.SECRET);
      console.log(user);
    }catch(err){
      console.log(err)
      throw new AuthenticationError("Your Session has ended please SignIn Again. ");
    }
  }
} 

// Create Apollo/GraphQL Server

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context:async ({req})=> {
    const token = req.headers['authorization'];
    return {User, Post,currentUser:await getUser(token)}


  }
});

server.listen(4100).then(({ url }) => {
  console.log(`Server listening on ${url}`);
});
