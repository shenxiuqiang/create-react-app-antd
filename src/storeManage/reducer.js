const PATH = 'STOREMANAGE/';
export const LIST = `${PATH}LIST`;
export const LIST_LOADING = `${PATH}LIST_LOADING`;
export const EDIT = `${PATH}EDIT`;
export const SAVE_LOADING = `${PATH}SAVE_LOADING`;
export const DELETE_LOADING = `${PATH}DELETE_LOADING`;
export const HIDE = `${PATH}HIDE`;
export const ROW_SELECT = `${PATH}ROW_SELECT`;
export const EDIT_CHANGE = `${PATH}EDIT_CHANGE`;


export const dispatchList = (data, keyword) => ({
  ...data,
  type: LIST,
  keyword,
});
export const dispatchListLoading = data => ({
  type: LIST_LOADING,
  data,
});

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
        return { ...state,
          data: action.data,
          pagination: {
            total: action.total,
            pageSize: action.pageSize,
            currentPage: action.currentPage,
            keyword: action.keyword,
          },
          listLoading: action.false,
          selectedRowKeys: [],
          selectedRows: [],
        };
      }
    case LIST_LOADING:
      {
        return { ...state,
          listLoading: action.data,
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
          delLoading: action.data,
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
