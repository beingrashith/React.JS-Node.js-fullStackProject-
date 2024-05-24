const express = require("express");
const app = express();
const cors = require("cors");
app.use (cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/users', require("./routes/users"));
app.listen(4000, () => {
    console.log("server listening on 4000")
});