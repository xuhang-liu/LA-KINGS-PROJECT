import React from "react";
import ReactPlayer from "react-player";

export default class Tutorials extends React.Component {
  render() {
    return (
      <div style={{ padding: "1rem" }}>
        <h3 style={{ paddingLeft: "1.6rem" }}>Tutorial Videos</h3>
        <section className="grid_tutorialvideo">
          <div className="item1_tutorialvideo">
            <h4 style={{ textAlign: "left" }}>Video Title1</h4>
            <ReactPlayer
              id="rw-video"
              url="https://hirebeat-assets.s3.amazonaws.com/sample-5s.mp4"
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
            <h4 style={{ textAlign: "left" }}>Video Title2</h4>
            <ReactPlayer
              url="https://hirebeat-assets.s3.amazonaws.com/sample2-5s.mp4"
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
            <h4 style={{ textAlign: "left" }}>Video Title3</h4>
            <ReactPlayer
              url="https://hirebeat-assets.s3.amazonaws.com/sample3-5s.mp4"
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
            <h4 style={{ textAlign: "left" }}>Video Title4</h4>
            <ReactPlayer
              url="https://hirebeat-assets.s3.amazonaws.com/sample4-5s.mp4"
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
