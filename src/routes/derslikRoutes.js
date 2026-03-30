const express = require('express');
const {
  getDerslikler,
  getDerslik,
  createDerslik,
  updateDerslik,
  deleteDerslik
} = require('../controllers/derslikController');

const router = express.Router();

router.route('/')
  .get(getDerslikler)
  .post(createDerslik);

router.route('/:id')
  .get(getDerslik)
  .put(updateDerslik)
  .delete(deleteDerslik);

module.exports = router;
