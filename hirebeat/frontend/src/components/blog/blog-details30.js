import React, { Component } from 'react';
import PageTitleArea from '../Common/PageTitleArea';
import BlogDetailsContent30 from './BlogDetailsContent30';
import FreeTrialArea from '../HomeSaas/FreeTrialArea';
import { useEffect } from "react";
import DocumentMeta from 'react-document-meta';

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

class BlogDetail30 extends Component {
    render() {
        let title = "HireBeat Blog – 10 Impactful Ways To Update Your Resume For 2021";
        title = title.length > 70 ? title.substring(0, 67) + "..." : title;
        let description = "The very first step of landing an interview is having a good resume. If you want your resume stand out from others, this article is something you can’t miss. Check and follow the 10 effective tips in this article to make your resume look good and land an interview.";
        description = description.length > 155 ? description.substring(0, 152) + "..." : description;
        const meta = {
            title: title,
            description: description,
            meta: {
              charset: 'utf-8',
              name: {
                keywords: 'Resume format and layout'
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
                <BlogDetailsContent30 />
                <FreeTrialArea />
            </React.Fragment>
            </DocumentMeta>
        );
    }
}

export default BlogDetail30;