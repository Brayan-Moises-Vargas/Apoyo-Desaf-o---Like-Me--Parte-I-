import pool from "../../db/connectionDB.js";

export const getAllPosts = async () => {
  const SQLquery = await pool.query("SELECT * FROM posts");

  try {
    return SQLquery.rows;
  } catch (error) {
    console.error("Error en la consulta", error);
    throw error;
  }
};

export const createPost = async (titulo, img, descripcion, likes = 0) => {
  const SQLquery = await pool.query(
    "INSERT INTO posts (titulo, img, descripcion, likes) VALUES ($1, $2, $3, $4) RETURNING *",
    [titulo, img, descripcion, likes]
  );

  try {
    return SQLquery.rows[0];
  } catch (error) {
    console.error("Error en la consulta", error);
    throw error;
  }
};

export const updatePost = async (id) => {
  const SQLquery = await pool.query(
    'UPDATE posts SET likes = likes + 1 WHERE id = $1 RETURNING *',
    [id]
  )

  return SQLquery.rows[0]
}

export const deletePost = async (id) => {
  const SQLquery = await pool.query('DELETE FROM posts WHERE id = $1', [id])

  return SQLquery.rowCount
}
