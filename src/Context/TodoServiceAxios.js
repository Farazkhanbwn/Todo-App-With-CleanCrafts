import axios from "axios";

export const displayUserData = async () => {
  try {
    const response = await axios.get(
      "https://652b9cc5d0d1df5273ee864b.mockapi.io/users"
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const addNewUserData = async (userName, userPrice) => {
  try {
    await axios.post("https://652b9cc5d0d1df5273ee864b.mockapi.io/users", {
      createdAt: new Date().toLocaleString() + "",
      name: userName,
      price: userPrice,
    });
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const deleteUserDataFromNetwork = async (id) => {
  try {
    const response = await axios.delete(
      `https://652b9cc5d0d1df5273ee864b.mockapi.io/users/${id}`
    );
    console.log(response.data);
  } catch (error) {
    console.error("Error deleting user data:", error);
    throw error;
  }
};

export const updateUser = async (name, price, userId) => {
  const item = { name, price, userId };
  try {
    const response = await axios.put(
      `https://652b9cc5d0d1df5273ee864b.mockapi.io/users/${userId}`,
      item
    );
    console.log(response.data);
  } catch (error) {
    console.error("Error updating user data:", error);
    throw error;
  }
};
