import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectFade } from "swiper";

import "swiper/swiper.scss";
import "swiper/components/effect-fade/effect-fade.scss";
import Card from "../card";
import { makeStyles } from "@material-ui/core";
import CardNoData from "./../../../../common/components/cardNoData";
// import { useDispatch } from "react-redux";

// import  {actionTypes as actionTypesNotif} from "../../../../../redux/notificationAlert"

SwiperCore.use([EffectFade]);

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "center"
  },
  SwiperSlide: {
    maxWidth: 300
  },
  textField: {
    border: "none",
    width: "300px",

    "&:focus": {
      border: "none"
    }
  }
});

export default function Index({ data, handelClick }) {
  const classes = useStyles();
  //   const dispatch = useDispatch()

  //   const inputRef = useRef();

  //   const handleClick = (elem) => {

  //     var copyText = elem.current

  //     /* Select the text field */
  //     copyText.select();
  //     copyText.setSelectionRange(0, 99999); /* For mobile devices */

  //     /* Copy the text inside the text field */
  //     document.execCommand("copy");
  //     dispatch({
  //         type: actionTypesNotif.success,
  //         textAlert: "کپی شد"
  //       });

  //   };

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
      {!data.length && (
        <>
          <CardNoData text={" دوره ای ثبت نام نکرده اید."} />
          {/*<input*/}
          {/*  id="outlined-textarea"*/}
          {/*  className={classes["textField"]}*/}
          {/*  variant="outlined"*/}
          {/*  value="https://club.mobinsb.com/Home/AllCourseProgram"*/}
          {/*  ref={inputRef}*/}
          {/*  onChange={() => {*/}
          {/*    return null;*/}
          {/*  }}*/}
          {/*/>*/}

          {/*<Button*/}
          {/*  variant="contained"*/}
          {/*  className={classes["btns"]}*/}
          {/*  onClick={() => handleClick(inputRef)}*/}
          {/*>*/}
          {/*  اشتراک*/}
          {/*</Button>*/}
        </>
      )}
    </>
  );
}
