const express = require('express');
const router = express.Router();

router.get('/',(req, res) => {
  res.send('라우터입니다.')
})
router.get('/about', (req, res)=> {
  res.send('라우터 어바웃')
})
module.exports = router; 