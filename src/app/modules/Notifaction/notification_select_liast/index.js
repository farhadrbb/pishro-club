import React, { useState, useEffect } from 'react'
import Header from './header';


import { useSelector, useDispatch } from 'react-redux';
import { actionTypes } from '../../../../redux/notifications/notification_select_list';
import { actionTypes as actionTypeEmail } from '../../../../redux/notifications/notification_email_select';
import { actionTypes as actionTypeSms } from '../../../../redux/notifications/notification_sms_select';


import GerneralInformation from './content/gerneralInformation';
import PersonalInformationn from './content/personalInformation';


export default function Index() {

    let generalInformation = 'اعلانات عمومی';
    let PersonalInformation = 'اعلانات شخصی';

    const [stateWeb, setStateWeb] = useState([])
    const [stateEmail, setStateEmail] = useState([])
    const [stateSms, setStateSms] = useState([])

    const [flagSwich, setflagSwich] = useState(generalInformation)

    const dispatch = useDispatch()

    const notificationWeb = useSelector(state => state.reducerNotificationSelectList)
    const notificationEmail = useSelector(state => state.notification_email_select_reducer)
    const notificationSms = useSelector(state => state.notification_sms_select_reducer)

    useEffect(() => {
        dispatch({ type: actionTypes.notificationSelectAsync })//web
        dispatch({ type: actionTypeEmail.notificationEmailAsync })//email
        dispatch({ type: actionTypeSms.notificationSmsAsync })//sms
    }, []) //eslint-disable-line react-hooks/exhaustive-deps



    useEffect(() => {
        if (notificationWeb.data) {
            setStateWeb(notificationWeb.data)
        }
    }, [notificationWeb.data]) //eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        if (notificationEmail.data) {
            setStateEmail(notificationEmail.data)
        }
    }, [notificationEmail.data]) //eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        if (notificationSms.data) {
            setStateSms(notificationSms.data)
        }
    }, [notificationSms.data]) //eslint-disable-line react-hooks/exhaustive-deps


    const handelDataGeneral = (data) => {

        let arr = data ? data : []

        let res = arr
            .filter(item => {

                if (item.body.receiver_id === "null" || !item.body.receiver_id){
                    return item
                }
                return false
            })

        return res
    }

    const handelDataPersonal = (data) => {

        let arr = data ? data : []
        let res = arr
            .filter(item => {
                if (item.body.receiver_id !== "null" && item.body.receiver_id)
                    return item
                return false
            })

        return res
    }

    return (
        <div className={'bg-white rounded-lg shadow p-5'}>
            <Header
                flagSwich={flagSwich}
                setflagSwich={setflagSwich}
                generalInformation={generalInformation}
                PersonalInformation={PersonalInformation}
            />

            {
                flagSwich === generalInformation && (
                    <GerneralInformation
                        dataWeb={handelDataGeneral(stateWeb)}
                        dataEmail={handelDataGeneral(stateEmail)}
                        dataSms={handelDataGeneral(stateSms)}
                    />
                )
            }
            {
                flagSwich === PersonalInformation && (
                    <PersonalInformationn
                        dataWeb={handelDataPersonal(stateWeb)}
                        dataEmail={handelDataPersonal(stateEmail)}
                        dataSms={handelDataPersonal(stateSms)}
                    />
                )
            }
        </div>
    )
}
