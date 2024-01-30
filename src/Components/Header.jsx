import { FaSearch, FaAngleDown, FaAngleUp, FaUser } from "react-icons/fa";
import "./Header.css";
import { useState } from "react";
const Header = () => {
  const [showMenu, setShowmenu] = useState(false);
  // const handleshowmenu=()=>{

  // }
  return (
    <div className="py-5">
      <div className="w-[96%] md:w-[86%] mx-auto">
        <div className="flex  items-center gap-1 md:gap-2 w-full justify-between">
          <p className="sm:text-xl text-lg md:text-2xl font-extrabold">pti.</p>
          <div className="flex md:gap-2 gap-1">
            <div className="input-container w-[180px] sm:w-[200px] md:w-[350px] relative">
              <input
                placeholder="Serach Audiobook"
                type="text"
                className="serach-input-field rounded-xl w-full  h-[38px] md:h-[45px] border border-gray-200 outline-0 pl-6 sm:pl-8 md:pl-10  pr-1 "
              />
              <FaSearch className="serach-icon absolute top-1/2 -translate-y-1/2 left-2  md:left-3 text-[#FD6011] sm:text-lg xs:text-sm" />
            </div>
            <div className="relative">
              <button
                onClick={() => setShowmenu(!showMenu)}
                className="flex justify-between items-center h-[35px] md:h-[45px]  w-[150px] bg-white rounded-lg px-4"
              >
                MENU
                {showMenu ? <FaAngleDown /> : <FaAngleUp />}
              </button>
            </div>
            {showMenu && (
              <div className="rounded-lg absolute w-[150px] z-20 bg-white py-5 px-1 top-20 right-0 md:left-1/2 -translate-x-1/2 flex flex-col gap-2">
                <p className="w-full bg-slate-300 text-orange-600 pl-2 py-1">
                  Home
                </p>
                <p className="w-full  pl-2 py-1">Services</p>
                <p className="w-full  pl-2 py-1">About</p>
                <p className="w-full  pl-2 py-1">Products</p>
              </div>
            )}

            {/* <div className="scrollbar-hidden menu bg-white rounded-xl px-2  relative w-[80px] sm:w-[100px] md:w-[150px] " onClick={()=>setShowmenu(!showMenu)}>
              <div className=" flex items-center  justify-between  w-full left-0 cursor-pointer" >
                <p className="font-bold  sm:text-sm text-xs">MENU</p>
                <FaAngleDown className={`${showMenu==true?"text-[#FD6011] font-bold text-xl":"hidden"}`} />
                <FaAngleUp className={`${showMenu==false?"text-[#FD6011] font-bold text-xl":"hidden"}`} />
              </div>
              {
                showMenu &&  <div className="z-20 h-[200px] absolute py-3 bg-white text-black mt-14 w-full left-0 rounded-xl ">
                <p className="w-full bg-slate-300 text-orange-600 pl-2 ">
                  hello
                </p>
                <p>hello</p>
              </div>
              }
            </div> */}
          </div>

          <div className="profile w-[40px] h-[40px] rounded-full bg-[#FD6011] flex justify-center items-center text-white">
            <FaUser />
          </div>
        </div>
      </div>
      {/* <img src="../assets/images/hero.png" className="" alt="" /> */}
    </div>
  );
};

export default Header;
