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
// app.use("/", routes);

app.get("/test", (req, res) => {
  res.send("Hello World!");
});
app.listen(3000, () =>
  console.log("UI hosted on http://localhost:5173\nAPI Testing is on http://localhost:5173/api\nServer hosted on http://localhost:3000")
);
