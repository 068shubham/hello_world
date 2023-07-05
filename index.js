// const express = require('express')
// const app = express()
// const port = 3000

const { default: axios } = require("axios")

// app.get('/favicon.ico', function (req, res) {
//     res.sendFile(__dirname + `/favicon.ico`);
// });

// app.get('/static/:fileName', function (req, res) {
//     res.sendFile(__dirname + `/static/${req.params.fileName}`);
// });

// app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`)
// })

const promises = []
function makeNRequests(timeout) {
    return (n) => {
        for (let i = 0; i < n; i++) {
            setTimeout(() => {
                try {
                    axios.get(`http://localhost/wait/${timeout}`)
                } catch (e) {
                    console.log("Errored")
                }
            }, 1)
        }
    }
}
function executeNTimes(fun, n) {
    for (let i = 0; i < n; ++i)
        fun(n)
}
for(let i = 1; i <= 70; ++i)
    executeNTimes(makeNRequests(i*1000), 10)