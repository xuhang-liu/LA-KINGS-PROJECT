import React, { useEffect, Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import MediaQuery from 'react-responsive';
import { login, exchangeToken } from "../../redux/actions/auth_actions";
import Footer from "../layout/Footer";
import DocumentMeta from 'react-document-meta';
import axios from "axios";
import { Center, Heading, Box, Button, Container, FormControl, FormLabel, HStack, Input, Stack, Link } from '@chakra-ui/react';

function ScrollToTopOnMount() {
  useEffect(() => {
    window?.scrollTo(0, 0);
  }, []);

  return null;
}

export class EmployerLogin extends Component {
  state = {
    username: "",
    password: "",
    login_fail: false,
  };

  setLoginFail = () => {
    this.setState({ login_fail: true });
  }
  setLoginFail1 = () => {
    this.setState({ login_fail: false });
  }

  static propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
    user: PropTypes.object,
  };

  onSubmit = (e) => {
    e.preventDefault();
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    let user_pw = { "username": this.state.username?.toLowerCase(), "password": this.state.password };

    axios.post("api/check_user_login", user_pw, config).then((res) => {
      if (res.data.data) {
        this.setLoginFail1();
        this.props.login(this.state.username?.toLowerCase(), this.state.password);
      } else {
        this.setLoginFail();
      }
    }).catch(error => {
      console.log(error)
    });
    //Segment info
    window?.analytics?.track("User - Login", {
      loginTime: Date().toLocaleString(),
      username: this.state.username?.toLowerCase()
    });
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  decideProvider = (provider) => {
    switch (provider) {
      case "facebook":
        return provider;
      case "google":
      case "linkedin":
        return provider + "-oauth2";
      default:
      // Do nothing
    }
  };

  render() {
    const meta = {
      title: 'HireBeat – Employer Login',
      description: 'Employer Login Info',
      meta: {
        charset: 'utf-8',
        name: {
          keywords: 'hiring tool return on investment, hiring tool roi, hr applicant tracking, roi recruitment process'
        }
      }
    };
    if (this.props?.isAuthenticated) {
      if (this.props?.user?.groups[0] == "reviewers") {
        return <Redirect to="/review" />;
      } else {
        return <Redirect to="/dashboard" />;
      }
    }
    return (
      <DocumentMeta {...meta}>
        <React.Fragment>
          <ScrollToTopOnMount />
          <MediaQuery minDeviceWidth={1224}>
            <Center bg="brand.500" h='12rem' minW="1290px">
              <Heading color="white">Welcome back!</Heading>
            </Center>
          </MediaQuery>
          <MediaQuery maxDeviceWidth={1223}>
            <Center bg="brand.500" h='12rem' px="1rem">
              <Heading color="white" fontSize="2.6rem">Welcome back!</Heading>
            </Center>
          </MediaQuery>
          <MediaQuery minDeviceWidth={1224}>
            <Box bg={{ base: 'transparent', sm: 'bg-surface' }} minW="1290px">
              <Container maxW="lg" py={{ base: '6', md: '12' }} px={{ base: '0', sm: '8' }}>
                <Stack spacing="8">
                  <Box
                    py={{ base: '0', sm: '8' }}
                    px={{ base: '4', sm: '10' }}
                    bg={{ base: 'transparent', sm: 'bg-surface' }}
                    boxShadow='md'
                    borderRadius='xl'
                  >
                    <Stack spacing="6">
                      <Stack spacing="5">
                        <FormControl>
                          <FormLabel htmlFor="email">Email</FormLabel>
                          <Input id="username" type="email" name="username" value={this.state.username} onChange={this.onChange} />
                          <FormLabel htmlFor="password" pt="2">Password</FormLabel>
                          <Input id="password" type="password" name="password" value={this.state.password} onChange={this.onChange} />
                        </FormControl>
                        <div style={{ marginTop: "0.6rem", marginBottom: "0.6rem" }}>
                          {this.state.login_fail && <p className="share-p4" style={{ fontWeight: "600" }}>Incorrect username or password. Please try again.</p>}
                        </div>
                      </Stack>
                      <HStack justify="space-between">
                        <Link href="/employer_register">
                          <Button variant="link" colorScheme="blue">
                            Create account
                          </Button>
                        </Link>
                        <Link href="/password_reset" isExternal>
                          <Button variant="link" colorScheme="blue" size="sm">
                            Forgot password?
                          </Button>
                        </Link>
                      </HStack>
                      <Stack spacing="6">
                        <Button variant="primary" onClick={this.onSubmit} type="submit">Sign in</Button>
                      </Stack>
                    </Stack>
                  </Box>
                </Stack>
              </Container>
            </Box>
          </MediaQuery>
          <MediaQuery maxDeviceWidth={1223}>
            <Box bg={{ base: 'transparent', sm: 'bg-surface' }}>
              <Container maxW="lg" py={{ base: '6', md: '12' }} px={{ base: '0', sm: '8' }}>
                <Stack spacing="8">
                  <Box
                    py={{ base: '0', sm: '0' }}
                    px={{ base: '4', sm: '10' }}
                    bg={{ base: 'transparent', sm: 'bg-surface' }}
                    boxShadow='md'
                    borderRadius='xl'
                  >
                    <Stack spacing="6">
                      <Stack spacing="5">
                        <FormControl>
                          <FormLabel htmlFor="email" color='brand.800'>Email</FormLabel>
                          <Input id="username" type="email" name="username" value={this.state.username} onChange={this.onChange} />
                          <FormLabel htmlFor="password" pt="2" color='brand.800'>Password</FormLabel>
                          <Input id="password" type="password" name="password" value={this.state.password} onChange={this.onChange} />
                        </FormControl>
                        <div style={{ marginTop: "0.6rem", marginBottom: "0.6rem" }}>
                          {this.state.login_fail && <p className="share-p4" style={{ fontWeight: "600" }}>Incorrect username or password. Please try again.</p>}
                        </div>
                      </Stack>
                      <HStack justify="space-between">
                        <Link href="/employer_register">
                          <Button variant="link" colorScheme="blue">
                            Create account
                          </Button>
                        </Link>
                        <Link href="/password_reset" isExternal>
                          <Button variant="link" colorScheme="blue" size="sm">
                            Forgot password?
                          </Button>
                        </Link>
                      </HStack>
                      <Stack spacing="6">
                        <Button variant="primary" onClick={this.onSubmit} type="submit">Sign in</Button>
                      </Stack>
                    </Stack>
                  </Box>
                </Stack>
              </Container>
            </Box>
          </MediaQuery>
          <Footer />
        </React.Fragment>
      </DocumentMeta>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth_reducer.isAuthenticated,
  user: state.auth_reducer.user,
  profile: state.auth_reducer.profile,
});

export default connect(mapStateToProps, { login, exchangeToken })(EmployerLogin);
