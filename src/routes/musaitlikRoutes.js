const express = require('express');
const {
  getMusaitlikler,
  getMusaitlik,
  createMusaitlik,
  updateMusaitlik,
  deleteMusaitlik
} = require('../controllers/musaitlikController');

const router = express.Router();

router.route('/')
  .get(getMusaitlikler)
  .post(createMusaitlik);

router.route('/:id')
  .get(getMusaitlik)
  .put(updateMusaitlik)
  .delete(deleteMusaitlik);

module.exports = router;
