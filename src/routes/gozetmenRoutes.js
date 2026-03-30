const express = require('express');
const {
  getGozetmenler,
  getGozetmen,
  createGozetmen,
  updateGozetmen,
  deleteGozetmen
} = require('../controllers/gozetmenController');

const router = express.Router();

router.route('/')
  .get(getGozetmenler)
  .post(createGozetmen);

router.route('/:id')
  .get(getGozetmen)
  .put(updateGozetmen)
  .delete(deleteGozetmen);

module.exports = router;
