import React, { useState } from 'react';
import { Text, Box, Stack, Heading, useColorModeValue, SimpleGrid, Center, Image } from '@chakra-ui/react';
import { AddNewJobSelection } from './AddNewJobSelection';
import { JobCreation } from "../jobBoard/JobCreation";

export const AddNewJobCover = (props) => {
    const [showNext, setshowNext] = useState(false);
    const [showCopy, setshowCopy] = useState(false);
    const [showBlank, setshowBlank] = useState(false);
    const [copyTitle, setcopyTitle] = useState(null);

    const openCopy = () => {
        setshowNext(true);
        setshowCopy(true);
    }
    const openBlank = () => {
        setshowNext(true);
        setshowBlank(true);
    }
    return (
        <React.Fragment>
            <Box px='24' mt='12' mb='14' alignItems='center'>
                <Stack
                    spacing={{
                        base: '8',
                        lg: '6',
                    }}
                    height="full"
                >
                    <Heading as='h5' size='xs' color="muted" mb="5"><b><i className="bx bx-briefcase"></i><span className="ml-2">Jobs{(copyTitle==null)?<span style={{ fontSize: "0.9rem" }}>/Add New Job</span>:<span style={{ fontSize: "0.9rem" }}>/Copy of "{copyTitle}"</span>}</span></b></Heading>
                    {!showNext ?
                        <SimpleGrid bg="bg-surface" columns={2} spacing={24} p={32}>
                            <Box style={{ cursor: "pointer" }} onClick={openCopy} p="10" bg={useColorModeValue("#ffffff", "#090d3a")} border={useColorModeValue("1px solid #090D3A", "1px solid #ffffff")}>
                                <Center>
                                    <Image src={useColorModeValue('https://hirebeat-assets.s3.amazonaws.com/job_creation_icon/copy_an_existing_black.png', 'https://hirebeat-assets.s3.amazonaws.com/job_creation_icon/copy_an_existing_white.png')} alt='copy black' />
                                </Center>
                                <Center mt='4'>
                                    <Text align="center" color={"muted"} size="xl" fontWeight="bold">Copy an Existing Job</Text>
                                </Center>
                                <Center mt='2'>
                                    <Text align="center" color={"muted"} size="sm">Use an existing job as a template and customize as needed</Text>
                                </Center>
                            </Box>
                            <Box style={{ cursor: "pointer" }} onClick={openBlank} p="10" bg={useColorModeValue("#ffffff", "#090d3a")} border={useColorModeValue("1px solid #090D3A", "1px solid #ffffff")}>
                                <Center>
                                    <Image src={useColorModeValue('https://hirebeat-assets.s3.amazonaws.com/job_creation_icon/blank_job_black.png', 'https://hirebeat-assets.s3.amazonaws.com/job_creation_icon/blank_job_white.png')} alt='blank black' />
                                </Center>
                                <Center mt='4'>
                                    <Text align="center" color={"muted"} size="xl" fontWeight="bold">Blank Job</Text>
                                </Center>
                                <Center mt='2'>
                                    <Text align="center" color={"muted"} size="sm">Use a Blank template to create your job from scratch</Text>
                                </Center>
                            </Box>
                        </SimpleGrid> :
                        <Box>
                            {showCopy &&
                                <AddNewJobSelection
                                    user={props.user}
                                    profile={props.profile}
                                    renderJobs={props.renderJobs}
                                    addNewJob={props.addNewJob}
                                    getAllJobs={props.getAllJobs}
                                    getPJobs={props.getPJobs}
                                    jobid_list={props.jobid_list}
                                    getjobidlist={props.getjobidlist}
                                    getZRFeedXML={props.getZRFeedXML}
                                    getZRPremiumFeedXML={props.getZRPremiumFeedXML}
                                    employerProfileDetail={props.employerProfileDetail}
                                    jobs={props.jobs}
                                    companyName={props.company_name}
                                    loadProfile={props.loadProfile}
                                    jobt_company_id={props.jobt_company_id}
                                    setcopyTitle={setcopyTitle}
                                />}
                            {showBlank &&
                                <JobCreation
                                    user={props.user}
                                    profile={props.profile}
                                    renderJobs={props.renderJobs}
                                    addNewJob={props.addNewJob}
                                    getAllJobs={props.getAllJobs}
                                    getPJobs={props.getPJobs}
                                    jobid_list={props.jobid_list}
                                    getjobidlist={props.getjobidlist}
                                    getZRFeedXML={props.getZRFeedXML}
                                    getZRPremiumFeedXML={props.getZRPremiumFeedXML}
                                    employerProfileDetail={props.employerProfileDetail}
                                    jobs={props.jobs}
                                    companyName={props.company_name}
                                    loadProfile={props.loadProfile}
                                    jobt_company_id={props.jobt_company_id}
                                />}
                        </Box>
                    }
                </Stack>
            </Box>
        </React.Fragment >
    )
}