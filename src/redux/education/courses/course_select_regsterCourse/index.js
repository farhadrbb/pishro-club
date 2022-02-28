
import { put, takeLatest } from "redux-saga/effects";
import axiosCustom from "../../../../app/common/components/apiConfig";
import { handleNotificationAlertTrySelect , handleNotificationAlertCatch } from '../../../../app/common/method/handleNotificationAlert/'
  



export const actionTypes = {
    regsterCourse: "[regsterCourse] Action",
    regsterCourseAsync: "[regsterCourseAsync] Action",
};

const initialState = {
    data: []
};


export const reducerRegsterCourse = (state = initialState, { type, payload }) => {
    switch (type) {
        case actionTypes.regsterCourse:
       
            return {
                data: payload
            }
        default:
            return state
    }
}


function* handleWorker({ data }) {

    let config = {
        url: "select_request",
    }

    let _data = {
        table: "course",
        method_type: "select_registrations",
        data: data ? data : {}
    }

    try {
        let res = yield axiosCustom(config, _data)
        let flag = handleNotificationAlertTrySelect(res)
        if (!flag) return
        yield put({ type: actionTypes.regsterCourse, payload: res.data.response.data.results })

    } catch  {
        handleNotificationAlertCatch()
    }
  
}


export function* watcherRegsterCourse() {
    yield takeLatest(actionTypes.regsterCourseAsync, handleWorker)
}