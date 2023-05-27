import React from "react";
import { Link } from "react-router-dom";
function Card({ datas }) {
  const { name, _id, price, image } = datas;
  return (
    <Link to={`/product-details/${_id}`}>
      <div className="mb-4 rounded overflow-hidden border-2  text-center items-center p-4 border-[#EDEDED]  cursor-pointer">
        <div className="">
          <img src={image} className=" h-[200px] w-full" alt={name} />
        </div>
        <div className="bg-white p-4 ">
          <h1>{name}</h1>
          <h1 className="border-gray-300 border-b-2 ">Price:${price}</h1>
          <h1 className="text-green-500">Save -500 </h1>
        </div>
      </div>
    </Link>
  );
}

export default Card;
