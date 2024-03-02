import { useState } from "react";
import axios from "axios";

const useFetchApi = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchProducts = async () => {
    try {
      setIsLoading(true);
      const { data: d } = await axios.get(url);
      await slow3G();
      setIsLoading(false);
      setData(d);
    } catch (err) {
      setError(err);
    }
  };

  return { data, isLoading, fetchProducts, error };
};

export default useFetchApi;

function slow3G() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });
}
