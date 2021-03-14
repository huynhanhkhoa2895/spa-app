import { GET_LIST_BANNER, GET_LIST_SERVICE, GET_LIST_PRODUCT, GET_LIST_SCHEDULE, GET_SCHEDULE_WAITING, GET_SPA, GET_LIST_AGENCY } from './constants'
import { takeLatest, all, call, put, select } from 'redux-saga/effects';
import Config from '../Config';
import axios from 'axios';
import { setLoading, updateState } from './action';
const DOMAIN = Config.API_URL + "/api/"
const SPA = Config.SPA;
export const callApiGetListBanner = () => {
    return axios.get(DOMAIN + `get/banner/${SPA}`);
}
function* _getListBanner() {
    yield put(setLoading(true))
    const result = yield call(callApiGetListBanner)
    const data = result.data;
    yield put(updateState("banner", data))
    yield put(setLoading(false))
}
export const callApiGetListService = () => {
    return axios.get(DOMAIN + `get/service/${SPA}`);
}
function* _getListSchedule() {
    yield put(setLoading(true))
    const result = yield call(callApiGetListSchedule)
    const data = result.data;
    yield put(updateState("schedule", data))
    yield put(setLoading(false))
}
export const callApiGetListSchedule = () => {
    return axios.get(DOMAIN + `get/schedule/${SPA}`);
}
function* _getScheduleWaiting(payload: any) {
    const { id } = payload
    yield put(setLoading(true))
    const result = yield call(callApiGetScheduleWaiting, id)
    const data = result.data;
    yield put(updateState("scheduleWaiting", data))
    yield put(setLoading(false))
}
export const callApiGetScheduleWaiting = (id) => {
    console.log(DOMAIN + `get/schedule/${id}/${SPA}/waiting`)
    return axios.get(DOMAIN + `get/schedule/${id}/${SPA}/waiting`);
}
function* _getListService() {
    yield put(setLoading(true))
    const result = yield call(callApiGetListService)
    const data = result.data;
    yield put(updateState("service", data))
    yield put(setLoading(false))
}
export const callApiGetListProduct = () => {
    return axios.get(DOMAIN + `get/product/${SPA}`);
}
function* _getListProduct() {
    yield put(setLoading(true))
    const result = yield call(callApiGetListProduct)
    const data = result.data;
    yield put(updateState("product", data.product))
    yield put(updateState("category", data.category))
    yield put(setLoading(false))
}
export const callApiGetSpa = () => {
    return axios.get(DOMAIN + `get/spa/${SPA}`);
}
function* _getSpa() {
    yield put(setLoading(true))
    const result = yield call(callApiGetSpa)
    const data = result.data;
    yield put(updateState("spa", data))
    yield put(setLoading(false))
}
export const callApiGetAgency = () => {
    console.log(DOMAIN + `get/agency/${SPA}`)
    return axios.get(DOMAIN + `get/agency/${SPA}`);
}
function* _getListAgency() {
    yield put(setLoading(true))
    const result = yield call(callApiGetAgency)
    const data = result.data;
    yield put(updateState("agency", data))
    yield put(setLoading(false))
}
export default function* rootSaga() {
    yield takeLatest(GET_LIST_BANNER, _getListBanner);
    yield takeLatest(GET_LIST_SERVICE, _getListService);
    yield takeLatest(GET_LIST_PRODUCT, _getListProduct);
    yield takeLatest(GET_LIST_SCHEDULE, _getListSchedule);
    yield takeLatest(GET_SCHEDULE_WAITING, _getScheduleWaiting);
    yield takeLatest(GET_SPA, _getSpa);
    yield takeLatest(GET_LIST_AGENCY, _getListAgency);
}
