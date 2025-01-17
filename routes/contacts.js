const express = require('express');
const router = express.Router();

// @route       GET api/condacts
// @desc        Get all users contacts
// @access      Private
router.get('/', (req, res) => {
	res.send('Get all contacts');
});

// @route       POST api/condacts
// @desc        Add new contact
// @access      Private
router.post('/', (req, res) => {
	res.send('Add contact');
});

// @route       PUT api/condacts/:id
// @desc        Update contact
// @access      Private
router.put('/:id', (req, res) => {
	res.send('Update contact');
});

// @route       DELETE api/condacts/:id
// @desc        Delete contact
// @access      Private
router.delete('/:id', (req, res) => {
	res.send('Delete contact');
});

module.exports = router;
