import React, { Component } from 'react';
import {Link} from "react-router-dom";
import {FacebookShareButton, TwitterShareButton, LinkedinShareButton, WhatsappShareButton} from "react-share";
import BlogSidebarEmployer from './BlogSidebarEmployer';

class BlogDetailsContentEmployer21 extends Component {
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
                                                    <a>Jun 11, 2021</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <i className='bx bx-user'></i>
                                                    <a href="https://www.linkedin.com/company/hirebeat">HireBeat</a>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="article-image">
                                    <img src="https://hirebeat-assets.s3.amazonaws.com/blog/blog-employer21-pic.jpg" alt="why resume screening is important for hiring" />
                                    </div>
                                    <br/>
                                    <h2>What Is Resume Screening and Why Does it Matter</h2>
                                    <p>
                                    The pandemic has accelerated the demand for top talent among employers. And this led to broader marketing of a job role. But more marketing attracts even more applicants, and it simply means inviting unqualified talent too.
                                    </p>
                                    <p>
                                    To shortlist a few suitable fits out of the total received applications, the employer has to set up an efficient model. The task can be tedious if done manually, but it has the power to cut the unqualified candidates from the total applications.
                                    </p>
                                    <p>
                                    The model name is resume screening. Even though the term isn't new to many employers, its benefits could be. So if you think that the process is outdated and inefficient, we have some points that will provoke you to reconsider.
                                    </p>
                                    <br/>
                                    <h3 className="mb-0">What is Resume Screening?</h3>
                                    <br/>
                                    <p>
                                    Resume screening is a method of identifying whether the applicants are a suitable match for the job role by analyzing their resumes. The process involves the analysis of information in candidates' resumes, such as education, skills, certifications, experience, and achievements.
                                    </p>
                                    <p>
                                    Resume screening is essential to determine whether a candidate can move to the next evaluation stage, especially in high-volume application scenarios.
                                    </p>
                                    <div className="article-image">
                                    <img src="https://hirebeat-assets.s3.amazonaws.com/blog/blog-employer21-pic1.jpg" alt="why resume screening is important for hiring" />
                                    </div>
                                    <br/>
                                    <p>
                                    While screening candidates' resumes one by one can be a tedious job and may cost companies more time and top talent. According to G2, companies lose 89% of potential candidates because of the extended duration of the screening process. Moreover, it takes 25 hours for a recruiter to screen the average number of applications per job post, i.e., 250 applications.
                                    </p>
                                    <p>
                                    A hiring manager can avoid such risks by automating the screening using resume screening software.
                                    </p>
                                    <p>
                                    For instance, when a recruiter picks a resume to screen from the database, he/she will evaluate the candidate's information and then either accept or discard the resume. Researches suggest the process takes an average of six seconds to screen a resume manually. However, the time can be reduced even more using screening software.
                                    </p>
                                    <br/>
                                    <h3 className="mb-0">Importance of Resume Screening</h3>
                                    <br/>
                                    <h3 className="mb-0">1. Allows to use Binary Screening</h3>
                                    <br/>
                                    <p>
                                    You can use objective or binary resume screening. Here, you just need to find out whether the candidate fulfills the required criteria or not.
                                    </p>
                                    <p>
                                    For example, if you are strictly looking for candidates with a Ph.D. degree, you need to ignore candidates who do not have a Ph.D. qualification. Or, if you are looking for candidates with a minimum of five years of experience, you need to avoid the candidates with less than five years of experience.
                                    </p>
                                    <p>
                                    Similar criteria can be followed in terms of country, visa status, location, etc. Recruiters find such screening easier as there is almost no interference in the screening criteria. Using such criteria helps in the case of high-volume hiring.
                                    </p>
                                    <h3 className="mb-0">2. It makes Hiring Efficient</h3>
                                    <br/>
                                    <p>
                                    Resume screening ensures consistency and efficiency in the applications you receive and helps with a sound judgment over hiring. Over time, this consistency will help hiring managers know what kind of applications they will receive and how to proceed with the rest of the process, revising and improving the process with each recruitment.
                                    </p>
                                    <h3 className="mb-0">3. Minimum Qualification Screening</h3>
                                    <br/>
                                    <p>
                                    Minimum qualifications are the essential qualifications that a candidate must fulfill to perform the job. A simple example of minimum qualification is whether the candidate is legally able to work in the country.
                                    </p>
                                    <p>
                                    These minimum qualifications are often considered knockouts because if candidates don't qualify for the minimum criteria, they will be eliminated from the process.
                                    </p>
                                    <p>
                                    Candidates who meet the minimum qualifications move to the second stage of candidate screening.
                                    </p>
                                    <h3 className="mb-0">4. You can Identify Subtle Warning Signs</h3>
                                    <br/>
                                    <p>
                                    In some cases, the resume may contain subtle warning signs of potential problems that you want to follow up with the candidate. These red flags outweigh the chances of the candidates' selection even if they are a good fit.
                                    </p>
                                    <p>
                                    Here are the red flags you need to look for when reviewing resumes.
                                    </p>
                                    <p>
                                    <b>Unexplained rifts in employment:</b> When you review an applicant's work history, watch for long breaks between jobs. While there may be a perfectly probable explanation, such as military service, starting a family, graduate study, or caring for a loved one, any serious candidate must be prepared to explain these rifts in an interview.
                                    </p>
                                    <p>
                                    <b>Job to job brief tenure:</b> The most common thing these days with the younger generation of employees is job-hopping. But too many employers in the short term can indicate a lack of commitment or behavioral concerns. Be sure to look for those candidates who only list years as dates with no "to and from" months.
                                    </p>
                                    <p>
                                    <b>A sloppy resume:</b> There's no reason to have a sloppy, unprofessional, or error-filled resume these days. There are great resume examples online and if a candidate doesn't take the time to present themselves in front of you in a professional manner, pass them right away.
                                    </p>
                                    <p>
                                    <b>Lack of personal data or business details:</b> Resumes are not documents to share about hobbies, travels, and family members. You must prefer applicants who stick to sharing professional experience, skills, and qualifications over candidates who use their resumes like a social media page.
                                    </p>
                                    <p>
                                    <b>Length of the resume:</b> Some of us may have a three-page resume. We know candidates want to sell you how great they are, but most resumes should be one page, two max (if the candidate has 15 or more years of experience, partly at a senior leadership level).  
                                    </p>
                                    <h3 className="mb-0">5. You can Examine an Individual's Background</h3>
                                    <div className="article-image">
                                        <img src="https://hirebeat-assets.s3.amazonaws.com/blog/blog-employer21-pic2.jpg" alt="why resume screening is important for hiring" />
                                    </div>
                                    <br/>
                                    <p>
                                    Employers typically receive many resumes for one to two vacancies due to a significant number of online job boards available and a corresponding increase in job advertisements. Resume screening allows recruiters to examine individuals' backgrounds and determine their suitability for the job and company culture.
                                    </p>
                                    <h3 className="mb-0">6. It ensures your Job requirements are Realistic</h3>
                                    <br/>
                                    <p>
                                    Resume screening allows the recruiter to consider whether the advertised job requirements are realistic for the job market. If no applicant has the required skills and years of experience, you might need to reconsider your expectations for the job.
                                    </p>
                                    <h3 className="mb-0">7. It lowers the Chances of Missing Top Talent</h3>
                                    <br/>
                                    <p>
                                    If there is a proven system that works for the organization, there are fewer chances of missing good talent. As you identify the pattern of exactly what kind of applications you attract, what kind of candidates you want, you'll be able to make the process efficient accordingly. You will start to distinguish between nice-to-have and must-have criteria involuntarily.
                                    </p>
                                    <p>
                                    Resume screening is utilized at its best when coupled with automation. Automating the process reduces hiring costs and the duration of the screening process. If you're wondering about a sophisticated automation model, then Hirebeat can be your choice.
                                    </p>
                                    <p>
                                    Hirebeat is a one-stop source of HR solutions to all your recruiting challenges. It ensures everything around your recruiting, from marketing your ideal job role/s to analyzing and sorting the applicant's resumes and video interviews (through AI).
                                    </p>
                                </div>
                            </div>
                            <div className="single-footer-widget1">
                                    <ul className="social">
                                    <li>
                                    <FacebookShareButton 
                                        url={"https://app.hirebeat.co/employer_blog-what-is-resume-screening-and-why-does-it-matter"}
                                        quote={"What Is Resume Screening and Why Does it Matter"}
                                        hashtag="#hirebeat">
                                        <a target="_blank" rel="noreferrer">
                                            <i className="bx bxl-facebook"></i>
                                        </a>
                                    </FacebookShareButton>
                                    </li>
                                    <li>
                                        <TwitterShareButton
                                           url={"https://app.hirebeat.co/employer_blog-what-is-resume-screening-and-why-does-it-matter"}
                                           title={"What Is Resume Screening and Why Does it Matter"}
                                           via={"HireBeat"}
                                           hashtag="#hirebeat">
                                           <a target="_blank" rel="noreferrer">
                                                <i className="bx bxl-twitter"></i>   
                                           </a>
                                        </TwitterShareButton>
                                    </li>
                                    <li>
                                        <LinkedinShareButton
                                            url={"https://app.hirebeat.co/employer_blog-what-is-resume-screening-and-why-does-it-matter"}
                                            title={"What Is Resume Screening and Why Does it Matter"}
                                            source={"HireBeat"}>
                                            <a target="_blank" rel="noreferrer">
                                                <i className="bx bxl-linkedin"></i>
                                            </a>
                                        </LinkedinShareButton>
                                    </li>
                                    <li>
                                        <WhatsappShareButton
                                            url={"https://app.hirebeat.co/employer_blog-what-is-resume-screening-and-why-does-it-matter"}
                                            title={"What Is Resume Screening and Why Does it Matter"}>
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

export default BlogDetailsContentEmployer21;