import React from "react";
import data from "./data.json";
import { FaStar } from "react-icons/fa6";
import "./App.css";
console.log(data);

const App = () => {
  return (
    <div id="product-wrapper">
      {data.map((item) => (
        <div className="product-item">
          <div className="product-img">
            <img src={item.image} />
          </div>
          <div className="product-info">
            <h3 className="title">{item.title}</h3>
            <div className="start-wrapper">
              {Array.from(Array(Math.round(item.rating.rate)).keys()).map(
                () => (
                  <FaStar color="gold" />
                )
              )}
              {/* {console.log(Math.round(item.rating.rate))} */}
            </div>
            <p className="price">$100</p>
            <p className="category">Men clothing</p>
            <p className="desc">Desc product</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;

function createArrayFromRating(rate) {
  const result = [];

  for (let i = 0; i <= Math.round(rate); i++) {
    result.push(i);
  }

  return result;
}
