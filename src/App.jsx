import { Button } from "antd";
import React, { useState } from "react";
import axios from "axios";
import { SyncLoader } from "react-spinners";

//promise -> []
//then, catch,finnaly
//async await

const instanceAxios = axios.create({
  baseURL: "https://fakestoreapi.com/products/",
});

const slow3G = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });

const App = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchProducts = async () => {
    setIsLoading(true);
    const { data } = await instanceAxios.get();
    await slow3G();
    setIsLoading(false);
    setProducts(data);
  };

  console.log(isLoading); //[]....

  return (
    <div id="body">
      <Button onClick={fetchProducts} type="primary" size="large">
        Fetch data
      </Button>
      {isLoading && (
        <div className="loading">
          <SyncLoader size={20} />
        </div>
      )}
      {products.map(({ title }) => (
        <h1 key={title}>{title}</h1>
      ))}
    </div>
  );
};

export default App;

//baseURL
