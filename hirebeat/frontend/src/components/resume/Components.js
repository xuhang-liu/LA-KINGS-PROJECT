import Chart from "react-apexcharts";
import { customBarData } from "../../constants/constants";

export const OverallScore = (props) => {
  var options = customBarData(props.percent, props.bgColor, props.barColor);
  return (
    <Chart
      options={options.options}
      series={options.series}
      type="radialBar"
      height={150}
      key={"overall"}
    />
  );
};