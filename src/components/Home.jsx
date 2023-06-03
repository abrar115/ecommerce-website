import React from "react";
import Header from "./Header";
import SliderComponent from "./herosection/SliderComponent";
import SmartPhones from "./SmartPhones";
import Categories from "./Categories";

function Home() {
  return (
    <div>
      <Header />
      <div className="w-4/5 m-auto">
        <SliderComponent />
      </div>
      <SmartPhones />
      <Categories />
    </div>
  );
}

export default Home;
