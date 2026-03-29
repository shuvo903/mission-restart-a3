import React from 'react';
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const RatingsChart = ({ ratings }) => {

  const reversedRatings = [...ratings].reverse();

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart layout="vertical"
        margin={{ top: 0, right: 20, left: 10, bottom: 0 }} data={reversedRatings}>

        <CartesianGrid
          horizontal={false}
          stroke="#f0f0f0"
        />
        <XAxis type="number"
          tick={{ fontSize: 18, fill: "#627382" }}
          axisLine={false}
          tickLine={false}
          tickFormatter={(value) => value.toLocaleString()} />
        <YAxis type="category"
          dataKey="name"
          tick={{ fontSize: 18, fill: "#627382" }}
          axisLine={false}
          tickLine={false}
          width={45} />
        <Tooltip
          formatter={(value) => [value.toLocaleString(), "Count"]}
          cursor={{ fill: "#f5f5f5" }}
          contentStyle={{
            borderRadius: "8px",
            border: "none",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          }}
        />
        <Bar dataKey="count" fill="#FF8811" barSize={34} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default RatingsChart;