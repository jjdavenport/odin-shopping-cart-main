import { useEffect, useState } from "react";

const useProducts = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products/");
      const result = await response.json();
      setData(result);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {
    data,
  };
};

export default useProducts;
