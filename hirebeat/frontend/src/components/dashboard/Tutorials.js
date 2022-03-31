import React from "react";
import ReactPlayer from "react-player";

export default class Tutorials extends React.Component {
  render() {
    return (
      <div style={{ padding: "1rem" }}>
        <h3 style={{ paddingLeft: "1.6rem" }}>Tutorial Videos</h3>
        <section className="grid_tutorialvideo">
          <div className="item1_tutorialvideo">
            <h4 style={{ textAlign: "left" }}>Company Profile</h4>
            <ReactPlayer
              id="rw-video"
              url='https://hirebeat-assets.s3.amazonaws.com/Company+Profile.mp4'
              controls={true}
              width="18.75rem"
              height="11.71rem"
              style={{margin: "0 auto"}}
              // Disable download button
              config={{ file: { attributes: { controlsList: 'nodownload' } } }}
              // Disable right click
              onContextMenu={e => e.preventDefault()}
            />
          </div>
          <div className="item2_tutorialvideo">
            <h4 style={{ textAlign: "left" }}>Posting a Job</h4>
            <ReactPlayer
              url="https://hirebeat-assets.s3.amazonaws.com/Posting+a+Job+Video.mp4"
              controls={true}
              width="18.75rem"
              height="11.71rem"
              style={{margin: "0 auto"}}
              id="rw-video"
              // Disable download button
              config={{ file: { attributes: { controlsList: 'nodownload' } } }}
              // Disable right click
              onContextMenu={e => e.preventDefault()}
            />
          </div>
          <div className="item3_tutorialvideo">
            <h4 style={{ textAlign: "left" }}>Managing Applicants</h4>
            <ReactPlayer
              url="https://hirebeat-assets.s3.amazonaws.com/managing-applicants.mp4"
              controls={true}
              width="18.75rem"
              height="11.71rem"
              style={{margin: "0 auto"}}
              id="rw-video"
              // Disable download button
              config={{ file: { attributes: { controlsList: 'nodownload' } } }}
              // Disable right click
              onContextMenu={e => e.preventDefault()}
            />
          </div>
          <div className="item4_tutorialvideo">
            <h4 style={{ textAlign: "left" }}>Video Interview Walkthrough</h4>
            <ReactPlayer
              url="https://hirebeat-assets.s3.amazonaws.com/video+Interview+walkthrough.mp4"
              controls={true}
              width="18.75rem"
              height="11.71rem"
              style={{margin: "0 auto"}}
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
