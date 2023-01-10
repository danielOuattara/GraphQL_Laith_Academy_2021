import { animals } from "./../data.js";

const Category = {
  animals: (parent, args, ctx) => {
    console.log("parents = ", parent);
    return animals.filter((animal) => animal.category === parent.id);
  },
};

export default Category;
