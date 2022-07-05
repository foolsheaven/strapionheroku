module.exports = ({ env }) => ({
  proxy: true,
  url: env('MY_HERUKO_URL'),
  app: {
    keys: env.array('APP_KEYS'),
  },
});
