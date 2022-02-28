import React, { useEffect, useState } from "react";
import { LinearProgress, makeStyles } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";

import { actionTypes } from "../../../../redux/education/courses/course_select_activeCourse";
import Swiper from "./swiper";
import { useHistory } from "react-router-dom";


const useStyles = makeStyles({
  line: {
    width: "85%"
  }
});

export default function Index({ filterApi }) {
  const classes = useStyles();
  const { push } = useHistory();

  const dispatch = useDispatch();
  const ActiveCourse = useSelector(state => state.reducerActiveCourse);

  const [state, setstate] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (ActiveCourse.data)
      if (ActiveCourse.data.length > 0) {
        // setLoading(false)
        setLoading(false);
        setstate(ActiveCourse.data);
      } else {
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      }
    // setLoading(false);
  }, [ActiveCourse]);

  // search filter data api
  useEffect(() => {
    if (filterApi) {
      let data = {
        ...filterApi
      };
      dispatch({ type: actionTypes.activeCourseAsync, data: data });
    } else {
      dispatch({ type: actionTypes.activeCourseAsync });
    }
  }, [filterApi]); //eslint-disable-line react-hooks/exhaustive-deps

  const handelClick = data => {
    push({
      pathname: "/courses/detailsCourse",
      state: { data: data, status: "ActiveCourse" }
    });
  };

  return (
    <div className={"my-15  bg-white rounded-lg pt-10 pl-6"}>
      {loading ? <LinearProgress /> : null}
      {/*<AnimateLoading />*/}

      <div className={"d-flex align-itmes-center mb-10"}>
        <h3>رویداد های پیش‌رو</h3>
        <hr className={classes["line"]} />
      </div>
      <Swiper data={state} handelClick={handelClick} setLoading={setLoading} loading={loading} />
    </div>
  );
}
