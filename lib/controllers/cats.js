const { Router } = require('express');
const CartoonCat = require('../models/CartoonCat');
const { cats } = require('../../data/cats');
const router = Router();

router.get('/:id', (req, res) => {
  const id = req.params.id;
  return res.json(cats.find((cat) => cat.id === id));
});

router.get('/', async (req, res) => {
  const cats = await CartoonCat.getAll();
  return res.json(cats);
});

module.exports = router;
