import React from "react";
import { AreaChart, Area, CartesianGrid, ResponsiveContainer } from "recharts";

const data = [
  { eth: 4000 },
  { eth: 3000 },
  { eth: 3400 },
  { eth: 2780 },
  { eth: 1290 },
  { eth: 2390 },
  { eth: 3490 },
];

export const Chart: React.FC = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart width={200} height={100} data={data}>
        <defs>
          <linearGradient id="colorEth" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FBAB34" stopOpacity={0.5} />
            <stop offset="100%" stopColor="#FBAB34" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid stroke="#F4F3F8" />
        <Area
          type="monotone"
          dataKey="eth"
          stroke="transparent"
          fillOpacity={1}
          fill="url(#colorEth)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};
