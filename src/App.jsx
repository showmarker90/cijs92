import React, { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { FaPlus } from "react-icons/fa";
import { Button, Input } from "antd";
import "./App.css";

const deplay = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(1);
    }, 200);
  });

const App = () => {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleAddTodo = async () => {
    setIsLoading(true);
    await deplay();
    setTodos([...todos, value]);
    toast.success("add todo success!!");
    setValue("");

    setIsLoading(false);
  };

  return (
    <div>
      <h1 id="title">TODOLISTS</h1>
      <div
        style={{
          display: "flex",
          gap: 10,
        }}
      >
        <Input
          size="large"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <Button
          size="large"
          onClick={handleAddTodo}
          type="primary"
          disabled={!value}
          loading={isLoading}
        >
          <FaPlus />
        </Button>
      </div>

      <div>
        {todos.map((todo) => (
          <h3>{todo}</h3>
        ))}
      </div>
      <ToastContainer />
    </div>
  );
};

export default App;
