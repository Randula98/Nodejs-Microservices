import express from "express";
import dotenv from "dotenv/config";
import routers from "./routes/index.js";

const app = express();
app.use(express.json());
const PORT = process.env.REACT_APP_API_PORT;

routers(app);

app.listen(PORT, () => {
    console.log(`Test API is up and running on port ${PORT}`);
});
