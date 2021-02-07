import { GET_LIST_BANNER, GET_LIST_SERVICE } from './constants'
import { takeLatest, all, call, put, select } from 'redux-saga/effects';
import Config from '../Config';
import axios from 'axios';
import { setLoading, updateState } from './action';
const DOMAIN = Config.API_URL+"/api/"
export const callApiGetListBanner = () => {
    return axios.get(DOMAIN+`get/banner`);
}
function* _getListBanner(){
    yield put(setLoading(true))
    const result = yield call(callApiGetListBanner)
    const data = result.data;
    yield put(updateState("banner",data))
    yield put(setLoading(false))
}
export const callApiGetListService = () => {
    return axios.get(DOMAIN+`get/service`);
}
function* _getListService(){
    yield put(setLoading(true))
    const result = yield call(callApiGetListService)
    const data = result.data;
    yield put(updateState("service",data))
    yield put(setLoading(false))
}
export default function* rootSaga() {
    yield takeLatest(GET_LIST_BANNER, _getListBanner);
    yield takeLatest(GET_LIST_SERVICE, _getListService);
}