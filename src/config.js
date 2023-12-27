const BASE_URL = "https://api.iex.cloud/v1/";
const BASE_URL_STOCK = "https://cloud.iexapis.com/stable/stock/";
const token = "pk_0e47f6d2e5ee4940baab6fcb2d475188";

//APIs

export const cashFlowApi = `${BASE_URL}data/CORE/CASH_FLOW/JPM/quarterly?token=${token}&last=10`;
export const micorsoftStock = `${BASE_URL_STOCK}msft/chart/500d?token=${token}`;
export const appleStock = `${BASE_URL_STOCK}aapl/chart/500d?token=${token}`;
export const allStock = `https://api.iex.cloud/v1/data/CORE/STOCK_COLLECTION/list?collectionName=mostactive&token=pk_0e47f6d2e5ee4940baab6fcb2d475188`;
