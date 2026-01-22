import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import Slider from "react-slick"


export const GalleryImages = ({ Images }: any) => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 20,
    cssEase: "linear",
    ltr: true,
    arrows: false,
    responsive: [{
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
        initialSlide: 2
      }
    }

    ]
  };

  const settings2 = {
    dots: false,

    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 20,
    cssEase: "linear",
    rtl: true,
    arrows: false,
    responsive: [{
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
        initialSlide: 2
      }
    }

    ]


  };

  return (
    <>
      <div className="container-fluid p-0">
        <div className="sessions">
          <Slider {...settings}>
            {
              Images?.data?.map((data: any, i: number) => {
                return (
                  <div className={styles.imgbox} key={i}>
                    <div className="slide w-100">
                      <img src={data?.src} className={styles.session} alt="image" />
                    </div>
                  </div>
                )
              })
            }
          </Slider>
        </div>
        <div className="sessions mt-md-2 mt-1">
          <Slider {...settings2}>
            {
              Images?.data_2?.map((data: any, i: number) => {
                return (
                  <div className={styles.imgbox} key={i}>
                    <div className="slide w-100">
                      <img src={data?.src} className={styles.session} alt="image" />
                    </div>
                  </div>
                )
              })
            }

          </Slider>
        </div>
      </div>
    </>
  );
};
