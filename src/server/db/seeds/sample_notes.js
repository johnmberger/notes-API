exports.seed = function(knex, Promise) {
  return knex('notes').del()
    .then(function () {
      return Promise.all([
        knex('notes').insert({body: 'Go get milk'}),
        knex('notes').insert({body: 'Finish those TPS reports'}),
        knex('notes').insert({body: 'Learn the airspeed velocity of an unladen swallow'}),
        knex('notes').insert({body: 'Milk the cows'})
      ]);
    });
};
