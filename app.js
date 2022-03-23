const { ApolloServer } = require('apollo-server');
const { sequelize } = require('./models');
const port = process.env.PORT || 4000;
const { typeDefs } = require('./schema/index');
const { Query } = require('./resolvers/Query');
const { Mutation } = require('./resolvers/Mutation');

const server = new ApolloServer({
    typeDefs,
    resolvers: {
        Query,
        Mutation
    },
    context: {
        sequelize
    }
})

server.listen(port).then(async () => {
    await sequelize.sync({ force: true });
    console.log(`Server ready at http://localhost:${port}`);
})
