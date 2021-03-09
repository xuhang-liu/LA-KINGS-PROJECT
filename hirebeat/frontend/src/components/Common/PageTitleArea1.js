import React, { Component } from 'react';

class PageTitleArea1 extends Component {
    render() {

        let { pageTitle, pageDescription, style } = this.props;

        return (
            <div className="page-title-area1" style={style}>
                <div className="container">
                    <div className="page-title-content">
                        <h2>{pageTitle}</h2>
                        <p>{pageDescription}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default PageTitleArea1;