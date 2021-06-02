import React, { Component } from 'react';
import PageTitleArea from '../Common/PageTitleArea';
import BlogDetailsContent20 from './BlogDetailsContent20';
import FreeTrialArea from '../HomeSaas/FreeTrialArea';
import { useEffect } from "react";
import DocumentMeta from 'react-document-meta';

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

class BlogDetail20 extends Component {
    render() {
        const meta = {
            title: 'HireBeat Blog – How to Handle the Question You don’t Know How to Answer in an Interview',
            description: 'Preparing for an interview is time-consuming and hard, and we can still miss preparing some questions that are going to be asked on the day of the interview. Here we have provided you with some magical tips that are going to help you answer such questions for sure.',
            canonical: 'https://hirebeat.co/blog-how-to-handle-the-question-you-donot-know',
            meta: {
              charset: 'utf-8',
              name: {
                keywords: 'ats, hiring, recruiting, talent acquisition, hr, hrtech, job, interview, candidate, sort'
              }
            }
          };
        return (
            <DocumentMeta {...meta}>
            <React.Fragment>
                <ScrollToTopOnMount />
                <PageTitleArea 
                    pageTitle="Blog Details" 
                    pageDescription="News and Insights" 
                />
                <BlogDetailsContent20 />
                <FreeTrialArea />
            </React.Fragment>
            </DocumentMeta>
        );
    }
}

export default BlogDetail20;