import { authorQueries, authorMutations } from './author';


const resolvers = {
  Query: {
    ...authorQueries,
    ...bookQueries,
    ...publisherQueries,
  },
  Mutation: {
    ...authorMutations,
    ...bookMutations,
    ...publisherMutations,
  },
};

export default resolvers;