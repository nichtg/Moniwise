import axios from "axios";
import express from "express";
import ViteExpress from "vite-express";
import routes from "./api/routes.js";
const app = express();

app.use('/api', routes);

app.get("/test", (req, res) => {
  res.send("Hello World!");
});
ViteExpress.listen(app, 3000, () =>
  console.log("Server listening on http://localhost:3000")
);
