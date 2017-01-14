import { actionList, actionListLoading } from './reducer';
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
  dispatch(actionListLoading(true));
  listApi(pagination)
        .then((response) => {
          dispatch(actionList({
            data: response,
            keyword: pagination.goodsBrandName,
          }));
        })
        .always(() => {
          dispatch(actionListLoading(false));
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
