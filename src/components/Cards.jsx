import React from "react";
import iphone from "../assets/phones/iphone.jpg";
import nokia from "../assets/phones/nokia.jpg";
import samsung from "../assets/phones/samsung.jpg";
import oppo from "../assets/phones/Oppo-Reno-8-3.jpg";
import Card from "./Card";

function Cards() {
  const phones = [
    {
      _id: "jfhjhf43533",
      image: iphone,
      price: "1500",
      name: "Iphone 15 pro max | 8GB Ram| 256GB",
    },
    {
      _id: "jfhjhf4jhhuh3533",
      image: nokia,
      price: 500,
      name: "Nokia pro | 2GB Ram| 64GB",
    },
    {
      _id: "jfhjhf4jhhhihiuh3533",
      image: samsung,
      price: 1200,
      name: "Samsung A53 | 8GB Ram| 128GB",
    },
    {
      _id: "jfhjhf4zdzdzffzafjhhhihiuh3533",
      image: oppo,
      price: 1300,
      name: "Oppo F20 4GB Ram | 128GB",
    },
  ];

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-4 gap-4 lg:grid-cols-4 xl:grid-cols-4">
      {phones.map((x) => (
        <Card key={x._id} datas={x} />
      ))}
    </div>
  );
}

export default Cards;
