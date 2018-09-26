const { mergeResolvers } = require('merge-graphql-schemas');
const linksResolver = require('./links');

const resolvers = [
  linksResolver,
];

module.exports = mergeResolvers(resolvers);
