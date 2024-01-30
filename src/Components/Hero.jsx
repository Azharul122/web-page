import heroImg from "../assets/images/hero.png";
const Hero = () => {
  return (
    <div>
      {/* #F99F1C */}
      <div className="py-5">
        <div className="w-[96%] md:w-[86%] mx-auto md:bg-[#F99F1C] bg-transparent rounded-lg">
          <div className="grid items-center grid-cols-1 md:grid-cols-2">
            <div className="sm:pl-5 ">
              <div className="text-3xl md:text-4xl overflow-y-hidden md:text-white text-black  ">
                Delever foods your door step!
              </div>
              <p className=" md:text-white text-black mb-4 md:mb-0">
                Authentic Food,Fast Delivery,Quich Service
              </p>
            </div>
            <div className="md:bg-inherit bg-[#FD9460]">
              <img
                src={heroImg}
                className="w-full sm:h-[300px] h-[240px] object-cover"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
