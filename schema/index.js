const { gql } = require('apollo-server');

exports.typeDefs = gql`
    type Query {
        users: [User!]!
        posts: [Post!]!
    }
    type User {
        id: ID!
        uuid: String
        name: String!
        email: String!
        role: String!
        posts: [Post!]!
    }

    type Post {
        id: ID!
        uuid: String!
        userId: Int!
        body: String!
        user: User
    }

    type Mutation {
        addUser(input: AddUserInput): User!
        deleteUser(id: ID!): Boolean!
        addPost(input: AddPostInput): Post!
    }

    input AddUserInput {
        name: String!
        email: String!
        role: String!
    }

    input AddPostInput {
        userUuid: String!
        body: String!
    }

    
` 