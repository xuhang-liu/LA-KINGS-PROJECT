import React from 'react';
import { Flex, Stack, Text, useColorModeValue, Button, HStack, Heading, IconButton } from '@chakra-ui/react';
import { FiChevronLeft, FiAlignCenter, FiFileText, FiVideo, FiMessageCircle, FiHeart, FiEdit } from 'react-icons/fi';

export const EmployerSidebar = (props) => (
    <Flex
        flex="1"
        bg="bg-surface"
        boxShadow={useColorModeValue('sm', 'sm-dark')}
        maxW={{
            base: 'full',
            sm: 'xs',
        }}
        py={{
            base: '6',
            sm: '8',
        }}
        px={{
            base: '4',
            sm: '6',
        }}
    >
        <Stack justify="space-between" spacing="1" width="full">
            <Stack spacing="8" shouldWrapChildren>
                <Stack>
                    <HStack>
                        <IconButton aria-label='Search database' icon={<FiChevronLeft />} onClick={() => { props.setViewPortal(false); sessionStorage.setItem("viewPortal", "false"); props.getAllJobs(this.props.user.id, 1, "", "", ""); props.setShowSidebarFalse(); sessionStorage.removeItem("selectedSubpage"); sessionStorage.removeItem("selectedSubpageForJob") }} />
                        {props?.curJob?.job_details?.is_closed == 0 ?
                            <i className='bx-fw bx bxs-circle' style={{ color: "#13c4a1" }}></i>
                            : <i className='bx-fw bx bxs-circle' style={{ color: "#090d3a" }}></i>}
                        {props?.curJob?.job_details?.is_closed == 0 &&
                            <Text fontSize="md" color="subtle" fontWeight="medium">Published</Text>}
                        {props?.curJob?.job_details?.is_closed == 1 &&
                            <Text fontSize="md" color="subtle" fontWeight="medium">Archived</Text>}
                        {props?.curJob?.job_details?.is_closed == 2 &&
                            <Text fontSize="md" color="subtle" fontWeight="medium">Closed</Text>}
                        {(props.reviewer_type != "subr") &&
                            <IconButton aria-label='Search database' icon={<FiEdit />} onClick={() => { props.setJobInfo(props.curJob.job_details); props.renderJobEdition() }} />}
                    </HStack>
                    <Heading as='h6' size='xs' color="muted">{props?.curJob?.job_details?.job_title}</Heading>
                </Stack>
                <Stack>
                    <Text fontSize="sm" color="subtle" fontWeight="medium">
                        Sourcing
                    </Text>
                    <Stack spacing="1">
                        {(props.reviewer_type != "subr") &&
                            <Stack>
                                {props.portalSubpage == "aiSourcing" ?
                                    <Button variant='solid' onClick={props.renderAISourcing}>AI Sourcing</Button> :
                                    <Button variant='outline' onClick={props.renderAISourcing}>AI Sourcing</Button>}
                            </Stack>}
                        {(props.reviewer_type != "subr") &&
                            <Stack>
                                {props.portalSubpage == "jobboardshare" ?
                                    <Button variant='solid' onClick={props.renderJobBoardShare}>Job Board</Button> :
                                    <Button variant='outline' onClick={props.renderJobBoardShare}>Job Board</Button>}
                            </Stack>}
                        {props.portalSubpage == "socialMediaShare" ?
                            <Button variant='solid' onClick={props.renderSocialMediaShare}>Social Media Share</Button> :
                            <Button variant='outline' onClick={props.renderSocialMediaShare}>Social Media Share</Button>}
                    </Stack>
                </Stack>
                <Stack>
                    <Text fontSize="sm" color="subtle" fontWeight="medium">
                        Manage Applicants
                    </Text>
                    <Stack spacing="1">
                        {(props.reviewerStage.includes("allCandidates") || props.reviewerStage?.length == 0) ?
                            <Stack>
                                {props.portalSubpage == "allCandidates" ?
                                    <Button variant='solid' leftIcon={<FiAlignCenter />} onClick={props.renderAllCandidates}>All Candidates</Button> :
                                    <Button variant='outline' leftIcon={<FiAlignCenter />} onClick={props.renderAllCandidates}>All Candidates</Button>}
                            </Stack> :
                            <Stack>
                                <Button variant='outline' leftIcon={<FiAlignCenter />}>All Candidates</Button>
                            </Stack>
                        }
                        {(props.reviewerStage.includes("resumeScreen") || props.reviewerStage?.length == 0) ?
                            <Stack>
                                {props.portalSubpage == "resumeScreen" ?
                                    <Button variant='solid' leftIcon={<FiFileText />} onClick={props.renderResumeScreen}>Resume Review</Button> :
                                    <Button variant='outline' leftIcon={<FiFileText />} onClick={props.renderResumeScreen}>Resume Review</Button>}
                            </Stack> :
                            <Stack>
                                <Button variant='outline' leftIcon={<FiFileText />}>Resume Review</Button>
                            </Stack>
                        }
                        {(props.reviewerStage.includes("videoInterview") || props.reviewerStage?.length == 0) ?
                            <Stack>
                                {props.portalSubpage == "videoInterview" ?
                                    <Button variant='solid' leftIcon={<FiVideo />} onClick={props.renderVideoInterview}>Video Screening</Button> :
                                    <Button variant='outline' leftIcon={<FiVideo />} onClick={props.renderVideoInterview}>Video Screening</Button>}
                            </Stack> :
                            <Stack>
                                <Button variant='outline' leftIcon={<FiVideo />}>Video Screening</Button>
                            </Stack>
                        }
                        {(props.reviewerStage.includes("liveInterview") || props.reviewerStage?.length == 0) ?
                            <Stack>
                                {props.portalSubpage == "liveInterview" ?
                                    <Button variant='solid' leftIcon={<FiMessageCircle />} onClick={props.renderLiveInterview}>Live Interviews</Button> :
                                    <Button variant='outline' leftIcon={<FiMessageCircle />} onClick={props.renderLiveInterview}>Live Interviews</Button>}
                            </Stack> :
                            <Stack>
                                <Button variant='outline' leftIcon={<FiMessageCircle />}>Live Interviews</Button>
                            </Stack>
                        }
                        {(props.reviewerStage.includes("shortList") || props.reviewerStage?.length == 0) ?
                            <Stack>
                                {props.portalSubpage == "shortList" ?
                                    <Button variant='solid' leftIcon={<FiHeart />} onClick={props.renderShortList}>Short List</Button> :
                                    <Button variant='outline' leftIcon={<FiHeart />} onClick={props.renderShortList}>Short List</Button>}
                            </Stack> :
                            <Stack>
                                <Button variant='outline' leftIcon={<FiHeart />}>Short List</Button>
                            </Stack>
                        }
                    </Stack>
                </Stack>
                {(props.reviewer_type != "subr") &&
                    <Stack>
                        <Button variant='solid' onClick={props.renderPipeline}>Overview and Team Setting</Button>
                    </Stack>}
            </Stack>
        </Stack>
    </Flex>
)