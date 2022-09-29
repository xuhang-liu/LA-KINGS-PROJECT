import React, { useState, useEffect } from 'react';
import { Flex, Stack, Text, useColorModeValue, Button, HStack, Heading, IconButton } from '@chakra-ui/react';
import { FiMenu, FiChevronLeft, FiAlignCenter, FiFileText, FiVideo, FiMessageCircle, FiHeart } from 'react-icons/fi';

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
                        <i className='bx-fw bx bxs-circle' style={{ color: "#13c4a1" }}></i>
                        <Text fontSize="md" color="subtle" fontWeight="medium">Published</Text>
                    </HStack>
                    <Heading as='h6' size='xs' color="muted">{props?.curJob?.job_details?.job_title}</Heading>
                </Stack>
                <Stack>
                    <Text fontSize="sm" color="subtle" fontWeight="medium">
                        Sourcing
                    </Text>
                    <Stack spacing="1">
                        <Button variant='outline'>AI Sourcing</Button>
                        <Button variant='outline'>Job Board</Button>
                        <Button variant='outline'>Social Media Share</Button>
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
                                    <Button variant='solid' leftIcon={<FiAlignCenter />} onClick={props.renderResumeScreen}>Resume Review</Button> :
                                    <Button variant='outline' leftIcon={<FiAlignCenter />} onClick={props.renderResumeScreen}>Resume Review</Button>}
                            </Stack> :
                            <Stack>
                                <Button variant='outline' leftIcon={<FiAlignCenter />}>Resume Review</Button>
                            </Stack>
                        }
                        {(props.reviewerStage.includes("videoInterview") || props.reviewerStage?.length == 0) ?
                            <Stack>
                                {props.portalSubpage == "videoInterview" ?
                                    <Button variant='solid' leftIcon={<FiAlignCenter />} onClick={props.renderVideoInterview}>Video Screening</Button> :
                                    <Button variant='outline' leftIcon={<FiAlignCenter />} onClick={props.renderVideoInterview}>Video Screening</Button>}
                            </Stack> :
                            <Stack>
                                <Button variant='outline' leftIcon={<FiAlignCenter />}>Video Screening</Button>
                            </Stack>
                        }
                        {(props.reviewerStage.includes("liveInterview") || props.reviewerStage?.length == 0) ?
                            <Stack>
                                {props.portalSubpage == "liveInterview" ?
                                    <Button variant='solid' leftIcon={<FiAlignCenter />} onClick={props.renderLiveInterview}>Live Interviews</Button> :
                                    <Button variant='outline' leftIcon={<FiAlignCenter />} onClick={props.renderLiveInterview}>Live Interviews</Button>}
                            </Stack> :
                            <Stack>
                                <Button variant='outline' leftIcon={<FiAlignCenter />}>Live Interviews</Button>
                            </Stack>
                        }
                        {(props.reviewerStage.includes("shortList") || props.reviewerStage?.length == 0) ?
                            <Stack>
                                {props.portalSubpage == "shortList" ?
                                    <Button variant='solid' leftIcon={<FiAlignCenter />} onClick={props.renderShortList}>Short List</Button> :
                                    <Button variant='outline' leftIcon={<FiAlignCenter />} onClick={props.renderShortList}>Short List</Button>}
                            </Stack> :
                            <Stack>
                                <Button variant='outline' leftIcon={<FiAlignCenter />}>Short List</Button>
                            </Stack>
                        }
                    </Stack>
                </Stack>
                <Stack>
                    <Button variant='solid' onClick={props.renderPipeline}>Overview and Team Setting</Button>
                </Stack>
            </Stack>
        </Stack>
    </Flex>
)