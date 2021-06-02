import React, { Component } from 'react';
import PageTitleArea from '../Common/PageTitleArea';
import BlogDetailsContentEmployer6 from './BlogDetailsContentEmployer6';
import FreeTrialArea from '../HomeSaas/FreeTrialArea';
import { useEffect } from "react";
import DocumentMeta from 'react-document-meta';

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

class BlogDetail1_Employer6 extends Component {
    render() {
        const meta = {
            title: 'HireBeat Blog – Topic: How Gender Pronouns Change the Way We Work',
            description: 'Using the right gender pronounce is crucial at the workplace, and it helps to build people’s confidence. This article helps you correct gender pronounce problems and build a more comfortable workplace.',
            canonical: 'https://hirebeat.co/employer_blog-how-gender-pronouns-change-the-way-we-work',
            meta: {
              charset: 'utf-8',
              name: {
                keywords: 'Hiring, She/Her, He/Him, They/Them, Ze/Zim, Gender, Pronouns, Job, recruit, LGBTQ, Interview, Career'
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
                <BlogDetailsContentEmployer6 />
                <FreeTrialArea />
            </React.Fragment>
            </DocumentMeta>
        );
    }
}

export default BlogDetail1_Employer6;