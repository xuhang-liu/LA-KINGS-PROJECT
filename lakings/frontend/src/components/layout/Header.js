import React, { useState } from "react";
import {
  Box,
  Button,
  Flex,
  HStack,
  Link,
  Spacer,
  Image
} from '@chakra-ui/react';

export const Header = (props) => {
  const [isAuthenticated, setisAuthenticated] = useState(props.isAuthenticated || JSON.parse(sessionStorage.getItem("isAuthenticated")));

  function logout() {
    sessionStorage.setItem("isAuthenticated", false);
    setisAuthenticated(false);
    window.location.reload(false);
  }

  const renderGuestLinks = () => {
    return (
      <React.Fragment>
        <Link href="/">
          <Image src={"https://upload.wikimedia.org/wikipedia/en/thumb/6/63/Los_Angeles_Kings_logo.svg/220px-Los_Angeles_Kings_logo.svg.png"} alt='logo' boxSize='60px' />
        </Link>
        <Spacer />
        <HStack spacing="4">
          <a href="/" style={{ textDecoration: "none" }}><Button colorScheme='blue' variant='outline' _hover={{ bg: '#ff6d00' }} borderRadius='2px'>Log In</Button></a>
          <a href="/register" style={{ textDecoration: "none" }}><Button colorScheme='blue' variant='solid' _hover={{ bg: '#ff6d00' }} borderRadius='2px'>Register</Button></a>
        </HStack>
      </React.Fragment >
    );
  };

  const renderReviewerLinks = () => {
    return (
      <React.Fragment>
        <Link href="/">
          <Image src={"https://upload.wikimedia.org/wikipedia/en/thumb/6/63/Los_Angeles_Kings_logo.svg/220px-Los_Angeles_Kings_logo.svg.png"} alt='logo' boxSize='60px' />
        </Link>
        <Spacer />
        <HStack spacing="4">
          <Button bg="blue" color="white" variant='solid' _hover={{ bg: '#ff6d00' }} borderRadius='2px' onClick={logout}>Logout</Button>
        </HStack>
      </React.Fragment>
    );
  };

  return (
    <React.Fragment>
      <Box
        as="section"
      >
        <Box as="nav" bg={"#090d3a"} color="on-accent" id="navbar" minW="1290px">
          <Box
            py={{
              base: '3',
              lg: '4',
            }}
            px={{
              base: '6',
              lg: '10',
            }}
          >
            <Spacer />
            <Flex justify="space-between">
              {isAuthenticated ?
                renderReviewerLinks() : renderGuestLinks()
              }
            </Flex>
          </Box>
        </Box>
      </Box>
    </React.Fragment>
  );
}

export default Header;