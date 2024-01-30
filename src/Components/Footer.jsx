import { FaArrowRight, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import footerimage from "../assets/images/footer-image.png";
import {
  BsLinkedin,
  BsFacebook,
  BsTwitter,
  BsGithub,
  BsInstagram,
} from "react-icons/bs";
import { GrFacebookOption } from "react-icons/gr";

const Footer = () => {
  return (
    <div className="md:py-5 py-20 bg-[#F99F1C]">
      <div className="w-[96%] md:w-[86%] mx-auto">
        <div className="grid md:grid-cols-3 mx-auto items-center grid-cols-1">
          <div className="col-span-2 ">
            <div className="md:mb-20 mb-10 mx-auto md:mx-0 subscribe-input-container w-full sm:w-[80%]  relative">
              <input
                type="text"
                className="w-full h-[45px] rounded-lg outline-none px-2"
              />
              <div className="absolute bg-[#FC6011] z-10 flex items-center gap-1 top-1/2 -translate-y-1/2 right-2 h-[70%] py-1 text-white px-3 rounded-lg">
                Subscribe <FaArrowRight />
              </div>
            </div>

            <div className="flex flex-col-reverse md:flex-row justify-between items-center md:gap-0 gap-7 md:mb-0 mb-3">
              <p className="text-xl  md:text-2xl font-extrabold ">pti.</p>
              <div className="flex gap-2 items-center">
                <div className="flex justify-center items-center p-3 bg-white rounded-full">
                  <FaGoogle className="font-bold text-xl bg-white  rounded-full text-[#FC6011]" />
                </div>
                <div className="flex justify-center items-center p-3 bg-white rounded-full">
                  <GrFacebookOption className="font-bold text-xl bg-white  rounded-full text-[#FC6011]" />
                </div>
                <div className="flex justify-center items-center p-3 bg-white rounded-full">
                  <FaInstagram className="font-bold text-xl bg-white  rounded-full text-[#FC6011]" />
                </div>
                <div className="flex justify-center items-center p-3 bg-white rounded-full">
                  <FaTwitter className="font-bold text-xl bg-white  rounded-full text-[#FC6011]" />
                </div>
              </div>
            </div>
            <p className="md:text-left text-center">
              Copyright © all rigyht reserved
            </p>
          </div>
          <div className="col-span-1 hidden md:block">
            <img src={footerimage} className="object-contain" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
