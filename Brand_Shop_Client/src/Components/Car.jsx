import React from "react";
import { Link } from "react-router-dom";
import StarRatings from "react-star-ratings";

const Car = ({ carData }) => {
  const { _id, imgUrl, name, brandName, type, price, rating } = carData;


  return (
    <div>
      <div data-aos="zoom-in" className="card w-96 bg-base-100 shadow-xl mx-auto">
        <figure className="px-10 pt-10">
          <img src={imgUrl} alt="Shoes" className="rounded-xl h-[200px]" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>Brand : {brandName}</p>
          <p>Type : {type}</p>
          <p>Price : $ {price}</p>
          <div>
            <StarRatings
              starDimension="20px"
              starSpacing="5px"
              rating={parseInt(rating)}
              starRatedColor="orange"
              // changeRating={3}
              numberOfStars={5}
              name="rating"
            />
          </div>
          <div className="card-actions">
            <Link to={`/car/${_id}`}>
              <button className="btn btn-primary">Details</button>
            </Link>
            <Link to={`/car/update/${_id}`}>
              <button className="btn btn-primary">Update</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Car;
