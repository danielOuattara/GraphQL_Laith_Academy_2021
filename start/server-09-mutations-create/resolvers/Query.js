const Query = {
  mainCards: (parent, args, ctx) => ctx.mainCards,
  animals: (parent, args, ctx) => {
    return ctx.animals;
  },
  animal: (parent, args, ctx) => {
    return ctx.animals.find((animal) => animal.slug === args.slug);
  },
  categories: (parent, args, ctx) => ctx.categories,
  category: (parent, args, ctx) => {
    return ctx.categories.find((category) => category.slug === args.slug);
  },
};

export default Query;
