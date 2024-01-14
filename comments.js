//create web server
const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('Hello World!')
})

//start the server at port 3000
router.listen(3000)