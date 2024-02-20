const express = require('express');
const auth = require('../middleware/auth');
const router = express.Router();

/* GET home page. */
router.get('/', auth, (req, res, next) => {
  res.json(`Page d'accueil`);
});

module.exports = router;
