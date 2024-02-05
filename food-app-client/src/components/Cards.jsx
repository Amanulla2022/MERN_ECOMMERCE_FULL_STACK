import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";

const Cards = ({ item }) => {
  const [isheartFilled, setHeartFilled] = useState(false);
  const handleHeartClick = () => {
    setHeartFilled(!isheartFilled);
  };
  return (
    <div className="card  bg-base-100 shadow-xl relative">
      <div
        className={`rating gap-1 absolute right-2 top-4 p-4 heartStar bg-green ${
          isheartFilled ? "text-rose-500" : "text-white"
        }`}
        onClick={handleHeartClick}
      >
        <FaHeart className="h-5 w-5 cursor-pointer " />
      </div>
      <Link to={`/my${item.id}`}>
        <figure className="h-72 w-78 flex justify-center items-center my-auto">
          <img src={item.image} alt={`${item.name} Image`} />
        </figure>
      </Link>
      <div className="card-body">
        <Link to={`/my/${item.id}`}>
          <h2 className="card-title">{item.name}</h2>
        </Link>
        <p className="font-bold text-center text-green">SOME INGREDIENTS!!!</p>
        <p>{`${item.ingredients[0]}  ${item.ingredients[1]} ...`}</p>
        <div className="card-actions justify-between item-center">
          <h5 className="font-semibold ">
            <span className="text-sm text-red">$</span>
            {item.price}
          </h5>
          <button className="btn bg-green text-white">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
