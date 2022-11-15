import { useState } from 'react';
import '../styles/LineChart.css';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const data = [
  {
    name: '0%',
    'Your Score': 10,
  },
  {
    name: '20%',
    'Your Score': 13,
  },
  {
    name: '40%',
    'Your Score': 65,
  },
  {
    name: '60%',
    'Your Score': 39,
  },
  {
    name: '80%',
    'Your Score': 48,
  },
  {
    name: '100%',
    'Your Score': 5,
  },
];

const LineCh = () => {
  const [position, setPosition] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [positionClass, setPositionClass] = useState('');

  const getClassForPosition = (position) => {
    if (position < 150) return setPositionClass('gradientLeft');
    if (position > 400) return setPositionClass('gradientRight');

    return setPositionClass('');
  };

  const updateCords = (event) => {
    setPosition(event.chartX);
    getClassForPosition(position);
  };

  return (
    <div
      className="chartContainer"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      <div
        className="chartBar positionClass"
        style={{ left: `${position - 50}px`, opacity: isVisible ? 0.1 : 0 }}
      ></div>
      <LineChart
        width={600}
        height={358}
        data={data}
        onMouseMove={(event) => updateCords(event)}
        margin={{
          top: 0,
          right: -1,
          left: -61,
          bottom: 5,
        }}
      >
        <CartesianGrid horizontal={false} vertical={true} strokeDasharray='5' />
        <XAxis dataKey='name' />
        <YAxis />
        <Tooltip />
        <Line
          type='monotone'
          dataKey='Your Score'
          stroke='#438af6'
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </div>
  );
};

export default LineCh;
