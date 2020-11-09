var typeDef = `type Query {
    getUser(id: ID!): User
    getUsers: [User]
  }
  type User {
      id: ID!
      fullname: String!
      username: String!
      phone_number: String!
      city: String!
  }
  type Mutation {
      addUser(fullname: String!, username: String!, phone_number: String!, city: String!): User!,
      deleteUser(id: ID!): String
  }`

module.exports = typeDef;