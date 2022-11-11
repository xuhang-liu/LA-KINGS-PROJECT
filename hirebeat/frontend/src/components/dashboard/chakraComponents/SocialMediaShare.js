import React from 'react';
import { Stack, Heading, useColorModeValue, Text } from '@chakra-ui/react';
import { FacebookShareButton, TwitterShareButton, LinkedinShareButton, WhatsappShareButton } from "react-share";
import { confirmAlert } from 'react-confirm-alert';

export const SocialMediaShare = (props) => {
    const copyAlert = () => {
        confirmAlert({
            title: "URL Coppied to Clipboard!",
            message: "",
            buttons: [
                {
                    label: 'Ok'
                }
            ]
        });
        //Segment info
        window?.analytics?.track("Jobs_Copy sharing link", {
            eventTime: Date()?.toLocaleString()
        });
    }
    return (
        <React.Fragment>
            <Stack>
                <div class="container py-4">
                    <Heading as='h6' size='xs' color="muted">Job URL</Heading>
                    <div className="row mt-3 ml-0" style={{ position: "relative", background: useColorModeValue("#F4F5FD", "#090d3a"), borderRadius: "5px", border: "1px solid #006dff", width: "70%", height: "3rem" }}>
                        <div className="pt-2 pl-2" style={{ fontSize: "1.4rem", fontWeight: "500", alignItems: "center"}}>
                            <Text fontSize="sm" color="muted" onClick={() => { copyAlert(); navigator.clipboard.writeText(props.job.job_details.job_url?.replaceAll(' ', '%20')); this.disableShowShare() }}>{props.job.job_details.job_url}</Text>
                        </div>
                        <div className="py-1">
                            <button onClick={() => { copyAlert(); navigator.clipboard.writeText(props.job.job_details.job_url?.replaceAll(' ', '%20')); this.disableShowShare() }}
                                className="default-btn pt-1" style={{ fontSize: "1.1rem", background: "#FF6B00", borderRadius: "5px", height: "2.2rem", alignItems: "center", paddingLeft: "2rem", paddingRight: "0.6rem", position: "absolute", right: "0.3rem" }}>
                                <i className='bx bx-share-alt' style={{ left: "0.5rem" }}></i>Copy
                            </button>
                        </div>
                    </div>
                    <Heading as='h6' size='xs' color="muted" mt="5">Share</Heading>
                    <div className="single-footer-widget1">
                        <ul className="social">
                            <li>
                                <FacebookShareButton
                                    url={props.job.job_details.job_url}
                                    quote={props.job.job_details.job_title + " at " + props.profile.company_name}
                                    hashtag={props.profile.company_name}>
                                    <a target="_blank" rel="noreferrer">
                                        <i className="bx bxl-facebook"></i>
                                    </a>
                                </FacebookShareButton>
                            </li>
                            <li>
                                <TwitterShareButton
                                    url={props.job.job_details.job_url}
                                    title={props.job.job_details.job_title + " at " + props.profile.company_name}
                                    via={props.profile.company_name}
                                    hashtag={props.profile.company_name}>
                                    <a target="_blank" rel="noreferrer">
                                        <i className="bx bxl-twitter"></i>
                                    </a>
                                </TwitterShareButton>
                            </li>
                            <li>
                                <LinkedinShareButton
                                    url={props.job.job_details.job_url}
                                    title={props.job.job_details.job_title + " at " + props.profile.company_name}
                                    source={props.profile.company_name}>
                                    <a target="_blank" rel="noreferrer">
                                        <i className="bx bxl-linkedin"></i>
                                    </a>
                                </LinkedinShareButton>
                            </li>
                            <li>
                                <WhatsappShareButton
                                    url={props.job.job_details.job_url}
                                    title={props.job.job_details.job_title + " at " + props.profile.company_name}>
                                    <a target="_blank" rel="noreferrer">
                                        <i className="bx bxl-whatsapp"></i>
                                    </a>
                                </WhatsappShareButton>
                            </li>
                        </ul>
                    </div>
                </div>
            </Stack>
        </React.Fragment>
    )
}