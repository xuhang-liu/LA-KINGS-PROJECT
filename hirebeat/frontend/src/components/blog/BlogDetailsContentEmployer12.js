import React, { Component } from 'react';
import {Link} from "react-router-dom";
import {FacebookShareButton, TwitterShareButton, LinkedinShareButton, WhatsappShareButton} from "react-share";
import BlogSidebarEmployer from './BlogSidebarEmployer';

class BlogDetailsContentEmployer12 extends Component {
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
                                                    <a>April 23, 2021</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <i className='bx bx-user'></i>
                                                    <a href="https://www.linkedin.com/company/hirebeat">HireBeat</a>
                                            </li>
                                        </ul>
                                    </div>

                                    <h2>Workplace Camaraderie: Your Powerful Tool For Success</h2>
                                    <p>
                                    Camaraderie can be described as the mutual closeness and friendship among people who spend time together. Most people in the workplace tend to assume that camaraderie is only important in the community, but actually, trust and friendship are also important in the workplace. It ensures that a diverse community can work together towards a common goal and helps to bring everyone together.
                                    </p>
                                    <div className="article-image">
                                    <img src="https://hirebeat-assets.s3.amazonaws.com/blog/blog-employer12-pic.jpg" alt="recruitment, campus recruiting, job, interview, strategy, millennials. Virtual, onboard, candidate, job fair, New York, NYC, California, Texas" />
                                    </div>
                                    <br/>
                                    <h3 className="mb-0">Why Camaraderie Matters in Workplace</h3>
                                    <br/>
                                    <p>
                                    According to research, companies with camaraderie are likely to perform better. Companies such as Google and Dropbox, which are well known for this, have exemplary performance. It also has many benefits to the employees and the company itself and therefore is a necessity.
                                    </p>
                                    <p>
                                    In a workplace where there is camaraderie, the team projects will be done better because the people can take ideas from one another and work together. Moreover, the employers feel like they have a greater connection to the office and are less likely to leave and search for other jobs. Employees have higher morale of turning up for work every day because they will not be meeting up with strangers.
                                    </p>
                                    <p>
                                    Camaraderie is also related to the employee’s well-being and mental health as the kind of environment created will be less stressful. A company that fails to enhance camaraderie will inevitably undergo many challenges, such as spending a lot of money to recruit new members, which may eventually lead to attrition. The company is also less productive as a conducive environment is not available for the workers.
                                    </p>
                                    <h3 className="mb-0">How to Build Workplace Camaraderie</h3>
                                    <br/>
                                    <p>
                                    After seeing the importance of camaraderie, it is also important to determine how to build it in a workplace. Below are 3 ways to build Camaraderie in the workplace:
                                    </p>
                                    <ul>
                                        <li><p>Create a company culture that encourages employees to form friendships with one another. The company should be a place where the employees do not feel stressed. By ensuring this, the employees will engage more and build more meaningful relationships. The relationships will also be based on the right reasons and comfortability.</p></li>
                                        <li><p>Ensure that the employees have enough time to socialize. Time for socialization should not have any interference. Such a time can be during a lunch break where employees can eat together and share their experiences. The company should also set some time apart from the working time for other events such as going out and having other fun activities.</p></li>
                                        <li><p>Encourage employees to work together in teams. The company should assign more group activities to the employees in their course of work. While working in teams, the employees are more likely to engage with one another and form friendships. Any company on the road to success should realize that mutual trust and friendship are essential and work towards building them.</p></li>
                                    </ul>
                                    <h3 className="mb-0">Conclusion</h3>
                                    <br/>
                                    <p>
                                    Camaraderie ensures that a team does the work better: people can work together towards a certain goal without any of them feeling bored and uninterested. Indeed, two heads are better than one, and what is a better way to ensure there happens except when there is mutual trust and understanding? HireBeat is an HR software company that aims to help you find the best candidates with the least effort. To know more about us, visit <a href="/">https://hirebeat.co/</a>.
                                    </p>
                                </div>
                            </div>
                            <div className="single-footer-widget1">
                                    <ul className="social">
                                    <li>
                                    <FacebookShareButton 
                                        url={"https://hirebeat.co/employer_blog-workplace-camaraderie-your-powerful-tool-for-success"}
                                        quote={"Workplace Camaraderie: Your Powerful Tool For Success"}
                                        hashtag="#hirebeat">
                                        <a target="_blank" rel="noreferrer">
                                            <i className="bx bxl-facebook"></i>
                                        </a>
                                    </FacebookShareButton>
                                    </li>
                                    <li>
                                        <TwitterShareButton
                                           url={"https://hirebeat.co/employer_blog-workplace-camaraderie-your-powerful-tool-for-success"}
                                           title={"Workplace Camaraderie: Your Powerful Tool For Success"}
                                           via={"HireBeat"}
                                           hashtag="#hirebeat">
                                           <a target="_blank" rel="noreferrer">
                                                <i className="bx bxl-twitter"></i>   
                                           </a>
                                        </TwitterShareButton>
                                    </li>
                                    <li>
                                        <LinkedinShareButton
                                            url={"https://hirebeat.co/employer_blog-workplace-camaraderie-your-powerful-tool-for-success"}
                                            title={"Workplace Camaraderie: Your Powerful Tool For Success"}
                                            source={"HireBeat"}>
                                            <a target="_blank" rel="noreferrer">
                                                <i className="bx bxl-linkedin"></i>
                                            </a>
                                        </LinkedinShareButton>
                                    </li>
                                    <li>
                                        <WhatsappShareButton
                                            url={"https://hirebeat.co/employer_blog-workplace-camaraderie-your-powerful-tool-for-success"}
                                            title={"Workplace Camaraderie: Your Powerful Tool For Success"}>
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

export default BlogDetailsContentEmployer12;