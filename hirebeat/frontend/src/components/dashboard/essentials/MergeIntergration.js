import React, { useCallback, useState, useEffect } from "react";
// In your React project folder, run:
// npm install --save @mergeapi/react-merge-link
import Select from 'react-select';
import { useMergeLink } from "@mergeapi/react-merge-link";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import axios from "axios";
import { Text, Box, Button, Stack, HStack, Input, Container, Heading, useColorModeValue } from '@chakra-ui/react';
import { FiLink2 } from 'react-icons/fi';

const MergeIntergration = (props) => {

    const [inted, setInted] = useState(false);
    const [job, setJob] = useState(null);
    const [stage, setStage] = useState(null);
    const [options1, setOptions1] = useState([]);
    const [options2, setOptions2] = useState([]);
    const [int_type, setInt_type] = useState("");
    const [greenhouse_api, setGreenhouse_api] = useState("")

    useEffect(() => {
        if (props.profile.merge_public_token != "" && props.profile.merge_public_token != null) {
            setInted(true);
            let data = {
                "user_id": props.user.id
            };
            props.sendMergeApiRequest(data);
        }
        if (props.profile.ats_api_token != "" && props.profile.ats_api_token != null) {
            setGreenhouse_api(props.profile.ats_api_token);
        }
        //Segment info
        window?.analytics?.track("Integration_Integrate", {
            eventTime: Date()?.toLocaleString()
        });
    }, []);

    const customStyles = {
        option: (provided, state) => ({
            ...provided,
            color: state.isSelected ? "#ffffff" : '#006dff',
        }),
        control: styles => ({ ...styles, background: useColorModeValue("#ffffff", "#1a202c") }),
        singleValue: styles => ({
            ...styles,
            color: '#4a6f8a',
            fontSize: '0.9375rem',
            fontFamily: 'Inter,Segoe UI, sans-serif',
            fontWeight: '500',
            background: useColorModeValue("#ffffff", "#1a202c")
        }),
        menu: provided => ({ ...provided, color: useColorModeValue("#1a202c", "#ffffff"), background: useColorModeValue("#ffffff", "#1a202c") }),
    };

    const onFilter1 = (job) => {
        setOptions2([]);
        setJob(job);
        let data = {
            "user_id": props.user.id
        };
        //Get data from merge
        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };
        axios.post("jobs/send-merge-api-request", data, config).then((res) => {
            res.data?.interview_stages_api_response?.map((i) => {
                if (i?.job == null) {
                    setOptions2(options2 => [...options2, { value: i?.id, label: i?.name }]);
                } else {
                    if (job['value'] == i?.job) {
                        setOptions2(options2 => [...options2, { value: i?.id, label: i?.name }]);
                    }
                }
            });
        }).catch(error => {
            console.log(error)
        });
    };

    const onFilter2 = (stage) => {
        setStage(stage)
    };

    const onChange = (e) => {
        setGreenhouse_api(e.target.value)
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
            message: "Congratulations, you've successfully integrated your HireBeat account with your ATS. We are synchronizing the data. Depending on the volume, this initial synchronization may take 5-10 minutes to complete. Thank you for your patience.",
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

    const removeMergeAccount = () => {
        alert("Account been removed.")
    }

    const getMergeData = () => {
        setOptions1([]);
        let data = {
            "user_id": props.user.id
        };
        props.sendMergeApiRequest(data);
        //Get data from merge
        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };
        axios.post("jobs/send-merge-api-request", data, config).then((res) => {
            if (res.data?.jobs_api_response.length > 0) {
                confirmAlert({
                    title: "Data Synchronized",
                    message: "Select a job to continue.",
                    buttons: [
                        {
                            label: 'OK'
                        }
                    ]
                });
                setInt_type(res.data?.integration_type);
                res.data?.jobs_api_response?.map((j) => {
                    setOptions1(options1 => [...options1, { value: j?.id, label: j?.name }]);
                })
            } else {
                alert("Data not ready yet");
            }
        }).catch(error => {
            console.log(error)
        });
        //Segment info
        window?.analytics?.track("Integration_Synchronize", {
            eventTime: Date()?.toLocaleString()
        });
    }

    const createCanFromMerge = () => {
        if (job == null || stage == null) {
            confirmAlert({
                title: "Not Valid",
                message: "Please select your job and stage to continue.",
                buttons: [
                    {
                        label: 'OK'
                    }
                ]
            });
        } else if (greenhouse_api == "" || greenhouse_api == null) {
            confirmAlert({
                title: "Api Key Missing!",
                message: "Please copy your Greenhouse API key again.",
                buttons: [
                    {
                        label: 'OK'
                    }
                ]
            });
        } else {
            let data = {
                "user_id": props.user.id,
                "merge_job_id": job['value'],
                "merge_stage_id": stage['value'],
                "merge_job_title": job['label'],
                "merge_stage_title": stage['label'],
                "greenhouse_api_key": greenhouse_api,
            }
            const myPromise = new Promise((resolve, reject) => {
                props.addCandFromMerge(data);
            });
            myPromise.then(
                confirmAlert({
                    title: "Import Success!",
                    message: "You have successfully imported all candidates under the specified job stage. Please go to Interview to configure interview questions and send invitations.",
                    buttons: [
                        {
                            label: 'Confirm',
                            onClick: () => { props.renderJobs(); window.location.reload(false) }
                        }
                    ]
                })
            );
        }
        //Segment info
        window?.analytics?.track("Integration_Confirm", {
            eventTime: Date()?.toLocaleString()
        });
    }

    return (
        <Box
            bg="bg-canvas"
            borderTopLeftRadius={{
                base: 'none',
                lg: '2rem',
            }}
            height="full"
        >
            <Container height="full" mt='12' mb='14' alignItems='center'>
                <Stack
                    spacing={{
                        base: '8',
                        lg: '6',
                    }}
                    height="full"
                >
                    <Heading as='h5' size='sm' color="muted"><HStack spacing='3'><FiLink2 /><span>Integration</span></HStack></Heading>
                    <Box
                        bg="bg-surface"
                        boxShadow='sm'
                        borderRadius="md"
                        p={{
                            base: '4',
                            md: '6',
                        }}
                    >
                        <div className="form-row" style={{ marginTop: "1%" }}>
                            <div className="form-group col">
                                <Text color='muted' style={{ fontSize: "1.2rem", fontWeight: "600" }}>Integrate with your ATS</Text>
                                <div>
                                    <Text color='muted' style={{ fontSize: "1rem", fontWeight: "500" }}>HireBeat seamlessly <span style={{ color: "#ff6b00" }}>integrates with many ATS platforms</span> in the market, including Greenhouse, Breezy, Lever, Workable, etc.</Text>
                                    <Text color='muted' style={{ fontSize: "1rem", fontWeight: "500" }}>To do so, click on the "Integrate" button below, and select your current platform to log in.</Text>
                                    <Text color='muted' style={{ fontSize: "1rem", fontWeight: "500" }}>Once integrated, follow the instructions below to conduct <span style={{ color: "#ff6b00" }}>one-way video interviews</span> through HireBeat.</Text>
                                </div>
                                <HStack spacing='5' mt='6'>
                                    <Button _hover={{ bg: "orange.500" }} onClick={open} colorScheme='blue'>
                                        Integrate
                                    </Button>
                                    <Text className="pt-4" style={{ fontSize: "0.8rem", fontWeight: "500" }}>Powered by Merge</Text>
                                </HStack>
                            </div>
                        </div>
                    </Box>
                    {inted &&
                        <Box
                            bg="bg-surface"
                            boxShadow='sm'
                            borderRadius="md"
                            p={{
                                base: '4',
                                md: '6',
                            }}
                        >
                            <div className="form-row" style={{ marginTop: "1%" }}>
                                <div className="form-group col">
                                    <Text color='muted' style={{ fontSize: "1.2rem", fontWeight: "600" }}>Import job, job stage, and candidates</Text>
                                    <Text color='muted' style={{ fontSize: "1rem", fontWeight: "500" }}>Initiate the import process by clicking <span style={{ color: "#ff6b00" }}>Synchronize</span>. Then select the job from the dropdown menu and then specify the job stage.</Text>
                                    <Text color='muted' style={{ fontSize: "1rem", fontWeight: "500" }}>Click <span style={{ color: "#ff6b00" }}>Confirm</span> and we will import all the candidates that are currently under your specified job stage.</Text>
                                    <Button _hover={{ bg: "orange.500" }} onClick={getMergeData} colorScheme='blue' style={{ marginTop: "1rem" }}>
                                        Synchronize
                                    </Button>
                                    <div className="col-4" style={{ zIndex: "9999", marginTop: "1.5rem" }}>
                                        <Select value={job} onChange={onFilter1} options={options1} styles={customStyles} placeholder="Job" />
                                    </div>
                                    <div className="col-4" style={{ zIndex: "9998", marginTop: "1.5rem" }}>
                                        <Select value={stage} onChange={onFilter2} options={options2} styles={customStyles} placeholder="Stage" />
                                    </div>
                                    {(int_type == "Greenhouse" && (props.profile.ats_api_token == "" || props.profile.ats_api_token == null)) &&
                                        <div className="row ml-3" style={{ marginTop: "2rem" }}>
                                            <Input
                                                type="text"
                                                name="greenhouse"
                                                placeholder="Enter Greenhouse API Key"
                                                onChange={onChange}
                                                value={greenhouse_api}
                                                style={{
                                                    width: "20rem",
                                                    fontFamily: "Inter, Segoe UI",
                                                    border: "0.5px solid #E5E5E5",
                                                    borderRadius: "0.2rem",
                                                    paddingLeft: "1rem",
                                                    boxShadow: "0px 0px 50px rgba(70, 137, 250, 0.1)"
                                                }}
                                                required />
                                        </div>}
                                    <Button _hover={{ bg: "orange.500" }} onClick={createCanFromMerge} colorScheme='blue' style={{ marginTop: "2rem" }}>
                                        Confirm
                                    </Button>
                                </div>
                            </div>
                        </Box>
                    }
                </Stack>
            </Container>
        </Box>
    );
};

export default MergeIntergration;