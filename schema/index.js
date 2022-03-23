const { gql } = require('apollo-server');

exports.typeDefs = gql`
    type Query {
        users: [User!]!
    }
    type User {
        id: ID!
        uuid: String
        name: String!
        email: String!
        role: String!
    }

    type Mutation {
        addUser(input: AddUserInput): User!
    }

    input AddUserInput {
        name: String!
        email: String!
        role: String!
    }
` 