import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectFade } from "swiper";

import "../../../../../../node_modules/swiper/swiper.scss";
import "../../../../../../node_modules/swiper/components/effect-fade/effect-fade.scss";

import Card from "../card";
import { makeStyles } from "@material-ui/core";
import CardNoData from "./../../../../common/components/cardNoData";

SwiperCore.use([EffectFade]);

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "center"
  },
  SwiperSlide: {
    maxWidth: 300
  }
});

export default function Index({ data, handelClick, setLoading ,loading}) {
  const classes = useStyles();
 

  return (
    <>
      <Swiper
        className={classes["root"]}
        spaceBetween={5}
        slidesPerView={4}
        breakpoints={{
          320: {
            slidesPerView: 1
          },
          700: {
            slidesPerView: 2
          },
          1100: {
            slidesPerView: 3
          },
          1500: {
            slidesPerView: 4
          }
        }}
        // onSlideChange={() => console.log('slide change')}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        {data.map((item, index) => {
          return (
            <SwiperSlide key={index} className={classes["SwiperSlide"]}>
              <Card data={item} handelClick={handelClick} />
            </SwiperSlide>
          );
        })}
      </Swiper>
      {!data.length && <CardNoData text={loading ? 'درحال بارگذاری...':" دوره ای برای نمایش وجود ندارد."} />}
    </>
  );
}
