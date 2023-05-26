import React from "react";
import iphone from "../assets/phones/iphone.jpg";
import nokia from "../assets/phones/nokia.jpeg";
import samsung from "../assets/phones/samsung.jpg";
import Card from "./Card";

function Cards() {
  const phones = [
    {
      _id: "jfhjhf43533",
      image: iphone,
      price: "1500",
      name: "Iphone 15 pro max",
    },
    {
      _id: "jfhjhf4jhhuh3533",
      image: nokia,
      price: 500,
      name: "Nokia pro",
    },
    {
      _id: "jfhjhf4jhhhihiuh3533",
      image: samsung,
      price: 1200,
      name: "Samsung S23",
    },
  ];

  return (
    <div>
      {phones.map((x) => (
        <Card key={x._id} datas={x} />
      ))}
    </div>
  );
}

export default Cards;
