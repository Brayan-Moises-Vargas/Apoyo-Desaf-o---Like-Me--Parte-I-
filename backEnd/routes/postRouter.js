import express from "express"
const router = express.Router()

import {getAllPostsController,createPostController} from "../src/controllers/postcontroller.js"


router.get("/posts",getAllPostsController)
router.post("/posts",createPostController)

export default router