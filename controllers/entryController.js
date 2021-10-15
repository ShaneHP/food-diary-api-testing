const Entry = require('../models/entry');

const getAllEntries = (req, res) => {
    Entry.find()
        .sort({ createdAt: -1 })
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            res.status(404).send('Resource not found');
            console.log(err);
        });
};

const getEntryById = (req, res) => {
    const id = req.params.id;
    Entry.findById(id)
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            res.status(404).send('Resource not found');
            console.log(err);
        });
};

const createEntry = (req, res) => {
    const entry = new Entry(req.body);
    entry
        .save()
        .then((result) => {
            res.send('added entry');
        })
        .catch((err) => {
            res.send('error creating entry');
            console.log(err);
        });
};

const deleteEntry = (req, res) => {
    const id = req.params.id;
    Entry.findByIdAndDelete(id)
        .then((result) => {
            console.log(result);
            res.send('deleted entry');
        })
        .catch((err) => {
            res.status(404).send('Resource not found');
            console.log(err);
        });
};

const updateEntry = (req, res) => {
    const id = req.params.id;
    const updatedEntry = req.body;
    Entry.findByIdAndUpdate(id, updatedEntry)
        .then((result) => {
            res.send('updated document');
            console.log(result);
        })
        .catch((err) => {
            console.log(err);
            res.send('error updating document');
        });
};

module.exports = {
    getAllEntries,
    getEntryById,
    createEntry,
    deleteEntry,
    updateEntry,
};
