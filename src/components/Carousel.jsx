import React from "react";
import Slider from "react-slick";

const Carousel = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    pauseOnHover: false,
  };
  return (
    <div className="flex justify-center align-center">
      <div className="container ">
        {images?.length > 0 ? (
          <Slider {...settings} className="custom-slider">
            {images?.map((item) => (
              <div key={item} className="h-[50vh]">
                <img
                  src={item?.filename}
                  alt={item?.alt}
                  className="h-full sm:h-auto object-cover"
                />
              </div>
            ))}
          </Slider>
        ) : (
          <h2>No Images</h2>
        )}
      </div>
    </div>
  );
};

export default Carousel;
