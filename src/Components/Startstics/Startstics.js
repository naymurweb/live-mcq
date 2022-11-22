import React from "react";
import { useLoaderData } from "react-router-dom";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Startstics = () => {
  const data = useLoaderData().data;
  console.log(data);
  return (
    <div className="container mx-auto">
        <h1 className="text-4xl font-semibold my-6">Course Total Quiz</h1>
   
      <LineChart width={1100} height={600} data={data} className="mx-auto">
        <Line type="monotone" dataKey="total" stroke="#8884d8" />
        <XAxis dataKey="name"></XAxis>
        <YAxis></YAxis>
        <Tooltip></Tooltip>
      </LineChart>
    </div>
  );
};

export default Startstics;
