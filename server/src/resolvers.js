const fetch = require("node-fetch");

const resolvers = {
  Query: {
    tracksForHome: (_, __, { dataSources }) => {
      return dataSources.trackAPI.getTracksForHome();
    },
    tracksForHomeFetch: async () => {
      const baseURL = "https://odyssey-lift-off-rest-api.herokuapp.com";
      const res = await fetch(`${baseURL}/tracks`);
      return res.json();
    },
  },
  Track: {
    //   using fetch instead of dataSources
    author: async ({ authorId }, _, { dataSources }) => {
      const baseURL = "https://odyssey-lift-off-rest-api.herokuapp.com";
      const res = await fetch(`${baseURL}/author/${authorId}`);
      return res.json();
      // author: ({ authorId }, _, { dataSources }) => {
      //   console.log(parent);
      //   graphql version
      //   return dataSources.trackAPI.getAuthor(authorId);
    },
  },
};

module.exports = resolvers;
