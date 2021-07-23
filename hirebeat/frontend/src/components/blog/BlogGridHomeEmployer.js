import React from "react";
//import { render } from "react-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import {BlogCol} from "./BlogComponents";


export class BlogGridHomeEmployer extends React.Component {
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
    "/employer_blog-five-ways-applicant-tracking-systems-up",
    "/employer_blog-5-things-you-need-to-know-about-applicant-tracking-system",
    "/employer_blog-4-challenges-campus-recruiters-could-meet",
    "/employer_blog-three-steps-to-fix-your-broken-talent-acquisition-process",
    "/employer_blog-what-is-broken-in-the-talent-acquisition-process",
    "/employer_blog-8-ways-to-automate-recruiting-processes",
    "/employer_blog-what-is-resume-screening-and-why-does-it-matter",
    "/employer_blog-8-tips-to-increase-resume-screening-effectiveness",
    "/employer_blog-employer-branding-vs-recruitment-marketing",
    "/employer_blog-how-ATS-works-in-the-recruitment-process",
    "/employer_blog-personality-assessment-tools-employers-must-know-about",
    "/employer_blog-red-flags-you-should-look-out-in-candidates-during-the-interview",
    "/employer_blog-4-secrets-that-improve-your-linkedin-job-posting-today",
    "/employer_blog-five-questions-you-need-to-ask-to-hire-the-best-intern",
    "/employer_blog-how-to-write-a-termination-letter-right",
    "/employer_blog-workplace-camaraderie-your-powerful-tool-for-success",
    "/employer_blog-how-covid-has-changed-the-recruitment-process",
    "/employer_blog-four-tips-to-build-a-successful-campus-recruiting-strategy",
    "/employer_blog-boost-up-your-roi-using-video-interviews",
    "/employer_blog-how-to-get-your-job-postings-noticed",
    "/employer_blog-millennials-we-want-you",
    "/employer_blog-how-gender-pronouns-change-the-way-we-work",
    "/employer_blog-how-the-pandemic-sparked-a-new-way-of-interviewing",
    "/employer_blog-interview-questions-every-recruiter-should-ask",
    "/employer_blog-writing-a-good-job-posting-that-will-attract-employees",
    "/employer_blog-how-does-a-one-way-interview-help-a-company-in-its-hiring",
    "/employer_blog-benefits-of-hiring-diverse-candidates-in-your-company",
];

const blogImgs = [
    "https://hirebeat-assets.s3.amazonaws.com/blog/blog-employer27.jpg",
    "https://hirebeat-assets.s3.amazonaws.com/blog/blog-employer26.jpg",
    "https://hirebeat-assets.s3.amazonaws.com/blog/blog-employer25.jpg",
    "https://hirebeat-assets.s3.amazonaws.com/blog/blog-employer24.jpg",
    "https://hirebeat-assets.s3.amazonaws.com/blog/blog-employer23.jpg",
    "https://hirebeat-assets.s3.amazonaws.com/blog/blog-employer22.jpg",
    "https://hirebeat-assets.s3.amazonaws.com/blog/blog-employer21.jpg",
    "https://hirebeat-assets.s3.amazonaws.com/blog/blog-employer20.jpg",
    "https://hirebeat-assets.s3.amazonaws.com/blog/blog-employer19.jpg",
    "https://hirebeat-assets.s3.amazonaws.com/blog/blog-employer18.jpg",
    "https://hirebeat-assets.s3.amazonaws.com/blog/blog-employer17.jpg",
    "https://hirebeat-assets.s3.amazonaws.com/blog/blog-employer16.jpg",
    "https://hirebeat-assets.s3.amazonaws.com/blog/blog-employer15.jpg",
    "https://hirebeat-assets.s3.amazonaws.com/blog/blog-employer14.jpg",
    "https://hirebeat-assets.s3.amazonaws.com/blog/blog-employer13.jpg",
    "https://hirebeat-assets.s3.amazonaws.com/blog/blog-employer12.jpg",
    "https://hirebeat-assets.s3.amazonaws.com/blog/blog-employer11.jpg",
    "https://hirebeat-assets.s3.amazonaws.com/blog/blog-employer10.jpg",
    "https://hirebeat-assets.s3.amazonaws.com/blog/blog-employer9.jpg",
    "https://hirebeat-assets.s3.amazonaws.com/blog/blog-employer8.jpg",
    "https://hirebeat-assets.s3.amazonaws.com/blog/blog-employer7.jpg",
    "https://hirebeat-assets.s3.amazonaws.com/blog/blog-employer6.jpg",
    "https://hirebeat-assets.s3.amazonaws.com/blog/blog-employer5.jpg",
    "https://hirebeat-assets.s3.amazonaws.com/blog/blog-employer4.jpg",
    "https://hirebeat-assets.s3.amazonaws.com/blog/blog-employer3.jpg",
    "https://hirebeat-assets.s3.amazonaws.com/blog/blog-employer1.jpg",
    "https://hirebeat-assets.s3.amazonaws.com/blog/blog-employer2.jpg",
];

const blogDates = [
    "Jul 21, 2021",
    "Jul 21, 2021",
    "Jul 02, 2021",
    "Jun 25, 2021",
    "Jun 25, 2021",
    "Jun 18, 2021",
    "Jun 11, 2021",
    "Jun 04, 2021",
    "May 27, 2021",
    "May 24, 2021",
    "May 14, 2021",
    "May 10, 2021",
    "May 05, 2021",
    "May 03, 2021",
    "Apr 30, 2021",
    "Apr 23, 2021",
    "Apr 23, 2021",
    "Apr 19, 2021",
    "Apr 14, 2021",
    "Apr 07, 2021",
    "Apr 07, 2021",
    "Apr 02, 2021",
    "Mar 30, 2021",
    "Mar 29, 2021",
    "Mar 22, 2021",
    "Mar 15, 2021",
    "Mar 17, 2021",
];

const blogTitles = [
    "FIVE WAYS APPLICANT TRACKING SYSTEMS UP",
    "5 THINGS ABOUT APPLICANT TRACKING SYSTEM",
    "4 CHALLENGES CAMPUS RECRUITERS COULD MEET",
    "FIX YOUR BROKEN TALENT ACQUISITION PROCESS",
    "BROKEN IN THE TALENT ACQUISITION PROCESS",
    "8 WAYS TO AUTOMATE RECRUITING PROCESSES",
    "WHAT IS RESUME SCREENING AND WHY IT MATTERS",
    "8 TIPS TO INCREASE RESUME SCREENING",
    "EMPLOYER BRANDING VS RECRUITMENT MARKETING",
    "HOW ATS WORKS IN THE RECRUITMENT PROCESS",
    "PERSONALITY ASSESSMENT TOOLS",
    "RED FLAGS YOU SHOULD LOOK OUT",
    "4 SECRETS THAT IMPROVE YOUR LINKEDIN JOB",
    "FIVE QUESTIONS YOU NEED TO ASK",
    "HOW TO WRITE A TERMINATION LETTER RIGHT",
    "WORKPLACE CAMARADERIE: POWERFUL TOOL",
    "HOW COVID HAS CHANGED THE RECRUITMENT",
    "BUILD A CAMPUS RECRUITING STRATEGY",
    "BOOST UP ROI USING VIDEO INTERVIEWS",
    "HOW TO GET YOUR JOB POSTINGS NOTICED",
    "MILLENNIALS? WE WANT YOU!",
    "HOW GENDER CHANGE THE WAY WE WORK",
    "A NEW WAY OF INTERVIEWING",
    "IQ EVERY RECRUITER SHOULD ASK",
    "WRITING A GOOD JOB POSTING",
    "HOW ONE-WAY INTERVIEW HELP A COMPANY",
    "BENEFITS OF HIRING DIVERSE CANDIDATES",
];

const blogAuthors = [
    "https://hirebeat-assets.s3.amazonaws.com/blog/cover/HireBeatLogo2.png"
];

export default BlogGridHomeEmployer;