import React from "react";
import MainHero from "../components/MainHero/MainHero";
import CategoryDisplay from "../components/CategoryDisplay/CategoryDisplay";
import CardDisplay from "../components/CardDisplay/CardDisplay";
import { useQuery, useMutation, gql } from "@apollo/client";

const GET_ANIMALS = gql`
  query GetAnimals {
    animals {
      id
      slug
      image
      title
      rating
      price
    }
  }
`;

const MUTATION_ADD_ANIMAL = gql`
  mutation (
    $image: String!
    $category: String!
    $title: String!
    $stock: Int!
    $price: String!
    $description: [String!]!
    $rating: Float
    $slug: String!
    $onSale: Boolean
  ) {
    addAnimal(
      image: $image
      category: $category
      title: $title
      stock: $stock
      price: $price
      description: $description
      rating: $rating
      slug: $slug
      onSale: $onSale
    ) {
      id
      image
      slug
    }
  }
`;

function LandingPage() {
  const { loading, error, data } = useQuery(GET_ANIMALS);
  const [addAnimal] = useMutation(MUTATION_ADD_ANIMAL);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <div>
      <MainHero />
      <CategoryDisplay />
      <CardDisplay animals={data.animals} />
      <button
        onClick={() =>
          addAnimal({
            variables: {
              slug: "ostrich",
              image: "ostrich",
              title: "Thid is a really cool ostrich",
              rating: 3.5,
              price: "2,310",
              description: [
                "ostrich white and grey",
                "1.5m height",
                "2-3 eggs at the same time",
              ],
              stock: 11,
              onSale: true,
              category: "1",
            },
          })
        }
      >
        Add an Ostrich
      </button>
    </div>
  );
}

export default LandingPage;
