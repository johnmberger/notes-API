const knex = require('../db/connection');

function searchAll(req) {
  if (req.query.query) {
    return knex('notes')
    .whereRaw('LOWER("body") LIKE ?', '%' + req.query.query.toLowerCase() + '%');
  } else {
    return knex('notes');
  }
}

function searchOne(req) {
  const searchID = req.params.id;
  return knex('notes')
  .where('id', searchID);
}

function addNote(req) {
  const content = req.body.body;
  if (content) {
    return knex('notes')
    .insert({ body: content })
    .returning('*');
  } else {
    return false;
  }
}

module.exports = {
  searchAll,
  searchOne,
  addNote
};
