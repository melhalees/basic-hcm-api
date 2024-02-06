const config =  require('./config.js');
const express = require('express')
const app = express()
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/v1/", require("./api/v1/routes/index"));


app.get('/', (req, res) => {
   res.send("Hello World from Express.js")
});


app.listen(config.PORT, config.HOST, () => {
    console.log(`APP LISTENING ON http://${config.HOST}:${config.PORT}`);
})