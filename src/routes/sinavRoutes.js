const express = require('express');
const {
  getSinavlar,
  getSinav,
  createSinav,
  updateSinav,
  deleteSinav
} = require('../controllers/sinavController');

const router = express.Router();

router.route('/')
  .get(getSinavlar)
  .post(createSinav);

router.route('/:id')
  .get(getSinav)
  .put(updateSinav)
  .delete(deleteSinav);

module.exports = router;
