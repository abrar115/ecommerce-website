import React from "react";

function Footer() {
  return (
    <div className="bg-[#008ECC] py-8">
      <div className="w-4/5 m-auto grid sm:grid-cols-1 md:grid-cols-3 gap-4">
        <div className="">
          <h1 className="font-bold text-white">AliExpress</h1>
        </div>
        <div className="">
          <h2 className="text-white border-b-2 border-white pb-4">
            Most Popular Categories
          </h2>
          <ul>
            <li className="my-4 text-white">Staples</li>
            <li className="my-4 text-white">Beverages</li>
            <li className="my-4 text-white">Personal Care</li>
            <li className="my-4 text-white">Home Care</li>
            <li className="my-4 text-white">Baby Care</li>
            <li className="my-4 text-white">Vegetables & Fruits</li>
            <li className="my-4 text-white">Snacks & Foods</li>
            <li className="my-4 text-white">Diary Backery</li>
          </ul>
        </div>
        <div className="">
          <h2 className="text-white border-b-2 pb-4 border-white">
            Customer Services
          </h2>
          <ul>
            <li className="my-4 text-white">About Us</li>
            <li className="my-4 text-white">Terms & Conditions</li>
            <li className="my-4 text-white">FAQ</li>
            <li className="my-4 text-white">Privacy Policy</li>
            <li className="my-4 text-white">E-Waste Policy</li>
            <li className="my-4 text-white">Cancellation & Return Policy</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
