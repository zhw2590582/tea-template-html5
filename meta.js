module.exports = {
  before: (metalsmith, opts, helpers) => {
    let logger = helpers.logger;
    logger.log('Install before');
  },
  prompts: {
    name: {
      type: 'string',
      required: true,
      message: 'Project name',
      validate: value => {
        if(value.length <= 2){
          return 'Please enter a name longer than 2';
        }
        return true;
      }
    },
    description: {
      type: 'string',
      message: 'Project description',
      default: 'My project description'
    },
    author: {
      type: 'string',
      message: 'Author',
      default: 'My Name'
    },
    useCssCompiler: {
      type: 'confirm',
      message: 'Install css compiler?',
    },
    cssCompiler: {
      when: 'useCssCompiler',
      type: 'list',
      message: 'Css compiler',
      choices: [
        {
          name: 'Sass',
          value: 'sass'
        },
        {
          name: 'Less',
          value: 'less'
        },
      ],
    }
  },
  filters: {
    'sass/*': "useCssCompiler && cssCompiler === 'sass'",
    'less/*': "useCssCompiler && cssCompiler === 'less'"
  },
  complete: (data, files, helpers) => {
    let logger = helpers.logger;
    logger.log('Install complete');
  }
};
