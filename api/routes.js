// import { initializeApp } from "firebase/app";
import axios from "axios";
import express, { response } from "express";
const routes = express.Router();
import {
  doc,
  setDoc,
  getFirestore,
  getDoc,
  getDocs,
  collection,
  query,
  where,
} from "firebase/firestore";
import firebaseApp from "../Firebase.js";

const db = getFirestore(firebaseApp);

routes.get("/test", (req, res) => {
  res.send("Hello World!");
});
//string to display No transaction ID or user ID received in request
const NoTransactionIDorUserID =
  "No transaction ID or user ID received in request";

// get user transaction by transactionID
routes.get("/:userID/transactions/:transactionID", async (req, res) => {
  if (req.params) {
    var transactionID = req.params.transactionID;
    var userID = req.params.userID;

    try {
      await getDoc(
        doc(db, "users", userID, "transactions", transactionID)
      ).then((doc) => {
        if (doc.exists()) {
          res.send(JSON.parse(JSON.stringify(doc.data())));
        } else {
          res.status(404).send("Transaction not found");
        }
      });
      res.send(JSON.stringify(response.data));
    } catch (error) {
      console.error(error);
      res.send(response.data);
    }
  } else {
    res.status(400).send("No transaction ID or user ID received in request");
  }
});

// get all user transactions
routes.get("/:userID/transactions", async (req, res) => {
  if (req.params) {
    var userID = req.params.userID;

    try {
      await getDocs(
        collection(db, "users", userID, "transactions")
      ).then((querySnapshot) => {
        if (querySnapshot.empty) {
          res.status(404).send("No transactions found for user");
        } else {
          var docs = querySnapshot.docs.map((doc) => doc.data());
          res.send(JSON.parse(JSON.stringify(docs)));
        }
      });
    } catch (error) {
      switch (error.code) {
        case "permission-denied":
          res.status(403).send("Permission denied");
          break;
        case "not-found":
          res.status(404).send("User or document not found");
          break;
        default:
          res.status(400).send("Error processing request");
          break;
      }
      console.log(response);
      console.error(error.code);
    }
  } else {
    res.status(400).send("No transaction ID or user ID received in request");
  }
});

// add transaction to userID
routes.post("/:userID/transactions", async (req, res) => {
  if (req.body || req.params) {
    var userID = req.params.userID;
    var timestamp = new Date().getTime();
    var note = req.body.note;
    var amount = req.body.amount;
    var category = req.body.category;

    try {
      // const response = await instance.post("/");
      await setDoc(doc(db, "users", userID, "transactions"), {
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
