import React from "react";
import "./Ellipse.css";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";

const Ellipse = ({ data }) => {
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
  const labelFormat = [{clasval:'label color1',content:'Food'},{clasval:'label color2',content:'Entertainment'},{clasval:'label color3',content:'Travel'},]
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };
  return (
    <>
    <div className="ellipseContainer"></div>
      <PieChart width={300} height={500} className="absolutePosition">
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
      <div className="labels">
        {labelFormat.map((el,i)=><div className="labelText">
            <div className={el.clasval}></div>
            <div className="text">{el.content}</div>
        </div>)}
      </div>
    </>
  );
};

export default Ellipse;
