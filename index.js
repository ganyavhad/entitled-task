const express = require("express")
const app = express()
const path = require('path');

// Config
require("dotenv").config();

// middlewares
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

const port = parseInt(process.env.PORT) || 3000

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});

// database connection
require("./db")()

// routes
const router = require("./Controllers/index");
app.use(router);


app.use(express.static('Frontend'));
app.use((req, res) => {
    res.sendFile(path.join(__dirname, 'Frontend/index.html'));
});


app.listen(port, () => {
    console.log(`Server is listening on ${port}`)
})