import React, { Component } from 'react';
import PageTitleArea from '../Common/PageTitleArea';
import BlogGrid from '../Blog/BlogGridHome';
import FreeTrialArea from '../HomeSaas/FreeTrialArea';

class Blog extends Component {
    render() {
        return (
            <React.Fragment>
                <PageTitleArea 
                    pageTitle="Blog" 
                    pageDescription="News and Insights" 
                />
                <BlogGrid />
                <FreeTrialArea />
            </React.Fragment>
        );
    }
}

export default Blog;