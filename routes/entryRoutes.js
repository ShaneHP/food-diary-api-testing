const express = require('express');
const entryController = require('../controllers/entryController');

const router = express.Router();

router.get('/:id', entryController.getEntryById);
router.get('/', entryController.getAllEntries);
router.post('/', entryController.createEntry);
router.delete('/:id', entryController.deleteEntry);
router.patch('/:id', entryController.updateEntry);

module.exports = router;
