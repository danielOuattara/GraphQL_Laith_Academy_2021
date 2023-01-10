import { v4 as uuidv4 } from "uuid";

const Mutation = {
  addAnimal: (parent, args, ctx) => {
    const newAnimal = {
      id: uuidv4(),
      ...args,
    };

    ctx.animals.push(newAnimal);
    return newAnimal;
  },

  removeAnimal: (parent, args, ctx) => {
    const index = ctx.animals.findIndex((animal) => animal.id === args.id);
    ctx.animals.splice(index, 1);
    console.log("ctx.animals = ", ctx.animals);
    return true;
  },

  // TODO: seems OK, but not updated in local data.js
  updateAnimal: (parent, args, ctx) => {
    let animal = ctx.animals.find((animal) => animal.id === args.id);
    const newAnimal = { ...animal, ...args };
    ctx.animal = newAnimal;
    return newAnimal;
  },
};

export default Mutation;
