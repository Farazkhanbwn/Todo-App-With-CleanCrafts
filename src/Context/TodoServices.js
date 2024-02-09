export const displayUserData = async () => {
  try {
    let response = await fetch(
      "https://652b9cc5d0d1df5273ee864b.mockapi.io/users"
    );
    const userData = response.json();

    return userData;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export const addNewUserData = async (userName, userPrice) => {
  try {
    const response = await fetch(
      "https://652b9cc5d0d1df5273ee864b.mockapi.io/users",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          createdAt: new Date().toLocaleString() + "",
          name: userName,
          price: userPrice,
        }),
      }
    );
    const userData =await  response.json();
    console.log("user data is :", userData);
    return userData;
  } catch (error) {
    // console.error(error);
  }
};

export const deleteUserDataFromNetwork = async (id) => {
  try {
    const response = await fetch(`https://652b9cc5d0d1df5273ee864b.mockapi.io/users/${id}`, {
      method: "DELETE",
    })
    return response.json()
      
  } catch (error) {
    console.error("error is = on service page" + error);
  }
};

export const updateUser = async (name, price, userId) => {
  let item = { name, price, userId };
  await fetch(`https://652b9cc5d0d1df5273ee864b.mockapi.io/users/${userId}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(item),
  }).then((result) => {
    result.json().then((response) => {
      console.log(response);
    });
  });
};
