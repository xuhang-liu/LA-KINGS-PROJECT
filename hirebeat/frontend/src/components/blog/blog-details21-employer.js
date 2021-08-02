import React, { Component } from 'react';
import PageTitleArea from '../Common/PageTitleArea';
import BlogDetailsContentEmployer21 from './BlogDetailsContentEmployer21';
import FreeTrialArea from '../HomeSaas/FreeTrialArea';
import { useEffect } from "react";
import DocumentMeta from 'react-document-meta';

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

class BlogDetail1_Employer21 extends Component {
    render() {
        let title = "HireBeat Blog – What Is Resume Screening and Why Does it Matter";
        title = title.length > 70 ? title.substring(0, 67) + "..." : title;
        let description = "Even though the term ‘resume screening’ isn't new to many employers, its benefits could be. So if you think that the process is outdated and inefficient, we have some points that will provoke you to reconsider—here is why resume screening is important.";
        description = description.length > 155 ? description.substring(0, 152) + "..." : description;
        const meta = {
            title: title,
            description: description,
            meta: {
              charset: 'utf-8',
              name: {
                keywords: 'why resume screening is important for hiring'
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
                <BlogDetailsContentEmployer21 />
                <FreeTrialArea />
            </React.Fragment>
            </DocumentMeta>
        );
    }
}

export default BlogDetail1_Employer21;