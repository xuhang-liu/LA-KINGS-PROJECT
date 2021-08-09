import React, { Component } from 'react';
import PageTitleArea from '../Common/PageTitleArea';
import FreeTrialArea from '../HomeSaas/FreeTrialArea';
import Quizdetail1 from './quizdetail1';
import { useEffect } from "react";
import Footer from "../layout/Footer";
import DocumentMeta from 'react-document-meta';

function ScrollToTopOnMount() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return null;
}

class QuizHome extends Component {
    render() {
        const meta = {
            title: 'HireBeat Quiz – The Best Video Interview Prep Tool For Jobseekers',
            description: 'Recommend positions according to your personality!',
            meta: {
                charset: 'utf-8',
                name: {
                    keywords: 'Career quiz, dream job, personality test, what job fits me, what job is right for me, career test'
                }
            }
        };
        return (
            <DocumentMeta {...meta}>
                <React.Fragment>
                    <ScrollToTopOnMount />
                    <PageTitleArea
                        pageTitle="Take Your Quiz Here"
                        pageDescription="Recommend positions according to your personality"
                    />
                    <Quizdetail1 />
                    <FreeTrialArea />
                    <Footer />
                </React.Fragment>
            </DocumentMeta>
        );
    }
}

export default QuizHome;