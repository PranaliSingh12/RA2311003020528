const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let notifications = [];

app.get("/notifications", (req, res) => {
  res.json(notifications);
});

app.post("/notifications", (req, res) => {
  notifications.push(req.body);
  res.json({ message: "Added successfully" });
});

app.delete("/notifications/:id", (req, res) => {
  notifications.splice(req.params.id, 1);
  res.json({ message: "Deleted" });
});

app.listen(8000, () => {
  console.log("Server running on port 8000");
});