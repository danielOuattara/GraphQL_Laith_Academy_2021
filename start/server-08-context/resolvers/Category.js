const Category = {
  animals: (parent, args, ctx) => {
    return ctx.animals.filter((animal) => animal.category === parent.id);
  },
};

export default Category;
