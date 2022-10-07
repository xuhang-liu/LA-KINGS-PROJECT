import React from "react";
import ReactPlayer from "react-player";
import { Text } from '@chakra-ui/react';

export default class Tutorials extends React.Component {
  render() {
    return (
      <div style={{ padding: "1rem" }}>
        <Text fontSize='xl' color="muted" style={{ paddingLeft: "1.6rem" }}>Tutorial Videos</Text>
        <section className="grid_tutorialvideo">
          <div className="item1_tutorialvideo">
            <Text fontSize='sm' style={{ textAlign: "left" }}>Company Profile</Text>
            <ReactPlayer
              id="rw-video"
              url='https://hirebeat-assets.s3.amazonaws.com/Company+Profile.mp4'
              controls={true}
              width="18.75rem"
              height="11.71rem"
              style={{ margin: "0 auto" }}
              // Disable download button
              config={{ file: { attributes: { controlsList: 'nodownload' } } }}
              // Disable right click
              onContextMenu={e => e.preventDefault()}
            />
          </div>
          <div className="item2_tutorialvideo">
            <Text fontSize='sm' style={{ textAlign: "left" }}>Posting a Job</Text>
            <ReactPlayer
              url="https://hirebeat-assets.s3.amazonaws.com/Posting+a+Job+Video.mp4"
              controls={true}
              width="18.75rem"
              height="11.71rem"
              style={{ margin: "0 auto" }}
              id="rw-video"
              // Disable download button
              config={{ file: { attributes: { controlsList: 'nodownload' } } }}
              // Disable right click
              onContextMenu={e => e.preventDefault()}
            />
          </div>
          <div className="item3_tutorialvideo">
            <Text fontSize='sm' style={{ textAlign: "left" }}>Managing Applicants</Text>
            <ReactPlayer
              url="https://hirebeat-assets.s3.amazonaws.com/managing-applicants.mp4"
              controls={true}
              width="18.75rem"
              height="11.71rem"
              style={{ margin: "0 auto" }}
              id="rw-video"
              // Disable download button
              config={{ file: { attributes: { controlsList: 'nodownload' } } }}
              // Disable right click
              onContextMenu={e => e.preventDefault()}
            />
          </div>
          <div className="item4_tutorialvideo">
            <Text fontSize='sm' style={{ textAlign: "left" }}>Video Interview Walkthrough</Text>
            <ReactPlayer
              url="https://hirebeat-assets.s3.amazonaws.com/video+Interview+walkthrough.mp4"
              controls={true}
              width="18.75rem"
              height="11.71rem"
              style={{ margin: "0 auto" }}
              id="rw-video"
              // Disable download button
              config={{ file: { attributes: { controlsList: 'nodownload' } } }}
              // Disable right click
              onContextMenu={e => e.preventDefault()}
            />
          </div>
        </section>
      </div>
    );
  }
}
