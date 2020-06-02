import React, { PureComponent } from 'react';
import {
  ResponsiveContainer, BarChart, Bar,LineChart,ComposedChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const dangerColor = "#f44336";
const warningColor = "#ff9800"

const data = [
  {
    timestamp: '23/04/2020 22:00', src_count: 7589, tgt_count: 7589, latency: 247.40
  },
  {
    timestamp: '23/04/2020 23:00', src_count: 4535, tgt_count: 4535, latency: 247.22
  },
  {
    timestamp: '24/04/2020 00:00', src_count: 4223, tgt_count: 4223, latency: 246.50
  },
  {
    timestamp: '24/04/2020 01:00', src_count: 4326, tgt_count: 4326, latency: 244.50
  },
  {
    timestamp: '24/04/2020 02:00', src_count: 4436, tgt_count: 4436, latency: 242.71
  },
  {
    timestamp: '24/04/2020 03:00', src_count: 4343, tgt_count: 4343, latency: 241.71
  },
  {
    timestamp: '24/04/2020 04:00', src_count: 4099, tgt_count: 4099, latency: 246.71
  },
  {
    timestamp: '24/04/2020 05:00', src_count: 3944, tgt_count: 3944, latency: 257.88
  },
  {
    timestamp: '24/04/2020 06:00', src_count: 3115, tgt_count: 3115, latency: 264.14
  },
  {
    timestamp: '24/04/2020 07:00', src_count: 3164, tgt_count: 3164, latency: 261.37
  },
  {
    timestamp: '24/04/2020 08:00', src_count: 3195, tgt_count: 3195, latency: 264.11
  },
  {
    timestamp: '24/04/2020 09:00', src_count: 3225, tgt_count: 3225, latency: 261.60
  },
  {
    timestamp: '24/04/2020 10:00', src_count: 3769, tgt_count: 3769, latency: 251.40
  }
];

const timestampFormatter = (timestamp) => {
  const time = new Date(timestamp);

  return time.getDate + time.getHours
};

const renderQuarterTick = (tickProps) => {
  const { x, y, payload } = tickProps;
  const { value, offset } = payload;
  const date = new Date(value);
  const month = date.getMonth();
  const quarterNo = Math.floor(month / 3) + 1;
  const isMidMonth = month % 3 === 1;

  if (month % 3 === 1) {
    return <text x={x + offset} y={y - 4} textAnchor="middle">{`Q${quarterNo}`}</text>;
  }

  const isLast = month === 11;

  if (month % 3 === 0 || isLast) {
    const pathX = Math.floor(isLast ? x + offset * 2 : x) + 0.5;

    return <path d={`M${pathX},${y - 4}v${-35}`} stroke="red" />;
  }
  return null;
};
export default class Example extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/xqjtetw0/';


  render() {
    return (
    <ResponsiveContainer width="85%" height={400}>
		<ComposedChart
        width={1000}
        height={500}
        data={data}
        margin={{
          top: 30, right: 30, left: 30, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="timestamp" label={{ value: 'date-time', position: 'insideBottomRight', offset: -10 }} />
        <YAxis yAxisId="left" label={{ value: 'count', angle: -90, position: 'insideLeft',offset: -10 }}/>
        <YAxis yAxisId="right" orientation="right" label={{ value: 'Latency in mico secs', angle: -90, position: 'insideLeft',offset: 50 }} />
        <Tooltip />
        <Legend />
		
	      <Bar yAxisId="left" dataKey="src_count" fill={dangerColor} />
        <Bar yAxisId="left" dataKey="tgt_count" fill={warningColor} />
	
        
        <Line yAxisId="right" type="monotone" dataKey="latency" strokeWidth="3" stroke="#000000" />
      </ComposedChart>
      </ResponsiveContainer>
	 

	  );
	  
  }
}
