const { db } = require("../config/db");

const getAllUsers = async () => {
  const query = "SELECT * FROM users ORDER BY id ASC;";
  const { rows } = await db.query(query);
  return rows;
};

const getUserById = async (id) => {
  try {
    const query = "SELECT * FROM users WHERE id = $1;";
    const { rows } = await db.query(query, [id]);
    return rows[0];
  } catch (error) {
    console.log(error);
  }
};

const createUser = async (user) => {
  try {
    const query = "INSERT INTO users (name,email,age,adress,gender,profesion) VALUES ($1,$2,$3,$4,$5,$6) RETURNING *;";
    const { rows } = await db.query(query, [user.name, user.email, user.age, user.adress, user.gender, user.profesion]);
    return rows[0];
  } catch (error) {
    throw new Error(error);
  }
};

const updateUser = async (id, user) => {
  try {
    const query =
      "UPDATE users SET name = $1, email = $2, age = $3, adress = $4, gender = $5, profesion= $6 WHERE id = $7 RETURNING *;";
    const { rows } = await db.query(query, [user.name, user.email, user.age, user.adress, user.gender, user.profesion, id]);
    return rows[0];
  } catch (error) {
    console.log(error);
  }
};
module.exports = { getAllUsers, getUserById, createUser, updateUser };