import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Contexts/AuthContext";
import Cart from "../Components/Cart";
import { useQuery } from "react-query";
import { data } from "autoprefixer";

const MyCart = () => {
  const { user } = useContext(AuthContext);

  const query = useQuery({
    queryFn:  async () => {
      console.log("inside fetch");
      const res = await fetch(
        `https://brand-shop-server-lime.vercel.app/my_cart/${user.uid}`
      ,{
        method: "GET",
        credentials: "include"
      });
      const data = await res.json() 
      return data;
    },
    queryKey: ["myCart"],
  });
  const {isLoading, data} = query

  console.log(data);

  return (
    <>
      {isLoading ? (
        ""
      ) : data?.length === 0 ? (
        <>
          <div>
            <div data-aos="zoom-in" className="bg-gradient-to-r bg-[var(--theme)]">
              <div className="w-9/12 m-auto py-10 min-h-screen flex items-center justify-center">
                <div className="bg-[var(--theme)] shadow overflow-hidden sm:rounded-lg pb-8">
                  <div className="border-t border-gray-200 text-center pt-8">
                    <h1 className="text-9xl font-bold text-primary">opps!</h1>
                    <h1 className="text-6xl font-medium py-8">
                      Your Cart Is Empty
                    </h1>
                    <p className="text-2xl pb-8 px-12 font-medium">
                      Please Add Cart First
                    </p>
                    <button className="bg-primary btn text-white font-semibold px-6 py-3 rounded-md mr-6">
                      HOME
                    </button>
                    <button className="bg-primary btn text-white font-semibold px-6 py-3 rounded-md">
                      Contact Us
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10">
              {data?.map((item) => (
                <Cart key={item._id} item={item}/>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default MyCart;
