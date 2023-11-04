import React from "react";

const NoCars = () => {
  return (
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
  );
};

export default NoCars;
