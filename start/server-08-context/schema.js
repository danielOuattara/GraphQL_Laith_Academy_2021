/* Step 3: Define your GraphQL schema
-------------------------------------- */

const typeDefs = `#graphql

  type MainCard {
    title: String
    image: String
  }
  type Animal{
    id: ID!
    slug: String!
    image: String!
    title: String!
    rating: Float
    price: String!
    description: [String!]!
    stock: Int!
    onSale: Boolean
    category: Category
    # categoryId: String!
  }

  type Category {
    id: ID!
    image: String!
    category: String!
    slug: String!
    animals: [Animal!]!
  }

  type Query {
    mainCards: [MainCard]
    animals:[Animal]
    animal(slug: String!): Animal
    categories: [Category!]!
    category(slug: String!): Category
  }
`;

export default typeDefs;
