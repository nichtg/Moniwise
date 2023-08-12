import axios from "axios";
import express from "express";
import ViteExpress from "vite-express";
import routes from "./api/routes.js";
import cors from "cors";
const app = express();
// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// parse application/json
app.use(express.json());
app.use(cors())


app.use("/api", routes);

app.get("/test", (req, res) => {
  res.send("Hello World!");
});
app.listen(3000, () =>
  console.log("Server listening on http://localhost:3000\nUI hosting on http://localhost:5173")
);
