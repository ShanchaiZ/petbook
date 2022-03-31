import express from "express";
import { getPosts, createPost } from "../controllers/posts.js";

const router =  express.Router();


//All available routes will be shown below and will be accessed by the browers at http://localhost:3001/posts

router.get("/", getPosts);
router.post("/", createPost);

export default router;

