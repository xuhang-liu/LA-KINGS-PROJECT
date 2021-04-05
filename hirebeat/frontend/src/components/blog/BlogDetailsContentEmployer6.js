import React, { Component } from 'react';
import {Link} from "react-router-dom";
import {FacebookShareButton, TwitterShareButton, LinkedinShareButton, WhatsappShareButton} from "react-share";
import BlogSidebarEmployer from './BlogSidebarEmployer';

class BlogDetailsContentEmployer6 extends Component {
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
                                                    <a>April 02, 2021</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <i className='bx bx-user'></i>
                                                    <a href="https://www.linkedin.com/company/hirebeat">HireBeat</a>
                                            </li>
                                        </ul>
                                    </div>

                                    <h2>Topic: How Gender Pronouns Change the Way We Work</h2>
                                    <br/>
                                    <div className="article-image">
                                    <img src="https://hirebeat-assets.s3.amazonaws.com/blog/blog-employer6-pic.jpg" alt="Hiring, She/Her, He/Him, They/Them, Ze/Zim, Gender, Pronouns, Job, recruit, LGBTQ, Interview, Career" />
                                    </div>
                                    <p>
                                    Gender pronouns are words that we use to refer to people of a particular sex. Most people use the traditional pronouns he/him/his or she/her/hers, but this only divides human beings into two, male and female. However, a transgender person and gender-nonconforming individuals do not belong in either. They instead use they/them/theirs or ze/hir.
                                    </p>
                                    <p>
                                    The problem is that most employees use traditional words, and it impacts negatively on the subject individuals and affects their productivity. The insensitivity to this issue may have the following impact at the workplace.
                                    </p>
                                    <h3 className="mb-0">Bring Discomfort amongst Employee</h3>
                                    <br/>
                                    <p>
                                    There are few gender terms such as you guys or manning that you should always avoid when talking to a mixed group. Doing this is similar to calling someone by an improper pronoun, and it doesn’t go well with most people.
                                    </p>
                                    <p>
                                    You might be a well-intentioned colleague, but such language makes people you are talking to uncomfortable, alienated, or even endangered. As a result, such employees do not feel like they can bring their complete selves to work, affecting their productivity.
                                    </p>
                                    <p>
                                    Instead, you could go for neutral pronouns like they, them, and theirs or Ze, zie, and xe. If you have to mention, if you have to be specific, it would be better to be neutral, like saying a salesperson in place of a salesman.
                                    </p>
                                    <h3 className="mb-0">It Affects Confidence in Some Employees</h3>
                                    <br/>
                                    <p>
                                    It is up to every person to choose whether they want to talk about their gender or not. For some, it is a matter of being open and is often straightforward. To some, it is too scary to start such a conversation.
                                    </p>
                                    <p>
                                    If you are talking to the latter group, you must be so accurate with the pronoun you address them with; better use a neutral one. They are already uncomfortable talking about it, so do not provoke it. The most affected lot here are the transgender or those undergoing a gender transition -even those with names that you could easily mistake for another gender. 
                                    </p>
                                    <p>
                                    Referring to these groups with the wrong pronoun affects their confidence and how they mingle with people around the workplace. It is a civic obligation of both supervisors and coworkers to address every employee according to the names and gender they identify with. Every employee has official records bearing these details, and that is what everyone should use. 
                                    </p>
                                    <h3 className="mb-0">How to Correct the Gender Pronoun Problem at The Workplace</h3>
                                    <br/>
                                    <p>
                                    There is no obligation for Trans people to disclose information about their identities. An even more essentially, they should not take the liberty to educate us about our troubles with understanding their gender. Depending on our relationship with these people, it is overwhelming and tiring for Trans individuals to respond to questions about their gender constantly. So the best approach to this is to educate yourself first and know what is right for you. 
                                    </p>
                                    <p>
                                    If you are unknowingly at fault, find a way to acknowledge that you immediately referred to them with a wrong pronoun and then apologize. Do not be upset with yourself or become over apologetic; the best you can do is acknowledging your mistake, fix it, and make sure it doesn’t happen again. 
                                    </p>
                                    <h3 className="mb-0">Conclusion</h3>
                                    <br/>
                                    <p>
                                    This article should allow you create a more comfortable workplace and bring more confidence to your employees. HireBeat is an AI interview platform that not only helps you find the correct candidate but also creates a more inclusive environment for your employees. To know more details about us, visit <a href="/employer">www.hirebeat.co/employer</a>.
                                    </p>
                                </div>
                            </div>
                            <div className="single-footer-widget1">
                                    <ul className="social">
                                    <li>
                                    <FacebookShareButton 
                                        url={"https://hirebeat.co/employer_blog-how-gender-pronouns-change-the-way-we-work"}
                                        quote={"Topic: How Gender Pronouns Change the Way We Work"}
                                        hashtag="#hirebeat">
                                        <a target="_blank">
                                            <i className="bx bxl-facebook"></i>
                                        </a>
                                    </FacebookShareButton>
                                    </li>
                                    <li>
                                        <TwitterShareButton
                                           url={"https://hirebeat.co/employer_blog-how-gender-pronouns-change-the-way-we-work"}
                                           title={"Topic: How Gender Pronouns Change the Way We Work"}
                                           via={"HireBeat"}
                                           hashtag="#hirebeat">
                                           <a target="_blank">
                                                <i className="bx bxl-twitter"></i>   
                                           </a>
                                        </TwitterShareButton>
                                    </li>
                                    <li>
                                        <LinkedinShareButton
                                            url={"https://hirebeat.co/employer_blog-how-gender-pronouns-change-the-way-we-work"}
                                            title={"Topic: How Gender Pronouns Change the Way We Work"}
                                            source={"HireBeat"}>
                                            <a target="_blank">
                                                <i className="bx bxl-linkedin"></i>
                                            </a>
                                        </LinkedinShareButton>
                                    </li>
                                    <li>
                                        <WhatsappShareButton
                                            url={"https://hirebeat.co/employer_blog-how-gender-pronouns-change-the-way-we-work"}
                                            title={"Topic: How Gender Pronouns Change the Way We Work"}>
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

export default BlogDetailsContentEmployer6;