const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = 5000;
const cors = require("cors");

app.use(express.json());

const allowedOrigins = [
  "http://localhost:3000", // Add other origins if needed
];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

app.use(cors(corsOptions));

mongoose.connect(
  "mongodb+srv://gk1481998:gk1481998@cluster0.0bqfw2w.mongodb.net/mentorstudent?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.use("/mentors", require("./routes/mentorRoutes"));
app.use("/students", require("./routes/studentRoutes"));
app.use("/assignments", require("./routes/assignmentRoutes"));
