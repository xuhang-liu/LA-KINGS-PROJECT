import React, {Component} from "react";

export class ShareForm extends Component {
    render() {
        return (
            <React.Fragment>
                <form id="Candidates_Register_Desk_Step4" onSubmit={this.props.registration}>
                      <h1 className="register-title" style={{paddingTop: "0.6rem", textAlign: "left"}}>Step4 &nbsp; <span style={{color: "#006dff"}}>Share with Recruiters</span></h1>
                      <div style={{display: "flex"}}>
                          <img style={{width: "86%", height: "3vw"}} src="https://hirebeat-assets.s3.amazonaws.com/step4.png" alt="step flow" />
                      </div>

                      <div className="form-group">
                        <label className="register-label register-text" style={{marginBottom: "1rem"}}>
                            Share with Recruiter
                        </label>
                        <div className="register-label">
                        {this.props.open_to_hr ?
                            <button type="button" className="default-btn2" style={{ fontSize: "12px", backgroundColor: "#e8edfc", color: "#090d3a", border: "2px solid #006dff" }}>Enabled</button> :
                            <button type="button" className="default-btn2" style={{ fontSize: "12px", backgroundColor: "#fff", color: "#090d3a", border: "2px solid #e8edfc" }} onClick={this.props.setOpen_to_hr}>Enabled</button>
                        }
                        {!this.props.open_to_hr ?
                            <button type="button" className="default-btn2" style={{ fontSize: "12px", backgroundColor: "#e8edfc", color: "#090d3a", border: "2px solid #006dff" }}>Disabled</button> :
                            <button type="button" className="default-btn2" style={{ fontSize: "12px", backgroundColor: "#fff", color: "#090d3a", border: "2px solid #e8edfc" }} onClick={this.props.setOpen_to_hr}>Disabled</button>
                        }
                        </div>
                        <p className="register-label register-text" style={{color: "#090D3A", marginTop: "2rem"}}>
                            By enabling this function, you allow employers to search for your profile and send you messages.
                        </p>
                        <p className="register-label register-text" style={{color: "#090D3A"}}>
                            You can change this preference in your profile setting at any time.
                        </p>
                      </div>

                      <div className="form-group">
                        <button
                            type="submit"
                            className="default-btn"
                            style={{width:"100%", fontSize:'1rem', fontWeight:'bold', paddingLeft: "25px"}}
                        >
                          Finish
                          <img src="https://sp.analytics.yahoo.com/spp.pl?a=10000&.yp=10145429&ea=HOC1" alt="icon"/>
                        </button>
                      </div>

                    </form>
            </React.Fragment>
        )
    }
}

export default ShareForm;