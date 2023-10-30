const OurServices = () => {
  return (
    <div>
      <section className="pt-20 pb-12 lg:pt-[120px] lg:pb-[90px]">
        <div className="container mx-auto">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4">
              <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
                <span className="block mb-2 text-lg font-semibold text-primary">
                  Our Services
                </span>
                <h2 className="mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[40px]">
                  What We Offer
                </h2>
                <p className="text-base text-body-color">
                  We Care for Your Car as You Care for Your Family.
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 mx-auto gap-4">
            <div data-aos="zoom-in" className="card mx-auto  w-96 bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <img
                  src="https://www.toyota.com.my/content/dam/malaysia/servicing-support/lubricant/toyota-my-toyota-genuine-motor-oil.jpg"
                  alt="Shoes"
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Oil Change</h2>
                <p>Regular oil change and maintenance</p>
                <div className="card-actions">
                  <p>Price : $ 50.00</p>
                </div>
              </div>
            </div>
            <div data-aos="zoom-in" className="card mx-auto  w-96 bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <img
                  src="https://www.federalwayautomotive.com/wp-content/uploads/2014/09/brake-inspection.jpg"
                  alt="Shoes"
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Brake Inspection</h2>
                <p>Brake inspection and possible pad replacement</p>
                <div className="card-actions">
                  <p>Price : $ 75.00</p>
                </div>
              </div>
            </div>
            <div data-aos="zoom-in" className="card mx-auto  w-96 bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <img
                  src="https://media.istockphoto.com/id/1157103911/photo/mechanic-changes-a-tire-in-a-repair-shop-germany.jpg?s=612x612&w=0&k=20&c=X2dQb_fTZG3IZ3KdRKDprVJo4_hw5rATEIPw1yl4Ab0="
                  alt="Shoes"
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Tire Rotation</h2>
                <p>Routine tire rotation and balancing</p>
                <div className="card-actions">
                  <p>Price : $ 40.00</p>
                </div>
              </div>
            </div>
            <div data-aos="zoom-in" className="card mx-auto  w-96 bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <img
                  src="https://static1.hotcarsimages.com/wordpress/wp-content/uploads/2023/09/pulling-out-the-transmission-dipstick.jpg"
                  alt="Shoes"
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Transmission Check</h2>
                <p>Diagnostic check for transmission issues</p>
                <div className="card-actions">
                  <p>Price : $ 60.00</p>
                </div>
              </div>
            </div>
            <div data-aos="zoom-in" className="card mx-auto  w-96 bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <img
                  src="https://5.imimg.com/data5/SELLER/Default/2021/4/IA/IO/EC/119894239/car-ac-repairing-services-500x500.jpg"
                  alt="Shoes"
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Air Conditioning Service</h2>
                <p>AC system inspection and maintenance</p>
                <div className="card-actions">
                  <p>Price : $ 55.00</p>
                </div>
              </div>
            </div>
            <div data-aos="zoom-in" className="card mx-auto  w-96 bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST69iwar_ept0B9P1tPlz-n8Mrb-mgAe1Xng&usqp=CAU"
                  alt="Shoes"
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Wheel Alignment</h2>
                <p>Precision wheel alignment service</p>
                <div className="card-actions">
                  <p>Price : $ 70.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurServices;
