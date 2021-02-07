import {
    DAY_PRESS_SELECTED,
    GET_LIST_BANNER,
    GET_LIST_SERVICE,
    UPDATE_STATE,
    SET_LOADING
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
export const setLoading = (status : any) => ({
    type: SET_LOADING,
    status
})
export const updateState = (key: any,data: any) => ({
    type: UPDATE_STATE,
    key,
    data
})

