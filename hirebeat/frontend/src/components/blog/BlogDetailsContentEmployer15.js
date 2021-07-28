import React, { Component } from 'react';
import {Link} from "react-router-dom";
import {FacebookShareButton, TwitterShareButton, LinkedinShareButton, WhatsappShareButton} from "react-share";
import BlogSidebarEmployer from './BlogSidebarEmployer';

class BlogDetailsContentEmployer15 extends Component {
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
                                                    <a>May 05, 2021</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <i className='bx bx-user'></i>
                                                    <a href="https://www.linkedin.com/company/hirebeat">HireBeat</a>
                                            </li>
                                        </ul>
                                    </div>

                                    <h2>4 Secrets That Improve Your LinkedIn Job Posting Today</h2>
                                    <p>
                                    If you’re looking to develop business connections, LinkedIn is the place to be. With over 55 million companies listed on the platform, 87% of recruiters use LinkedIn regularly. It’s important to note that the platform has millions of open jobs at any one point and it can be difficult to attract the right candidates sometimes.
                                    </p>
                                    <p>
                                    Creating a job description that’s compelling and draws compelling candidates can be challenging. However, implementing a few powerful tactics can easily help you stand out. Here’s what you should do:
                                    </p>
                                    <div className="article-image">
                                    <img src="https://hirebeat-assets.s3.amazonaws.com/blog/blog-employer15-pic.jpg" alt="LinkedIn, Job Posting, HR, Tech, candidates, Job, talent acquisition, HireBeat, recruit, career" />
                                    </div>
                                    <br/>
                                    <h3 className="mb-0">•	Keep it short</h3>
                                    <br/>
                                    <p>
                                    With 57% of LinkedIn’s traffic coming from mobile devices, it’s no surprise that many people look at job descriptions through their smartphones. Hence, it’s a great idea to keep the job descriptions up to 150 words long and focus on what’s important.
                                    </p>
                                    <p>
                                    This works because it’s highly likely applicants are going through multiple job listings. Shorter descriptions give applicants the exact information they require, allowing them to skim through and save time.
                                    </p>
                                    <h3 className="mb-0">•	Highlight what candidates are getting</h3>
                                    <br/>
                                    <p>
                                    The main things candidates want to know are what they’re getting out of the job and what their responsibilities are. When they’re spending seconds or a couple of minutes on your listing, they want to know whether the job post is worth investing their time into.
                                    </p>
                                    <p>
                                    Hence, it’s crucial to highlight the job’s qualifications, compensations, and everyday tasks. Highlighting these basics can let candidates know if they have a real shot and, if they are, they’ll be interested in learning more.
                                    </p>
                                    <h3 className="mb-0">•	Skip the company background and culture</h3>
                                    <br/>
                                    <p>
                                    While your background and culture are important, it’s not what candidates want to know about in the listing. In fact, they’re more likely to look for this information on your LinkedIn company page or website instead of the listing.
                                    </p>
                                    <p>
                                    In this case, it’s better to make your company website accessible since people will want to know more if your listing appeals to them.
                                    </p>
                                    <h3 className="mb-0">•	Be gender-neutral</h3>
                                    <br/>
                                    <p>
                                    You’d be surprised how many listings get it wrong with this one. Men apply to viewed listings 13% more than women, indicating that you might be missing out on female talents.
                                    </p>
                                    <p>
                                    Using masculine words like ‘assertive’ and ‘strong’ may deter women from applying, even if they didn’t necessarily feel underqualified. You can attract a more diverse pool by using gender-neutral language and avoiding biased terms.
                                    </p>
                                    <h3 className="mb-0">Final Thoughts</h3>
                                    <br/>
                                    <p>
                                    The recruitment process is difficult and attracting qualified clients can be a challenge. By implementing the tips listed above, you can improve your job listing and increase the likelihood of getting quality candidates for the job. HireBeat is an HR software platform dedicated to the success of clients from emerging businesses and midsize companies. To know more about us, please visit <a href='/'>https://hirebeat.co/</a>.
                                    </p>
                                </div>
                            </div>
                            <div className="single-footer-widget1">
                                    <ul className="social">
                                    <li>
                                    <FacebookShareButton 
                                        url={"https://hirebeat.co/employer_blog-4-secrets-that-improve-your-linkedin-job-posting-today"}
                                        quote={"4 Secrets That Improve Your LinkedIn Job Posting Today"}
                                        hashtag="#hirebeat">
                                        <a target="_blank" rel="noreferrer">
                                            <i className="bx bxl-facebook"></i>
                                        </a>
                                    </FacebookShareButton>
                                    </li>
                                    <li>
                                        <TwitterShareButton
                                           url={"https://hirebeat.co/employer_blog-4-secrets-that-improve-your-linkedin-job-posting-today"}
                                           title={"4 Secrets That Improve Your LinkedIn Job Posting Today"}
                                           via={"HireBeat"}
                                           hashtag="#hirebeat">
                                           <a target="_blank" rel="noreferrer">
                                                <i className="bx bxl-twitter"></i>   
                                           </a>
                                        </TwitterShareButton>
                                    </li>
                                    <li>
                                        <LinkedinShareButton
                                            url={"https://hirebeat.co/employer_blog-4-secrets-that-improve-your-linkedin-job-posting-today"}
                                            title={"4 Secrets That Improve Your LinkedIn Job Posting Today"}
                                            source={"HireBeat"}>
                                            <a target="_blank" rel="noreferrer">
                                                <i className="bx bxl-linkedin"></i>
                                            </a>
                                        </LinkedinShareButton>
                                    </li>
                                    <li>
                                        <WhatsappShareButton
                                            url={"https://hirebeat.co/employer_blog-4-secrets-that-improve-your-linkedin-job-posting-today"}
                                            title={"4 Secrets That Improve Your LinkedIn Job Posting Today"}>
                                            <a target="_blank" rel="noreferrer">
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

export default BlogDetailsContentEmployer15;