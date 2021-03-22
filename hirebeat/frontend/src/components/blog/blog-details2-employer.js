import React, { Component } from 'react';
import PageTitleArea from '../Common/PageTitleArea';
import BlogDetailsContentEmployer2 from './BlogDetailsContentEmployer2';
import FreeTrialArea from '../HomeSaas/FreeTrialArea';
import { useEffect } from "react";
import {Helmet} from "react-helmet";
import DocumentMeta from 'react-document-meta';

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

class BlogDetail1_Employer extends Component {
    render() {
        const meta = {
            title: 'HireBeat Blog – Benefits of hiring diverse candidates in your company',
            description: 'By hiring a diverse workforce, a company increases its chances of hiring the best talent since they have many individuals to choose from',
            canonical: 'https://hirebeat.co/employer_blog-benefits-of-hiring-diverse-candidates-in-your-company',
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
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>HireBeat Blog – Benefits of hiring diverse candidates in your company</title>
                    <meta name="description" CONTENT="By hiring a diverse workforce, a company increases its chances of hiring the best talent since they have many individuals to choose from"></meta>
                    <link rel="canonical" href="https://hirebeat.co/employer_blog-benefits-of-hiring-diverse-candidates-in-your-company"/>
                </Helmet>
                <ScrollToTopOnMount />
                <PageTitleArea 
                    pageTitle="Blog Details" 
                    pageDescription="News and Insights" 
                />
                <BlogDetailsContentEmployer2 />
                <FreeTrialArea />
            </React.Fragment>
            </DocumentMeta>
        );
    }
}

export default BlogDetail1_Employer;