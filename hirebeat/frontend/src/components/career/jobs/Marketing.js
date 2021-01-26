import React, { Component } from 'react';
import PageTitleArea from '../../Common/PageTitleArea';
import { useEffect } from "react";
//import MediaQuery from 'react-responsive';

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

class Marketing extends Component {
    render() {
        return (
            <React.Fragment>
                <ScrollToTopOnMount />
                <PageTitleArea
                    pageTitle="Marketing Intern"
                    pageDescription="New York / Remote"
                />
                <div className="container pb-100" style={{marginTop: "2rem"}}>
                    <div>
                        <h3 className="job-txt4">Job Details:</h3>
                        <ul className="job-txt2">
                            <li>Collaborate with teams on brand-led paid and organic campaigns</li>
                            <li>Assist with the execution of overall marketing/content creation</li>
                            <li>Brainstorm and develop ideas for creative marketing campaigns</li>
                            <li>Assist in the development of PR materials including email marketing content & key message documents</li>
                            <li>Research new marketing channel, such as influencer marketing and social media best practices</li>
                            <li>Develop an engaging way to distribute industry research and competitive analysis updates to management team.</li>
                            <li>Attend weekly status meetings</li>
                        </ul>
                    </div>
                    <div style={{marginTop: "1.25rem"}}>
                        <h3 className="job-txt4">Requirements:</h3>
                        <ul className="job-txt2">
                            <li>Strong organizational and communication skills</li>
                            <li>Strong knowledge across digital platforms such as TikTok, Instagram, Facebook, Youtube, Snapchat, and Twitter</li>
                            <li>Must be self-motivated, driven and able to work independently as well as part of a team</li>
                            <li>Willingness to adapt to an evolving and agile environment</li>
                            <li>Ability to balance/prioritize multiple projects with competing deadlines</li>
                            <li>Self-curiosity about the digital and social landscape in and outside of HireBeat</li>
                            <li>Passion for content creator and the influencer landscape</li>
                            <li>Strong writing skills</li>
                            <li>Experience and/or interest in social platform analytics, prior marketing professional experience is preferred</li>
                            <li>Experienced with Google analytical is a plus</li>
                            <li>Basic photo and editing skills, Photoshop & Canva preferred</li>
                        </ul>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Marketing;
