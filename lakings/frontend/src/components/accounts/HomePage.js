import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import {
  Box,
  Container,
  Stack,
  Button,
  Heading
} from '@chakra-ui/react';
import { Header } from "../layout/Header";
import axios from "axios";

export const HomePage = (props) => {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [isAuthenticated, setisAuthenticated] = useState(false);
  const [user_type, setuser_type] = useState(false);
  const [user_id, setuser_id] = useState(null);

  const onChange = (e) => {
    setusername(e.target.value);
  };

  const onChange1 = (e) => {
    setpassword(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // Headers
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    // Request body
    let user_data = { "username": username?.toLowerCase(), "password": password };

    axios
      .post("login-account", user_data, config)
      .then((res) => {
        if (res.data.data) {
          setuser_id(res.data.user_id)
          setuser_type(res.data.user_type);
          sessionStorage.setItem("isAuthenticated", true);
          setisAuthenticated(true);
        } else {
          alert("Username and Password not match!")
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  if (isAuthenticated) {
    if (user_type) {
      return <Redirect
        to={{
          pathname: "/manager_dashboard",
          state: { user_id: user_id }
        }}
      />
    } else {
      return <Redirect
        to={{
          pathname: "/dashboard",
          state: { user_id: user_id }
        }}
      />;
    }
  }

  return (
    <React.Fragment>
      <Header
        isAuthenticated={isAuthenticated}
      />
      <Container
        maxW="lg"
        py={{
          base: '12',
          md: '24',
        }}
        px={{
          base: '0',
          sm: '8',
        }}
      >
        <Stack spacing="8">
          <Stack spacing="6">
            <Stack
              spacing={{
                base: '2',
                md: '3',
              }}
              textAlign="center"
            >
              <Heading
                size="md"
              >
                Welcome Back
              </Heading>
            </Stack>
          </Stack>
          <Box
            py={{
              base: '0',
              sm: '8',
            }}
            px={{
              base: '4',
              sm: '10',
            }}
            bg='bg-canvas'
            boxShadow={{
              base: 'none',
              sm: 'md',
            }}
            borderRadius={{
              base: 'none',
              sm: 'xl',
            }}
          >
            <Stack spacing="6">
              <form onSubmit={onSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    name="username"
                    placeholder="Username/Email"
                    onChange={onChange}
                    style={{
                      fontFamily: "Inter, Segoe UI",
                      background: "#FFFFFF",
                      borderRadius: "5px",
                      paddingLeft: "1rem",
                      boxShadow: "0px 0px 50px rgba(70, 137, 250, 0.1)"
                    }}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    onChange={onChange1}
                    placeholder="Create Password"
                    minLength="8"
                    style={{
                      fontFamily: "Inter, Segoe UI",
                      background: "#FFFFFF",
                      borderRadius: "5px",
                      paddingLeft: "1rem",
                      boxShadow: "0px 0px 50px rgba(70, 137, 250, 0.1)"
                    }}
                    required />
                </div>
                <Button float='right' type="submit" colorScheme='blue'>Log In</Button>
              </form>
            </Stack>
          </Box>
        </Stack>
      </Container>
    </React.Fragment>
  )
}

export default HomePage;