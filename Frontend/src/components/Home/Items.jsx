import ProductItem from "../Cards/ProductItem";
import pepper from '../../assets/images/pepper.jpg'

const Items = () => {
  const arr = [
    {
        name: "pepper",
        description: "lorem ipsum",
        price: "12.25",
        image: pepper
    },
    {
        name: "pepper",
        description: "lorem ipsum",
        price: "12.25",
        image: pepper
    },
    {
        name: "pepper",
        description: "lorem ipsum",
        price: "12.25",
        image: pepper
    },
    {
        name: "pepper",
        description: "lorem ipsum",
        price: "12.25",
        image: pepper
    },
    {
        name: "pepper",
        description: "lorem ipsum",
        price: "12.25",
        image: pepper
    },
    {
        name: "pepper",
        description: "lorem ipsum",
        price: "12.25",
        image: pepper
    },
    {
        name: "pepper",
        description: "lorem ipsum",
        price: "12.25",
        image: pepper
    },
    {
        name: "pepper",
        description: "lorem ipsum",
        price: "12.25",
        image: pepper
    },
  ];
  return (
    <div className="grid grid-cols-4 gap-4 mt-10">
      {arr.map((data, index) => {
        return <ProductItem key={index} data={data}/>;
      })}
    </div>
  );
};

export default Items;
