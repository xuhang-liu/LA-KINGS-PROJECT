import React from "react";
import ReactPlayer from "react-player";
import { Text, Box, HStack } from '@chakra-ui/react';

export default class Tutorials extends React.Component {
  render() {
    return (
      <div>
        <Text fontSize='xl' color="muted">Tutorial Videos</Text>
        <HStack spacing='5' py='4'>
          <Box>
            <ReactPlayer
              id="rw-video"
              url='https://hirebeat-assets.s3.amazonaws.com/Company+Profile.mp4'
              controls={true}
              width="100%"
              height="100%"
              style={{ margin: "0 auto" }}
              // Disable download button
              config={{ file: { attributes: { controlsList: 'nodownload' } } }}
              // Disable right click
              onContextMenu={e => e.preventDefault()}
            />
            <Text color='muted' fontSize='sm' style={{ textAlign: "left" }}>Company Profile</Text>
          </Box>
          <Box>
            <ReactPlayer
              url="https://hirebeat-assets.s3.amazonaws.com/Posting+a+Job+Video.mp4"
              controls={true}
              width="100%"
              height="100%"
              style={{ margin: "0 auto" }}
              id="rw-video"
              // Disable download button
              config={{ file: { attributes: { controlsList: 'nodownload' } } }}
              // Disable right click
              onContextMenu={e => e.preventDefault()}
            />
            <Text color='muted' fontSize='sm' style={{ textAlign: "left" }}>Posting a Job</Text>
          </Box>
        </HStack>
        <HStack spacing='5' py='4'>
          <Box>
            <ReactPlayer
              url="https://hirebeat-assets.s3.amazonaws.com/managing-applicants.mp4"
              controls={true}
              width="100%"
              height="100%"
              style={{ margin: "0 auto" }}
              id="rw-video"
              // Disable download button
              config={{ file: { attributes: { controlsList: 'nodownload' } } }}
              // Disable right click
              onContextMenu={e => e.preventDefault()}
            />
            <Text color='muted' fontSize='sm' style={{ textAlign: "left" }}>Managing Applicants</Text>
          </Box>
          <Box>
            <ReactPlayer
              url="https://hirebeat-assets.s3.amazonaws.com/video+Interview+walkthrough.mp4"
              controls={true}
              width="100%"
              height="100%"
              style={{ margin: "0 auto" }}
              id="rw-video"
              // Disable download button
              config={{ file: { attributes: { controlsList: 'nodownload' } } }}
              // Disable right click
              onContextMenu={e => e.preventDefault()}
            />
            <Text color='muted' fontSize='sm' style={{ textAlign: "left" }}>Video Interview Walkthrough</Text>
          </Box>
        </HStack>
      </div>
    );
  }
}
