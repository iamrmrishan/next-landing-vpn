import React, { useState } from "react";

// import react slick
import Slider from "react-slick";
import Image from "next/image";
import Stars from "../public/assets/Icon/stars.svg";
import ArrowBack from "../public/assets/Icon/eva_arrow-back-fill.svg";
import ArrowNext from "../public/assets/Icon/eva_arrow-next-fill.svg";

const Testimoni = ({
   testimonialPosts = [
    {
      url: 'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmadhavi.pathirage%2Fposts%2Fpfbid0MP91mXmLuxAKDAXcqZMSyZ7dNzMYLmKbAYKSomp6fp7afeyk6tZjzWWieZCe7pg4l&show_text=true',
      height: '351px',
    },
    {
      url: 'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fweb.facebook.com%2Fsandushi.jayawardene%2Fposts%2Fpfbid0nkKZ9VMGL6mPKmhKsERS92ZVtukE441kEhvMKccyN5RFCbWFuZYoqpR8drCXcXNul&show_text=true',
      height: '198px',
    },
    {
      url: 'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fweb.facebook.com%2Fpamoda.herath%2Fposts%2Fpfbid0275vCHGiMihbWx1s5rSCJnFLFJJJZnszKEHRTwtHtuN1zJTHeHcKX7Cvt1eAF5W75l&show_text=true',
      height: '195px',
    },
    {
      url: 'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fweb.facebook.com%2Fkinkini.weeramanthri%2Fposts%2Fpfbid026Eo9WmdDHjxesbouNPUhjpsuLfy8unj6U67QrNdFQwmznwL2QqwUtduSZb9JdrUYl&show_text=true',
      height: '260px',
    },
    {
      url: 'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fweb.facebook.com%2Fthushi.dias%2Fposts%2Fpfbid025oEwwM1x3y929AtWHoG2tBZbtQiEMqBY425u1Du4Y22MyNH8UtdznFZXsBMvKLKCl&show_text=true',
      height: '250px',
    },
  ]
}) => {
  // const settings = {
  //     dots: true,
  //     infinite: true,
  //     slidesToShow: 3,
  //     slidesToScroll: 1,
  //     autoplay: true,
  //     speed: 2000,
  //     autoplaySpeed: 2000,
  //     cssEase: "linear",
  //   responsive: [
  //     {
  //       breakpoint: 770,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 2,
  //         initialSlide: 2,
  //       },
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //       },
  //     },
  //   ],
  // };

  const settings = {
    dots: true,
    customPaging: function (i) {
      return (
        <a className="">
          <span className="mx-2 rounded-l-full rounded-r-full h-4 w-4 block cursor-pointer transition-all "></span>
        </a>
      );
    },
    dotsClass: "slick-dots w-max absolute mt-20  ",
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    responsive: [
          {
            breakpoint: 770,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
  };
  const [sliderRef, setSliderRef] = useState(null);

  return (
    <>
      <Slider
        {...settings}
        arrows={false}
        className="flex items-stretch justify-items-stretch"
        ref={setSliderRef}
      >
        {testimonialPosts.map((post, index) => (
          <div key={index} className="px-3 flex items-stretch">
            <div className="border-2 border-gray-500 hover:border-blue-500 transition-all rounded-lg p-8 flex flex-col">
              <iframe
                title={`Testimonial ${index}`}
                src={post.url}
                width="100%"
                height={post.height}
                style={{ border: 'none', overflow: 'hidden' }}
                scrolling="no"
                frameBorder="0"
                allowTransparency="true"
                allow="encrypted-media"
              />
            </div>
          </div>
        ))}
      </Slider>
      <div className="flex w-full items-center justify-end">
        <div className="flex flex-none justify-between w-auto mt-14">
          <div
            className="mx-4 flex items-center justify-center h-14 w-14 rounded-full bg-white border-blue-500 border hover:bg-blue-500 hover:text-white-500 transition-all text-blue-500 cursor-pointer"
            onClick={sliderRef?.slickPrev}
          >
            <ArrowBack className="h-6 w-6 " />
          </div>
          <div
            className="flex items-center justify-center h-14 w-14 rounded-full bg-white border-blue-500 border hover:bg-blue-500 hover:text-white-500 transition-all text-blue-500 cursor-pointer"
            onClick={sliderRef?.slickNext}
          >
            <ArrowNext className="h-6 w-6" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimoni;
