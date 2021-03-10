import React, { Component } from 'react';
import MediaQuery from 'react-responsive';

class PageTitleArea extends Component {
    render() {

        let { pageTitle, pageDescription, style } = this.props;

        return (
            <React.Fragment>
            <MediaQuery minDeviceWidth={1224}>
            <div className="page-title-area min-width-1290" style={style}>
                <div className="container">
                    <div className="page-title-content">
                        <h2>{pageTitle}</h2>
                        <p>{pageDescription}</p>
                    </div>
                </div>
            </div>
            </MediaQuery>
            <MediaQuery maxDeviceWidth={1223}>
            <div className="page-title-area" style={style}>
                <div className="container">
                    <div className="page-title-content">
                        <h2>{pageTitle}</h2>
                        <p>{pageDescription}</p>
                    </div>
                </div>
            </div>
            </MediaQuery>
            </React.Fragment>
        );
    }
}

export default PageTitleArea;