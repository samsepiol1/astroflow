const astronautQueries = require('./astronaut').astronautQueries;
const astronautMutations = require('./astronaut').astronautMutations;
const heathdataQueries = require('./healthdata').heathdataQueries;
const heathdataMutations = require('./healthdata').heathdataMutations;
const missioneventQueries = require('./missionevent').missioneventQueries;
const missioneventMutations = require('./missionevent').missioneventMutations;
const planetQueries = require('./planet').planetQueries;
const planetMutations = require('./planet').planetMutations;
const missionQueries = require('./mission').missionQueries;
const missionMutations = require('./mission').missionMutations;

const resolvers = {
  Query: {
    ...astronautQueries,
    ...heathdataQueries,
    ...missioneventQueries,
    ...planetQueries,
    ...missionQueries,
  },
  Mutation: {
    ...astronautMutations,
    ...heathdataMutations,
    ...missioneventMutations,
    ...planetMutations,
    ...missionMutations,
  },
};

module.exports = resolvers;