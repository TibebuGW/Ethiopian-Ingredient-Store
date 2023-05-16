import { useState } from "react";
import axios from "axios";
import Navbar from "../Navbar/Navbar";
import { useNavigate } from "react-router-dom";

const CREATE_ITEM_URL = "item";

const CreateItem = () => {
  const [name, setname] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);

  const navigate = useNavigate();

  const handlenameChange = (e) => {
    setname(e.target.value);
  };
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };
  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };
  const handleImageChange = (e) => {
    setImage(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
        image,
        "itemDto" : {
            name,
            description,
            price
        }
    }
    axios({
        method: "post",
        url: `${import.meta.env.VITE_REACT_APP_BASE_URL}${CREATE_ITEM_URL}`,
        data: data,
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((response) => {
        console.log(response.data)
        navigate("/")
      })
      .catch(function (error) {
        console.log(error);
   });
    
  };

  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center">
        <p className="text-4xl mt-10 font-bold">Create Item</p>
      </div>
      <div className="flex justify-center">
        <form className="py-3 w-50p px-10 mt-10 overflow-y-auto rounded-2xl shadow-xl box-border">
          <div className="grid grid-cols-2 gap-2 my-2">
            <div className="my-2">
              <label className="block my-2">name</label>
              <input
                className="box-border shadow py-2 px-5 rounded-md w-100p placeholder:font-medium"
                placeholder="name"
                type="text"
                value={name}
                onChange={handlenameChange}
              />
            </div>
            <div className="my-2">
              <label className="block my-2">Price</label>
              <input
                className="box-border shadow py-2 px-5 rounded-md w-100p placeholder:font-medium"
                placeholder="Price"
                type="text"
                value={price}
                onChange={handlePriceChange}
              />
            </div>
          </div>
          <div className="my-2">
            <label className="block my-2">Description</label>
            <input
              className="box-border shadow py-2 px-5 rounded-md w-100p placeholder:font-medium"
              placeholder="Description"
              type="text"
              value={description}
              onChange={handleDescriptionChange}
            />
          </div>
          <div className="my-2">
            <label className="block my-2">Image</label>
            <input
              className="box-border shadow py-2 px-5 rounded-md w-100p placeholder:font-medium"
              type="file"
              value={image}
              onChange={handleImageChange}
            />
          </div>
          <button
            className="py-2 px-5 my-3 text-secondary rounded-md w-100p bg-lightPrimary hover:bg-darkPrimary"
            onClick={handleSubmit}
          >
            Create Item
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateItem;
