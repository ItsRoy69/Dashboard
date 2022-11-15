import React from 'react';
import 'chart.js/auto';
import { Doughnut } from 'react-chartjs-2';
import '../styles/DoughnutChart.css';

const chartColors = ['#438AF6', 'rgba(67, 138, 246,0.1)'];

const options = {
  cutout: 75,
  legend: {
    display: false,
  },
  elements: {
    arc: {
      borderWidth: 0,
    },
  },
};

const DoughnutChart = ({ score }) => {
  const data = {
    maintainAspectRatio: false,
    responsive: false,
    labels: [],
    datasets: [
      {
        data: [score, 15 - score],
        backgroundColor: chartColors,
        hoverBackgroundColor: chartColors,
      },
    ],
  };

  return (
    <div className="relative">
      <Doughnut data={data} options={options} />
      <div className="emojiContainer">
        <span role='img' aria-label='rocket emoji'>
          🎯
        </span>
      </div>
    </div>
  );
};

export default DoughnutChart;
