import React from "react";
import Chart from "react-apexcharts";

export const Category = (props) => {
    return (
        <Chart
            options=  {{
                labels: props.labels,
                colors: ["#378aff", "#fba330", "#f54f52", "#92f03b", "#9552ea",
                    "#0c3f5c", "#58508d", "#bc5090", "#fb6361", "#fba600",
                    "#c608d1", "#fe02fe", "#fe77fd", "#fea9fd", "#2900a5"
                ]
            }}
            series={props.series}
            type="pie"
            height={props.height}
        />
    );
};

export const RevenueBar = (props) => {

    var labelFormatter = function(value) {
        var val = Math.abs(value);
        if (val >= 1000000000) {
            val = (val / 1000000000).toFixed(2) + " b";
        }
        else if (val > 1000000 && val < 1000000000) {
            val = (val / 1000000).toFixed(2) + " m";
        }
        return val;
    };

    var labelFormatter2 = function(value) {
        var val = Math.abs(value);
        val = (val).toFixed(1) + " %";
        return val;
    };

    return (
        <div>
            <h3 className="companydata-text1">Revenue </h3>
            <Chart
                options= {{
                    chart: {
                        type: 'line',
                    },
                    stroke: {
                        width: [4, 4, 4],
                    },
                    colors: ["#fbbc45", "#40a0fc", "#37e7a5"],
                    dataLabels: {
                        enabled: true,
                        enabledOnSeries: []
                    },
                    labels: props.labels,
                    xaxis: {
                        type: "category",
                    },
                    yaxis: [
                        {
                          min: 0,
                          max: 100,
                          tickAmount: 4,
                          opposite: true,
                          seriesName: "Gross Profit Margin",
                          labels: {
                            formatter: labelFormatter2,
                          }
                        },
                        {
                          min: 1000000000,
                          max: 60000000000,
                          tickAmount: 4,
                          seriesName: "Net Income",
                          labels: {
                            formatter: labelFormatter,
                          }
                        },
                        {
                          seriesName: "Revenue",
                          show: false,
                          labels: {
                            formatter: labelFormatter,
                          }
                        },
                    ]
                }}
                series={[
                    {
                        name: 'Gross Profit Margin',
                        type: 'line',
                        data: props.gpmData
                    },
                    {
                        name: 'Net Income',
                        type: 'column',
                        data: props.netIncomeData
                    },{
                        name: 'Revenue',
                        type: 'column',
                        data: props.revenueData
                    },
                ]}
                type="line"
            />
        </div>
    );
}

export const SalaryBar = (props) => {

    var labelFormatter = function(value) {
        var val = Math.abs(value);
        if (val >= 1000) {
            val = (val / 1000).toFixed(1) + " k";
        }
        return val;
    };

    return (
        <div>
            <h3 className="companydata-text1">Medium Salary</h3>
            <Chart
                options= {{
                    chart: {
                        type: 'line',
                    },
                    colors: ["#43335a"],
                    stroke: {
                        width: [4]
                    },
                    dataLabels: {
                        enabled: false,
                        enabledOnSeries: [0]
                    },
                    labels: props.labels,
                    xaxis: {
                        type: 'category'
                    },
                    yaxis: [
                        {
                          min: 0,
                          max: 200000,
                          tickAmount: 4,
                          seriesName: "Salary",
                          labels: {
                            formatter: labelFormatter,
                          }
                        }
                    ]
                }}
                series={[
                    {
                        name: 'Salary',
                        type: 'column',
                        data: props.salaryData
                    }
                ]}
                type="line"
            />
        </div>
    );
}

const decideClassName = (filter, text) => {
    return filter == text ? "btn-selected" : "btn-unselected";
};

export const SwitchButton = (filter, setFilter)=>{
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

export const GrowthChart = (props) => {
    return (
        <Chart
            options= {{
                chart: {
                    type: 'line',
                },
                grid: {
                    show: false,
                },
                stroke: {
                    curve: 'smooth',
                },
                dataLabels: {
                enabled: true,
                enabledOnSeries: [0]
                },
                labels: props.growthLabels,
                xaxis:{
                    labels: {
                        show: false,
                    },
                },
                yaxis:{
                    labels: {
                        show:false,
                    },
                },
                dataLabels: {
                    enabled: false,
                },
            }}
            series={[{
                name: 'employees',
                type: 'line',
                data: props.growthData,
                },
            ]}
            type="line"
        />
    )
}