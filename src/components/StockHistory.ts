import { appleStock, micorsoftStock } from "../config";

async function getMultipleStocks() {
  const dataSources = [
    //await getAmazonStock(),
    await getMicrosoftStock(),
    await getAppleStock(),
    //await getTeslaStock()
  ];

  return Promise.all(dataSources);
}

export async function getMicrosoftStock() {
  const response = await fetch(micorsoftStock);
  const jsonData = await response.json();
  const stockData = convertData(jsonData);
  stockData.__dataIntents = {
    close: ["SeriesTitle/Tesla"],
  };
  return stockData;
}

export async function getAppleStock() {
  const response = await fetch(appleStock);
  const jsonData = await response.json();
  const stockData = convertData(jsonData);
  stockData.__dataIntents = {
    close: ["SeriesTitle/Microsoft"],
  };
  return stockData;
}

export function convertData(jsonData) {
  return jsonData.map((json) => {
    const parts = json.date.split("-"); // "2020-01-01"
    return {
      date: new Date(parts[0], parts[1], parts[2]),
      open: json.open,
      high: json.high,
      low: json.low,
      close: json.close,
      volume: json.volume,
    };
  });
}

export default getMultipleStocks;
