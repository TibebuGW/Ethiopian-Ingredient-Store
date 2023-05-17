import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../Navbar/Navbar";

const GET_ALL_ORDERS_URL = "order/all";
const Orders = () => {
  const [allOrders, setAllOrders] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_REACT_APP_BASE_URL}${GET_ALL_ORDERS_URL}`,
          {
            params: {
              pageStart: 0,
            },
          }
        );
        setAllOrders(response.data.result);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center">
        <p className="text-4xl mt-10 font-bold">Orders</p>
      </div>
      <div className="w-50p shadow-xl mx-auto mt-10 mb-10 p-5 divide-y">
        <div className="">
          {allOrders.map((order) => {
            return (
              <div key={order.id} className="my-3">
                <p className="font-semibold text-lg my-2">
                  Ordered By: {order.orderedBy.firstName}{" "}
                  {order.orderedBy.lastName}
                </p>
                <p className="font-semibold text-2xl my-5">Order Summary</p>
                {order.items.map((item) => {
                  return (
                    <div key={item.item.id} className="my-3">
                      <p className="font-semibold text-lg my-2">
                        {item.item.name}
                      </p>
                      <div className="flex items-center justify-between">
                        <p className="font-bold text-base">
                          Quantity: {item.quantity}
                        </p>
                        <p className="font-bold text-xl">
                          ${item.quantity * item.item.price}
                        </p>
                      </div>
                    </div>
                  );
                })}
                <div className="font-bold text-2xl my-7 py-4 flex justify-between">
                  <p>Total:</p>
                  <div>${order.total}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Orders;
