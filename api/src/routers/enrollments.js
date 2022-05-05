const express = require('express');
const router = express.Router();

router.get('/', (req, res) =>{
    return res.send({message: 'Tudo ok com o método GET'})
})

module.exports = router;