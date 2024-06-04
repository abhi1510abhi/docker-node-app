const express = require("express");
const bodyParser = require("body-parser");
let rateLimit = require('express-rate-limit');


const router = require("./routes/main_routes");
let app = express();

let PORT = process.env.PORT || 3333;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const limiter = rateLimit({
	windowMs: 1 * 60 * 1000, 
	limit: 5, 
    message: 'Too many requests from this IP, please try again in an hour!'
})

app.use(limiter);
app.use(router);


app.listen(PORT, () => {
    console.log("server is listnening at port: ", PORT);
})


