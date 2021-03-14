import {
    DAY_PRESS_SELECTED,
    GET_LIST_BANNER,
    GET_LIST_SERVICE,
    UPDATE_STATE,
    SET_LOADING,
    GET_LIST_PRODUCT,
    GET_LIST_SCHEDULE,
    GET_SCHEDULE_WAITING,
    GET_SPA,
    GET_LIST_AGENCY
} from './constants'
export const dayPressSelected = (day: any) => ({
    type: DAY_PRESS_SELECTED,
    day
})
export const getListBanner = () => ({
    type: GET_LIST_BANNER,
})
export const getListService = () => ({
    type: GET_LIST_SERVICE,
})
export const getListProduct = () => ({
    type: GET_LIST_PRODUCT,
})
export const getListSchedule = () => ({
    type: GET_LIST_SCHEDULE,
})
export const getListAgency = () => ({
    type: GET_LIST_AGENCY,
})
export const getScheduleWaiting = (id: any) => ({
    type: GET_SCHEDULE_WAITING,
    id,
})
export const setLoading = (status: any) => ({
    type: SET_LOADING,
    status
})
export const updateState = (key: any, data: any) => ({
    type: UPDATE_STATE,
    key,
    data
})
export const getSpa = () => ({
    type: GET_SPA,
})

