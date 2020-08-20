import React, { Component } from 'react';
import PageTitleArea from '../Common/PageTitleArea';
import BlogDetailsContent from '../Blog/BlogDetailsContent';
import FreeTrialArea from '../HomeSaas/FreeTrialArea';

class BlogDetails extends Component {
    render() {
        return (
            <React.Fragment>
                <PageTitleArea 
                    pageTitle="Blog Details" 
                    pageDescription="News and Insights" 
                />
                <BlogDetailsContent />
                <FreeTrialArea />
            </React.Fragment>
        );
    }
}

export default BlogDetails;