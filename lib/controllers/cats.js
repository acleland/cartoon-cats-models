const { Router } = require('express');
const { cats } = require('../../data/cats');

const router = Router();

// const simp_cats = cats.map((cat) => ({ id: cat.id, name: cat.name }));

router.get('/:id', (req, res) => {
  const id = req.params.id;
  return res.json(cats.find((cat) => cat.id === id));
});
router.get('/', (req, res) => {
  return res.json(cats.map((cat) => ({ id: cat.id, name: cat.name })));
});

module.exports = router;
