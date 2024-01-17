import { getAllPosts, createPost, updatePost, deletePost} from '../models/postModel.js'

import { findError } from '../utils/utils.js'

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

export const updatePostController = async (req, res) => {
  try {
    const { id } = req.params
    const updatedPost = await updatePost(id, req.body)
    res.status(200).json(updatedPost)
  } catch (error) {
    const errorFound = findError(error.code)
    return res
      .status(errorFound[0].status)
      .json({ error: errorFound[0].message })
  }
}

export const deletePostController = async (req, res) => {
  try {
    const { id } = req.params
    const deteledPost = await deletePost(id)
    if (deteledPost === 0) {
      return res.status(404).json({ message: 'No existe el registro' })
    }
    res.status(200).json(deteledPost)
  } catch (error) {
    const errorFound = findError(error.code)
    return res
      .status(errorFound[0].status)
      .json({ error: errorFound[0].message })
  }
}