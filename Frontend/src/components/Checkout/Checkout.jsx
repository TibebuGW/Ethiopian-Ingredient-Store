import { useContext } from "react";
import Navbar from "../Navbar/Navbar";
import { StoreContext } from "../../contexts/store-context";
import { items } from "../../api/Items";
import PaymentForm from "./PaymentForm";

const Checkout = () => {
  const { cartItems, getTotalCost } = useContext(StoreContext);

  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center">
        <p className="text-4xl mt-10 font-bold">Payment</p>
      </div>
      <div className="w-50p shadow-xl mx-auto mt-10 mb-10 p-5 divide-y">
        <div className="">
          <p className="font-semibold text-2xl my-5">Order Summary</p>
          {items.map((item) => {
            if (cartItems[item.id] > 0) {
              return (
                <div key={item.id} className="my-3">
                  <p className="font-semibold text-lg my-2">{item.name}</p>
                  <div className="flex items-center justify-between">
                    <p className="font-bold text-base">
                      Quantity: {cartItems[item.id]}
                    </p>
                    <p className="font-bold text-xl">
                      ${cartItems[item.id] * item.price}
                    </p>
                  </div>
                </div>
              );
            }
          })}
        </div>
        <div className="font-bold text-2xl my-7 py-4 flex justify-between">
          <p>Total:</p>
          <div>${getTotalCost()}</div>
        </div>
        <div>
          <PaymentForm />
        </div>
      </div>
    </div>
  );
};

export default Checkout;
