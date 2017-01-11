import { createAction } from 'redux-actions';

const PATH = 'STOREMANAGE_';
export const LIST = `${PATH}LIST`;
export const LIST_LOADING = `${PATH}LIST_LOADING`;
export const EDIT = `${PATH}EDIT`;
export const SAVE_LOADING = `${PATH}SAVE_LOADING`;
export const DELETE_LOADING = `${PATH}DELETE_LOADING`;
export const HIDE = `${PATH}HIDE`;
export const ROW_SELECT = `${PATH}ROW_SELECT`;
export const EDIT_CHANGE = `${PATH}EDIT_CHANGE`;

export const actionList = createAction(LIST);
export const actionListLoading = createAction(LIST_LOADING);

const initialState = {
  listLoading: false,
  delLoading: false,
  pagination: {},
  selectedRowKeys: [],
  selectedRows: [],
  keyword: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LIST:
      {
        const { data, keyword } = action.payload;
        return { ...state,
          data: data.data,
          pagination: {
            total: data.total,
            pageSize: data.pageSize,
            currentPage: data.currentPage,
            keyword,
          },
          listLoading: false,
          selectedRowKeys: [],
          selectedRows: [],
        };
      }
    case LIST_LOADING:
      {
        return { ...state,
          listLoading: action.payload,
        };
      }
    case ROW_SELECT:
      {
        return { ...state,
          selectedRowKeys: action.selectedRowKeys,
          selectedRows: action.selectedRows,
        };
      }
    case DELETE_LOADING:
      {
        return { ...state,
          delLoading: action.payload,
        };
      }
    case EDIT:
      {
        return { ...state,
        };
      }
    default:
      return state;
  }
};
