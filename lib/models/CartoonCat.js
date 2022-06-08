const pool = require('../utils/pool');

class CartoonCat {
  id;
  name;
  type;
  url;
  year;
  lives;
  isSidekick;

  constructor(cat) {
    for (const key of Object.keys(cat)) {
      this[key] = cat[key];
    }
  }

  static async getAll() {
    const { cats } = await pool.query('SELECT * FROM cats;');
    return cats.map((cat) => new CartoonCat(cat));
  }

  static async getById(id) {
    const { cats } = await pool.query('SELECT * FROM cats WHERE id=$1', [id]);
    if (!cats[0]) return null;

    return new CartoonCat(cats[0]);
  }
}

module.exports = CartoonCat;
