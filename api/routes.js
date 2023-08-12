// import { initializeApp } from "firebase/app";
import axios from "axios";
import express from "express";
const routes = express.Router();

const instance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
    timeout: 1000,
});

// GET request to test the API with axios
routes.get("/posts", async (req, res) => {
    try {
        const response = await instance.get("/posts");
        res.send(response.data);
    } catch (error) {
        console.error(error);
        res.send(response.data);
    }
});

export default routes;