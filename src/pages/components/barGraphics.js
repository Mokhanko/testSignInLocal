import {Bar} from 'react-chartjs-2';
import React from "react";

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgba(255,0,0,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,0,0,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [65, 59, 80, 81, 56, 55, 40]
    },
    {
      label: 'My Second dataset',
      backgroundColor: 'rgba(0,255,0,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(0,255,0,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [90, 80, 70, 60, 50, 40, 30]
    },
    {
      label: 'My Third dataset',
      backgroundColor: 'rgba(0,0,255,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(0,0,255,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [90, 80, 70, 60, 50, 40, 30]
    },
  ]
};

export default class BarGraphics extends React.Component{
  displayName: 'BarExample';

  render() {
    return (
      <div id='barGr'>
        <h2>Bar Example (custom size)</h2>
        <Bar
          data={data}
          width={100}
          height={50}
          options={{
            maintainAspectRatio: true
          }}
        />
      </div>
    );
  }
};