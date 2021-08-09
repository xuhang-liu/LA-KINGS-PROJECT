import React, { Component } from 'react';
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import MediaQuery from 'react-responsive';
import SmallPageTitleArea from '../Common/SmallPageTitleArea';
import ResumeScan from './ResumeScan';
import SaveLeft from './SaveLeft';
import LordingForAi from '../shared/LoadingForAi';
import DocumentMeta from 'react-document-meta';

function ScrollToTopOnMount() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return null;
}

export class Resume extends Component {
    state = {
        loading: false
    }

    goLoading = () => {
        this.setState({ loading: true });
    }

    render() {
        const meta = {
            title: 'HireBeat – Resume',
            description: 'Resume Info',
            meta: {
                charset: 'utf-8',
                name: {
                    keywords: 'Resume, Job Description, cover letter, Resume Template,  Resume Checker, Resume Scan'
                }
            }
        };
        return (
            <DocumentMeta {...meta}>
                <React.Fragment>
                    {this.state.loading ? <LordingForAi interview={false} /> :
                        <section className="pricing-area pb-100 bg-ffffff">
                            <ScrollToTopOnMount />
                            <div style={{ marginBottom: "5%" }}>
                                <MediaQuery minDeviceWidth={1224}>
                                    <SmallPageTitleArea
                                        pageTitle="Scan Your Resume"
                                        pageDescription="Please provide your resume and the job description for your targeted position"
                                        style={{ marginBottom: "2rem" }}
                                    />
                                    <ResumeScan goLoading={this.goLoading} />
                                    <SaveLeft
                                        profile={this.props.profile}
                                    />
                                </MediaQuery>
                                <MediaQuery maxDeviceWidth={1223}>
                                    <SmallPageTitleArea
                                        pageTitle="Welcome to Hirebeat!"
                                        pageDescription="Our mobile functionality for interview practice is currently under construction, we apologized for the inconvenience.Please login on your PC to get the full experience."
                                    />
                                    <Link to="/">
                                        <a className="default-btn" style={{ color: "white", backgroundColor: "#FF6B00", marginLeft: "25%", marginTop: "1rem" }}>
                                            <i className="bx bxs-hot"></i>
                                            Back to Home Page
                                            <span></span>
                                        </a>
                                    </Link>
                                </MediaQuery>
                            </div>
                        </section>
                    }
                </React.Fragment>
            </DocumentMeta>
        );
    }
}

const mapStateToProps = (state) => ({
    profile: state.auth_reducer.profile
});

export default connect(mapStateToProps, null)(
    Resume
);