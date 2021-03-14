import { createSelector } from 'reselect';
import { isEmpty } from 'lodash';

export const selectStore = (state: any) =>
  !isEmpty(state) ? state : {};

export const selectorDaySelected = () =>
  createSelector(
    selectStore,
    store => {
      return !isEmpty(store) ? store.daySelected : {}
    },
);
export const selectorBanner = () =>
  createSelector(
    selectStore,
    store => {
      return !isEmpty(store) ? store.banner : {}
    },
);
export const selectorService = () =>
  createSelector(
    selectStore,
    store => {
      return !isEmpty(store) ? store.service : {}
    },
);
export const selectorProduct = () =>
  createSelector(
    selectStore,
    store => {
      return !isEmpty(store) ? store.product : {}
    },
);
export const selectorCategory = () =>
  createSelector(
    selectStore,
    store => {
      return !isEmpty(store) ? store.category : {}
    },
);
export const selectorUser = () =>
  createSelector(
    selectStore,
    store => {
      return !isEmpty(store) ? store.user : null
    },
);
export const selectorScheduleWaiting = () =>
  createSelector(
    selectStore,
    store => {
      return !isEmpty(store) ? store.scheduleWaiting : null
    },
);
export const selectorSpa = () =>
  createSelector(
    selectStore,
    store => {
      return !isEmpty(store) ? store.spa : null
    },
);
export const selectorLoading = () =>
  createSelector(
    selectStore,
    store => {
      return !isEmpty(store) ? store.loading : {}
    },
);
export const selectorAgency = () =>
  createSelector(
    selectStore,
    store => {
      return !isEmpty(store) ? store.agency : null
    },
);

