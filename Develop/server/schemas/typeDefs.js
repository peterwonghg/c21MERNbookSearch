const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    bookcount: Int
    savedBooks: [Book]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Book {
        bookId: ID!
        title: String
        authors: [String]
        description: String
        image: String
        link: String
    }

  type SavedBookInput {
        bookId: ID!
        title: String
        authors: [String]
        description: String
        image: String
        link: String
  }

  type Query {
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveBook(book: SavedBookInput): User
    removeBook(bookId: String!): User
  }
`;

module.exports = typeDefs;
