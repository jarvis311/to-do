const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());


app.use("/api", require("./routes/index"));

app.get("/", (req,res) => {
    res.json("Hello from nodejs!!")
})
const port = 8000
app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
