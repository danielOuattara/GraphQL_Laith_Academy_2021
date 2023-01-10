import { categories } from "./../data.js";

const Animal = {
  category: (parent, args, ctx) => {
    console.log(parent);
    return categories.find((category) => category.id === parent.category);
  },
};

export default Animal;
