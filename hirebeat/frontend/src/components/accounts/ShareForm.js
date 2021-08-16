import React, {Component} from "react";

export class ShareForm extends Component {
    render() {
        return (
            <React.Fragment>
                <form onSubmit={this.props.registration}>
                      <div style={{display: "flex"}}>
                          <h1 className="register-title" style={{paddingTop: "0.6rem", marginRight: "2rem"}}>Step4</h1>
                          <img style={{width: "86%", height: "3vw"}} src="https://hirebeat-assets.s3.amazonaws.com/step4.png" alt="step flow" />
                      </div>

                      <div className="form-group">
                        <label className="register-label register-text" style={{marginBottom: "1rem"}}>
                            Share with Recruiter
                        </label>
                        <div className="register-label">
                        {this.props.shareProfile ?
                            <button type="button" className="default-btn2" style={{ fontSize: "12px", backgroundColor: "#e8edfc", color: "#090d3a", border: "2px solid #67A3F3" }}>Enabled</button> :
                            <button type="button" className="default-btn2" style={{ fontSize: "12px", backgroundColor: "#fff", color: "#090d3a", border: "2px solid #e8edfc" }} onClick={this.props.setShareProfile}>Enabled</button>
                        }
                        {!this.props.shareProfile ?
                            <button type="button" className="default-btn2" style={{ fontSize: "12px", backgroundColor: "#e8edfc", color: "#090d3a", border: "2px solid #67A3F3" }}>Disabled</button> :
                            <button type="button" className="default-btn2" style={{ fontSize: "12px", backgroundColor: "#fff", color: "#090d3a", border: "2px solid #e8edfc" }} onClick={this.props.setShareProfile}>Disabled</button>
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