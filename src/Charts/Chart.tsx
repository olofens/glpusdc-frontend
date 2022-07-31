import React from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { useData } from "../hooks/useData";

export const Chart = () => {
  const data = useData();
  if (!data) return null;

  return (
    <div style={{}}>
      <h3>All stats</h3>
      <LineChart height={400} width={800} data={data}>
        <Line dataKey="GLPCount" />
        <Line dataKey="glpAllocInUSDC" />
        <Line dataKey="USDCCount" />
        <Line dataKey="glpUSDCSupply" />
        <Line dataKey="usdcPerShare" />
        <Line dataKey="totalAssets" />
        <Line dataKey="sbfGMXCount" />
        <Line dataKey="sBtcAllocInUSDC" />
        <Line dataKey="sEthAllocInUSDC" />

        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="isotime"
          tickFormatter={(isostring) => new Date(isostring).toDateString()}
        />
        <YAxis />
        <Tooltip />
        <Legend />
      </LineChart>

      <h3>glpUSDC outstanding vs vault assets (in USDC terms)</h3>
      <LineChart height={400} width={800} data={data}>
        <Line dataKey="glpUSDCSupply" />
        <Line dataKey="totalAssets" />
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="isotime"
          tickFormatter={(isostring) => new Date(isostring).toDateString()}
        />
        <YAxis />
        <Tooltip />
        <Legend />
      </LineChart>

      <h3>USDC per glpUSDC</h3>
      <LineChart height={400} width={800} data={data}>
        <Line dataKey="usdcPerShare" />
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="isotime"
          tickFormatter={(isostring) => new Date(isostring).toDateString()}
        />
        <YAxis domain={[0, (dataMax: any) => dataMax * 1.2]} />
        <Tooltip />
        <Legend />
      </LineChart>
    </div>
  );
};
