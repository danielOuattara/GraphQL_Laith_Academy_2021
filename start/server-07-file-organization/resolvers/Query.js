import { mainCards, animals, categories } from "./../data.js";

const Query = {
  mainCards: () => mainCards,
  animals: () => animals,
  animal: (parent, args, ctx) => {
    console.log("args1 = ", args);
    return animals.find((animal) => animal.slug === args.slug);
  },
  categories: () => categories,
  category: (parent, args, ctx) => {
    console.log("args2 = ", args);
    return categories.find((category) => category.slug === args.slug);
  },
};

export default Query;
