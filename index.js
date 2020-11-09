const express = require('express');
const { ApolloServer } = require('apollo-server-express');

const mongoose = require('mongoose');
var mongo_uri = "mongodb://vamsi:try2open@ds045604.mlab.com:45604/graphql";

const typeDefs = require('./typeDef');
const resolvers = require('./resolver');

mongoose.connect(mongo_uri, { useNewUrlParser: true }).
    then(() => console.log('Db Connection Successfull')).
    catch((err) => console.log('Error while connecting db', err));

const server = new ApolloServer({ typeDefs, resolvers });

const app = express();
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
    console.log('Now browse to http://localhost:4000' + server.graphqlPath)
);