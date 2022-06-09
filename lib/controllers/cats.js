const { Router } = require('express');
const CartoonCat = require('../models/CartoonCat');
const router = Router();

router.get('/:id', async (req, res) => {
  const id = req.params.id;
  const cat = await CartoonCat.getById(id);
  console.log('cat', cat);
  return res.json(cat);
});

router.get('/', async (req, res) => {
  const cats = await CartoonCat.getAll();
  console.log('cats', cats);
  return res.json(cats);
});

module.exports = router;
