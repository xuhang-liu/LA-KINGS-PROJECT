import React, { Component } from 'react';
import PageTitleArea from '../Common/PageTitleArea';
import QuizResultAnalyst from './QuizResultAnalyst';
import QuizResultPM from './QuizResultPM';
import QuizResultDE from './QuizResultDE';
import QuizResultCSR from './QuizResultCSR';
import QuizResultSR from './QuizResultSR';
import QuizResultDesigner from './QuizResultDesigner';
import FreeTrialArea from '../HomeSaas/FreeTrialArea';
import { useEffect } from "react";

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

class QuizResultPage extends Component {
    render() {
        const userInput = this.props.location.params;
        console.log(userInput["userInput"]);
        return (
            <React.Fragment>
                <ScrollToTopOnMount />
                <PageTitleArea 
                    pageTitle="View Your Results" 
                    pageDescription="Your suitable position is" 
                />
                {getFinalResult(userInput["userInput"])}
                <FreeTrialArea />
            </React.Fragment>
        );
    }
}

function getFinalResult(userInput) {
    //  slice userInput
    let data = []
    for (let i = 0; i < userInput.length; i += 3) {
        data.push(userInput.slice(i, i+3));
    }
    console.log(data);

    // map userInput to personality. eg "INTP"
    let options = [["E", "I"], ["S", "N"], ["F", "T"], ["J", "P"]];
    let personality = "";
    for (let i = 0; i < data.length; i++) {
        let option = options[i];
        console.log(data[i]);
        personality += matchPersonality(data[i], option);
    }
    console.log(personality);

    // map personality to position. eg Analyst
    return matchPosition(personality);
}

function matchPersonality(userInput, option) {
    let res = "";
    let count1 = 0;
    let count2 = 0;
    for (let i = 0; i < userInput.length; i++) {
        userInput[i] == 1 ? count1++ : count2++;
    }
    count1 > count2 ? (res = option[0]) : (res = option[1]);
    return res;
}

function matchPosition (personality) {
    // position pool
    let analyst = ["INTP", "ISTJ"];
    let PM = ["ENTP", "ESTJ", "ISTP", "ESTP"];
    let developer = ["INTJ", "ISFJ"];
    let CSR = ["INFP", "ENFP", "ESFJ", "ESFP"];
    let SR = ["ENTJ", "ENFJ", "ISFP"];
    let designer = ["INFJ"];

    // determine position
    if (analyst.indexOf(personality) != -1) {
        console.log("Analyst");
        return <QuizResultAnalyst />;
    }
    else if (PM.indexOf(personality) != -1) {
        console.log("Product Manager")
        return <QuizResultPM />;
    }
    else if (developer.indexOf(personality) != -1) {
        console.log("Developer/Engineer");
        return <QuizResultDE />;
    }
    else if (CSR.indexOf(personality) != -1) {
        console.log("Customer Service Representatives");
        return <QuizResultCSR />;
    }
    else if (SR.indexOf(personality) != -1) {
        console.log("Sales Representatives");
        return <QuizResultSR />;
    }
    else {
        return <QuizResultDesigner />;
    }
    return null;
}
/*
    const userInput = this.props.location.params;
        console.log(userInput["userInput"]);
*/
export default QuizResultPage;