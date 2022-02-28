import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import styles from "./style.module.css";
// import Swiper core and required modules
import SwiperCore, {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard
} from "swiper/core";
import { useDispatch, useSelector } from "react-redux";
import { actionTypes } from "../../../../redux/home/home_select_slider";
import LinearProgress from "@material-ui/core/LinearProgress";

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard]);

export function Slider() {
  const stateReducer = useSelector(state => state.reducer_select_slider);
  const dispatch = useDispatch();

  let data = stateReducer.data[0]
    ? JSON.parse(stateReducer.data[0].body.content)
    : null;

  useEffect(() => {
    dispatch({ type: actionTypes.sliderAsync });
  }, []); //eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div>
      <div className="rounded-lg mt-5">
        {stateReducer.loading && <LinearProgress />}
      </div>

      <Swiper
        navigation={true}
        pagination={true}
        // mousewheel={true}
        keyboard={true}
        className={styles.swipercontainer}
        loop={true}
      >
        {data?.content.map((item, ind) => (
          <SwiperSlide key={ind} className={styles.swiperslide}>
            <a href={item.Link}>
              <img
                src={item.IMAGE_URI}
                alt={item.Title}
                className="img-fluid"
              />
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
