const getAllEntries = require('./getAllEntries');
const getEntryById = require('./getEntryById');
const createEntry = require('./createEntry');
const deleteEntry = require('./deleteEntry');
const updateEntry = require('./updateEntry');

module.exports = {
    paths: {
        '/entry': {
            ...getAllEntries,
            ...createEntry,
        },
        '/entry/:id': {
            ...getEntryById,
            ...updateEntry,
            ...deleteEntry,
        },
    },
};
