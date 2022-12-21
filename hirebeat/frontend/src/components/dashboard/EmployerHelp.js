import React from "react";
import Tabs from "./Tabs";
import RequestSupport from "./RequestSupport";
import Tutorials from "./Tutorials";
import { Box, Stack, Container, Heading } from '@chakra-ui/react';

export function Panel(props) {
  return (<>{props.children}</>)
}

export default class EmployerHelp extends React.Component {
  render() {
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
            <Heading as='h5' size='sm' color="muted"><i className="bx-fw bx bx-help-circle"></i><span className="ml-2">Help</span></Heading>
            <Box
              bg="bg-surface"
              boxShadow='sm'
              borderRadius="lg"
              p={{
                base: '4',
                md: '6',
              }}
            >
              <Stack spacing="5">
                <Tabs>
                  <Panel title="Request Support">
                    <RequestSupport />
                  </Panel>
                  <Panel title="Tutorials">
                    <Tutorials />
                  </Panel>
                </Tabs>
              </Stack>
            </Box>
          </Stack>
        </Container>
      </Box>
    );
  }
}
