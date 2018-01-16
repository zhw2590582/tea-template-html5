module.exports = {
  skipInterpolation: 'src/**/*.vue',
  metalsmith: {
    before: (metalsmith, opts, helpers) => {
      console.log('metalsmith before');
    },
    after: (metalsmith, opts, helpers) => {
      console.log('metalsmith after');
    }
  },
  helpers: {},
  prompts: {},
  filters: {},
  complete: (data, helpers) => {
    console.log('complete');
  }
};
