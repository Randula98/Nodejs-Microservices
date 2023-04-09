import express from "express";
import dotenv from "dotenv/config";
import routes from "./routes/index.js";

const app = express();
const PORT = process.env.REACT_APP_GATEWAY_PORT;

app.use(express.json());
app.use('/', routes)

app.listen(PORT, () => {
    console.log(`Gateway is up and running on port ${PORT}`);
});
