import React, { Component } from 'react';
import {Link} from "react-router-dom";
import {FacebookShareButton, TwitterShareButton, LinkedinShareButton, WhatsappShareButton} from "react-share";
import BlogSidebarEmployer from './BlogSidebarEmployer';

class BlogDetailsContentEmployer7 extends Component {
    render() {
        return (
            <section className="blog-details-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div className="blog-details-desc">
                                <div className="article-content">
                                    <div className="entry-meta">
                                        <ul>
                                            <li>
                                                <i className='bx bx-time'></i> 
                                                <Link href="#">
                                                    <a>April 07, 2021</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <i className='bx bx-user'></i>
                                                    <a href="https://www.linkedin.com/company/hirebeat">HireBeat</a>
                                            </li>
                                        </ul>
                                    </div>

                                    <h2>How to Get Your Job Postings Noticed</h2>
                                    <div className="article-image">
                                    <img src="https://hirebeat-assets.s3.amazonaws.com/blog/blog-employer8-pic.jpg" alt="job, interview, recruit, google, schema, internship, internet, optimization" />
                                    </div>
                                    <br/>
                                    <p>
                                    Nowadays, recruiters are multi-faceted. Candidates ought to fit their watchful criteria if want to be hired. Recruiters also need to carry out numerous tasks. This calls for a few shortcuts in the process.
                                    </p>
                                    <p>
                                    As a business, you need assurance that your jobs are visible and that anyone who is your candidate gets a good experience. Fortunately, in the age of the internet, there are many ways you can achieve it. So, how do you go about it?
                                    </p>
                                    <h3 className="mb-0">Understand Google’s recruitment plan</h3>
                                    <br/>
                                    <p>
                                    Google is transforming the landscape faster than traditional platforms such as Monster, Glassdoor, and Indeed. The platform offers an improved experience for candidates searching for jobs.
                                    </p>
                                    <p>
                                    Considering that close to 30 percent of searches are related to jobs, you will want to put on a marketing hat that will enable you to share the huge traffic which exceeds 300 million searches in a month.
                                    </p>
                                    <h3 className="mb-0">Provide more information than other companies</h3>
                                    <br/>
                                    <p>
                                    You might need to adopt transparency to get favored by current job search algorithms. Google has learned what makes applicants click an ad. Now, you need a new way of competing with other businesses.
                                    </p>
                                    <p>
                                    For starters, in your ads, provide more information about the salary, the specific location of your business and give detailed information regarding the required skills, qualifications, and responsibilities. This approach will help you rank better in search results.
                                    </p>
                                    <h3 className="mb-0">Understand what schema markup can do for your business</h3>
                                    <br/>
                                    <p>
                                    Schema markup refers to code that gives search engines clues about what your entities are all about. Have you noticed that it is quite difficult to tell apart certain fruits when they are cut apart? Similarly, search engines might find it difficult to tell apart entities that have like properties. Schema markup gives them context that makes it possible to differentiate similar entities so that they don’t confuse them for one another.
                                    </p>
                                    <p>
                                    Through schema markup, Google can understand that they are dealing with a person whose name matches that p shares a name with a place, movie, or book.
                                    </p>
                                    <p>
                                    It is not complicated to use schema markup, numerous generators eliminate the need to do it manually. All you need to do is fill out the relevant fields and the schema data will be generated. Your job lists consist of fields such as responsibilities, description, and salary. Once you are done filling in the details, you can use the preview option to get a feel of what the ad will look like when viewed by an applicant.
                                    </p>
                                    <h3 className="mb-0">Use Google Rich Card report to appraise your efforts</h3>
                                    <br/>
                                    <p>
                                    This report points out and helps fix errors related to Google’s findings on your website. It also suggests areas that could be improved by providing more information.
                                    </p>
                                    <p>
                                    To access the report, open a Google Search Console account then follow the instructions. The rich cards report will outline structured data such as job postings and reviews that are appearing in search results.
                                    </p>
                                    <p>
                                    At this point, applicants will be flowing to your site at a steady pace. You will have to call on your skills to do the necessary.
                                    </p>
                                    <h3 className="mb-0">Conclusion</h3>
                                    <br/>
                                    <p>
                                    Google is a powerful tool, and this article should help you utilize this tool in a more efficient way. HireBeat is an HR software company that aims to simplify your recruiting process and match you with the perfect candidates. To know more about us, please visit <a href="/">https://hirebeat.co</a>.
                                    </p>
                                </div>
                            </div>
                            <div className="single-footer-widget1">
                                    <ul className="social">
                                    <li>
                                    <FacebookShareButton 
                                        url={"https://hirebeat.co/employer_blog-how-to-get-your-job-postings-noticed"}
                                        quote={"How to Get Your Job Postings Noticed"}
                                        hashtag="#hirebeat">
                                        <a target="_blank">
                                            <i className="bx bxl-facebook"></i>
                                        </a>
                                    </FacebookShareButton>
                                    </li>
                                    <li>
                                        <TwitterShareButton
                                           url={"https://hirebeat.co/employer_blog-how-to-get-your-job-postings-noticed"}
                                           title={"How to Get Your Job Postings Noticed"}
                                           via={"HireBeat"}
                                           hashtag="#hirebeat">
                                           <a target="_blank">
                                                <i className="bx bxl-twitter"></i>   
                                           </a>
                                        </TwitterShareButton>
                                    </li>
                                    <li>
                                        <LinkedinShareButton
                                            url={"https://hirebeat.co/employer_blog-how-to-get-your-job-postings-noticed"}
                                            title={"How to Get Your Job Postings Noticed"}
                                            source={"HireBeat"}>
                                            <a target="_blank">
                                                <i className="bx bxl-linkedin"></i>
                                            </a>
                                        </LinkedinShareButton>
                                    </li>
                                    <li>
                                        <WhatsappShareButton
                                            url={"https://hirebeat.co/employer_blog-how-to-get-your-job-postings-noticed"}
                                            title={"How to Get Your Job Postings Noticed"}>
                                            <a target="_blank">
                                                <i className="bx bxl-whatsapp"></i>
                                            </a>
                                        </WhatsappShareButton>
                                    </li>
                                </ul>
                                </div>
                        </div>
                        <div className="col-lg-4 col-md-12">
                            <BlogSidebarEmployer /> 
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default BlogDetailsContentEmployer7;