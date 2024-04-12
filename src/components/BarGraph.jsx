import React from 'react';
import {
  ComposedChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';


const BarGraph = ({data}) => {
    const formatData = data.map((el)=>({name:el.name,amt:el.value}))
    return ( 
        <ComposedChart
          layout="vertical"
          width={450}
          height={350}
          data={formatData}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis type="number" />
          <YAxis dataKey="name" type="category" scale="band" />
          <Tooltip />
          <Legend />
          <Bar dataKey="amt" barSize={20} fill="#413ea0" />
        </ComposedChart>
     );
}
 
export default BarGraph;