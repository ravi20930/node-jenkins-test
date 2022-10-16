const express = require('express')
const app = express()
app.get('/', (req, res) => {
    res.send('this is a jenkins test 2')
})
app.listen(3000, () => {
    console.log("running on 3000");
})