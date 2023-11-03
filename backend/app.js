require('./config/database')
const express = require('express');
const app = express();
const port = 5000; 
const fs = require('fs');
const cors = require('cors')
const userRouter = require("./routes/user");


app.use(cors())
app.use(express.json())
app.use("/user", userRouter)

app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
