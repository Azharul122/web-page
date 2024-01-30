import { useEffect, useRef, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import Carousel from "react-multi-carousel";
import { useForm } from "react-hook-form";
import "react-multi-carousel/lib/styles.css";

const RecommendedProducts = () => {
  const [popularProducts, setPopularProducts] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const slideRef = useRef(null);
  console.log(currentSlide, popularProducts.length);
  //   data fatch
  useEffect(() => {
    fetch("https://azharul122.github.io/qt-products-api/qt-products-api.json")
      .then((res) => res.json())
      .then((data) => setPopularProducts(data.Items));
  }, []);
  //   console.log(popularProducts);

  // Carousel responsive

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1700 },
      items: 5,
      partialVisibilityGutter: 40,
    },
    desktop: {
      breakpoint: { max: 1700, min: 770 },
      items: 4,
      partialVisibilityGutter: 40,
    },
    tablet: {
      breakpoint: { max: 770, min: 400 },
      items: 2.5,
    },
    mobile: {
      breakpoint: { max: 400, min: 0 },
      items: 1.5,
    },
  };

  // react hook form handle and validation

  const {
    register,
    handleSubmit,

    reset,
    formState: { errors },
  } = useForm();

  const addProduct = (newProduct) => {
    setPopularProducts((prevProducts) => [newProduct, ...prevProducts]);
  };
  const onSubmit = (data) => {
    setShowModal(false);
    if (data) {
      data.IsPopular = false;
      data.IsRecommended = true;
    }
    console.log(data);
    addProduct(data);

    reset();
  };
  return (
    <div>
      <div className="py-10">
        <div className="w-[96%] md:w-[86%] mx-auto">
          <div className="flex justify-between w-full">
            <p className="">Recommended</p>
            <div className="gap-2 flex items-center">
              <button
                className="text-[#F99F1C]"
                onClick={() => setShowModal(true)}
              >
                Add More
              </button>
              <FaAngleLeft
                className={`cursor-pointer text-[#F99F1C] ${
                  currentSlide <= 0 ? "opacity-30" : "opacity-100"
                }`}
                onClick={() => {
                  slideRef.current.previous();
                  setCurrentSlide(slideRef.current?.state?.currentSlide - 1);
                }}
              />
              <FaAngleRight
                className={`cursor-pointer text-[#F99F1C] ${
                  currentSlide == popularProducts.length - 1
                    ? "opacity-30"
                    : "opacity-100"
                }`}
                onClick={() => {
                  slideRef.current.next();
                  setCurrentSlide(slideRef.current?.state?.currentSlide + 1);
                }}
              />
            </div>
          </div>
          <div className="popular-products py-3">
            <Carousel
              ref={slideRef}
              arrows={false}
              responsive={responsive}
              itemclassName="carousel-item-padding-40-px"
            >
              {popularProducts
                .sort((product) => (product.IsRecommended = true))
                .map((pp) => (
                  <div className="card gap-2 px-3" key={pp.Id}>
                    <img
                      src={pp.ImageUrl}
                      className="h-[200px] sm:h-[220px] md:h-[260px] w-full shadow-xl rounded-lg"
                      alt=""
                    />
                    <p className="mx-auto text-center">{pp.Name}</p>
                  </div>
                ))}
            </Carousel>
          </div>

          {showModal && (
            <div
              id="crud-modal"
              tabIndex="-1"
              aria-hidden="true"
              className="overflow-y-auto overflow-x-hidden fixed  z-50 flex justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
            >
              <div className="relative p-4 w-full max-w-md max-h-full">
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                  <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Create New Product
                    </h3>
                    <button
                      type="button"
                      className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                      data-modal-toggle="crud-modal"
                      onClick={() => setShowModal(false)}
                    >
                      <svg
                        className="w-3 h-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 14"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                        />
                      </svg>
                      <span className="sr-only">Close modal</span>
                    </button>
                  </div>
                  {/* <!-- Modal body --> */}
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="p-4 md:p-5"
                  >
                    <div className="grid gap-4 mb-4 grid-cols-2">
                      <div className="col-span-2">
                        <label
                          htmlFor="name"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Name
                        </label>
                        <input
                          {...register("Name", {
                            required: "Name is required",

                            minLength: {
                              value: 3,
                              message: "Name must be at least 3 characters",
                            },
                          })}
                          placeholder="Enter name"
                          className="bg-gray-50 outline-none border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        />
                        {errors.Name && (
                          <p className="text-red-300 font-bold">
                            {errors.Name.message}
                          </p>
                        )}

                        {/* <input
                          type="text"
                          name="name"
                          id="name"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                          placeholder="Type product name"
                          required=""
                        ></input> */}
                      </div>
                      <div className="col-span-2">
                        <label
                          htmlFor="price"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Price
                        </label>
                        <input
                          type="number"
                          {...register("Price", {
                            required: "Price is required",
                          })}
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                          placeholder="$2999"
                        ></input>
                        {errors.Price && (
                          <p className="text-red-300 font-bold">
                            {errors.Price.message}
                          </p>
                        )}
                      </div>
                      <div className="col-span-2 sm:col-span-1">
                        <label
                          htmlFor="price"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Is Popular
                        </label>
                        <input
                          disabled
                          defaultValue={"false"}
                          {...register("IsPopular")}
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                          placeholder="true"
                        ></input>
                      </div>
                      <div className="col-span-2 sm:col-span-1">
                        <label
                          htmlFor="price"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Is Recommneded
                        </label>
                        <input
                          disabled
                          defaultValue={"true"}
                          {...register("IsRecommended")}
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                          placeholder="false"
                        ></input>
                      </div>

                      <div className="col-span-2">
                        <label
                          htmlFor="description"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Product Image URL
                        </label>
                        <input
                          type="url"
                          {...register("ImageUrl", {
                            required: "ImageUrl is required",
                            pattern: {
                              value: /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/,
                              message: "Enter a valid URL",
                            },
                          })}
                          id="description"
                          rows="4"
                          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="Image URL"
                        ></input>
                        {errors.ImageUrl && (
                          <p className="text-red-300 font-bold">
                            {errors.ImageUrl.message}
                          </p>
                        )}
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      <svg
                        className="me-1 -ms-1 w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      Add new product
                    </button>
                  </form>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RecommendedProducts;
