const express = require('express')
const app = express()
app.get('/', (req, res) => {
    res.send('this is a a test for docker-k8s-jenkins')
})
app.listen(3000, () => {
    console.log("running on 3000");
})