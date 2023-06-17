import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";
import { TopbrandsElectroniques } from "./lacalDatabase";
function ElectronicBrand() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    accessibility: true,
    arrows: true,
  };
  return (
    <div className="w-4/5 m-auto">
      <div className="flex items-center justify-between pb-4">
        <h1 className=" ">
          Top <strong className="text-blue-500">Electronic Brands</strong>
        </h1>
        <Link to="/view-all" className="flex items-center">
          View All <MdKeyboardArrowRight color="blue" />
        </Link>
      </div>
      <div className="">
        <div className="border_blue border-b-2 border-blue-500 " />
      </div>
      {/* <div className="grid sm:grid-cols-1 md:grid-cols-7 gap-4 border__top  "> */}
      <Slider settings={settings}>
        {TopbrandsElectroniques.map((x) => (
          <div className="brand-slider-image py-8" key={x._id}>
            <img
              className="brand-image rounded w-full"
              src={x.image}
              alt="electronique"
            />
          </div>
        ))}
      </Slider>
    </div>
    // </div>
  );
}

export default ElectronicBrand;
