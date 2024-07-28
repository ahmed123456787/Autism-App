import React from 'react';
import { Radar } from 'react-chartjs-2';
import  { Chart, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from 'chart.js';

Chart.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

const RadarChart = ({ data, data2 }) => {
  const chartData = {
    labels: [
      'Cognitive Issues',
      'Affective Engagement Issues',
      'Repetitive Behavior',
      'Sensory Processing Problems',
      'Expressive Communication Problems',
      'Social Orienting Issues',
    ],
    datasets: [
      {
        data: data,
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
      {
        data: data2,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      r: {
        angleLines: {
          display: false,
        },
        ticks: {
          display: false,  // This will remove the numbers
        },
        suggestedMin: 0,
        suggestedMax: 6,

      },
      },
      plugins: {
        legend: {
          display: false,  // This will remove the legend
        },
},
  };

  return <Radar data={chartData} options={options} />;
};

const data1 = [2, 3, 4, 1, 3, 2];
const data2 = [3, 4, 5, 2, 4, 3];

const Wheel = () => {

    return (
        <div className='flex  flex-col flex-wrap'>
            
          <RadarChart data={data1} data2={data2}  title = {"de"} />
          <p className='text-2xl font-semibold text-center ml-8'>Control Case</p>

        </div>
        
    );
    
};

export default Wheel;
