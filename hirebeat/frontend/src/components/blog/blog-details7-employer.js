import React, { Component } from 'react';
import PageTitleArea from '../Common/PageTitleArea';
import BlogDetailsContentEmployer7 from './BlogDetailsContentEmployer7';
import FreeTrialArea from '../HomeSaas/FreeTrialArea';
import { useEffect } from "react";
import DocumentMeta from 'react-document-meta';

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

class BlogDetail1_Employer7 extends Component {
    render() {
      let title = "HireBeat Blog – Millennials? We Want You!";
      title = title.length > 70 ? title.substring(0, 67) + "..." : title;
      let description = "Employers need to work better to attract more millennials to their workplaces. This article explores the key qualities and problems to look out for in the hiring progress.";
      description = description.length > 155 ? description.substring(0, 152) + "..." : description;
        const meta = {
            title: title,
            description: description,
            meta: {
              charset: 'utf-8',
              name: {
                keywords: 'interview, millennials, hiring, creativity, loyalty, workplace, career, job, HireBeat'
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
                <BlogDetailsContentEmployer7 />
                <FreeTrialArea />
            </React.Fragment>
            </DocumentMeta>
        );
    }
}

export default BlogDetail1_Employer7;