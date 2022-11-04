import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { logout, loadProfile } from "../../redux/actions/auth_actions";
import { connect } from "react-redux";
import MediaQuery from 'react-responsive';
import hirebeatlogo from "../../assets/HireBeatLogo.png";
import hirebeatlogotext from "../../assets/HireBeatLogoText.png";
import { FiMenu, FiSettings, FiSun, FiUser, FiHelpCircle, FiCircle } from 'react-icons/fi';
import 'boxicons';
import axios from "axios";
import {
  Box,
  Button,
  Container,
  Divider,
  Flex,
  HStack,
  Stack,
  IconButton,
  useColorModeValue,
  useColorMode,
  useBreakpointValue,
  Image,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
  Text,
  ListIcon,
  ListItem,
  List,
} from '@chakra-ui/react';

export const Header = (props) => {

  const isDesktop = useBreakpointValue({
    base: false,
    lg: true,
  });

  const { colorMode, toggleColorMode } = useColorMode()

  const [job_list, setjob_list] = useState([])

  useEffect(() => {
    //Get most recent jobs
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    let data = { "userid": props.profile.user };
    axios.post("jobs/get-most-recent-jobs", data, config).then((res) => {
      let jobs_list = [];
      for (let i = 0; i < res.data.jobs_list?.length; i++) {
        const newItem = {
          job_id: res.data.jobs_list[i]?.id,
          job_title: res.data.jobs_list[i]?.job_title,
          is_closed: res.data.jobs_list[i]?.is_closed
        };
        jobs_list.push(newItem);
      }
      setjob_list(jobs_list);
    }).catch(error => {
      console.log(error)
    });

    if (localStorage.getItem("token")) {
      props.loadProfile();
    }
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 80) {
        elementId?.classList.add("is-sticky");
      } else {
        elementId?.classList.remove("is-sticky");
      }
    });
    window.scrollTo(0, 0);
  }, []);

  Header.propTypes = {
    auth: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired,
  };

  const trackLogoutSeg = () => {
    //Segment track
    window?.analytics?.track("User - Logout", {
      eventTime: Date()?.toLocaleString(),
    });
  }

  const renderUserLinks = () => {
    let user = JSON.parse(sessionStorage.getItem("user")) || props.auth.user;
    // for the purpose of routing to different links
    if (user == null) {
      user = { "groups": ["non-reviewer"] };
    }
    return (
      <React.Fragment>
        {isDesktop ? (
          <HStack spacing="1">
            {!isAuthenticated ?
              <Link href="https://hirebeat.co">
                <Stack direction='row'>
                  <Image src={hirebeatlogo} alt='logo' boxSize='16%' />
                  <Image src={hirebeatlogotext} alt='logo' boxSize='50%' />
                </Stack>
              </Link> :
              <Link href="/dashboard">
                <Stack direction='row'>
                  <Image src={hirebeatlogo} alt='logo' boxSize='16%' />
                  <Image src={hirebeatlogotext} alt='logo' boxSize='50%' />
                </Stack>
              </Link>
            }
            <Link href="/practice"><Button bg={useColorModeValue("white", "brand.800")} color={useColorModeValue("brand.800", "white")}>Interview</Button></Link>
            <Link href="/resume"><Button bg={useColorModeValue("white", "brand.800")} color={useColorModeValue("brand.800", "white")}>Resume</Button></Link>
            <Popover trigger="hover">
              <PopoverTrigger>
                <Button bg={useColorModeValue("white", "brand.800")} color={useColorModeValue("brand.800", "white")}> Resources <i className="bx-fw bx bx-chevron-down"></i></Button>
              </PopoverTrigger>
              <PopoverContent>
                <PopoverArrow bg={useColorModeValue("brand.800", "white")} />
                <PopoverBody bg={useColorModeValue("white", "brand.800")}>
                  <Stack spacing="2">
                    <Link href="/career-details"><Text color={useColorModeValue("brand.500", "white")}>Find Jobs</Text></Link>
                    <Link href="/job-seekers-companydata"><Text color={useColorModeValue("brand.500", "white")}>Company Tips</Text></Link>
                    <Link href="/bloghome"><Text color={useColorModeValue("brand.500", "white")}>Blog</Text></Link>
                  </Stack>
                </PopoverBody>
              </PopoverContent>
            </Popover>
          </HStack>) :
          (
            <HStack spacing="1">
              {!isAuthenticated ?
                <Link href="https://hirebeat.co">
                  <Stack direction='row'>
                    <Image src={hirebeatlogo} alt='logo' boxSize='10%' />
                    <Image src={hirebeatlogotext} alt='logo' boxSize='30%' />
                  </Stack>
                </Link> :
                <Link href="/dashboard">
                  <Stack direction='row'>
                    <Image src={hirebeatlogo} alt='logo' boxSize='10%' />
                    <Image src={hirebeatlogotext} alt='logo' boxSize='30%' />
                  </Stack>
                </Link>
              }
            </HStack>
          )}
        {isDesktop ? (
          <HStack spacing="4">
            <IconButton color={useColorModeValue("brand.800", "white")} icon={<FiSun fontSize="1rem" />} aria-label="Dark Mode" onClick={toggleColorMode} />
            <a href="/dashboard" style={{ textDecoration: "none" }}><Button colorScheme='blue' bg={useColorModeValue("white", "brand.800")} color={useColorModeValue("brand.500", "white")} variant='outline' borderRadius='2px'>Dashboard</Button></a>
            <Popover trigger="hover">
              <PopoverTrigger>
                <Button variant="link" colorScheme="blue" leftIcon={<FiUser />}>{typeof user.username !== "undefined" ? `  ${user?.username.split("@")[0]}  ` : ""}</Button>
              </PopoverTrigger>
              <PopoverContent>
                <PopoverArrow bg={useColorModeValue("brand.800", "white")} />
                <PopoverBody bg={useColorModeValue("white", "brand.800")}>
                  <Stack spacing="2">
                    <Button colorScheme='blue' bg={useColorModeValue("white", "brand.800")} color={useColorModeValue("brand.500", "white")} variant='outline' _hover={{ bg: '#ff6d00' }} borderRadius='2px' onClick={() => { sessionStorage.clear(); setTimeout(() => { props.logout() }, 300); trackLogoutSeg }}>Log Out</Button>
                  </Stack>
                </PopoverBody>
              </PopoverContent>
            </Popover>
          </HStack>) :
          (
            <HStack spacing="4">
              <Popover trigger="hover">
                <PopoverTrigger>
                  <Button variant="link" colorScheme="blue" leftIcon={<FiUser />}>{typeof user.username !== "undefined" ? `  ${user?.username.split("@")[0]}  ` : ""}</Button>
                </PopoverTrigger>
                <PopoverContent>
                  <PopoverArrow bg={useColorModeValue("brand.800", "white")} />
                  <PopoverBody bg={useColorModeValue("white", "brand.800")}>
                    <Stack spacing="2">
                      <Button colorScheme='blue' bg={useColorModeValue("white", "brand.800")} color={useColorModeValue("brand.500", "white")} variant='outline' _hover={{ bg: '#ff6d00' }} borderRadius='2px' onClick={() => { sessionStorage.clear(); setTimeout(() => { props.logout() }, 300); trackLogoutSeg }}>Log Out</Button>
                    </Stack>
                  </PopoverBody>
                </PopoverContent>
              </Popover>
            </HStack>
          )}
      </React.Fragment>
    );
  };

  const renderGuestLinks = () => {
    return (
      <React.Fragment>
        {isDesktop ? (
          <HStack spacing="4">
            {!isAuthenticated ?
              <Link href="https://hirebeat.co">
                <Stack direction='row'>
                  <Image src={hirebeatlogo} alt='logo' boxSize='16%' />
                  <Image src={hirebeatlogotext} alt='logo' boxSize='50%' />
                </Stack>
              </Link> :
              <Link href="/dashboard">
                <Stack direction='row'>
                  <Image src={hirebeatlogo} alt='logo' boxSize='16%' />
                  <Image src={hirebeatlogotext} alt='logo' boxSize='50%' />
                </Stack>
              </Link>
            }
          </HStack>) :
          (
            <HStack spacing="4">
              {!isAuthenticated ?
                <Link href="https://hirebeat.co">
                  <Stack direction='row'>
                    <Image src={hirebeatlogo} alt='logo' boxSize='10%' />
                    <Image src={hirebeatlogotext} alt='logo' boxSize='30%' />
                  </Stack>
                </Link> :
                <Link href="/dashboard">
                  <Stack direction='row'>
                    <Image src={hirebeatlogo} alt='logo' boxSize='10%' />
                    <Image src={hirebeatlogotext} alt='logo' boxSize='30%' />
                  </Stack>
                </Link>
              }
            </HStack>
          )}
        {isDesktop ? (
          <HStack spacing="4">
            <Popover trigger="hover">
              <PopoverTrigger>
                <Button bg={useColorModeValue("white", "brand.800")} color={useColorModeValue("brand.800", "white")}> Job Seekers <i className="bx-fw bx bx-chevron-down"></i></Button>
              </PopoverTrigger>
              <PopoverContent>
                <PopoverArrow bg={useColorModeValue("brand.800", "white")} />
                <PopoverBody bg={useColorModeValue("white", "brand.800")}>
                  <Stack spacing="2">
                    <Link href="/practice"><HStack><img src="https://hirebeat-assets.s3.amazonaws.com/boxicons/hd1.png" alt="img"></img><Text color={useColorModeValue("brand.500", "white")}>Interview Practice</Text></HStack></Link>
                    <Link href="/resume"><HStack><img src="https://hirebeat-assets.s3.amazonaws.com/boxicons/hd2.png" alt="img"></img><Text color={useColorModeValue("brand.500", "white")}>Resume Optimization</Text></HStack></Link>
                    <Link href="/job-seekers-companydata"><HStack><img src="https://hirebeat-assets.s3.amazonaws.com/boxicons/hd3.png" alt="img"></img><Text color={useColorModeValue("brand.500", "white")}>Top Companies Tips</Text></HStack></Link>
                    <Link href="/job-seekers-howitworks"><Text color={useColorModeValue("brand.500", "white")}>How it works</Text></Link>
                    <Link href="/career-details"><Text color={useColorModeValue("brand.500", "white")}>Find a Job</Text></Link>
                    <Link href="/quiz"><Text color={useColorModeValue("brand.500", "white")}>Career Quiz</Text></Link>
                    <Link href="/pricing"><Text color={useColorModeValue("brand.500", "white")}>Pricing</Text></Link>
                  </Stack>
                </PopoverBody>
              </PopoverContent>
            </Popover>
            <Popover trigger="hover">
              <PopoverTrigger>
                <Button bg={useColorModeValue("white", "brand.800")} color={useColorModeValue("brand.800", "white")}> About Us <i className="bx-fw bx bx-chevron-down"></i></Button>
              </PopoverTrigger>
              <PopoverContent>
                <PopoverArrow bg={useColorModeValue("brand.800", "white")} />
                <PopoverBody bg={useColorModeValue("white", "brand.800")}>
                  <Stack spacing="2">
                    <Link href="/company"><Text color={useColorModeValue("brand.500", "white")}>Company</Text></Link>
                    <Link href="/contact"><Text color={useColorModeValue("brand.500", "white")}>Contact</Text></Link>
                    <Link href="/jobs"><Text color={useColorModeValue("brand.500", "white")}>Join Us</Text></Link>
                    <Link href="/bloghome"><Text color={useColorModeValue("brand.500", "white")}>Blog</Text></Link>
                  </Stack>
                </PopoverBody>
              </PopoverContent>
            </Popover>
            <a href="/login" style={{ textDecoration: "none" }}><Button colorScheme='blue' bg={useColorModeValue("white", "brand.800")} color={useColorModeValue("brand.500", "white")} variant='outline' _hover={{ bg: '#ff6d00' }} borderRadius='2px'>Log In</Button></a>
            <a href="/register" style={{ textDecoration: "none" }}><Button bg="brand.500" color="white" variant='solid' _hover={{ bg: '#ff6d00' }} borderRadius='2px'>Start for Free</Button></a>
            <IconButton color={useColorModeValue("brand.800", "white")} icon={<FiSun fontSize="1rem" />} aria-label="Dark Mode" onClick={toggleColorMode} />
          </HStack>) :
          (
            <HStack spacing="4">
              <Popover trigger="hover">
                <PopoverTrigger>
                  <Button bg={useColorModeValue("white", "brand.800")} color={useColorModeValue("brand.800", "white")}> Job Seekers <i className="bx-fw bx bx-chevron-down"></i></Button>
                </PopoverTrigger>
                <PopoverContent>
                  <PopoverArrow bg={useColorModeValue("brand.800", "white")} />
                  <PopoverBody bg={useColorModeValue("white", "brand.800")}>
                    <Stack spacing="2">
                      <Link href="/practice"><HStack><img src="https://hirebeat-assets.s3.amazonaws.com/boxicons/hd1.png" alt="img"></img><Text color={useColorModeValue("brand.500", "white")}>Interview Practice</Text></HStack></Link>
                      <Link href="/resume"><HStack><img src="https://hirebeat-assets.s3.amazonaws.com/boxicons/hd2.png" alt="img"></img><Text color={useColorModeValue("brand.500", "white")}>Resume Optimization</Text></HStack></Link>
                      <Link href="/job-seekers-companydata"><HStack><img src="https://hirebeat-assets.s3.amazonaws.com/boxicons/hd3.png" alt="img"></img><Text color={useColorModeValue("brand.500", "white")}>Top Companies Tips</Text></HStack></Link>
                      <Link href="/job-seekers-howitworks"><Text color={useColorModeValue("brand.500", "white")}>How it works</Text></Link>
                      <Link href="/career-details"><Text color={useColorModeValue("brand.500", "white")}>Find a Job</Text></Link>
                      <Link href="/quiz"><Text color={useColorModeValue("brand.500", "white")}>Career Quiz</Text></Link>
                      <Link href="/pricing"><Text color={useColorModeValue("brand.500", "white")}>Pricing</Text></Link>
                    </Stack>
                  </PopoverBody>
                </PopoverContent>
              </Popover>
              <Popover>
                <PopoverTrigger>
                  <IconButton bg={useColorModeValue("brand.800", "brand.500")} icon={<FiMenu fontSize="1rem" />} aria-label="Menu" />
                </PopoverTrigger>
                <PopoverContent>
                  <PopoverArrow bg={useColorModeValue("brand.800", "white")} />
                  <PopoverBody bg={useColorModeValue("white", "brand.800")}>
                    <Stack spacing="2">
                      <a href="/login" style={{ textDecoration: "none" }}><Button colorScheme='blue' bg={useColorModeValue("white", "brand.800")} color={useColorModeValue("brand.500", "white")} variant='outline' _hover={{ bg: '#ff6d00' }} borderRadius='2px'>Log In</Button></a>
                      <a href="/register" style={{ textDecoration: "none" }}><Button bg="brand.500" color="white" variant='solid' _hover={{ bg: '#ff6d00' }} borderRadius='2px'>Start for Free</Button></a>
                    </Stack>
                  </PopoverBody>
                </PopoverContent>
              </Popover>
            </HStack>
          )}
      </React.Fragment>
    );
  };

  const renderEmployerLinks = () => {
    let user = JSON.parse(sessionStorage.getItem("user")) || props.auth.user;
    // for the purpose of routing to different links
    if (user == null) {
      user = { "groups": ["non-reviewer"] };
    }
    const renderToAllJobs = () => {
      sessionStorage.clear();
      sessionStorage.setItem('subpage', "jobs");
      window.location.reload(false);
    }
    const renderToCreateJobs = () => {
      sessionStorage.clear();
      sessionStorage.setItem('subpage', "jobCreation");
      window.location.reload(false);
    }
    const renderToAnalytics = () => {
      sessionStorage.clear();
      sessionStorage.setItem('subpage', "analytics");
      window.location.reload(false);
    }
    const renderToCompany = () => {
      sessionStorage.clear();
      sessionStorage.setItem('subpage', "employerProfile");
      window.location.reload(false);
    }
    const renderToIntergration = () => {
      sessionStorage.clear();
      sessionStorage.setItem('subpage', "mergeintergration");
      window.location.reload(false);
    }
    const renderToHelp = () => {
      sessionStorage.clear();
      sessionStorage.setItem('subpage', "help");
      window.location.reload(false);
    }
    const renderToSettings = () => {
      sessionStorage.clear();
      sessionStorage.setItem('subpage', "settings");
      window.location.reload(false);
    }
    const renderToSingleJob = (job_id) => {
      sessionStorage.clear();
      sessionStorage.setItem('subpage', "jobs");
      sessionStorage.setItem('viewPortal', "true");
      sessionStorage.setItem('jobKey', job_id);
      window.location.reload(false);
    }
    return (
      <React.Fragment>
        {isDesktop ? (
          <HStack spacing="1">
            {!isAuthenticated ?
              <Link href="https://hirebeat.co">
                <Stack direction='row'>
                  <Image src={hirebeatlogo} alt='logo' boxSize='16%' />
                  <Image src={hirebeatlogotext} alt='logo' boxSize='50%' />
                </Stack>
              </Link> :
              <Link href="/dashboard">
                <Stack direction='row'>
                  <Image src={hirebeatlogo} alt='logo' boxSize='16%' />
                  <Image src={hirebeatlogotext} alt='logo' boxSize='50%' />
                </Stack>
              </Link>
            }
            <Popover trigger="hover">
              <PopoverTrigger>
                <Button bg={useColorModeValue("white", "brand.800")} color={useColorModeValue("brand.800", "white")} onClick={renderToAllJobs}> Jobs <i className="bx-fw bx bx-chevron-down"></i></Button>
              </PopoverTrigger>
              <PopoverContent>
                <PopoverArrow bg={useColorModeValue("brand.800", "white")} />
                <PopoverBody bg={useColorModeValue("white", "brand.800")} alignItems='left'>
                  <Stack spacing="2" py="1">
                    <List spacing={3}>
                      <Text color={useColorModeValue("brand.800", "white")}>Recent Jobs</Text>
                      {Object.keys(job_list).map((key) => {
                        return (
                          <ListItem>
                            <HStack spacing="2">
                              {job_list[key]?.is_closed == 0 ?
                                <ListIcon as={FiCircle} color="green" /> :
                                <ListIcon as={FiCircle} color="red" />
                              }
                              <Button variant="link" color={useColorModeValue("brand.500", "white")} onClick={() => renderToSingleJob(job_list[key]?.job_id)}>{(job_list[key]?.job_title?.length > 30) ? (job_list[key]?.job_title?.substring(0, 28) + "...") : (job_list[key]?.job_title)}</Button>
                            </HStack>
                          </ListItem>
                        )
                      })}
                      <Divider />
                      <ListItem><Button variant="link" color={useColorModeValue("brand.500", "white")} onClick={renderToAllJobs}>All Jobs</Button></ListItem>
                      <ListItem><Button variant="link" color={useColorModeValue("brand.500", "white")} onClick={renderToCreateJobs}>Create Jobs</Button></ListItem>
                    </List>
                  </Stack>
                </PopoverBody>
              </PopoverContent>
            </Popover>
            <Button bg={useColorModeValue("white", "brand.800")} color={useColorModeValue("brand.800", "white")} onClick={renderToAnalytics}>Analytics</Button>
            <Button bg={useColorModeValue("white", "brand.800")} color={useColorModeValue("brand.800", "white")} onClick={renderToCompany}>Company</Button>
            <Button bg={useColorModeValue("white", "brand.800")} color={useColorModeValue("brand.800", "white")} onClick={renderToIntergration}>Intergration</Button>
          </HStack>) :
          (
            <HStack spacing="1">
              {!isAuthenticated ?
                <Link href="https://hirebeat.co">
                  <Stack direction='row'>
                    <Image src={hirebeatlogo} alt='logo' boxSize='10%' />
                    <Image src={hirebeatlogotext} alt='logo' boxSize='30%' />
                  </Stack>
                </Link> :
                <Link href="/dashboard">
                  <Stack direction='row'>
                    <Image src={hirebeatlogo} alt='logo' boxSize='10%' />
                    <Image src={hirebeatlogotext} alt='logo' boxSize='30%' />
                  </Stack>
                </Link>
              }
            </HStack>
          )}
        {isDesktop ? (
          <HStack spacing="2">
            <IconButton color={useColorModeValue("brand.800", "white")} icon={<FiHelpCircle fontSize="1rem" />} aria-label="Dark Mode" onClick={renderToHelp} />
            <IconButton color={useColorModeValue("brand.800", "white")} icon={<FiSettings fontSize="1rem" />} aria-label="Dark Mode" onClick={renderToSettings} />
            <IconButton color={useColorModeValue("brand.800", "white")} icon={<FiSun fontSize="1rem" />} aria-label="Dark Mode" onClick={toggleColorMode} />
            <Popover trigger="hover">
              <PopoverTrigger>
                <Button variant="link" colorScheme="blue" leftIcon={<FiUser />}>{typeof user.username !== "undefined" ? `  ${user?.username.split("@")[0]}  ` : ""}</Button>
              </PopoverTrigger>
              <PopoverContent>
                <PopoverArrow bg={useColorModeValue("brand.800", "white")} />
                <PopoverBody bg={useColorModeValue("white", "brand.800")}>
                  <Stack spacing="2">
                    <Button colorScheme='blue' bg={useColorModeValue("white", "brand.800")} color={useColorModeValue("brand.500", "white")} variant='outline' _hover={{ bg: '#ff6d00' }} borderRadius='2px' onClick={() => { sessionStorage.clear(); setTimeout(() => { props.logout() }, 300); trackLogoutSeg }}>Log Out</Button>
                  </Stack>
                </PopoverBody>
              </PopoverContent>
            </Popover>
          </HStack>) :
          (
            <HStack spacing="1">
              <IconButton color={useColorModeValue("brand.800", "white")} icon={<FiSun fontSize="1rem" />} aria-label="Dark Mode" onClick={toggleColorMode} />
              <Popover trigger="hover">
                <PopoverTrigger>
                  <Button variant="link" colorScheme="blue" leftIcon={<FiUser />}>{typeof user.username !== "undefined" ? `  ${user?.username.split("@")[0]}  ` : ""}</Button>
                </PopoverTrigger>
                <PopoverContent>
                  <PopoverArrow bg={useColorModeValue("brand.800", "white")} />
                  <PopoverBody bg={useColorModeValue("white", "brand.800")}>
                    <Stack spacing="2">
                      <Button colorScheme='blue' bg={useColorModeValue("white", "brand.800")} color={useColorModeValue("brand.500", "white")} variant='outline' _hover={{ bg: '#ff6d00' }} borderRadius='2px' onClick={() => { sessionStorage.clear(); setTimeout(() => { props.logout() }, 300); trackLogoutSeg }}>Log Out</Button>
                    </Stack>
                  </PopoverBody>
                </PopoverContent>
              </Popover>
              <Popover>
                <PopoverTrigger>
                  <IconButton bg={useColorModeValue("brand.800", "brand.500")} icon={<FiMenu fontSize="1rem" />} aria-label="Menu" />
                </PopoverTrigger>
                <PopoverContent>
                  <PopoverArrow bg={useColorModeValue("brand.800", "white")} />
                  <PopoverBody bg={useColorModeValue("white", "brand.800")}>
                    <Stack spacing="2">
                      <Button bg={useColorModeValue("white", "brand.800")} color={useColorModeValue("brand.800", "white")} onClick={renderToAllJobs}>Jobs</Button>
                      <Button bg={useColorModeValue("white", "brand.800")} color={useColorModeValue("brand.800", "white")} onClick={renderToAnalytics}>Analytics</Button>
                      <Button bg={useColorModeValue("white", "brand.800")} color={useColorModeValue("brand.800", "white")} onClick={renderToCompany}>Company</Button>
                      <Button bg={useColorModeValue("white", "brand.800")} color={useColorModeValue("brand.800", "white")} onClick={renderToIntergration}>Intergration</Button>
                    </Stack>
                  </PopoverBody>
                </PopoverContent>
              </Popover>
            </HStack>
          )}
      </React.Fragment>
    );
  };

  const renderEmployerGuestLinks = (isAuthenticated) => {
    return (
      <React.Fragment>
        {isDesktop ? (
          <HStack spacing="4">
            {!isAuthenticated ?
              <Link href="https://hirebeat.co">
                <Stack direction='row'>
                  <Image src={hirebeatlogo} alt='logo' boxSize='16%' />
                  <Image src={hirebeatlogotext} alt='logo' boxSize='50%' />
                </Stack>
              </Link> :
              <Link href="/dashboard">
                <Stack direction='row'>
                  <Image src={hirebeatlogo} alt='logo' boxSize='16%' />
                  <Image src={hirebeatlogotext} alt='logo' boxSize='50%' />
                </Stack>
              </Link>
            }
          </HStack>) :
          (
            <HStack spacing="4">
              {!isAuthenticated ?
                <Link href="https://hirebeat.co">
                  <Stack direction='row'>
                    <Image src={hirebeatlogo} alt='logo' boxSize='10%' />
                    <Image src={hirebeatlogotext} alt='logo' boxSize='30%' />
                  </Stack>
                </Link> :
                <Link href="/dashboard">
                  <Stack direction='row'>
                    <Image src={hirebeatlogo} alt='logo' boxSize='10%' />
                    <Image src={hirebeatlogotext} alt='logo' boxSize='30%' />
                  </Stack>
                </Link>
              }
            </HStack>
          )}
        {isDesktop ? (
          <HStack spacing="4">
            <Popover trigger="hover">
              <PopoverTrigger>
                <Button bg={useColorModeValue("white", "brand.800")} color={useColorModeValue("brand.800", "white")}> Job Seekers <i className="bx-fw bx bx-chevron-down"></i></Button>
              </PopoverTrigger>
              <PopoverContent>
                <PopoverArrow bg={useColorModeValue("brand.800", "white")} />
                <PopoverBody bg={useColorModeValue("white", "brand.800")}>
                  <Stack spacing="2">
                    <Link href="/job-seekers"><Text color={useColorModeValue("brand.500", "white")}>Home Page</Text></Link>
                    <Divider />
                    <Link href="/practice"><Text color={useColorModeValue("brand.500", "white")}>Interview Practice</Text></Link>
                    <Link href="/resume"><Text color={useColorModeValue("brand.500", "white")}>Resume Optimization</Text></Link>
                    <Link href="/job-seekers-companydata"><Text color={useColorModeValue("brand.500", "white")}>Top Companies Tips</Text></Link>
                    <Link href="/job-seekers-howitworks"><Text color={useColorModeValue("brand.500", "white")}>How it works</Text></Link>
                    <Link href="/career-details"><Text color={useColorModeValue("brand.500", "white")}>Find a Job</Text></Link>
                    <Link href="/quiz"><Text color={useColorModeValue("brand.500", "white")}>Career Quiz</Text></Link>
                    <Link href="/register"><Text color={useColorModeValue("brand.500", "white")}>Create Free Account</Text></Link>
                  </Stack>
                </PopoverBody>
              </PopoverContent>
            </Popover>
            <a href="/" style={{ textDecoration: "none" }}><Button colorScheme='blue' bg={useColorModeValue("white", "brand.800")} color={useColorModeValue("brand.500", "white")} variant='outline' _hover={{ bg: '#ff6d00' }} borderRadius='2px'>Log In</Button></a>
            <a href="/employer_register" style={{ textDecoration: "none" }}><Button bg="brand.500" color="white" variant='solid' _hover={{ bg: '#ff6d00' }} borderRadius='2px'>Start Hiring For Free</Button></a>
            <IconButton color={useColorModeValue("brand.800", "white")} icon={<FiSun fontSize="1rem" />} aria-label="Dark Mode" onClick={toggleColorMode} />
          </HStack>) :
          (
            <HStack spacing="4">
              <Popover trigger="hover">
                <PopoverTrigger>
                  <Button bg={useColorModeValue("white", "brand.800")} color={useColorModeValue("brand.800", "white")}> Job Seekers <i className="bx-fw bx bx-chevron-down"></i></Button>
                </PopoverTrigger>
                <PopoverContent>
                  <PopoverArrow bg={useColorModeValue("brand.800", "white")} />
                  <PopoverBody bg={useColorModeValue("white", "brand.800")}>
                    <Stack spacing="2">
                      <Link href="/job-seekers"><Text color={useColorModeValue("brand.500", "white")}>Home Page</Text></Link>
                      <Divider />
                      <Link href="/practice"><Text color={useColorModeValue("brand.500", "white")}>Interview Practice</Text></Link>
                      <Link href="/resume"><Text color={useColorModeValue("brand.500", "white")}>Resume Optimization</Text></Link>
                      <Link href="/job-seekers-companydata"><Text color={useColorModeValue("brand.500", "white")}>Top Companies Tips</Text></Link>
                      <Link href="/job-seekers-howitworks"><Text color={useColorModeValue("brand.500", "white")}>How it works</Text></Link>
                      <Link href="/career-details"><Text color={useColorModeValue("brand.500", "white")}>Find a Job</Text></Link>
                      <Link href="/quiz"><Text color={useColorModeValue("brand.500", "white")}>Career Quiz</Text></Link>
                      <Link href="/register"><Text color={useColorModeValue("brand.500", "white")}>Create Free Account</Text></Link>
                    </Stack>
                  </PopoverBody>
                </PopoverContent>
              </Popover>
              <Popover>
                <PopoverTrigger>
                  <IconButton bg={useColorModeValue("brand.800", "brand.500")} icon={<FiMenu fontSize="1rem" />} aria-label="Menu" />
                </PopoverTrigger>
                <PopoverContent>
                  <PopoverArrow bg={useColorModeValue("brand.800", "white")} />
                  <PopoverBody bg={useColorModeValue("white", "brand.800")}>
                    <Stack spacing="2">
                      <a href="/" style={{ textDecoration: "none" }}><Button colorScheme='blue' bg={useColorModeValue("white", "brand.800")} color={useColorModeValue("brand.500", "white")} variant='outline' _hover={{ bg: '#ff6d00' }} borderRadius='2px'>Log In</Button></a>
                      <a href="/employer_register" style={{ textDecoration: "none" }}><Button bg="brand.500" color="white" variant='solid' _hover={{ bg: '#ff6d00' }} borderRadius='2px'>Start Hiring For Free</Button></a>
                    </Stack>
                  </PopoverBody>
                </PopoverContent>
              </Popover>
            </HStack>
          )}
      </React.Fragment >
    );
  };

  const renderReviewerLinks = () => {
    return (
      <React.Fragment>
        {isDesktop ? (
          <HStack spacing="4">
            {!isAuthenticated ?
              <Link href="https://hirebeat.co">
                <Stack direction='row'>
                  <Image src={hirebeatlogo} alt='logo' boxSize='16%' />
                  <Image src={hirebeatlogotext} alt='logo' boxSize='50%' />
                </Stack>
              </Link> :
              <Link href="/dashboard">
                <Stack direction='row'>
                  <Image src={hirebeatlogo} alt='logo' boxSize='16%' />
                  <Image src={hirebeatlogotext} alt='logo' boxSize='50%' />
                </Stack>
              </Link>
            }
          </HStack>) :
          (
            <HStack spacing="4">
              {!isAuthenticated ?
                <Link href="https://hirebeat.co">
                  <Stack direction='row'>
                    <Image src={hirebeatlogo} alt='logo' boxSize='10%' />
                    <Image src={hirebeatlogotext} alt='logo' boxSize='30%' />
                  </Stack>
                </Link> :
                <Link href="/dashboard">
                  <Stack direction='row'>
                    <Image src={hirebeatlogo} alt='logo' boxSize='10%' />
                    <Image src={hirebeatlogotext} alt='logo' boxSize='30%' />
                  </Stack>
                </Link>
              }
            </HStack>
          )}
        <HStack>
          <Button bg="brand.500" color="white" variant='solid' _hover={{ bg: '#ff6d00' }} borderRadius='2px' onClick={() => { sessionStorage.clear(); setTimeout(() => { props.logout() }, 300); trackLogoutSeg }}>Logout</Button>
        </HStack>
      </React.Fragment>
    );
  };

  let isAuthenticated = JSON.parse(sessionStorage.getItem("isAuthenticated")) || props.auth.isAuthenticated;
  let user = JSON.parse(sessionStorage.getItem("user")) || props.auth.user;
  // for the purpose of routing to different links
  if (user == null) {
    user = { "groups": ["non-reviewer"] };
  }
  var uri = window.location.pathname;
  uri = uri.substring(1, uri.length);
  if ((uri.includes("apply-job")) || (uri.includes("company-branding"))) {
    return null;
  } else {
    return (
      <React.Fragment>
        <Box
          as="section"
        >
          <MediaQuery minDeviceWidth={1224}>
            <Box as="nav" bg={useColorModeValue("white", "brand.800")} color="on-accent" id="navbar" minW="1290px">
              <Container
                py={{
                  base: '3',
                  lg: '4',
                }}
              >
                <Flex justify="space-between">
                  {isAuthenticated
                    ? typeof user.groups !== "undefined" && user.groups.length > 0 && user.groups[0] == "reviewers"
                      ? renderReviewerLinks(isAuthenticated)
                      : props.profile.is_employer
                        ? renderEmployerLinks(isAuthenticated)
                        : renderUserLinks(isAuthenticated)
                    : (uri.includes("talent-profile")) ?
                      renderGuestLinks(isAuthenticated) :
                      (uri.includes("job-seekers") || uri == "practice" || uri == "resume" || uri == "register" || uri == "login"
                        || uri == "career-details" || uri == "quiz" || uri == "pricing"
                        || uri == "company" || uri == "contact" || uri == "bloghome") ?
                        renderGuestLinks(isAuthenticated)
                        : renderEmployerGuestLinks(isAuthenticated)
                  }
                </Flex>
              </Container>
            </Box>
          </MediaQuery>
          <MediaQuery maxDeviceWidth={1223}>
            <Box as="nav" bg={useColorModeValue("white", "brand.800")} color="on-accent" id="navbar">
              <Container
                py={{
                  base: '3',
                  lg: '4',
                }}
              >
                <Flex justify="space-between">
                  {isAuthenticated
                    ? typeof user.groups !== "undefined" && user.groups.length > 0 && user.groups[0] == "reviewers"
                      ? renderReviewerLinks(isAuthenticated)
                      : props.profile.is_employer
                        ? renderEmployerLinks(isAuthenticated)
                        : renderUserLinks(isAuthenticated)
                    : (uri.includes("talent-profile")) ?
                      renderGuestLinks(isAuthenticated) :
                      (uri.includes("job-seekers")) ?
                        renderGuestLinks(isAuthenticated)
                        : renderEmployerGuestLinks(isAuthenticated)
                  }
                </Flex>
              </Container>
            </Box>
          </MediaQuery>
        </Box>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  profile: state.auth_reducer.profile,
  auth: state.auth_reducer,
});

export default connect(mapStateToProps, { logout, loadProfile })(Header);