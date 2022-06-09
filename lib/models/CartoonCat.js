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
    // for (const key of Object.keys(cat)) {
    //   this[key] = cat[key];
    // }
    this.id = cat.id;
    this.name = cat.name;
    this.type = cat.type;
    this.url = cat.url;
    this.year = cat.year;
    this.lives = cat.lives;
    this.isSidekick = cat.is_sidekick;
  }

  static async getAll() {
    const { rows } = await pool.query('SELECT id, name FROM cats;');
    return rows.map((cat) => new CartoonCat(cat));
  }

  static async getById(id) {
    const { rows } = await pool.query('SELECT * FROM cats WHERE id=$1', [id]);
    if (!rows[0]) return null;

    return new CartoonCat(rows[0]);
  }
}

module.exports = CartoonCat;
