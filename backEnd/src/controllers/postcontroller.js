import { getAllPosts, createPost } from '../models/postModel.js'

export const getAllPostsController = async (_req, res) => {
  try {
    const posts = await getAllPosts()

    res.status(200).json(posts)
  } catch (error) {
    res.status(500).send('Error al procesar la solicitud')
  }
}

export const createPostController = async (req, res) => {
  const { titulo, url, descripcion, likes } = req.body

  try {
    const newPost = await createPost (titulo, url, descripcion, likes)

    res.status(200).json(newPost)
  } catch (error) {
    res.status(500).send('Error al procesar la solicitud')
  }
}