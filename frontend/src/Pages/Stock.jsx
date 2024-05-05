import React, { useEffect, useState } from "react";
import axios from "axios";

const Stock = () => {
  const [stockData, setStockData] = useState([]);

  const fetchStock = async () => {
    const { data } = await axios.get("http://localhost:5555/api/notes");
    setStockData(data);
  };

  useEffect(() => {
    fetchStock();
  }, []);

  return <div>Stock</div>;
};

export default Stock;
