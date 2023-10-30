import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import StarRatings from "react-star-ratings";
import {AuthContext} from "../Contexts/AuthContext"
import Swal from "sweetalert2/dist/sweetalert2.js";

const CarDetails = () => {
  const singleCar = useLoaderData();
  const {user} = useContext(AuthContext)
  const {
    _id,
    imgUrl,
    name,
    brandName,
    type,
    price,
    rating,
    shortDescription,
  } = singleCar;

  function handleAddCart(){
    // console.log(singleCar, user);
    fetch(`https://brand-shop-server-lime.vercel.app/addCart/${user.uid}`,{
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(singleCar)
    }).then(res => res.json())
    .then(data => {
      if(data.modifiedCount > 0){
        Swal.fire({
          title: "success",
          text: "successful to add cart this car",
          icon: "success",
          confirmButtonText: "Ok",
        });
      }
    })
  }

  return (
    <div className="lg:card-side bg-base-100 shadow-xl flex-col">
      <figure>
        <img src={imgUrl} alt="Album" className="w-full"/>
      </figure>
      <div className="card-body space-y-8">
        <h2 className="card-title">{name}</h2>
        <p>Brand : {brandName}</p>
        <p>Type : {type}</p>
        <p>Price : ${price}</p>
        <p>{shortDescription}</p>
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
          <button onClick={handleAddCart} className="btn bg-primary">Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;

