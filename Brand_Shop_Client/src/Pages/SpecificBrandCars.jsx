import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Car from "../Components/Car";
import Carousel from "../Components/Carousel";
import { useQuery } from "react-query";

const SpecificBrandCars = () => {
  const { brand } = useParams();
  // const data = useLoaderData()

  console.log(brand);

  const query = useQuery({
    queryFn: async () => {
      const res = await fetch(
        `https://brand-shop-server-lime.vercel.app/cars/${brand}`
      );
      const data = await res.json();
      console.log(data);
      return data;
    },
    queryKey: ["specificBrandCars"],
    refetchOnWindowFocus: false
  });

  const { data } = query;

  console.log(data);

  return (
    <div>
      {data?.length === 0 ? (
        <div>
          <div className="bg-gradient-to-r bg-[var(--theme)]">
            <div className="w-9/12 m-auto py-10 min-h-screen flex items-center justify-center">
              <div className="bg-[var(--theme)] shadow overflow-hidden sm:rounded-lg pb-8">
                <div className="border-t border-gray-200 text-center pt-8">
                  <h1 className="text-9xl font-bold text-primary">opps!</h1>
                  <h1 className="text-6xl font-medium py-8">
                    No Car Stock Of This Brand
                  </h1>
                  <p className="text-2xl pb-8 px-12 font-medium">
                    please Choose Another Brand
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
      ) : (
        <>
          <Carousel />
          <div className="mt-10">
            <h1 className="text-3xl font-bold text-primary text-center">
              {brand}
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {data?.map((item) => (
                <Car key={item._id} carData={item} />
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default SpecificBrandCars;
