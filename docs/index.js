const basicInfo = require('./basicInfo');
const servers = require('./servers');
const tags = require('./tags');
const components = require('./components');
const entry = require('./entry');
const auth = require('./auth');
const analytics = require('./analytics');

module.exports = {
    ...basicInfo,
    ...servers,
    ...tags,
    ...components,
    paths: {
        ...auth.paths,
        ...entry.paths,
        ...analytics.paths,
    },
};
