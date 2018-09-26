module.exports = {
  db: {
    url: process.env.DB_URL || 'mongodb://localhost',
    port: process.env.DB_PORT || '27017',
    password: process.env.DB_PASSWORD || '',
  },
};
