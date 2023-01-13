const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => { 
    res.send('123')
})

router.post('/', (req, res, next) => { 
    res.send('123')
})

router.get('/:idx', (req, res, next) => { 
    res.send('123')
})

router.put('/:idx', (req, res, next) => { 
    res.send('123')
})

router.delete('/:idx', (req, res, next) => { 
    res.send('123')
})


module.exports = router