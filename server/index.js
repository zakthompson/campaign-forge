const { GraphQLServer } = require('graphql-yoga');
const db = require('./db');
const typeDefs = require('./schemas');
const resolvers = require('./resolvers');

const server = new GraphQLServer({
  typeDefs,
  resolvers,
});

db.init((err) => {
  if (err) {
    console.error('Error connecting to database: ', err);
    process.exit(1);
  }

  server.start(() => console.log('Server is running on http://localhost:4000'));
});
