const express = require('express');
const router = express.Router();

const notes = require('../controllers/notes');

router.get('/', function (req, res, next) {
  notes.searchAll(req)
  .then((notes) => {
    if (notes.length) {
      res.json(notes);
    } else {
      res.status(404).send({
        message: 'No notes found with that query',
        error: {
          status: 404
        }
      });
    }
  })
  .catch(err => next(err));
});

router.get('/:id', function (req, res, next) {
  notes.searchOne(req)
  .then((note) => {
    if (note.length) {
      res.json(note);
    } else {
      res.status(404).send({
        message: 'No notes found with that id',
        error: {
          status: 404
        }
      });
    }
  })
  .catch(err => next(err));
});

router.post('/', function (req, res, next) {
  notes.addNote(req)
  .then((result) => {
    if (result) {
      res.status(201).send({
        message: 'Note created',
        data: result
      });
    } else {
      res.status(400).send({
        message: 'Bad request',
        error: {
          status: 400
        }
      });
    }
  });
});

module.exports = router;
