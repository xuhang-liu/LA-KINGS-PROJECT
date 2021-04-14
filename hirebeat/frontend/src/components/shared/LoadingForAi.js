import React, { Component } from 'react';

class LoadingForAi extends Component {
    render() {
        return (
            <div style={{width:"100vw", height:"100vh", background:"#BED2FE", textAlign:"center"}}>
                <div style={{height:"100%", paddingTop:"10rem"}}>
                {
                    this.props.interview &&
                    <img style={{display:"inline-block", verticalAlign:"middle"}} src="https://hirebeat-assets.s3.amazonaws.com/interview.gif"/>
                }
                {
                    !this.props.interview &&
                    <img style={{display:"inline-block", verticalAlign:"middle"}} src="https://hirebeat-assets.s3.amazonaws.com/resume.gif"/>
                }
                </div>
            </div>
        );
    }
}

export default LoadingForAi;