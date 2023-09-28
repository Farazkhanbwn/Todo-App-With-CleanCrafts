export const displayUserData = async () => {
  try {
    let userData = await fetch(
      "https://64ea220cbf99bdcc8e6757fe.mockapi.io/product"
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        return data;
      });

    return userData;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export const addNewUserData = async (userName, userPrice) => {
  try {
    await fetch("https://64ea220cbf99bdcc8e6757fe.mockapi.io/product", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        createdAt: new Date().toLocaleString() + "",
        name: userName,
        price: userPrice,
      }),
    });
  } catch (error) {
    console.error(error);
  }
};

export const deleteUserDataFromNetwork = async (id) => {
  try {
    await fetch(`https://64ea220cbf99bdcc8e6757fe.mockapi.io/product/${id}`, {
      method: "DELETE",
    })
      .then((result) => {
        if (!result.ok) {
          throw new Error("Network Issue");
        }
        return result.json();
      })
      .then((response) => {
        console.log(response);
      });
  } catch (error) {
    console.error("error is = on service page" + error);
  }
};

export const updateUser = async (name, price, userId) => {
  let item = { name, price, userId };
  await fetch(`https://64ea220cbf99bdcc8e6757fe.mockapi.io/product/${userId}`, {
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
