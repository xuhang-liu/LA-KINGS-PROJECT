import React from "react";
import Chart from "react-apexcharts";

const Category = (props) => {
  return (
    <Chart
      options=  {{
          labels: ['A', 'B', 'C', 'D', 'E'],
      }}
      series={[44, 55, 41, 17, 15]}
      type="pie"
      height={140}
      key={"overall"}
    />
  );
};

export const Bar = (props) => {
    return (
      <div> 
      <h3 className="companydata-text1">Revenue </h3>
      <Chart
      options= {{
        chart: {
          type: 'line',
        },
        stroke: {
          width: [0, 4]
        },
        dataLabels: {
          enabled: true,
          enabledOnSeries: [1]
        },
        labels: ['2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016'],
        xaxis: {
          type: 'datetime'
        },
        yaxis: [{
          title: {
            text: 'Income (thousand crores)',
          },
        }]
      }}
      series={[
        {
          name: 'Cashflow',
          type: 'column',
          data: [440, 505, 414, 671, 227, 413, 201, 352]
        }, 
        {
          name: 'Income',
          type: 'column',
          data: [440, 752, 320, 257, 160, 413, 201, 352]
        },{
          name: 'Revenue',
          type: 'line',
          data: [230, 420, 350, 270, 430, 220, 170, 310]
        },
      ]}
      type="line"
      />
      </div>
    );
}


export default function Demographic(props) {
    return (
        <div>
        <h3 className="companydata-text1">{props.name}</h3>
        <Category />
        </div>
    );
}