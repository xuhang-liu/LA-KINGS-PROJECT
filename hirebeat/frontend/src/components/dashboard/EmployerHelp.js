import React from "react";
import Tabs from "./Tabs";
import RequestSupport from "./RequestSupport";
import Tutorials from "./Tutorials";

export function Panel(props) {
    return (<>{props.children}</>)
  }
  
export default class EmployerHelp extends React.Component {
  render() {
    return (
      <div className="container">
        <div style={{ marginBottom: "30px" }}>
          <h3>
            <b style={{color:"#090d3a", fontSize:"1.2rem"}}>
              <i className="bx-fw bx bx-help-circle"></i>
              <span className="ml-2">Help</span>
            </b>
          </h3>
        </div>
        <div className="chart-bg1 container">
          <Tabs>
            <Panel title="Request Support">
              <RequestSupport />
            </Panel>
            <Panel title="Tutorials">
              <Tutorials />
            </Panel>
          </Tabs>
        </div>
      </div>
    );
  }
}
