const Animal = {
  category: (parent, args, ctx) => {
    return ctx.categories.find((category) => category.id === parent.category);
  },
};

export default Animal;
