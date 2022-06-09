// This file is for creating the list of cat data to insert into setup.sql
// (because I didn't want to enter the data manually)

const { cats } = require('../data/cats');

for (const cat of cats) {
  console.log(`('${cat.name}', 
  '${cat.type}', 
  '${cat.url}', 
  ${cat.year}, 
  ${cat.lives},
  ${cat.isSidekick}), `);
}
