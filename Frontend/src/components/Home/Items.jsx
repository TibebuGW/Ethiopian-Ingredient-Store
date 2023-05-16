import { useEffect, useState } from "react";
import ProductItem from "../Cards/ProductItem";
import axios from "axios";

const GET_ALL_ITEMS_URL = "item/all";

const Items = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_REACT_APP_BASE_URL}${GET_ALL_ITEMS_URL}`,
          {
            params:{
              pageStart: 0
            }
          }
        );
        console.log(response.data.result)
        setItems(response.data.result);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-4 gap-4 mt-10">
      {items.map((data, index) => {
        return <ProductItem key={index} data={data} />;
      })}
    </div>
  );
};

export default Items;
