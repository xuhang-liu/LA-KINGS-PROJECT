import React, { useState } from 'react';
import { Text, Box, Stack, useColorModeValue, Circle, Divider, useBreakpointValue, Table, Tbody, Th, Thead, Td, Tr } from '@chakra-ui/react';
import { AddNewJobFromExist } from "./AddNewJobFromExist";

export const AddNewJobSelection = (props) => {
    const [jobInfo, setjobInfo] = useState({});
    const [showFromExist, setshowFromExist] = useState(false);

    const isMobile = useBreakpointValue({
        base: true,
        md: false,
    })
    const orientation = useBreakpointValue({
        base: 'vertical',
        md: 'horizontal',
    })
    return (
        <React.Fragment>
            <Box>
                {!showFromExist ?
                    <Box bg="bg-surface" py={6} px={12}>
                        <Stack
                            spacing="0"
                            direction={{
                                base: 'column',
                                md: 'row',
                            }}
                            style={{ margin: "auto", width: "50%" }}
                        >
                            <Stack
                                spacing="4"
                                direction={{
                                    base: 'row',
                                    md: 'column',
                                }}
                                flex="1"
                            >
                                <Stack
                                    spacing="0"
                                    align="center"
                                    direction={{
                                        base: 'column',
                                        md: 'row',
                                    }}
                                >
                                    <Divider
                                        display={isMobile ? 'none' : 'initial'}
                                        orientation={orientation}
                                        borderWidth="2px"
                                        borderColor={'transparent'}
                                    />
                                    <Circle size="8" bg={useColorModeValue('brand.800', 'white')} color={useColorModeValue('white', 'brand.800')}>1</Circle>
                                    <Divider
                                        orientation={orientation}
                                        borderWidth="2px"
                                        borderColor={'gray'}
                                    />
                                </Stack>
                                <Stack
                                    spacing="0.5"
                                    align={{
                                        base: 'start',
                                        md: 'center',
                                    }}
                                >
                                    <Text color={useColorModeValue('brand.800', 'white')} fontWeight="medium">
                                        Select a Job
                                    </Text>
                                </Stack>
                            </Stack>
                            <Stack
                                spacing="4"
                                direction={{
                                    base: 'row',
                                    md: 'column',
                                }}
                                flex="1"
                            >
                                <Stack
                                    spacing="0"
                                    align="center"
                                    direction={{
                                        base: 'column',
                                        md: 'row',
                                    }}
                                >
                                    <Divider
                                        display={isMobile ? 'none' : 'initial'}
                                        orientation={orientation}
                                        borderWidth="2px"
                                        borderColor={'gray'}
                                    />
                                    <Circle size="8" border="1px solid #a3a4b5" color={"#a3a4b5"}>2</Circle>
                                    <Divider
                                        orientation={orientation}
                                        borderWidth="2px"
                                        borderColor={'transparent'}
                                    />
                                </Stack>
                                <Stack
                                    spacing="0.5"
                                    align={{
                                        base: 'start',
                                        md: 'center',
                                    }}
                                >
                                    <Text color={useColorModeValue('brand.800', 'white')} fontWeight="medium">
                                        Confirm Details
                                    </Text>
                                </Stack>
                            </Stack>
                        </Stack>
                        <Divider borderWidth="1px" borderColor="lightgray" my="8" />
                        {/* Job List*/}
                        <Box overflow="auto" minH="96">
                            <Table>
                                <Thead>
                                    <Tr>
                                        <Th><Text color="muted" fontWeight="bold">Status</Text></Th>
                                        <Th><Text color="muted" fontWeight="bold">Job Title</Text></Th>
                                        <Th><Text color="muted" fontWeight="bold">ID</Text></Th>
                                        <Th><Text color="muted" fontWeight="bold">Applicants</Text></Th>
                                        <Th><Text color="muted" fontWeight="bold">Creation Time</Text></Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    {Object.keys(props.jobs).sort((a, b) => parseInt(b) - parseInt(a)).map((key, index) => {
                                        let job = props.jobs[key];
                                        return (
                                            <Tr onClick={() => { setjobInfo(job.job_details), setshowFromExist(true), props.setcopyTitle(job.job_details.job_title) }} style={{ cursor: "pointer" }} transition="margin .2s ease-in-out" _hover={{ backgroundColor: useColorModeValue('#fafcff', '#090d3a') }}>
                                                <Td className="interview-txt9">
                                                    {job.job_details.is_closed == 0 &&
                                                        <Text color='muted'><i className='bx-fw bx bxs-circle' style={{ color: "#13c4a1" }}></i>Published</Text>}
                                                    {job.job_details.is_closed == 1 &&
                                                        <Text color='muted'><i className='bx-fw bx bxs-box' style={{ color: "#090d3a" }}></i>Archived</Text>}
                                                    {job.job_details.is_closed == 2 &&
                                                        <Text color='muted'><i className='bx-fw bx bxs-circle' style={{ color: "#090d3a" }}></i>Closed</Text>}
                                                    {job.job_details.is_closed == 3 &&
                                                        <Text color='muted'><i className='bx-fw bx bxs-circle' style={{ color: "#9cb2c2" }}></i>Draft</Text>}
                                                </Td>
                                                <Td className="interview-txt9">
                                                    <Text color='muted'>{job.job_details.job_title}</Text>
                                                </Td>
                                                <Td className="interview-txt9">
                                                    <Text color='muted'>{job.job_details.job_id}</Text>
                                                </Td>
                                                <Td className="interview-txt9">
                                                    <Text color='muted'>{job?.total_records_exclude_subpage}</Text>
                                                </Td>
                                                <Td className="interview-txt9">
                                                    <Text color='muted'>{job.job_details.create_date.substring(0, 10)}</Text>
                                                </Td>
                                            </Tr>
                                        );
                                    })}
                                </Tbody>
                            </Table>
                        </Box>
                    </Box> :
                    <Box>
                        <AddNewJobFromExist
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
                            jobInfo={jobInfo}
                        />
                    </Box>
                }
            </Box>
        </React.Fragment >
    )
}