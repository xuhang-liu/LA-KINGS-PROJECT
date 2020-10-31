import React from "react";
import Chart from "react-apexcharts";

export const Category = (props) => {
  return (
    <Chart
      options=  {{
          labels: ['A', 'B', 'C', 'D', 'E'],
      }}
      series={props.series}
      type="pie"
      height={props.height}
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

const decideClassName = (filter, text) => {
  return filter == text ? "btn-selected" : "btn-unselected";
};

export const Switchbutton = (filter, setFilter)=>{
  console.log(filter);
  return(
      <div style={{marginBottom: "5px"}} className="container d-flex justify-content-start">
          <button
          className={decideClassName(filter, "swe")}
          style = {{width: "90px", height: "42px", outline: "none", borderRadius: "5px"}}
          onClick={() => setFilter("swe")}
          >
          SWE
          </button>
          <button
          className={decideClassName(filter, "data")}
          style = {{width: "150px", height: "42px", outline: "none", borderRadius: "5px"}}
          onClick={() => setFilter("data")}
          >
          Data
          </button>
          <button
          className={decideClassName(filter, "design")}
          style = {{width: "150px", height: "42px", outline: "none", borderRadius: "5px"}}
          onClick={() => setFilter("design")}
          >
          Design
          </button>
          <button
          className={decideClassName(filter, "pm")}
          style = {{width: "150px", height: "42px", outline: "none", borderRadius: "5px"}}
          onClick={() => setFilter("pm")}
          >
          PM
          </button>
      </div>
  );
}