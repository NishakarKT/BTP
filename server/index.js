import "./config/dotenv-config.js";
import "./config/database-config.js";
import http from "http";
import express from "express";
import cors from "cors";
import Router from "./routes.js";
import { fileURLToPath } from "url";

const __dirname = fileURLToPath(new URL('.', import.meta.url));

const app = express();

app.use(express.json());
app.use("/public", express.static(__dirname + '/public'));
app.use(cors());
app.use(Router);

const PORT = process.env.PORT || 8000;
const server = http.createServer(app);
server.listen(PORT, () => console.log("Listening on PORT: " + PORT));