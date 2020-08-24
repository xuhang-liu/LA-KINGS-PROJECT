import React, { Component } from 'react';
import PageTitleArea from '../Common/PageTitleArea';
import BlogDetailsContent2 from './BlogDetailsContent2';
import FreeTrialArea from '../HomeSaas/FreeTrialArea';

class BlogDetails extends Component {
    render() {
        return (
            <React.Fragment>
                <PageTitleArea 
                    pageTitle="Blog Details" 
                    pageDescription="News and Insights" 
                />
                <BlogDetailsContent2 />
                <FreeTrialArea />
            </React.Fragment>
        );
    }
}

export default BlogDetails;