var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');

//DB connection

const dbURL = "mongodb+srv://chamika:Asd123+++@afcluster1-3t6tc.mongodb.net/test";

mongoose
    .connect(dbURL, { useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true })
    .then(() => console.log("mongodb connected"))
    .catch(err => console.log(err));


//utils
app.use(bodyParser.json());
app.use(cors());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


//Routes
var UserRoute = require('./routes/UserRoutes')
app.use('/api/users', UserRoute);

var AdminRoutes = require('./routes/AdminRoutes')
app.use('/api/admins', AdminRoutes)

app.listen(3800, () => {
    console.log("server is listening on port 3800")
})