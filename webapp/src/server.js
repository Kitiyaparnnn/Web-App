const express = require("express");
const path = require("path");
const users = require("./Users");
const logger = require("../middleware/logger")
const app = express();
const exphbs = require("express-handlebars")

//Init Middleware
app.use(logger)

//express handlebars middlewares
app.engine('handlebars', exphbs({defaultLayout:'main'}));
app.set('view engine', 'handlebars');

//Homepage route
app.get('/',(req,res) => {
    res.render('index',{title : 'User App',users})
})

//Body parse middleware
app.use(express.json())
app.use(express.urlencoded({extends: false}))

app.use('/api/users',require('./routes/api/users'))

//Set static floder
app.use(express.static(path.join(__dirname, "src")));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server is running on ${PORT}`));
