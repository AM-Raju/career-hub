import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";

const Statistics = () => {
  const data = [
    {
      name: "A-1",
      mark: 60,
    },
    {
      name: "A-2",
      mark: 60,
    },
    {
      name: "A-3",
      mark: 60,
    },
    {
      name: "A-4",
      mark: 60,
    },
    {
      name: "A-5",
      mark: 58,
    },
    {
      name: "A-6",
      mark: 60,
    },
    {
      name: "A-7",
      mark: 60,
    },
    {
      name: "A-8",
      mark: 60,
    },
  ];
  return (
    <div className="my-container mt-24">
      <h3 className="text-3xl text-center mb-8 font-semibold">PH Assignment Marks</h3>
      <AreaChart className="mx-auto" width={1000} height={500} data={data}>
        <Area type="monotone" dataKey="mark" stroke="#8884d6" fill="#8884d8"></Area>
        <XAxis dataKey="name" />
        <YAxis></YAxis>
        <Tooltip></Tooltip>
      </AreaChart>
    </div>
  );
};

export default Statistics;
