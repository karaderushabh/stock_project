// Home.js
import axios from "axios";
import React, { useEffect, useState } from "react";
import { cashFlowApi } from "../config";
import StockChart from "./charts/StockChart";
import StockTable from "./charts/StockTable";
import { IgrFinancialChart } from "igniteui-react-charts";
import { IgrFinancialChartModule } from "igniteui-react-charts";
import getMultipleStocks from "./StockHistory.ts";
import "../styles/Home.css";
import MyLoader from "./MyLoader";

IgrFinancialChartModule.register();

const Home = () => {
  const [data, setData] = useState(null);
  const [tempData, setTempData] = useState(null);
  useEffect(() => {
    getMultipleStocks()
      .then((stocks: any[]) => {
        setData(stocks);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
    axios
      .get(cashFlowApi)
      .then((response) => {
        setTempData(response.data);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  return (
    <div className="container">
      <div className="chart">
        {data ? (
          <IgrFinancialChart
            chartType="Line"
            height="100%"
            thickness={2}
            chartTitle="Apple vs Microsoft Changes"
            subtitle="Between Sep 2022 and Nov 2023"
            yAxisMode="PercentChange"
            yAxisTitle="Percent Changed"
            dataSource={data}
          />
        ) : (
          <div className="loader">
            <MyLoader />
          </div>
        )}
      </div>
      <div className="graph">
        {tempData && tempData.length > 0 && <StockChart stockData={tempData} />}
      </div>
      <div className="table">{<StockTable />}</div>
    </div>
  );
};

export default Home;
