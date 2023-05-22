const express = require('express')
const app = express()
app.get('/', (req, res) => {
    res.send('this is a a test for checking github docker auto  on ec2, finally working!!!!!!!!!!!');
})
app.listen(3000, () => {
    console.log("running on 3000");
})