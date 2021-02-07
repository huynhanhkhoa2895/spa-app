import { DAY_PRESS_SELECTED,UPDATE_STATE,GET_LIST_BANNER,SET_LOADING,LOGIN_SUCCESS } from "./constants";
import moment from "moment-timezone"
const currentMoment = moment.tz("Asia/Ho_Chi_Minh")
const initialState = {
    daySelected : {
        dateString: currentMoment.format("YYYY-MM-DD"),
        day: currentMoment.format("DD"),
        month: currentMoment.format("M"),
        timestamp: currentMoment.valueOf(),
        year: currentMoment.format("YYYY"),
    },
    loading: false,
    user: null,
    service: []
}
let newState : any = {...initialState};
export function reducer(state: any = initialState, action: any) {
    switch (action.type) {
        case DAY_PRESS_SELECTED:
            newState = {...state};
            newState.daySelected = action.day
            return newState;
        case DAY_PRESS_SELECTED:
            newState = {...state};
            newState.banner = action.data
            return newState
        case UPDATE_STATE:
            newState = {...state};
            newState[action.key] = action.data
            return newState
        case SET_LOADING:
            newState = {...state};
            newState.loading = action.status
            return newState
        case GET_LIST_BANNER:
            newState = {...state};
            return newState
        case LOGIN_SUCCESS:
            newState = {...state};
            newState.user = action.data
            return newState
        default:
            return state
    }
}