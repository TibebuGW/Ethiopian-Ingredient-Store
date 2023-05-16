import ProductItem from "../Cards/ProductItem";
import { items } from "../../api/Items";
const Items = () => {

  return (
    <div className="grid grid-cols-4 gap-4 mt-10">
      {items.map((data, index) => {
        return <ProductItem key={index} data={data}/>;
      })}
    </div>
  );
};

export default Items;
