const { cats } = require('../data/cats');

for (const cat of cats) {
  console.log(`('${cat.name}', 
  '${cat.type}', 
  '${cat.url}', 
  ${cat.year}, 
  ${cat.lives},
  ${cat.isSidekick}), `);
}
