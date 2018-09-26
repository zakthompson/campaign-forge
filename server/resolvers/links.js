const { ObjectID } = require('mongodb');
const db = require('../db');
const { convertId } = require('../utils');

const Links = () => db.getCollection('links');

module.exports = {
  Query: {
    links: async () => {
      const res = await Links().find().toArray();
      const converted = res.map(convertId);
      return converted;
    },
    link: async (root, args) => {
      const res = await Links().findOne({ _id: ObjectID(args.id) });
      return convertId(res);
    },
  },
  Mutation: {
    postLink: async (root, args) => {
      const link = {
        description: args.description,
        url: args.url,
      };
      const res = await Links().insertOne(link);
      return convertId(res.ops[0]);
    },
    updateLink: async (root, args) => {
      const updates = {};
      if (args.url) updates.url = args.url;
      if (args.description) updates.description = args.description;
      const res = await Links().findOneAndUpdate(
        { _id: ObjectID(args.id) },
        { $set: updates },
        { returnOriginal: false },
      );
      return convertId(res.value);
    },
    deleteLink: async (root, args) => {
      const res = await Links().findOneAndDelete({ _id: ObjectID(args.id) });
      return convertId(res.value);
    },
  },
};
