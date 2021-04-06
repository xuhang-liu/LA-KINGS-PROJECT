import React, { Component } from 'react';
import PageTitleArea from '../Common/PageTitleArea';
import BlogGridHomeEmployer from './BlogGridHomeEmployer';
import FreeTrialArea from '../HomeSaas/FreeTrialArea';
import { useEffect } from "react";
import Footer from "../layout/Footer";
import DocumentMeta from 'react-document-meta';

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

class bloggridEmployer extends Component {
    render() {
        const meta = {
            title: 'HireBeat – Your First Step to A Better Recruiting Journey',
            description: 'Join the world’s fastest-growing hiring trend with our automated interviewing platform.',
            canonical: 'https://hirebeat.co/bloghome_employer',
            meta: {
              charset: 'utf-8',
              name: {
                keywords: 'interview, jobs, job interview, recruiting, hiring, interview tips'
              }
            }
          };
        return (
            <DocumentMeta {...meta}>
            <React.Fragment>
                <ScrollToTopOnMount />
                <PageTitleArea 
                    pageTitle="Blog" 
                    pageDescription="News and Insights" 
                />
                <BlogGridHomeEmployer />
                <FreeTrialArea />
                <Footer />
            </React.Fragment>
            </DocumentMeta>
        );
    }
}

export default bloggridEmployer;