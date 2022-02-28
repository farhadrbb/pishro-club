
import { put, takeLatest } from "redux-saga/effects";
import axiosCustom from "../../../../app/common/components/apiConfig";
import { handleNotificationAlertTrySelect , handleNotificationAlertCatch } from '../../../../app/common/method/handleNotificationAlert/'



export const actionTypes = {
    activeCourse: "[activeCourse] Action",
    activeCourseAsync: "[activeCourseAsync] Action",
};

const initialState = {
    data: []
};


export const reducerActiveCourse = (state = initialState, { type, payload }) => {
    switch (type) {
        case actionTypes.activeCourse:
            let data = JSON.stringify(payload)
            return {
                data: JSON.parse(data)
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
        method_type: "select_active_courses",
        data: data ? data : {}
    }
    try {
        let res = yield axiosCustom(config, _data)
        let flag = handleNotificationAlertTrySelect(res)
        if (!flag) return
        yield put({ type: actionTypes.activeCourse, payload: res.data.response.data.results })

    } catch  {
        handleNotificationAlertCatch()
    }
}


export function* watcherActiveCourse() {
    yield takeLatest(actionTypes.activeCourseAsync, handleWorker)
}