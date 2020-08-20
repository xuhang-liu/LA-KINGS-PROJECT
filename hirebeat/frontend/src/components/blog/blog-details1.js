import React, { Component } from 'react';
import PageTitleArea from '../Common/PageTitleArea';
import BlogDetailsContent1 from './BlogDetailsContent1';
import FreeTrialArea from '../HomeSaas/FreeTrialArea';

class BlogDetails extends Component {
    render() {
        return (
            <React.Fragment>
                <PageTitleArea 
                    pageTitle="Blog Details" 
                    pageDescription="News and Insights" 
                />
                <BlogDetailsContent1 />
                <FreeTrialArea />
            </React.Fragment>
        );
    }
}

export default BlogDetails;