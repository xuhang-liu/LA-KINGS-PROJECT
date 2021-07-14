import React, { useCallback, useState, useEffect } from "react";
// In your React project folder, run:
// npm install --save @mergeapi/react-merge-link
import Select from 'react-select';
import { useMergeLink } from "@mergeapi/react-merge-link";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

const MergeIntergration = (props) => {

    const [inted, setInted] = useState(false);
    const [job, setJob] = useState(null);
    const [stage, setStage] = useState(null);
    const [options1, setOptions1] = useState([]);
    const [options2, setOptions2] = useState([]);

    useEffect(() => {
        if (props.profile.merge_public_token != "" && props.profile.merge_public_token != null) {
            setInted(true);
        }
    }, []);

    const customStyles = {
        option: (provided, state) => ({
            ...provided,
            color: state.isSelected ? '#ffffff' : '#56a3fa',
          }),
        control: styles => ({ ...styles, backgroundColor: '#ffffff'}),
        singleValue: styles => ({
            ...styles,
            color: '#4a6f8a',
            fontSize: '0.9375rem',
            fontFamily: 'Avenir Next,Segoe UI, sans-serif',
            fontWeight: '500'
        }),
    };

    const onFilter1 = (job) => {
        setOptions2([]);
        setJob(job);
        props.interview_stages_api_response?.map((i) => {
            if(job['value'] == i?.job){
                setOptions2(options2 => [...options2, { value: i?.id, label: i?.name }]);
            }
        });
    };

    const onFilter2 = (stage) => {
        setStage(stage)
    };

    const onSuccess = useCallback((public_token) => {
        // Send public_token to server (Step 3)
        var data = {
            "public_token": public_token,
            "user_id": props.user.id
        };
        props.retrieveMergeAccountToken(data);
        setInted(true);
        confirmAlert({
            title: "Sync in progress",
            message: "Congratulations, you've successfully integrated your HireBeat account with your ATS. We are synchronizing the data. Depending on the volume, this initial synchronization may take 2-5 minutes to complete. Thank you for your patience.",
            buttons: [
                {
                    label: 'Confirm'
                }
            ]
        });
    }, []);

    const { open, isReady } = useMergeLink({
        linkToken: props.link_token, // Replace ADD_GENERATED_LINK_TOKEN with the token retrieved from your backend (Step 1)
        onSuccess,
    });

    const data = {
        "user_id": props.user.id
    }

    const getMergeData = () => {
        let data = {
            "user_id": props.user.id
        };
        props.sendMergeApiRequest(data);
        setTimeout(() => {
            props.jobs_api_response?.map((j) => {
                setOptions1(options1 => [...options1, { value: j?.id, label: j?.name }]);
            })
        }, 1000)
    }

    const createCanFromMerge = () => {
        if(job == null || stage == null){
            confirmAlert({
                title: "Not Valid",
                message: "Please select your job and stage to continue.",
                buttons: [
                    {
                        label: 'OK'
                    }
                ]
            });
        }else{
            let data ={
                "user_id": props.user.id,
                "merge_job_id": job['value'],
                "merge_stage_id": stage['value'],
                "merge_job_title": job['label'],
                "merge_stage_title": stage['label']
            }
            props.addCandFromMerge(data);
            confirmAlert({
                title: "Import Success!",
                message: "You have successfully imported all candidates under the specified job stage. Please go to Interview to configure interview questions and send invitations.",
                buttons: [
                    {
                        label: 'Confirm',
                        onClick: () => {props.renderApplications(); window.location.reload(false)}
                    }
                ]
            });
        }
    }

    return (
        <div className="container" style={{paddingBottom:"9rem"}}>
            <div style={{ marginBottom: "30px" }}><h3><b><span className="ml-2">Integration</span></b></h3></div>
            <div className="chart-bg1 container">
                <div className="form-row" style={{ marginTop: "1%" }}>
                    <div className="form-group col">
                        <p style={{ fontSize: "1.2rem", color: "#090d3a", fontWeight: "600" }}>Integrate with your ATS</p>
                        <div style={{ marginTop: "-1rem" }}>
                            <p style={{ fontSize: "1rem", color: "#090d3a", fontWeight: "500" }}>HireBeat seamlessly <span style={{ color: "#ff6b00" }}>integrates with many ATS platforms</span> in the market, including Greenhouse, Breezy, Lever, Workable, etc.</p>
                            <p style={{ fontSize: "1rem", color: "#090d3a", fontWeight: "500" }}>To do so, click on the "Integrate" button below, and select your current platform to log in.</p>
                            <p style={{ fontSize: "1rem", color: "#090d3a", fontWeight: "500" }}>Once integrated, follow the instructions below to conduct <span style={{ color: "#ff6b00" }}>one-way video interviews</span> through HireBeat.</p>
                        </div>
                        <div className="row ml-1" style={{ marginTop: "1.5rem" }}>
                            <button className="default-btn" disabled={!isReady} onClick={open} style={{ paddingLeft: "25px", borderRadius: "10px" }}>
                                Integrate
                            </button>
                            <p className="pt-4" style={{ fontSize: "0.8rem", color: "#979797", fontWeight: "500", marginLeft: "1rem" }}>Powered by Merge</p>
                        </div>
                    </div>
                </div>
            </div>
            {inted &&
                <div className="chart-bg1 container mt-4">
                    <div className="form-row" style={{ marginTop: "1%" }}>
                        <div className="form-group col">
                            <p style={{ fontSize: "1.2rem", color: "#090d3a", fontWeight: "600" }}>Import job, job stage, and candidates</p>
                            <div style={{ marginTop: "-1rem" }}>
                                <p style={{ fontSize: "1rem", color: "#090d3a", fontWeight: "500" }}>Initiate the import process by clicking <span style={{ color: "#ff6b00" }}>Synchronize</span>. Then select the job from the dropdown menu and then specify the job stage.</p>
                            </div>
                            <div style={{ marginTop: "-0.5rem" }}>
                                <p style={{ fontSize: "1rem", color: "#090d3a", fontWeight: "500" }}>Click <span style={{ color: "#ff6b00" }}>Confirm</span> and we will import all the candidates that are currently under your specified job stage.</p>
                            </div>
                            <div className="row ml-1" style={{ marginTop: "1rem" }}>
                                <button className="default-btn" style={{ paddingLeft: "25px", borderRadius: "10px" }} onClick={getMergeData}>
                                    Synchronize
                                </button>
                            </div>
                            <div>
                                <div className="col-4" style={{ zIndex: "9999", marginTop: "1.5rem" }}>
                                    <Select value={job} onChange={onFilter1} options={options1} styles={customStyles} placeholder="Job" />
                                </div>
                                <div className="col-4" style={{ zIndex: "9998", marginTop: "1.5rem" }}>
                                    <Select value={stage} onChange={onFilter2} options={options2} styles={customStyles} placeholder="Stage" />
                                </div>
                                <div className="row ml-1" style={{ marginTop: "2rem" }}>
                                    <button className="default-btn" style={{ paddingLeft: "25px", borderRadius: "10px" }} onClick={createCanFromMerge}>
                                        Confirm
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default MergeIntergration;