const { ApolloServer } = require('apollo-server');
const { sequelize } = require('./models');
const port = process.env.PORT || 4000;
const { typeDefs } = require('./schema/index');
const { Query } = require('./resolvers/Query');
const { Post } = require('./resolvers/Post');
const { User } = require('./resolvers/User');
const { Mutation } = require('./resolvers/Mutation');


const server = new ApolloServer({
    typeDefs,
    resolvers: {
        Query,
        Mutation,
        Post,
        User
    },
    context: {
        sequelize
    }
})

server.listen(port).then(async () => {
    await sequelize.authenticate();
    console.log(`Server ready at http://localhost:${port}`);
})
