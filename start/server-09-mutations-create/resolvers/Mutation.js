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
};

export default Mutation;
