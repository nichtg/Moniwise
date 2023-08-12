// import { initializeApp } from "firebase/app";
import axios from "axios";
import express from "express";
const routes = express.Router();
import { doc, setDoc, getFirestore } from "firebase/firestore";
import firebaseApp from "../Firebase.js";

const db = getFirestore(firebaseApp);

routes.get("/test", (req, res) => {
  res.send("Hello World!");
});

routes.post("/transaction", async (req, res) => {
  if (req.body) {
    var userID = req.body.userID;
    var timestamp = new Date().getTime();
    var note = req.body.note;
    var amount = req.body.amount;
    var category = req.body.category;

    try {
      // const response = await instance.post("/");
      await setDoc(doc(db, "users", userID), {
        transactions: timestamp,
        note: note,
        amount: amount,
        category: category,
      });
      var returnString = `Transaction added to ${userID}`;

      res.send(JSON.stringify(returnString));
    } catch (error) {
      console.error(error);
      res.send(response.data);
    }
  } else {
    res.status(400).send("No request body received");
  }
});

export default routes;
