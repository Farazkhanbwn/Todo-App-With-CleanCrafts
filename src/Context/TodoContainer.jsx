import React, { useEffect } from "react";
import { useState } from "react";
import { todoStoreDefaults } from "./TodoDefaults";
import {
  displayUserData,
  addNewUserData,
  deleteUserDataFromNetwork,
  updateUser,
} from "./TodoServices";
import { TodoProvider } from "./TodoContext";
import { generateIncrementalIdsFromListOfObj } from "../helpers";

function TodoContainer({ children }) {
  const [products, setProducts] = useState(todoStoreDefaults);
  const [userCurrentData, setUserCurrentData] = useState([]);

  async function load() {
    const userdata = await displayUserData();
    setProducts((prev) => ({
      ...prev,
      todoList: [...userdata],
    }));
  }

  useEffect(() => {
    try {
      load();
    } catch (err) {
      console.log(err);
    }
  }, []);

  const createUser = (userName, userPrice, callBack) => {
    try {
      const newTodoId = generateIncrementalIdsFromListOfObj(products.todoList);
      const data = addNewUserData(userName, userPrice);
      console.log("Data is : ", data);

      setProducts((prev) => {
        return {
          ...prev,
          todoList: [
            ...prev.todoList,
            { id: newTodoId, name: userName, price: userPrice },
          ],
        };
      });
    } catch (error) {
      console.error(error);
    } finally {
      callBack();
    }
  };

  const deleteUserData = async (id, callBack) => {
    try {
      await deleteUserDataFromNetwork(id);
      setProducts((prev) => {
        const remainingTodo = prev.todoList.filter((todo) => todo.id !== id);
        console.log(remainingTodo);
        return {
          ...prev,
          todoList: [...remainingTodo],
        };
      });
    } catch (error) {
      console.error("delelting Error = " + error);
    } finally {
      callBack();
    }
  };

  const updateUserData = (id) => {
    const userCurrentData = products.todoList.filter((userData) => {
      if (userData.id === id) {
        return userData;
      }
    });
    setUserCurrentData({ ...userCurrentData[0] });
  };

  const updateTodo = async (name, price, id, callBack) => {
    try {
      await updateUser(name, price, id);
      setProducts((prev) => {
        const remainingTodo = prev.todoList.filter((todo) => todo.id !== id);
        console.log("RemainingTodo is : " + remainingTodo[0].name);
        return {
          ...prev,
          todoList: [...remainingTodo, { name: name, price: price, id: id }],
        };
      });
    } catch (error) {
      console.error("delelting Error = " + error);
    } finally {
      callBack();
    }
  };

  return (
    <TodoProvider
      value={{
        todoList: products.todoList,
        createTodo: createUser,
        deleteTodo: deleteUserData,
        updateUserData: updateUserData,
        updateUserCurrentValue: userCurrentData,
        updateTodo: updateTodo,
      }}
    >
      {children}
    </TodoProvider>
  );
}

export default TodoContainer;
