import React from "react";
import { Link } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";
function Categories() {
  return (
    <div className="w-4/5 m-auto">
      <div className="flex items-center justify-between">
        <h1>Shop from top Categories</h1>
        <Link to="/view-all" className="flex items-center">
          View All <MdKeyboardArrowRight color="blue" />
        </Link>
      </div>
    </div>
  );
}

export default Categories;
