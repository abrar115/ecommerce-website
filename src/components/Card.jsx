import React from "react";

function Card({ datas }) {
  const { name, _id, price, image } = datas;
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-4 gap-4 lg:grid-cols-4 xl:grid-cols-4">
      <div className="mb-4 rounded overflow-hidden border-2 border-[#EDEDED]  ">
        <div className="">
          <img src={image} className=" h-[200]" alt={name} />
        </div>
        <div className="bg-white p-4 ">
          <h1>{name}</h1>
          <h1 className="border-gray-300 border-b-2 ">Price:${price}</h1>
          <h1 className="text-green-500">Save -500 </h1>
        </div>
      </div>
    </div>
  );
}

export default Card;
