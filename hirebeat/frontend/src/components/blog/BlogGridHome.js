import React from "react";
//import { render } from "react-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import {BlogCol} from "./BlogComponents";


export class BlogGridHome extends React.Component {
    state = {
        items: Array.from({ length: 3 }),
        hasMore: true
    };

  fetchMoreData = () => {
      let blogRows = Math.ceil(blogURLs.length / 3);
      if (this.state.items.length > blogRows) {
          this.setState({ hasMore: false });
          return;
      }
      // a fake async api call like which sends
      // 3 records in every 0.5 secs
      setTimeout(() => {
          this.setState({
              items: this.state.items.concat(Array.from({ length: 3 }))
          });
      }, 500);
  };

  render() {
      let nums = blogURLs.length - 1;  // max index
      let count = -3;
      return (
          <div>
              <InfiniteScroll
                  dataLength={this.state.items.length}
                  next={this.fetchMoreData}
                  hasMore={this.state.hasMore}
                  loader={<h4 style={{textAlign: "center", color: "#2196F3"}}>Loading...</h4>}
                  height={"89rem"}
                  endMessage={
                      <p style={{textAlign: "center", color: "#2196F3"}}>
                          <b>This is the end of blogs!</b>
                      </p>
                  }
              >
                  <section className="blog-area ptb-100">
                      <div className="container">
                          {this.state.items.map((i, index) => {
                              count = count + 3;
                              return (
                                  <div className="row" key={index}>
                                      { count <= nums ?
                                          <BlogCol
                                              blogURL={blogURLs[count]}
                                              blogImg={blogImgs[count]}
                                              blogDate={blogDates[count]}
                                              blogTitle={blogTitles[count]}
                                              blogAuthor={blogAuthors[0]}
                                          /> : null
                                      }
                                      { count+1 <= nums ?
                                          <BlogCol
                                              blogURL={blogURLs[count+1]}
                                              blogImg={blogImgs[count+1]}
                                              blogDate={blogDates[count+1]}
                                              blogTitle={blogTitles[count+1]}
                                              blogAuthor={blogAuthors[0]}
                                          /> : null
                                      }
                                      { count+2 <= nums ?
                                          <BlogCol
                                              blogURL={blogURLs[count+2]}
                                              blogImg={blogImgs[count+2]}
                                              blogDate={blogDates[count+2]}
                                              blogTitle={blogTitles[count+2]}
                                              blogAuthor={blogAuthors[0]}
                                          /> : null
                                      }
                                  </div>
                              );
                          })}
                      </div>
                  </section>
              </InfiniteScroll>
          </div>
      );
  }
};

const blogURLs = [
    "/blog-how-to-answer-the-teamwork-type-question-in-an-interview",
    "/blog-11-mistakes-made-by-the-most-interviewees-according-to-hr",
    "/blog-why-do-you-want-to-work-here",
    "/blog-10-tips-to-deal-with-job-hunting-stress",
    "/blog-top-3-jobs-you-should-apply-for-finance-major",
    "/blog-3-fastest-growing-jobs-you-might-not-know-about",
    "/blog-how-to-answer-what-is-your-weakness-question-in-an-interview",
    "/blog-guidelines-on-how-to-answer-what-is-your-biggest-strength",
    "/blog-how-to-answer-the-question-where-do-you-to-see-yourself-in-5-years-in-an-interview",
    "/blog-tips-for-getting-your-resume-past-an-applicant-tracking-system",
    "/blog-keywords-to-include-on-a-resume",
    "/blog-how-to-write-a-thank-you-email-after-a-job-interview",
    "/blog-4-common-interview-questions-and-how-to-answer-them",
    "/blog-things-to-do-before-an-interview",
    "/blog-questions-to-ask-at-career-fairs",
    "/blog-how-to-prepare-for-an-AI-interview",
    "/blog-why-video-inteview-practice-platforms-are-essential-for-landing-your-dream-job",
    "/blog-video-interview-practice",
];

const blogImgs = [
    "https://hirebeat-assets.s3.amazonaws.com/blog/blog18.jpg",
    "https://hirebeat-assets.s3.amazonaws.com/blog/blog17.jpg",
    "https://hirebeat-assets.s3.amazonaws.com/blog/blog14.jpg",
    "https://hirebeat-assets.s3.amazonaws.com/blog/blog16.jpg",
    "https://hirebeat-assets.s3.amazonaws.com/blog/blog15.jpg",
    "https://hirebeat-assets.s3.amazonaws.com/blog/blog13.jpg",
    "https://hirebeat-assets.s3.amazonaws.com/blog/blog12.jpg",
    "https://hirebeat-assets.s3.amazonaws.com/blog/blog11.jpg",
    "https://hirebeat-assets.s3.amazonaws.com/blog/blog10.jpg",
    "https://hirebeat-assets.s3.amazonaws.com/blog/blog9.jpg",
    "https://hirebeat-assets.s3.amazonaws.com/blog/blog8.jpg",
    "https://hirebeat-assets.s3.amazonaws.com/blog/blog7.jpg",
    "https://hirebeat-assets.s3.amazonaws.com/blog/blog6.jpg",
    "https://hirebeat-assets.s3.amazonaws.com/blog/blog5.jpg",
    "https://hirebeat-assets.s3.amazonaws.com/blog/blog4.jpg",
    "https://hirebeat-assets.s3.amazonaws.com/blog/blog3.jpg",
    "https://hirebeat-assets.s3.amazonaws.com/blog/blog1.jpg",
    "https://hirebeat-assets.s3.amazonaws.com/blog/blog2.jpg",
];

const blogDates = [
    "Jan 27, 2021",
    "Jan 19, 2021",
    "Jan 13, 2021",
    "Dec 23, 2020",
    "Dec 15, 2020",
    "Dec 01, 2020",
    "Nov 25, 2020",
    "Nov 18, 2020",
    "Nov 10, 2020",
    "Nov 02, 2020",
    "Oct 26, 2020",
    "Oct 19, 2020",
    "Oct 06, 2020",
    "Sep 28, 2020",
    "Sep 21, 2020",
    "Sep 11, 2020",
    "Aug 24, 2020",
    "Aug 16, 2020",
];

const blogTitles = [
    "HOW TO ANSWER THE TEAMWORK TYPE QUESTION",
    "11 MISTAKES MADE BY THE MOST INTERVIEWEES",
    "WHY DO YOU WANT TO WORK HERE",
    "10 TIPS TO DEAL WITH JOB HUNTING STRESS",
    "TOP 3 JOBS YOU SHOULD APPLY FOR FINANCE MAJOR ",
    "FASTEST-GROWING JOBS YOU MIGHT NOT KNOW ABOUT",
    "HOW TO ANSWER 'WHAT IS YOUR WEAKNESS' QUESTION",
    "GUIDELINES ON 'WHAT IS YOUR BIGGEST STRENGTH'",
    "WHERE DO YOU TO SEE YOURSELF IN 5 YEARS",
    "TIPS FOR YOUR RESUME TO PASS APPLICANT SYSTEM",
    "KEYWORDS TO INCLUDE ON A RESUME",
    "HOW TO WRITE A THANK-YOU EMAIL",
    "4 COMMON INTERVIEW QUESTIONS",
    "THINGS TO DO BEFORE AN INTERVIEW",
    "QUESTIONS TO ASK AT CAREER FAIRS",
    "HOW TO PREPARE FOR AN AI INTERVIEW",
    "VIDEO INTERVIEW PRACTICE PLATFORMS",
    "VIDEO INTERVIEW PRACTICES FOR YOU",
];

const blogAuthors = [
    "https://hirebeat-assets.s3.amazonaws.com/blog/cover/HireBeatLogo2.png"
];

export default BlogGridHome;