import React, { Component } from 'react';
import { MyModal80 } from "../dashboard/DashboardComponents";
import axios from "axios";

class iframeTest extends Component {
    state = {
        showIframe: false,
        token: "",
        marketplace_iframe: ""
    }
    setHideRequest = () => {
        this.setState({
            showIframe: false
        })
    }
    createTestJob = () => {
        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };
        let data1 = { "token": this.state.token, "days": "100" }
        
        axios.post("https://stagingatsapi.jobtarget.com/api/employer/jobs/userjobs", data1, config).then((res) => {
            this.setState({marketplace_iframe: res.data.jobs[0].marketplace_iframe})
        }).catch(error => {
            console.log(error)
        });
    }
    componentDidMount() {
        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };
        let data = { "p_token": "E8867D28-1965-4B2B-9967-03C05F498E65", "email": "hirebeat@jobtarget.com" };

        axios.post("https://stagingatsapi.jobtarget.com/api/employer/auth/gettoken", data, config).then((res) => {
            this.setState({token: res.data.token})
        }).catch(error => {
            console.log(error)
        });
    }
    render() {
        return (
            <React.Fragment>
                <div>
                    <button className='default-btn1 ml-5 mt-5' style={{ paddingLeft: "25px" }} onClick={this.createTestJob}>Get Test Job</button>
                    <button className='default-btn1 ml-5 mt-5' style={{ paddingLeft: "25px" }} onClick={() => this.setState({ showIframe: true })}>Open Iframe</button>
                </div>
                <MyModal80
                    show={this.state.showIframe}
                    onHide={this.setHideRequest}
                >
                    <div>
                        <p>{this.state.marketplace_iframe}</p>
                        <iframe src={this.state.marketplace_iframe} style={{ width: "100%", height: "50rem" }}></iframe>
                    </div>
                </MyModal80>
            </React.Fragment>
        )
    }
}

export default iframeTest;