import { actionList, actionListLoading, actionEdit, actionHide, actionFormChange } from './reducer';
import { listApi, editApi } from '../service/storeManageService';


export const fetchList = (pagination = {}) => (dispatch, getState) => {
  const {
        currentPage,
        pageSize,
        keyword,
    } = getState().storeManageReducer.listReducer.pagination;
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
        .fail(() => {
          dispatch(actionListLoading(false));
        });
};

export const fetchEdit = id => (dispatch) => {
  if (id !== -1) {
    editApi({ id })
            .then((response) => {
              dispatch(actionEdit(response.data));
            })
            .fail(() => {
              dispatch(actionEdit({}));
            });
  } else {
    dispatch(actionEdit({}));
  }
};

export const hide = () => (dispatch) => {
  dispatch(actionHide());
};

export const onFormChange = data => (dispatch) => {
  dispatch(actionFormChange(data));
};
