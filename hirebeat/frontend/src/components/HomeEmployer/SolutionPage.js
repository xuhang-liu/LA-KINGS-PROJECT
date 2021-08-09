import React, { Component } from 'react';
import DocumentMeta from 'react-document-meta';
import FreeTrialArea from "./FreeTrialArea";
import Footer from "../layout/Footer";

class SolutionPage extends Component {
  render() {
    const meta = {
      title: 'HireBeat – Solution',
      description: "Solution Info",
      meta: {
        charset: 'utf-8',
        name: {
          keywords: 'automated resume matching api, online video interviewing, short list, ats, talent acquisition personality assessment'
        }
      }
    };
    return (
      <DocumentMeta {...meta}>
        <React.Fragment>
          <div
            style={{
              backgroundColor: "#F4F5FD",
            }}
          >
            <div className="section-1">
              <div className="hero-inner">
                <h1 className="main-heading">
                  <span className="text-orange">Campus recruiting</span> is very
                  competitive and overwhelming
                </h1>
                <p className="sub-heading">
                  You don't have to drown in stacks of resumes and email follow-ups.
                  Just leave them to{" "}
                  <span className="text-orange">our automated system</span> so you can
                  focus on the essential part - young talents.
                </p>
              </div>
            </div>
            <div className="section-2">
              <div className="container">
                <div className="container-fluid">
                  <h2>Your Pain Points</h2>

                  <div className="row">
                    <div className="col-12 col-md-6 col-lg-4  solution-mb-30">
                      <div className="flip-card">
                        <div className="flip-card-inner">
                          <div className="flip-card-front">
                            <div className="d-block w-100 text-center solution-mb-30">
                              <img src="https://hirebeat-assets.s3.amazonaws.com/solution_page/workflow.png" alt="workflow" />
                            </div>
                            <p>Not all applicants are qualified</p>
                          </div>
                          <div className="flip-card-back">
                            <p>
                              So you’ve received 200+ applications.{" "}
                              <span className="text-blue">
                                How can you quickly identify the qualified ones
                              </span>{" "}
                              rather than spending hours going through this large pool
                              of candidates? The
                              <span className="text-blue">
                                {" "}
                                manual reviewing process
                              </span>{" "}
                              also makes it difficult to standardize the screening
                              criteria and maintain candidate quality.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4  solution-mb-30">
                      <div className="flip-card">
                        <div className="flip-card-inner">
                          <div className="flip-card-front">
                            <div className="d-block w-100 text-center solution-mb-30">
                              <img src="https://hirebeat-assets.s3.amazonaws.com/solution_page/diagnostic.png" alt="diagnostic" />
                            </div>
                            <p>
                              Wasting time tracking candidates from multiple sources
                            </p>
                          </div>
                          <div className="flip-card-back">
                            <p>
                              Having 20 job board accounts and 10 spreadsheets to
                              track candidates?{" "}
                              <span className="text-blue">
                                Campus recruiters have to juggle several balls at the
                                same time.
                              </span>{" "}
                              Additionally, the recruiting activities usually{" "}
                              <span className="text-blue">
                                happen on different settings and platforms
                              </span>
                              , making it difficult to connect the dots and track the
                              process.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4  solution-mb-30">
                      <div className="flip-card">
                        <div className="flip-card-inner">
                          <div className="flip-card-front">
                            <div className="d-block w-100 text-center solution-mb-30">
                              <img src="https://hirebeat-assets.s3.amazonaws.com/solution_page/behavior.png" alt="behavior" />
                            </div>
                            <p>Lack of Diversity hire tracking</p>
                          </div>
                          <div className="flip-card-back">
                            <p>
                              <span className="text-blue">
                                Diversity hire is not only a trend but a standard for
                                Gen Z.
                              </span>{" "}
                              Inclusivity and diversity is proven to have positive
                              effects in the workplace, but you are worrying that you
                              don’t even have a reporting system to track the data.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4  solution-mb-30">
                      <div className="flip-card">
                        <div className="flip-card-inner">
                          <div className="flip-card-front">
                            <div className="d-block w-100 text-center solution-mb-30">
                              <img src="https://hirebeat-assets.s3.amazonaws.com/solution_page/applicant.png" alt="applicant" />
                            </div>
                            <p>Time-consuming to find candidates with Cultural fit</p>
                          </div>
                          <div className="flip-card-back">
                            <p>
                              Finding the right candidate that fits into the
                              organization’s culture is crucial, but{" "}
                              <span className="text-blue">
                                it is unrealistic to do a phone interview with more
                                than 5% of the applicants.
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4  solution-mb-30">
                      <div className="flip-card">
                        <div className="flip-card-inner">
                          <div className="flip-card-front">
                            <div className="d-block w-100 text-center solution-mb-30">
                              <img src="https://hirebeat-assets.s3.amazonaws.com/solution_page/dataintegration.png" alt="dataIntegration" />
                            </div>
                            <p>Hard to manage a Talent Pool</p>
                          </div>
                          <div className="flip-card-back">
                            <p>
                              50% of the hires come directly from the internship
                              program. Without a talent management platform to
                              reactivate the intern,
                              <span className="text-blue">
                                {" "}
                                you will have to go through the entire hiring process
                                again with the same candidate.
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4  solution-mb-30">
                      <div className="flip-card">
                        <div className="flip-card-inner">
                          <div className="flip-card-front">
                            <div className="d-block w-100 text-center solution-mb-30">
                              <img src="https://hirebeat-assets.s3.amazonaws.com/solution_page/advertising1.png" alt="advertising" />
                            </div>
                            <p>Employer branding is constrained</p>
                          </div>
                          <div className="flip-card-back">
                            <p>
                              Unlike on-campus events where employers usually have
                              their own booth,
                              <span className="text-blue">
                                {" "}
                                offline campus recruiters have very limited channels
                                to broadcast and present their company brand.
                              </span>{" "}
                              This could be a big disadvantage in the competitive
                              campus recruiting environment.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="hero-inner">
                  <h3 className="bottom-heading py-80 px-2 m-0">
                    We can help you{" "}
                    <span className="text-dark-orange">maximize your ROI</span> and
                    optimize your campus recruiting process.
                  </h3>
                </div>
              </div>
            </div>
            <div className="section-3">
              <div className="container">
                <div className="container-fluid">
                  <h2 className="py-80"> Here is how we can help!</h2>
                  <div className="row ">
                    <div className="col-12 col-md-6 solution-mb-9 d-flex flex-column justify-content-center">
                      <h3>Resume Evaluation</h3>
                      <p>
                        Our resume screening system can be the gatekeeper that helps
                        recruiters to review resumes after the initial screening steps
                        for{" "}
                        <span className="text-dark-orange">
                          minimum requirements
                        </span>{" "}
                        - no more time wasted on the 90% unmatching ones. With{" "}
                        <span className="text-dark-orange">
                          AI-powered
                        </span>{" "}
                        evaluation, our system will also provide you with an overall
                        job fit score to facilitate and expedite your decision-making.
                      </p>
                      <a href="/employer-resume-screening" className="default-btn mt-3" style={{paddingLeft:"25px", textDecoration:"none", backgroundColor:"#ff6b00", width:"12rem"}}>Learn More</a>
                    </div>
                    <div className="col-12 col-md-6 solution-mb-9 text-center">
                      <img src="https://hirebeat-assets.s3.amazonaws.com/solution_page/section-3-1.png" className="img-fluid" alt="Resume Evaluation" />
                    </div>
                  </div>
                  <div className="row flex-row-reverse">
                    <div className="col-12 col-md-6 solution-mb-4-4 d-flex flex-column justify-content-center">
                      <h3>All-in-one ATS</h3>
                      <p>
                        Streamline the entire recruitment process in{" "}
                        <span className="text-dark-orange">
                          one centralized platform,
                        </span>
                        , and enjoy more control and visibility of the whole pipeline.
                        Our all-in-one ATS enables you to source diverse talents, post
                        and broadcast positions, screen and track applicants, manage
                        the talent pool, and many more. You can also track and monitor
                        the KPIs with analytics reporting.
                      </p>
                    </div>
                    <div className="col-12 col-md-6 solution-mb-4-4 text-center">
                      <img src="https://hirebeat-assets.s3.amazonaws.com/solution_page/section-3-2.png" className="img-fluid" alt="All-in-one ATS" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12 col-md-6 solution-mb-4-4 d-flex flex-column justify-content-center">
                      <h3>Diversity Hire and Reporting</h3>
                      <p>
                        Collect and track your diversity data throughout the hiring
                        process with our diversity hiring feature. From the
                        <span className="text-dark-orange">
                          {" "}
                          EEO statement
                        </span>{" "}
                        to the{" "}
                        <span className="text-dark-orange">
                          diversity survey
                        </span>
                        , show the candidates that you care about equal opportunity
                        not only in the hiring process but also in the workspace.
                      </p>
                    </div>
                    <div className="col-12 col-md-6 solution-mb-4-4 text-center">
                      <img src="https://hirebeat-assets.s3.amazonaws.com/solution_page/section-3-3.png" className="img-fluid" alt="Diversity Hire and reporting" />
                    </div>
                  </div>
                  <div className="row flex-row-reverse">
                    <div className="col-12 col-md-6 solution-mb-4-4 d-flex flex-column justify-content-center">
                      <h3>One-way Interview Screening</h3>
                      <p>
                        One-way Video Interview allows you to meet the candidates
                        behind the screen but{" "}
                        <span className="text-dark-orange">
                          cut the time cost
                        </span>{" "}
                        by 10 fold. Get more insights about the candidate through
                        their behavioral language and get a better sense of whether
                        they will fit into your organization’s culture.
                      </p>
                      <a href="/employer-feature-video" className="default-btn mt-3" style={{paddingLeft:"25px", textDecoration:"none", backgroundColor:"#ff6b00", width:"12rem"}}>Learn More</a>
                    </div>
                    <div className="col-12 col-md-6 solution-mb-4-4 text-center">
                      <img src="https://hirebeat-assets.s3.amazonaws.com/solution_page/section-3-4.png" className="img-fluid" alt="One-way interview Screening" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12 col-md-6 solution-mb-4-4 d-flex flex-column justify-content-center">
                      <h3>Talent Management</h3>
                      <p>
                        A centralized talent management platform will include
                        everything you need to stay proactive and on track for every
                        requisition. Save time and cost by utilizing the{" "}
                        <span className="text-dark-orange">
                          internal referral system
                        </span>{" "}
                        and{" "}
                        <span className="text-dark-orange">
                          reactivating your past candidates
                        </span>
                        . Search in our{" "}
                        <span className="text-dark-orange">
                          talent pool{" "}
                        </span>
                        based on desired criteria to find your ideal candidates.
                        Organize all your candidate-related information in one place
                        so that sourcing and candidate management is never a headache.
                      </p>
                    </div>
                    <div className="col-12 col-md-6 solution-mb-4-4 text-center">
                      <img src="https://hirebeat-assets.s3.amazonaws.com/solution_page/section-3-5.png" className="img-fluid" alt="Talent management" />
                    </div>
                  </div>
                  <div className="row flex-row-reverse">
                    <div className="col-12 col-md-6 solution-mb-4-4 d-flex flex-column justify-content-center">
                      <h3>Company Branding</h3>
                      <p>
                        Fill in a few basic information and voila -{" "}
                        <span className="text-dark-orange">
                          your company branding page
                        </span>{" "}
                        is ready to go! No need to manage a separate career portal on
                        your own. We have all your active job postings and company
                        profile in one place, saving time both for you and your
                        candidates.
                      </p>
                    </div>
                    <div className="col-12 col-md-6 solution-mb-4-4 text-center">
                      <img src="https://hirebeat-assets.s3.amazonaws.com/solution_page/section-3-6.png" className="img-fluid" alt="Company branding" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <FreeTrialArea />
          <Footer />
        </React.Fragment>
      </DocumentMeta>
    )
  }
}
export default SolutionPage;