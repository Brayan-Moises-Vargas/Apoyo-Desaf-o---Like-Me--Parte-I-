import express from "express"
import {getAllPostsController,createPostController, updatePostController, deletePostController} from "../src/controllers/postcontroller.js"
const router = express.Router()

router.get("/posts",getAllPostsController)
router.post("/posts",createPostController)
router.put('/posts/like/:id', updatePostController)
router.delete('/posts/:id', deletePostController)

export default router