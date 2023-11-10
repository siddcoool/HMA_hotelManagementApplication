require('./config/database')
const express = require('express');
const app = express();
const port = 5000;
const fs = require('fs');
const cors = require('cors')
const userRouter = require("./routes/user");
const roomRouter = require('./routes/room');
const Authentication = require('./middlewares/Authentication');
const bookingRouter = require('./routes/booking');

app.use(cors())
app.use(express.json())

app.use("/user", userRouter)
app.use("/room", Authentication.Customer, roomRouter)
app.use("/booking", Authentication.Customer, bookingRouter)


app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
