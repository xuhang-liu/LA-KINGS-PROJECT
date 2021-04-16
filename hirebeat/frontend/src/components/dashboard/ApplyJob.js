import React, { useState } from 'react';

const ApplyJob = (props) =>{
    const [Applied, setApplied] = useState(false);
    return <>
        <div className="py-5" style={{background:"#E8EDFC"}}>
            <div style={{marginLeft:"auto", marginRight:"auto", width:"70%", minHeight:"800px", borderRadius:"10px", background:"white", position:"relative"}}>
                <img style={{height:"12rem", width:"100%"}} src="https://hirebeat-assets.s3.amazonaws.com/Employer/Top-Section.png"/>
                <h1 className="ml-5 mt-5" style={{fontWeight:"600", fontSize:"2.5rem", color:"#090D3A"}}>Senior Product Manager</h1>
                <h2 className="ml-5 mt-2" style={{fontWeight:"600", fontSize:"1.5rem", color:"#67A3F3"}}>Rho Business Banking</h2>
                <div className="row pl-3">
                    <div className="col-8 pl-5 mt-5 pb-5" style={{paddingRight:"3.7rem"}}>
                        <div style={{display:"flex", borderRadius:"5px", border:"2px solid #E8EDFC", textAlign:"center", fontWeight:"500", color:"#4A6F8A"}}>
                            <div style={{width:"25%", height:"4.8rem", borderRight:"2px solid #E8EDFC"}}>
                                <p className="mb-0" style={{marginTop:"0.6rem", fontSize:"1.1rem"}}>Job Level</p>
                                <p className="mt-0" style={{fontSize:"1.1rem", fontWeight:"600", color:"#090D3A", position:"relative", top:"-0.4rem"}}>Senior Level</p>
                            </div>
                            <div style={{width:"25%", height:"4.8rem", borderRight:"2px solid #E8EDFC"}}>
                                <p className="mb-0" style={{marginTop:"0.6rem", fontSize:"1.1rem"}}>Job Type</p>
                                <p className="mt-0" style={{fontSize:"1.1rem", fontWeight:"600", color:"#090D3A", position:"relative", top:"-0.4rem"}}>Full Time</p>
                            </div>                            
                            <div style={{width:"25%", height:"4.8rem", borderRight:"2px solid #E8EDFC"}}>
                                <p className="mb-0" style={{marginTop:"0.6rem", fontSize:"1.1rem"}}>Job Location</p>
                                <p className="mt-0" style={{fontSize:"1.1rem", fontWeight:"600", color:"#090D3A", position:"relative", top:"-0.4rem"}}>New York, NY</p>
                            </div>                            
                            <div style={{width:"25%", height:"4.8rem"}}>
                                <p className="mb-0" style={{marginTop:"0.6rem", fontSize:"1.1rem"}}>Job ID</p>
                                <p className="mt-0" style={{fontSize:"1.1rem", fontWeight:"600", color:"#090D3A", position:"relative", top:"-0.4rem"}}>10001</p>
                            </div>
                        </div>
                        <p className="mt-5" style={{fontWeight:"500", fontSize:"1rem", color:"#7C94B5"}}>Posted on April 9th, 2021</p>
                        <div style={{color:"#090D3A"}}>
                            <h2 className="mb-3">Company Overview</h2>
                            <p className="mb-5">Rho Business Banking is on a mission to help organizations work better, together, with money. We power the nation's fastest growing companies by creating ways for teams collaborate internally with finance in order to drive better decision making, more autonomy within work forces, all the while saving time and money for our clients. We're backed by tier-1 VC's like Dragoneer, Torch Capital, Inspired Capital, M13, and others while our team is comprised of individuals from the likes of Snap, Google, Appnexus, and Apple. </p>
                            <h2 className="mb-3">Job Summary</h2>
                            <p className="mb-5">We are looking for a Sr. Product Designer to join our team in NYC and contribute to our Cards, Payments, and Banking products. This is an exciting opportunity for anyone interested in shaping the direction and trajectory of a new product in Fintech in one of the most exciting markets in. the world. You will be collaborating with a cross-disciplinary team (Product Managers, Engineers, Analysts, QAs, Designers) in all phases of design from discovery to execution.</p>
                            <h2 className="mb-3">Job Responsibilities</h2>
                            <p className="mb-5">As a Sr. Product Designer at Rho, you will:
                                Think holistically about complex systems, empathize with customers, and understand business goals to create compelling and effective user experiences
                                Create thoughtful and appropriate solutions to design challenges of all sizes by translating research insights and company feature goals into beautiful and engaging user interfaces which satisfy user needs, business requirements and technical constraints
                                Collaborate with PM’s and engineers in an iterative, transparent and feedback driven process
                            </p>
                            <h2 className="mb-3">Basic Qualifications</h2>
                            <p className="mb-5">
                                CSS, HTML, Javascript, and detailed knowledge of how modern web & mobile application are built
                                Experience designing banking/financial products
                                UX Writing
                                Experience leading small teams
                            </p>
                        </div>
                        {!Applied &&
                            <button className="default-btn" onClick={()=>{setApplied(true)}} style={{paddingLeft:"5rem", paddingRight:"5rem"}}>
                                Apply Now
                            </button>
                        }
                        {Applied &&   
                            <div>
                                <div className="px-5 pt-3 light-blue-border">
                                    <h1 className="mt-3 mb-5" style={{color:"#090D3A"}}>
                                        Application
                                    </h1>
                                    <form>
                                        <div class="form-row">
                                            <div class="form-group col-md-6">
                                            <label className="job-apply-char1" for="inputEmail4">First Name</label><span className="job-apply-char2"> (Requiered)</span>
                                            <input type="text" class="form-control" id="inputEmail4" />
                                            </div>
                                            <div class="form-group col-md-6">
                                            <label className="job-apply-char1" for="inputPassword4">Last Name</label><span className="job-apply-char2"> (Requiered)</span>
                                            <input type="text" class="form-control" id="inputPassword4"/>
                                            </div>
                                        </div>
                                        <div class="form-row">
                                            <div class="form-group col-md-6">
                                                <label className="job-apply-char1" for="inputEmail4">Email</label><span className="job-apply-char2"> (Requiered)</span>
                                                <input type="email" class="form-control" id="inputEmail4"/>
                                            </div>
                                            <div class="form-group col-md-6">
                                                <label className="job-apply-char1" >Phone Number</label>
                                                <input type="number" class="form-control" />
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label className="job-apply-char1" for="inputAddress">Location</label>
                                            <input type="text" class="form-control" id="inputAddress" placeholder="City, State" />
                                        </div>
                                        <div class="form-row mt-4">
                                            <div class="form-group col-md-6">
                                                <label className="job-apply-char1" for="inputCity">Resume</label><span className="job-apply-char2"> (Required)</span>
                                            </div>
                                        </div>
                                        <button className="default-btn py-2 mb-4" style={{fontSize:"1.2rem", color:"#090D3A", background:"#E8EDFC", paddingLeft:"50px", paddingRight:"50px"}}>
                                            Attach
                                        </button>
                                    </form>
                                </div>
                                <div className="light-blue-border mt-4 px-5" style={{marginBottom:"6rem"}}>
                                <h1 className="mt-4 mb-5" style={{color:"#090D3A"}}>
                                        Create Account
                                </h1>
                                <form>
                                    <div class="form-group">
                                        <label className="job-apply-char1" for="inputAddress">Email/Username</label>
                                        <input type="text" class="form-control" id="inputAddress" placeholder="Create a username" />
                                    </div>
                                    <div class="form-group">
                                        <label className="job-apply-char1" for="inputAddress">Password</label>
                                        <input type="password" class="form-control" id="inputAddress" placeholder="At least 8 characters" />
                                    </div>
                                    <div class="form-group">
                                        <label className="job-apply-char1" for="inputAddress">Confirm Password</label>
                                        <input type="password" class="form-control" id="inputAddress" placeholder="Enter your password again" />
                                    </div>
                                    <div class="form-group row">
                                        <div class="col-sm-10">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" id="gridCheck1"/>
                                            <label style={{color:"#B0B0B0"}} class="form-check-label mb-4" for="gridCheck1">
                                                I have read and agreed to the
                                            </label><span style={{color:"#ff612f"}}> Terms & Conditions</span>
                                        </div>
                                        </div>
                                    </div>
                                    </form>
                                </div>
                                <button className="default-btn" style={{position:"absolute", right:"3.7rem", bottom:"5rem", paddingLeft:"25px"}}>
                                    Submit Application
                                </button>           
                            </div>
              
                        }
                    </div>
                    <div className="col-4 mt-5">
                        <button className="default-btn" onClick={()=>{setApplied(true)}} style={{paddingLeft:"5rem", paddingRight:"5rem"}}>
                            Apply Now
                        </button>
                        <p className="mt-5">Link to this job</p>
                        <div className="row ml-0" style={{position:"relative",background:"#E8EDFC", borderRadius:"5px", border:"2px solid #67A3F3", width:"90%", height:"3rem"}}>
                            <div className="pt-2 pl-2" style={{color:"#090D3A", fontSize:"1.4rem", fontWeight:"500", alignItems:"center"}}>
                                <p>https://hirebeat.co/jobs/</p>
                            </div>
                            <div className="py-1">
                                <button className="default-btn pt-1" style={{fontSize:"1.1rem", background:"#FF6B00", borderRadius:"5px", height:"2.2rem", alignItems:"center", paddingLeft:"2rem", paddingRight:"0.6rem", position:"absolute", right:"0.3rem"}}>
                                    <i className='bx bx-share-alt' style={{left:"0.5rem"}}></i>Copy
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
};

export default ApplyJob;