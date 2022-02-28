import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'


import { actionTypes } from '../../../../redux/education/courses/course_select_regsterCourse';
import Swiper from './swiper';
import { useHistory } from 'react-router-dom';


const useStyles = makeStyles({
    line: {
        width: '80%',
    }
})


export default function Index() {

    const classes = useStyles()
    const { push } = useHistory()

    const dispatch = useDispatch()
    const regster = useSelector(state => state.reducerRegsterCourse)

    const [state, setstate] = useState([])

    useEffect(() => {
        dispatch({ type: actionTypes.regsterCourseAsync })
    }, []) //eslint-disable-line react-hooks/exhaustive-deps


    useEffect(() => {
 
        if (regster.data && regster.data.length > 0) {
            setstate(regster.data)
        }

    }, [regster])


    const handelClick = (data)=>{
        push({
            pathname: "/courses/detailsCourse",
             state: {data:data , status : 'RegsterCourse'}
        })
    }


    return (
        <div className={'my-15  bg-white rounded-lg pt-10 pl-6'}>
            <div className={'d-flex align-itmes-center mb-10'}>
                <h3 >رویداد های ثبت نام شده</h3>
                <hr className={classes['line']} />
            </div>
            <Swiper data={state} handelClick={handelClick} />
        </div>
    )
}
