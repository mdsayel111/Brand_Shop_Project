import React from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCar = () => {
  const carData = useLoaderData();
  const {
    _id,
    imgUrl,
    name,
    brandName,
    type,
    price,
    rating,
    shortDescription,
  } = carData;

  function handleAddProduct(e) {
    e.preventDefault();
    const form = e.target;
    const fname = form.name.value;
    const fimgUrl = form.imgUrl.value;
    const fbrandName = form.brandName.value;
    const ftype = form.type.value;
    const fshortDescription = form.shoetDescription.value;
    const frating = form.rating.value;
    const fprice = form.price.value;
    const Product = {
      name : fname ? fname : name,
      imgUrl: fimgUrl ? fimgUrl : imgUrl,
      brandName: fbrandName ? fbrandName : brandName,
      type : ftype ? ftype : type,
      shortDescription: fshortDescription ? fshortDescription : shortDescription,
      rating: frating ? frating : rating,
      price: fprice ? fprice : price,
    };
    console.log(Product);

        fetch(`https://brand-shop-server-lime.vercel.app/car/${_id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(Product),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.modifiedCount > 0) {
              Swal.fire({
                icon: "success",
                title: "success",
                text: "successufly add this product",
                footer: '<a href="">Why do I have this issue?</a>',
              });
            }else{
                Swal.fire({
                    icon: "warning",
                    title: "up to date",
                    text: "this product already up to date",
                    footer: '<a href="">Why do I have this issue?</a>',
                  });
            }
          });
      }

    return (
      <div>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col">
            <h1 className="text-5xl font-bold text-primary">Update Car</h1>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <form onSubmit={handleAddProduct} className="card-body">
                <select
                  name="brandName"
                  className="select select-bordered w-full max-w-xs"
                >
                  <option disabled selected value={brandName}>
                    Select Brand Name
                  </option>
                  <option defaultValue={"BMW"}>BMW</option>
                  <option defaultValue={"Mercedes"}>Mercedes</option>
                  <option defaultValue={"Toyota"}>Toyota</option>
                  <option defaultValue={"Honda"}>Honda</option>
                  <option defaultValue={"Tesla"}>Tesla</option>
                  <option defaultValue={"Ford"}>Ford</option>
                </select>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Image Url</span>
                  </label>
                  <input
                    type="text"
                    name="imgUrl"
                    placeholder="Image Url"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Type</span>
                  </label>
                  <input
                    type="text"
                    name="type"
                    placeholder="type"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Price</span>
                  </label>
                  <input
                    type="text"
                    name="price"
                    placeholder="price"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Short Description</span>
                  </label>
                  <input
                    type="text"
                    name="shoetDescription"
                    width="100px"
                    placeholder="Short Description"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Rating</span>
                  </label>
                  <input
                    type="text"
                    name="rating"
                    width="100px"
                    placeholder="Rating"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control mt-6">
                  <button className="btn bg-primary">Update Car</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
};

export default UpdateCar;
