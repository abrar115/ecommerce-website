import React from "react";
import Header from "./Header";
import { useParams } from "react-router-dom";
import { phones } from "./lacalDatabase";
function ProductDetail() {
  const { id } = useParams();
  const product = phones.find((x) => x._id === id);

  return (
    <div>
      <Header />
      <div className="w-4/5 m-auto grid sm:grid-cols-1 md:grid-cols-2">
        <div className="">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="">
          <h1 className="py-8">Product Detail</h1>
          <div className="">
            <h1>
              <strong>Product Name:</strong>
              {product.name}
            </h1>
            <h1 className="py-4">
              <strong>Description:</strong> {product.description}
            </h1>
            <h1 className="py-4">
              <strong>Price:</strong>$ {product.price}
            </h1>
            <h1 className="py-4">
              <strong>Count In Stock:</strong> {product.stock}
            </h1>
          </div>
          <div className="">
            <h1>Review</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
