import React from "react";
import data from "../data.json";
import { Link, useNavigate, useSearchParams } from "react-router-dom";

const user = null;

const Product = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const onBuy = () => {
    if (!user) {
      navigate("/login");
      return;
    }
    alert("Thank for your purchase!");
  };
  return (
    <div>
      <button onClick={() => setSearchParams({ sort: "gia-cao-den-thap" })}>
        Gia cao den thap
      </button>
      <button onClick={() => setSearchParams({ sort: "gia-thap-den-cao" })}>
        Gia thap den cao
      </button>
      <div className="product-image">
        {data.map((item) => (
          <div>
            <img src={item.image} />
            <button onClick={onBuy}>Buy now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
