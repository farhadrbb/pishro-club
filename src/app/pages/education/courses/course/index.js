import React, { useState } from 'react'
import CourseActiveCourse from '../../../../modules/education/course_select_activeCourse';
import CourseRegster from '../../../../modules/education/course_select_regstrationCourse';
import CourseCategoryPopular from '../../../../modules/education/course_select_CategoryPopular';
import { useSubheader } from "../../../../../_metronic/layout";


export default function Index() {

    const suhbeader = useSubheader();
    suhbeader.setTitle("دوره های آموزشی");

    const [category, setCategory] = useState(null)


    const handelFilterApi = (data) => {

        let value = data.body.category
        window.scrollTo(0, 240)

        value !== "همه"
            ? setCategory({ category: value })
            : setCategory(null)
    }

    return (
        <>
            {/* <div className={"w-100 bg-white rounded-lg"}>
                <img src="/media/common/courses.jpeg" alt="" className={"w-100 rounded-lg"} />
            </div> */}
            <div className={'bg-white rounded-lg shadow pb-10'}>

                <CourseActiveCourse filterApi={category} />

                <CourseRegster />

            </div>
            <div >
                <CourseCategoryPopular>
                    {
                        (data) => handelFilterApi(data)
                    }
                </CourseCategoryPopular>
            </div>
        </>
    )
}
