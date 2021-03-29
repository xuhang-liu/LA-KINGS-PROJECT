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
                  loader={<h4 style={{textAlign: "center", color: "#2196F3"}}></h4>}
                  height={"65rem"}
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
    "/employer_blog-interview-questions-every-recruiter-should-ask",
    "/employer_blog-writing-a-good-job-posting-that-will-attract-employees",
    "/employer_blog-how-does-a-one-way-interview-help-a-company-in-its-hiring",
    "/employer_blog-benefits-of-hiring-diverse-candidates-in-your-company",
];

const blogImgs = [
    "https://hirebeat-assets.s3.amazonaws.com/blog/blog-employer4.jpg",
    "https://hirebeat-assets.s3.amazonaws.com/blog/blog-employer3.jpg",
    "https://hirebeat-assets.s3.amazonaws.com/blog/blog-employer1.jpg",
    "https://hirebeat-assets.s3.amazonaws.com/blog/blog-employer2.jpg",
];

const blogDates = [
    "Mar 29, 2021",
    "Mar 22, 2021",
    "Mar 15, 2021",
    "Mar 17, 2021",
];

const blogTitles = [
    "IQ EVERY RECRUITER SHOULD ASK",
    "WRITING A GOOD JOB POSTING",
    "HOW ONE-WAY INTERVIEW HELP A COMPANY",
    "BENEFITS OF HIRING DIVERSE CANDIDATES",
];

const blogAuthors = [
    "https://hirebeat-assets.s3.amazonaws.com/blog/cover/HireBeatLogo2.png"
];

export default BlogGridHomeEmployer;