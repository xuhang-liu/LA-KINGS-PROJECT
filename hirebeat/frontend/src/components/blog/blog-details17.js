import React, { Component } from 'react';
import PageTitleArea from '../Common/PageTitleArea';
import BlogDetailsContent17 from './BlogDetailsContent17';
import FreeTrialArea from '../HomeSaas/FreeTrialArea';
import { useEffect } from "react";
import {Helmet} from "react-helmet";

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

class BlogDetail17 extends Component {
    render() {
        let title = "HireBeat Blog – 11 Mistakes Made by The Most Interviewees According to HR";
        title = title.length > 70 ? title.substring(0, 67) + "..." : title;
        let description = "What are the common interview mistakes? What should you avoid doing during an interview? We have listed 11 common mistakes in interviews for your reference.";
        description = description.length > 155 ? description.substring(0, 152) + "..." : description;
        return (
            <React.Fragment>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>{title}</title>
                    <meta name="description" CONTENT={description}></meta>
                </Helmet>
                <ScrollToTopOnMount />
                <PageTitleArea 
                    pageTitle="Blog Details" 
                    pageDescription="News and Insights" 
                />
                <BlogDetailsContent17 />
                <FreeTrialArea />
            </React.Fragment>
        );
    }
}

export default BlogDetail17;