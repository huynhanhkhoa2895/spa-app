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
export const selectorUser = () =>
  createSelector(
    selectStore,
    store => {
      return !isEmpty(store) ? store.user : null
    },
);
export const selectorLoading = () =>
  createSelector(
    selectStore,
    store => {
      return !isEmpty(store) ? store.loading : {}
    },
);


