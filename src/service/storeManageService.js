import api from './api';

export const listApi = para => api('/erp/store_list.htm', para);
export const editApi = para => api('/erp/store_load.htm', para);
export const saveApi = para => api('/erp/store_save.htm', para);
export const deleteApi = para => api('/erp/store_del.htm', para);

