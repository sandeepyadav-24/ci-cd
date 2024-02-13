const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const adminRouter = require("./routes/admin");
const userRouter = require("./routes/user");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/admin", adminRouter)
app.use("/user", userRouter)
app.get("/",(req,res)=> res.json({mes:"Hello World Bro nigga"}));


// Connect to MongoDB

//mongoose.connect('mongodb://localhost:27017/courses', { useNewUrlParser: true, useUnifiedTopology: true, dbName: "courses" });

app.listen(80, () => console.log('Server running on port 3000'));
