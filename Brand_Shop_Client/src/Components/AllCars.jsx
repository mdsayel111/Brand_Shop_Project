import { CiSearch } from "react-icons/ci";
import Carousel from "./Carousel";
import Car from "./Car";
import { useEffect, useRef, useState } from "react";

const AllCars = () => {
  const [data, setData] = useState();
  const [priceRange, setPriceRage] = useState(["all"])
  const [currentPage, setCurrentPage] = useState(1);
  const [totalProduct, setTotalProduct] = useState(0);
  const [itemPerPage, setItemPerPage] = useState(10);
  const [search, setSearch] = useState("")
  const searchRef = useRef()

  const totalPage = Math.ceil(totalProduct / itemPerPage);

  const totalPageArr = [...Array(totalPage).keys()];

  const handlePageOnclick = (pageNum) => {
    setCurrentPage(pageNum);
  };

  useEffect(() => {
    fetch(
      `https://brand-shop-server-lime.vercel.app/cars?currentPage=${currentPage}&itemPerPage=10&minPrice=${priceRange[0]}&maxPrice=${priceRange[1]}&search=${search}`
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setTotalProduct(data.length)
      });
  }, [currentPage, priceRange, search]);

  const handlePriceRange = (e) => {
    const priceRangeArr = JSON.parse(e.target.value)
    setPriceRage(priceRangeArr)
  }

  const handleSearch = (e) => {
    const searchString = searchRef.current.value
    setSearch(searchString)
  }

  return (
    <>
      <Carousel />
      <div className="flex gap-4 mt-8">
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Pick the price range</span>
            <span className="label-text-alt"></span>
          </label>
          <select onChange={handlePriceRange} className="select select-bordered">
            <option disabled selected>
              Pick one
            </option>
            <option value={JSON.stringify(['all'])}>all</option>
            <option value={JSON.stringify([10000,20000])}>10000 - 20000</option>
            <option value={JSON.stringify([21000,30000])}>21000 - 30000</option>
            <option value={JSON.stringify([31000,40000])}>31000 - 40000</option>
            <option value={JSON.stringify([41000,50000])}>410000 - 50000</option>
          </select>
        </div>
        <div className="form-control w-full max-w-xs relative">
          <label className="label">
            <span className="label-text">search by name</span>
            <span className="label-text-alt"></span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
            ref={searchRef}
          />
          <label className="label">
            <span className="label-text-alt"></span>
            <span className="label-text-alt"></span>
          </label>
          <div className="absolute right-4 top-[45px] cursor-pointer">
              <CiSearch onClick={handleSearch} className="text-3xl"/>
          </div>
        </div>
      </div>
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
          {totalPageArr.map((pageNum) => (
            <button
              key={pageNum}
              onClick={() => handlePageOnclick(pageNum + 1)}
              className={
                pageNum + 1 === currentPage
                  ? "join-item btn btn-md bg-primary"
                  : "join-item btn btn-md"
              }
            >
              {pageNum + 1}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default AllCars;

// {
//   <button className="join-item btn btn-md">{pageNum + 1}</button>
// }
