import { useContext } from "react";
import StarRatings from "react-star-ratings";
import { AuthContext } from "../Contexts/AuthContext";
import Swal from "sweetalert2";
import { useMutation, useQueryClient } from "react-query";


const swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: "btn btn-success",
    cancelButton: "btn btn-danger",
  },
  buttonsStyling: false,
});

const Cart = ({ item, cartItem }) => {
  const queryClient = useQueryClient();

  const { mutateAsync } = useMutation(
    async (uid) => {
      console.log(uid);
    const res = await fetch(
      `https://brand-shop-server-lime.vercel.app/my_cart/${uid}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(item),
      }
    );
    const data = await res.json();
    console.log(data);
    if (data.modifiedCount > 0) {
      swalWithBootstrapButtons.fire(
        "Deleted!",
        "Your file has been deleted.",
        "success"
      );
    } else {
      Swal.fire({
        icon: "success",
        title: "success",
        text: "successufly add this product",
        footer: '<a href="">Why do I have this issue?</a>',
      });
    }
  },
{
  onSuccess : ()=> queryClient.invalidateQueries("myCart")
}
  );

  const { user } = useContext(AuthContext);
  const { _id, imgUrl, name, brandName, type, price, rating } = item;
  // const { cart, setCart } = cartItem;

  function handleDelete() {

    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          console.log("inside handle delete");
          mutateAsync(user.uid)
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            "Cancelled",
            "Your imaginary file is safe :)",
            "error"
          );
        }
      });
  }

  return (
    <div>
      <div data-aos="zoom-in" className="card card-side flex-col bg-base-100 shadow-xl w-[80%] lg:w-full mx-auto rounded-none">
        <figure>
          <img
            className="w-[1000%] lg:w-[400px] lg:h-[300px]"
            src={imgUrl}
            alt="Movie"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{brandName}</p>
          <p>{type}</p>
          <div>
            {/* <StarRatings
              starDimension="20px"
              starSpacing="5px"
              rating={parseFloat(price)}
              starRatedColor="orange"
              // changeRating={3}
              numberOfStars={5}
              name="rating"
            /> */}
          </div>
          <p>{price}</p>
          <button onClick={handleDelete}  className="btn bg-primary">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
