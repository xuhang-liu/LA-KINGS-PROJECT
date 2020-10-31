import React, { Component } from "react";

export default class QuestionList extends Component {
    render() {
      console.log("show something please");
      return (<div>
         {
            (()=>{switch(this.props.filter) {
                case "swe":
                return (
                    <div>
                        <p>•What is HashTable? How does it work in the backend perspective? What to do if the collision happened? Whats the time complexity of inserting? deleting? searching? </p>
                        <p>•What's the time complexity for the worse case?</p>
                        <p>•What is binary search tree? Whats the time complexity of inserting? deleting? searching? What's the time complexity for the worse case?</p>
                        <p>•What's the advantage of using BST rather than hashmap?  </p>
                    </div>
                );
                default:
                return <div></div>
            }})()
          }
        </div>
      );
    }
  }
