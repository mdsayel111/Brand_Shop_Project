import { useLoaderData } from "react-router-dom";
import Carousel from "./Carousel";
import Car from "./Car";
import { useEffect, useState } from "react";

const AllCars = () => {
  const [data, setData] = useState();
  const [currentPage, setCurrentPage] = useState(1)
  const [totalProduct, setTotalProduct] = useState(0)
  const [itemPerPage, setItemPerPage] = useState(10)

  const totalPage = Math.ceil(totalProduct / itemPerPage)
  
  const totalPageArr  = [...Array(totalPage).keys()]

  const handlePageOnclick = (pageNum) => {
    setCurrentPage(pageNum)
    
  }

  useEffect(() => {
    fetch(`https://brand-shop-server-lime.vercel.app/totalProduct`)
    .then(res => res.json())
    .then(data => setTotalProduct(data.count))
  },[])

  useEffect(() => {
    fetch(`https://brand-shop-server-lime.vercel.app/cars?currentPage=${currentPage}&itemPerPage=10`)
    .then(res => res.json())
    .then(data => setData(data))
  },[currentPage])



  return (
    <>
      <Carousel />
      <div className="mt-10">
        <h1 className="text-3xl font-bold text-primary text-center">
          All Cars
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data?.map((item) => (
            <Car key={item._id} carData={item} />
          ))}
        </div>
        <div className="join mx-auto block w-fit mt-6 pb-10">
          {
            totalPageArr.map((pageNum) => <button key={pageNum} onClick={() => handlePageOnclick(pageNum+1)} className={pageNum+1 === currentPage ? "join-item btn btn-md bg-primary" : "join-item btn btn-md"}
            >{pageNum + 1}</button>)
          }
        </div>
      </div>
    </>
  );
};

export default AllCars;

// {
//   <button className="join-item btn btn-md">{pageNum + 1}</button>
// }
