const { ApolloServer, gql, makeExecutableSchema } = require('apollo-server');
const moviesSchema = require('./schemas/movies')
const tvSeriesSchema = require('./schemas/tvSeries')

const typeDefs = gql`
   type Query
   type Mutation
`

const schema = makeExecutableSchema({
  typeDefs: [typeDefs, moviesSchema.typeDefs, tvSeriesSchema.typeDefs],
  resolvers: [moviesSchema.resolvers, tvSeriesSchema.resolvers],
})

const server = new ApolloServer({ schema });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});