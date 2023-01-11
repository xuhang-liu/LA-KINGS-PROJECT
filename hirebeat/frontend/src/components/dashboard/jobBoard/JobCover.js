import React, { useState, useEffect } from "react";
import JobList from "./JobList";
import JobPortalPage from "./JobPortalPage";
import { tourConfigEmployer } from "../DashboardComponents";
import Tour from 'reactour';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
import axios from "axios";
import {
  Box, Button, Icon, Input, InputGroup, InputLeftElement, Stack, HStack, Heading
} from '@chakra-ui/react';
import { FiSearch, FiPlus } from 'react-icons/fi';

const decideClassName = (filter, text) => {
  return filter == text ? "btn-selected2" : "btn-unselected2";
};

export const JobCover = (props) => {
  const [filter, setFilter] = useState((sessionStorage.getItem("filter") == "closed") ? "closed" : "active");
  const [curJob, setCurJob] = useState([]);
  const [jobKey, setJobKey] = useState(0);
  const [view, setView] = useState((sessionStorage.getItem("view") == "true") ? true : false);
  const [viewPortal, setViewPortal] = useState((sessionStorage.getItem("viewPortal") == "true") ? true : false);
  const [keyWords, setKeyWords] = useState("");
  const [isOpenTour, setOpenTour] = useState(false);
  const [jobt_company_id, setJobt_company_id] = useState("");

  const onChange = (e) => {
    setKeyWords(e.target.value);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    // JobTarget steps:
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    // Create or get jobtarget company
    if ((!props.profile.is_subreviwer) && (!props.profile.is_external_reviewer)) {
      let data1 = {
        "p_token": "9d1a6a6e-ea43-4ed4-9f8b-f4a0c0010ae8",
        "name": props.employerProfileDetail.name,
        "external_company_id": props.employerProfileDetail.id
      }
      axios.post("https://atsapi.jobtarget.com/api/employer/company/create", data1, config).then((res1) => {
        if (res1.data.status == 0 || res1.data.status == "0") {
          // update info
          let jobt_data = { "profile_id": props.profile.id, "jobt_company_id": res1.data.company_id, "jobt_user_id": "", "jobt_token": "" }
          axios.post("accounts/job-target-info-update", jobt_data, config).then((res) => {
            setJobt_company_id(res1.data.company_id);
          }).catch(error => {
            console.log(error)
          });
        } else {
          let data2 = {
            "p_token": "9d1a6a6e-ea43-4ed4-9f8b-f4a0c0010ae8",
            "external_company_id": props.employerProfileDetail.id
          }
          axios.post("https://atsapi.jobtarget.com/api/employer/company/getcompaniesviaptoken", data2, config).then((res2) => {
            if (res2.data.status == 0 || res2.data.status == "0") {
              // update info
              let jobt_data = { "profile_id": props.profile.id, "jobt_company_id": res2.data.companies[0].company_id, "jobt_user_id": "", "jobt_token": "" }
              axios.post("accounts/job-target-info-update", jobt_data, config).then((res) => {
                setJobt_company_id(res2.data.companies[0].company_id);
              }).catch(error => {
                console.log(error)
              });
            }
          }).catch(error => {
            console.log(error)
          });
        }
      }).catch(error => {
        console.log(error)
      });
    }
    // The end of jobtarget steps
  }, []);

  // tour functions
  const disableBody = (target) => disableBodyScroll(target);
  const enableBody = (target) => enableBodyScroll(target);

  const closeTour = () => {
    setOpenTour(false)
    this.enableBody();
  };

  const openTour = () => {
    setOpenTour(true)
  }

  return (
    <div>
      <Tour
        onRequestClose={closeTour}
        steps={tourConfigEmployer}
        isOpen={isOpenTour}
        className="helper"
        rounded={6}
        onAfterOpen={disableBody}
        onBeforeClose={enableBody}
        showNumber={false}
        disableDotsNavigation={true}
        showNavigation={false}
        showNavigationNumber={false}
        nextButton={<i className="tour-next-btn" style={{ color: "#006dff", border: "1px solid #006dff", backgroundColor: "transparent" }}>Next</i>}
        prevButton={<i className="tour-next-btn" style={{ display: "none" }}></i>}
        lastStepNextButton={<i className="tour-next-btn" style={{ color: "#fff", background: "#006dff" }}>Congrats! You're ready now!</i>}
      />

      {((!viewPortal) || (props.job_back_home)) ?
        <Box px='24' mt='12' mb='14' alignItems='center'>
          <div>
            <HStack>
              <Heading as='h5' size='sm' color="muted"><i className="bx-fw bx bx-briefcase"></i><span style={{ marginLeft: "0.6rem" }}>Jobs</span></Heading>
              {props.profile.viewed_employer_tutorial && (parseInt((new Date(props.profile.datejoined).getDate() + 30) - (new Date().getDate())) >= 0)} {(!(props.profile.is_subreviwer || props.profile.is_external_reviewer)) && <span onClick={openTour}><i className="bx bxs-error-circle bx-xs" style={{ paddingLeft: "0.4rem", color: "#ff6b00", cursor: "pointer" }}></i><span style={{ paddingLeft: "0.4rem", color: "#ff6b00", fontSize: "1rem", fontWeight: "600", fontFamily: "Inter, Segoe UI", cursor: "pointer" }}>Getting Started!</span></span>}
            </HStack>
            <Stack
              direction={{
                base: 'column',
                md: 'row',
              }}
              justify="space-between"
              mt='3'
            >
              <InputGroup maxW="xs">
                <InputLeftElement pointerEvents="none">
                  <Icon as={FiSearch} color="muted" boxSize="5" />
                </InputLeftElement>
                <Input placeholder="Search" value={keyWords} onChange={onChange} />
              </InputGroup>
              <Box>
                {(!(props.profile.is_subreviwer || props.profile.is_external_reviewer)) &&
                  <Button _hover={{ bg: "orange.500" }} colorScheme='blue' leftIcon={<FiPlus />} onClick={props.renderJobCreation} data-tut="reactour-createjob">Create New Position</Button>
                }
              </Box>
            </Stack>
          </div>
          <JobList
            jobs={props.jobs}
            user={props.user}
            profile={props.profile}
            filter={filter}
            curJob={curJob}
            setCurJob={setCurJob}
            renderJobEdition={props.renderJobEdition}
            setJobInfo={props.setJobInfo}
            isLoaded={props.isLoaded}
            getAllJobs={props.getAllJobs}
            getPJobs={props.getPJobs}
            jobKey={parseInt(sessionStorage.getItem("jobKey")) || jobKey}
            setJobKey={setJobKey}
            view={view}
            setView={setView}
            setViewPortal={setViewPortal}
            employerProfileDetail={props.employerProfileDetail}
            setJob_back_home={props.setJob_back_home}
            keyWords={keyWords}
            renderJobCreation={props.renderJobCreation}
          />
        </Box> :
        <JobPortalPage
          setViewPortal={setViewPortal}
          job={props.jobs[parseInt(sessionStorage.getItem("jobKey")) || jobKey]}
          user={props.user}
          profile={props.profile}
          filter={filter}
          getAllJobs={props.getAllJobs}
          getPJobs={props.getPJobs}
          postedJobs={props.postedJobs}
          companyName={props.profile.company_name}
          loaded={props.loaded}
          addInterviews={props.addInterviews}
          getReceivedInterview={props.getReceivedInterview}
          getApplicantsVideos={props.getApplicantsVideos}
          getApplicantsInfo={props.getApplicantsInfo}
          getRecordStatus={props.getRecordStatus}
          dataLoaded={props.dataLoaded}
          isRecorded={props.isRecorded}
          int_ques={props.int_ques}
          id_candidate={props.id_candidate}
          username_candidate={props.username_candidate}
          email_candidate={props.email_candidate}
          phone_candidate={props.phone_candidate}
          location_candidate={props.location_candidate}
          resendInvitation={props.resendInvitation}
          updateCommentStatus={props.updateCommentStatus}
          renderPosition={props.renderPosition}
          updateViewStatus={props.updateViewStatus}
          subreviewerUpdateComment={props.subreviewerUpdateComment}
          checkUserExistence={props.checkUserExistence}
          user_existence={props.user_existence}
          getPostedJobs={props.getPostedJobs}
          employerProfileDetail={props.employerProfileDetail}
          jobt_company_id={(jobt_company_id == "") ? props.jobt_company_id : jobt_company_id}
          setShowSidebarTrue={props.setShowSidebarTrue}
          setShowSidebarFalse={props.setShowSidebarFalse}
          renderJobEdition={props.renderJobEdition}
          setJobInfo={props.setJobInfo}
        />
      }
    </div>
  );
};
