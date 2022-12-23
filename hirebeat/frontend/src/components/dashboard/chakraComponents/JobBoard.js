import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Box, Heading, useColorModeValue, Text, Flex, Spacer, Switch, HStack, Image, Button, Stack, Modal, ModalOverlay, ModalContent, ModalCloseButton, ModalBody, Tooltip } from '@chakra-ui/react';
import axios from "axios";
import Spinner from 'react-bootstrap/Spinner';

const stripePromise = loadStripe('pk_live_51H4wpRKxU1MN2zWM7NHs8vqQsc7FQtnL2atz6OnBZKzBxJLvdHAivELe5MFetoqGOHw3SD5yrtanVVE0iOUQFSHj00NmcZWpPd');

const isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));

function getClientReferenceId() {
    return window?.Rewardful && window?.Rewardful.referral || ('checkout_' + (new Date).getTime());
}

export const JobBoard = (props) => {
    const [zipCheck, setzipCheck] = useState((props.job.job_details.job_post == 1 ? true : false));
    const [loading, setloading] = useState(false);
    const [showIframe, setshowIframe] = useState(false);
    const [marketplace_iframe, setmarketplace_iframe] = useState("");
    const zipSwtich = (e) => {
        let switch1 = document.getElementById("ziprecruiterswtich")
        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };
        if (props.job.job_details.job_post != 2) {
            if (switch1.checked) {
                let jobt_data1 = { "jobid": props.job.job_details.id, "job_post": 1 }
                axios.post("jobs/job-update-single-jobpost", jobt_data1, config).then((res) => {
                    console.log(res)
                }).catch(error => {
                    console.log(error)
                });
                setzipCheck(true);
                alert("ZipRecruiter Activated");
            } else {
                let jobt_data2 = { "jobid": props.job.job_details.id, "job_post": 0 }
                axios.post("jobs/job-update-single-jobpost", jobt_data2, config).then((res) => {
                    console.log(res)
                }).catch(error => {
                    console.log(error)
                });
                setzipCheck(false);
            }
        }
    };

    const handlePremiumJobUpgrade = async (event) => {
        // When the customer clicks on the button, redirect them to Checkout.
        const stripe = await stripePromise;
        const { error } = await stripe.redirectToCheckout({
            lineItems: [{
                price: 'price_1KUDqYKxU1MN2zWM9fkagRXl', // Replace with the ID of your price
                quantity: 1,
            }],
            mode: 'payment',
            successUrl: 'https://app.hirebeat.co/pjobpayment',
            cancelUrl: 'https://app.hirebeat.co/pjobfail',
            billingAddressCollection: 'auto',
            customerEmail: props.user.email,
            clientReferenceId: getClientReferenceId()
        });
        error.message;
    };

    const openJobTportal = () => {
        setloading(true);
        // JobTarget steps:
        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };
        let full_address = props.job.job_details.job_location?.split("|")[0];
        let city = full_address.split(",")[0].trim()
        let state = full_address.split(",")[1].trim()
        let country = full_address.split(",")[2].trim()
        let data1 = {
            "token": props.jobt_token,
            "job": {
                "requisition_name": props.job.job_details.id,
                "company_name": props.employerProfileDetail.name,
                "title": props.job.job_details.job_title,
                "description": props.job.job_details.job_description,
                "job_view_url": props.job.job_details.job_url?.replaceAll(' ', '%20'),
                "apply_url": props.job.job_details.job_url?.replaceAll(' ', '%20'),
                "location": {
                    "city": city,
                    "state": state,
                    "country": country
                },
                "job_type": props.job.job_details.job_type,
                "entrylevel": (props.job.job_details.job_level == "Entry Level") ? 1 : 0,
                "easy_apply": 1,
                "easy_apply_type": "basic",
                // "questionnaire_webhook": "https://" + window.location.hostname + "/jobs/get-questions-from-job?jobid=" + this.props.job.job_details.id,
                "application_delivery_webhook": "https://" + window.location.hostname + "/jobs/add-new-apply-candidate-from-jobtarget"
            }
        }
        axios.post("https://atsapi.jobtarget.com/api/employer/jobs/create", data1, config).then((res1) => {
            if (res1.data.status == 0 || res1.data.status == "0") {
                setmarketplace_iframe(res1.data.marketplace_iframe);
                setshowIframe(true);
                setloading(false);
                let data3 = { "job_id": props.job.job_details.id, "jobt_job_id": res1.data.job_id }
                axios.post("jobs/job-target-job-id-update", data3, config).then((res3) => {
                    console.log(res3)
                }).catch(error => {
                    console.log(error)
                });
            } else {
                let data2 = {
                    "token": props.jobt_token,
                    "requisition_name": props.job.job_details.id
                }
                axios.post("https://atsapi.jobtarget.com/api/employer/jobs/jobdetails", data2, config).then((res2) => {
                    console.log(res2);
                    if (res2.data.status == 0 || res2.data.status == "0") {
                        setmarketplace_iframe(res2.data.marketplace_iframe);
                        setshowIframe(true);
                        setloading(false);
                        let data3 = { "job_id": props.job.job_details.id, "jobt_job_id": res2.data.job_id }
                        axios.post("jobs/job-target-job-id-update", data3, config).then((res3) => {
                            console.log(res3)
                        }).catch(error => {
                            console.log(error)
                        });
                    }
                }).catch(error => {
                    console.log(error)
                });
            }
        }).catch(error => {
            console.log(error)
        });
        //Segment info
        window?.analytics?.track("Job - View Job Target", {
            viewJobtargetTime: Date()?.toLocaleString(),
        });
    };

    return (
        <React.Fragment>
            <Box py='5'>
                <Heading as='h6' size='xs' color="muted" mb='5'>Free Job Board</Heading>
                <Box
                    bg="bg-surface"
                    boxShadow={useColorModeValue('sm', 'sm-dark')}
                    borderRadius="lg"
                    p={{ base: '4', md: '6' }}
                    width='96'
                >
                    <Image
                        objectFit='cover'
                        src='https://hirebeat-assets.s3.amazonaws.com/Employer/ziprecruiter_logo.png'
                        alt='Dan Abramov'
                    />
                    <Flex mb='5' mt='5'>
                        <Text color='muted' fontWeight='bold' fontSize='md'>ZipRecruiter</Text>
                        <Spacer />
                        <Text color='muted' fontWeight='bold' fontSize='md'>Free</Text>
                    </Flex>
                    <Text color='muted' fontSize='sm'>United States · General</Text>
                    <Text color='muted' fontSize='sm'>ZipRecruiter is an international generic job board with 110M job seekers and 2.8M businesses.</Text>
                    <HStack mt='5'>
                        <Spacer />
                        <Switch id="ziprecruiterswtich" colorScheme='blue' size='lg' onChange={zipSwtich} isChecked={zipCheck} />
                    </HStack>
                </Box>
                <Heading as='h6' size='xs' color="muted" mb='5' mt='10'>Premium Job Board</Heading>
                <Stack direction='row' spacing='10'>
                    <Box
                        bg="bg-surface"
                        boxShadow={useColorModeValue('sm', 'sm-dark')}
                        borderRadius="lg"
                        p={{ base: '4', md: '6' }}
                        width='96'
                    >
                        <Image
                            objectFit='cover'
                            src='https://hirebeat-assets.s3.amazonaws.com/Employer/appcast_logo.png'
                            alt='Dan Abramov'
                        />
                        <Text mt='5' color='muted' fontWeight='bold' fontSize='md'>Appcast</Text>
                        <Flex mb='5'>
                            <Text color='muted' fontWeight='bold' fontSize='sm'>Active Promotion - 30 days</Text>
                            <Spacer />
                            <Text color='muted' fontWeight='bold' fontSize='sm'>$200.00</Text>
                        </Flex>
                        <Text color='muted' fontSize='sm'>United States · General</Text>
                        <Text color='muted' fontSize='sm'>Appcast uses programmatic distribution across a global and diversified set of job sites that allows the use of data and algorithms to determine where your job ads will reach the best candidates..</Text>
                        <HStack mt='5'>
                            <Spacer />
                            <Button _hover={{ bg: "blue.400" }} type='button' colorScheme='orange' onClick={handlePremiumJobUpgrade}>Add</Button>
                        </HStack>
                    </Box>
                    <Box
                        bg="bg-surface"
                        boxShadow={useColorModeValue('sm', 'sm-dark')}
                        borderRadius="lg"
                        p={{ base: '4', md: '6' }}
                        width='96'
                    >
                        <Image
                            objectFit='cover'
                            src='https://hirebeat-assets.s3.amazonaws.com/Employer/jobtarget_logo.png'
                            alt='Dan Abramov'
                        />
                        <Text mt='5' mb='5' color='muted' fontWeight='bold' fontSize='md'>Job Target</Text>
                        <Text color='muted' fontSize='sm'>United States · General</Text>
                        <Text color='muted' fontSize='sm'>JobTarget connects to 25,000+ job boards and also offers automatic programmatic advertising. All orders are made directly with JobTarget.</Text>
                        <HStack mt='5'>
                            <Spacer />
                            <Button _hover={{ bg: "orange.500" }} type='button' colorScheme='blue' onClick={openJobTportal}>
                                {loading ? <span><Spinner animation="border" size="sm" /> loading</span> : <span>Manage</span>}
                            </Button>
                            {isSafari &&
                                <Tooltip label="If the iframe opens with an error, try going to Safari/Preferences/Privacy and uncheck Prevent cross-site tracking." aria-label='A tooltip'>
                                    <i class='bx-fw bx bxs-info-circle bx-sm' style={{ color: "#dfdfdf" }}></i>
                                </Tooltip>}
                        </HStack>
                    </Box>
                </Stack>
                {/* Open Job Target Portal */}
                <Modal onClose={() => setshowIframe(false)} size={"7xl"} isOpen={showIframe} closeOnOverlayClick={false}>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalCloseButton />
                        <ModalBody>
                            <Box>
                                <iframe src={marketplace_iframe} style={{ width: "98%", height: "50rem" }}></iframe>
                            </Box>
                        </ModalBody>
                    </ModalContent>
                </Modal>
            </Box>
        </React.Fragment>
    )
}