  
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.send('reg route'));

module.exports = router;