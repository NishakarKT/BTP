import express from "express";
// services
import { upload } from "./services/file-services.js";
// controllers
import * as miscControllers from "./controllers/misc-controllers.js";
import * as authControllers from "./controllers/auth-controllers.js";
import * as userControllers from "./controllers/user-controllers.js";
import * as fileControllers from "./controllers/file-controllers.js";

const Router = express.Router();

// Misc Routes
Router.get("/", miscControllers.index); 
// Auth Routes
Router.post("/auth/in", authControllers.signIn);
Router.post("/auth/token", authControllers.token);
Router.post("/auth/otp-generate", authControllers.otp_generate);
Router.post("/auth/otp-verify", authControllers.otp_verify);
// User Routes
Router.get("/user", userControllers.getUser);
Router.patch("/user", userControllers.editUser);
Router.delete("/user", userControllers.removeUser);
// File Routes
Router.post("/file/new-file", upload.single("file"), fileControllers.newFile);
Router.post("/file/new-files", upload.array("files"), fileControllers.newFiles);

export default Router;