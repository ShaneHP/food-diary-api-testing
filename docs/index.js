const basicInfo = require('./basicInfo');
const servers = require('./servers');
const tags = require('./tags');
const components = require('./components');
const entry = require('./entry');

module.exports = {
    ...basicInfo,
    ...servers,
    ...tags,
    ...components,
    ...entry,
};
