import { dispatchList, dispatchListLoading } from './reducer';
import { listApi, editApi } from '../service/storeManageService';


export const fetchList = (pagination = {}) => (dispatch, getState) => {
  const {
      currentPage,
      pageSize,
      keyword,
    } = getState().storeManageReducer.pagination;
  pagination.currentPage = pagination.currentPage || currentPage;
  pagination.pageSize = pagination.pageSize || pageSize;
  pagination.goodsBrandName = pagination.goodsBrandName || keyword;
  dispatch(dispatchListLoading(true));
  listApi(pagination)
      .then((response) => {
        dispatch(dispatchList(response, pagination.goodsBrandName));
      })
      .always(() => {
        dispatch(dispatchListLoading(false));
      });
};

export const fetchEdit = id => (dispatch) => {
  if (id !== -1) {
    editApi({ id })
        .then((response) => {
          dispatch(dispatchEdit(response.data));
        })
        .fail(() => {
          dispatch(dispatchEdit({}));
        });
  } else {
    dispatch(dispatchEdit({}));
  }
};

export const hide = () => (dispatch) => {
  dispatch(dispatchHide());
};
