import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Car from "../Components/Car";
import Carousel from "../Components/Carousel";
import { useQuery } from "react-query";
import NoCars from "../Components/NoCars";

const SpecificBrandCars = () => {
  const { brand } = useParams();
  
  const query = useQuery({
    queryFn: async () => {
      const res = await fetch(
        `https://brand-shop-server-lime.vercel.app/cars/${brand}`
      );
      const data = await res.json();
      return data;
    },
    queryKey: ["specificBrandCars"],
    refetchOnWindowFocus: false,
  });

  const { data } = query;

  return (
    <div>
      {data?.length === 0 ? (
        <NoCars />
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
