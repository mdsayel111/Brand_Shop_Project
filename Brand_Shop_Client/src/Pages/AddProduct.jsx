import React from "react";
import Swal from "sweetalert2";

const AddProduct = () => {
  function handleAddProduct(e) {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const imgUrl = form.imgUrl.value;
    const brandName = form.brandName.value;
    const type = form.type.value;
    const shortDescription = form.shoetDescription.value;
    const rating = form.rating.value;
    const price = form.price.value;
    const Product = {
      name,
      imgUrl,
      brandName,
      type,
      shortDescription,
      rating,
      price,
    };

    fetch("https://brand-shop-server-lime.vercel.app/car", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(Product),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          Swal.fire({
            icon: "success",
            title: "success",
            text: "successufly add this product",
            footer: '<a href="">Why do I have this issue?</a>',
          });
        }
      });
  }

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div data-aos="zoom-in" className="hero-content flex-col">
          <h1 className="text-5xl font-bold text-primary">Add Product</h1>
          <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
            <form
              onSubmit={handleAddProduct}
              className="card-body grid grid-cols-2 items-center"
            >
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Select Brand</span>
                </label>
                <select
                  required
                  name="brandName"
                  className="select select-bordered w-full"
                >
                  <option disabled selected>
                    Select Brand Name
                  </option>
                  <option defaultValue={"BMW"}>BMW</option>
                  <option defaultValue={"Mercedes"}>Mercedes</option>
                  <option defaultValue={"Toyota"}>Toyota</option>
                  <option defaultValue={"Honda"}>Honda</option>
                  <option defaultValue={"Tesla"}>Tesla</option>
                  <option defaultValue={"Ford"}>Ford</option>
                </select>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Image Url</span>
                </label>
                <input
                  type="text"
                  required
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
                  required
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
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Rating</span>
                </label>
                <input
                  type="number"
                  required
                  name="rating"
                  width="100px"
                  placeholder="Rating"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control col-span-2">
                <label className="label">
                  <span className="label-text">Short Description</span>
                </label>
                <textarea
                  className="textarea input-bordered"
                  placeholder="Bio"
                ></textarea>
              </div>
              <div className="form-control mt-6 col-span-2">
                <button className="btn bg-primary">Add Product</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
