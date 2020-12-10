import React, { useState, Component } from 'react';
import { Link } from "react-router-dom";
import {decideClassName} from './../Components';


export default function JSIQ(props){
    const [filter, setFilter] = useState("Quant");
    return(
        <div style={{marginTop: '5%'}}>
            <h3 className="companydata-text1">Interview Questions</h3>
            {SwitchButton(filter, setFilter)}
            {renderContent(filter)}
            <div className="row" style={{marginTop: "1rem"}}>
                <div className="col-lg-7 col-md-7 align-center">
                    <p className="companydata-text5">View more and prepare your answer</p>
                </div>
                <div className="col-lg-5 col-md-5">
                    <Link to="/practice">
                        <a className="default-btn"
                            style={{color:"white", backgroundColor:"#090D3A"}}>
                            <i className="bx bxs-hot"></i>
                            Practice Now
                            <span></span>
                        </a>
                    </Link>
                </div>
            </div>
            <div className="row" style={{marginTop: "0.5rem"}}>
                <div className="col-lg-7 col-md-7 align-center">
                    <p className="companydata-text5">Improve your resume matching rate</p>
                </div>
                <div className="col-lg-5 col-md-5">
                    <Link to="/resume">
                        <a className="default-btn"
                            style={{color:"white", backgroundColor:"#090D3A"}}>
                            <i className="bx bxs-hot"></i>
                            Optimize Now
                            <span></span>
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    )
};

const SwitchButton = (filter, setFilter)=>{
  return(
      <div style={{marginBottom: "5px"}} className="container d-flex justify-content-start">
          <button
              className={decideClassName(filter, "Quant")}
              style = {{width: "90px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Quant")}
          >
              Quant
          </button>
          <button
              className={decideClassName(filter, "Trader")}
              style = {{width: "90px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Trader")}
          >
              Trader
          </button>
          <button
              className={decideClassName(filter, "Assistant Trader")}
              style = {{width: "90px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Assistant Trader")}
          >
              AT
          </button>
      </div>
  );
}

function renderContent(filter)  {
    switch (filter) {
        default: case "Quant":
            return(
                <div>
                    <p className="companydata-text2"><li>Suppose you have a perfectly round disk. You put three legs randomly on this disk to form a table. Supposing the legs are perfectly perpendicular to the disk and are attached to the disk firmly, what is the chance that the table will not fall when you flip the disk or, in other words, when you put the table to stand on its legs? (3/4, 2/9, 1/4)</li></p>
                    <p className="companydata-text2"><li>You have a drawer with an infinite number of two colors of socks, which exist in equal probability. What is the expected number of attempts at taking out socks individually from the drawer before a matching pair is found? </li></p>
                    <p className="companydata-text2"><li>How many digits in (100) ^10 Strategy for winning one dollar for every head in 100 throws of a coin toss. What question would you ask if you could ask one question to the person who knows the entire sequence of the 100-coin tosses?</li></p>
                </div>
            );
        case "Trader":
            return(
                <div>
                    <p className="companydata-text2"><li>What is the sum of the digits of all the numbers from 1 to 1000000? This is different from the sum of the numbers. For instance, the sum of the numbers from 1 to 10 is 55, whereas the digits' sum is 46.</li></p>
                    <p className="companydata-text2"><li>How would you compute the expected value of the median of rolling the dice three times?</li></p>
                    <p className="companydata-text2"><li>How would you calculate the probability of rain during the weekend?</li></p>
                    <p className="companydata-text2"><li>If I flip four coins and give you a dollar for every head, what is this game's expected value? </li></p>
                    <p className="companydata-text2"><li>Suppose you need to roll a dice until you get a 5. What is the expected value of the minimum value moved? </li></p>
                    <p className="companydata-text2"><li>How much is 37 * 43? </li></p>
                    <p className="companydata-text2"><li>What is the minimum number of people to guarantee expecting at least five people to share the same birthday month? </li></p>
                    <p className="companydata-text2"><li>What is the sum of all the odd numbers between 1 and 80? </li></p>
                    <p className="companydata-text2"><li>What is the probability that a series of fair coin flips will have an even number of heads? What if the coins are not all fair (though a subset are)? </li></p>
                    <p className="companydata-text2"><li>What is the fair price of a game in which you shuffle nine cards labeled 1 through 9 then keep choosing whether to open the next card or stop, given that you will receive the sum of the last decreasing sequence? </li></p>
                    <p className="companydata-text2"><li>How do you select five random numbers that add up to 1?</li></p>
                    <p className="companydata-text2"><li>There are ten people in the room, shaking hands with each other. How many total handshakes are there?</li></p>
                    <p className="companydata-text2"><li>How many digits is 99 to the 99th power? </li></p>
                    <p className="companydata-text2"><li>Suppose you're gambling on a coin flip being heads, giving you increased odds of 1.5:1 gradually up to 7:1. Would you bet on it or not? Why?</li></p>
                    <p className="companydata-text2"><li>Suppose you roll a regular dice. If you move an even number, for every $2 you bet, you get $3. If you roll an odd number, for every $4 you bet, you get $6. What's your expected return, and how should you bet?  </li></p>
                    <p className="companydata-text2"><li>Given 100-coin flips, what is the probability of getting an even number of heads?  </li></p>
                    <p className="companydata-text2"><li>Throw a die, and suppose you get paid the number you throw. If you are not satisfied with the first result, you can choose to throw it the second time. What is the expected payoff?  </li></p>
                    <p className="companydata-text2"><li>A cube painted with red paint was divided into 27 smaller cubes (3*3*3). Randomly pick one and toss it. What is the probability that at least one side can be seen to paint on it? </li></p>
                    <p className="companydata-text2"><li>You are given a six-sided die. What is the expected value of the difference between the two dice rolls?   </li></p>
                    <p className="companydata-text2"><li>I am thinking about two positive integers: a and b. I can tell you a/b belongs to the close interval [0.48, 0.52]. Can you give me all the possible values for b no matter what value a take?</li></p>
                    <p className="companydata-text2"><li>The expected value of dice is to reroll up to 3 times and take the highest number</li></p>
                    <p className="companydata-text2"><li>If you roll two dice and you have the option to roll again and get paid the highest roll, when is it optimal to roll again?  </li></p>
                    <p className="companydata-text2"><li>There are four coins. For each head you get, you get $1. You can also re-flip one coin after the initial four flips. What is the maximum you would pay to play this game?</li></p>
                    <p className="companydata-text2"><li>If you have an asset that goes up or down 20% with probability 1/2, what is the probability that after n days, the asset's price is unchanged?</li></p>
                    <p className="companydata-text2"><li>On a multiple-choice exam with three possible answers for each of the five questions, what probability is a student getting four or more correct answers just by guessing?  </li></p>
                    <p className="companydata-text2"><li>How many tons does the ocean weigh?  </li></p>
                    <p className="companydata-text2"><li>I flip four coins and give you a dollar for each head. I also allow you to convert one tail after I have scanned all four coins. What is the expected value of this game?  </li></p>
                    <p className="companydata-text2"><li>There are infinite cards numbered 1-5. You construct a deck. Someone guesses a value and draws a card. If they guessed correctly, they get the value. What composition of the deck minimizes their expected value?  </li></p>
                    <p className="companydata-text2"><li>How do you estimate how many human beings have ever lived on planet earth?</li></p>
                    <p className="companydata-text2"><li>What day of the week will it be ten years from today?  </li></p>
                    <p className="companydata-text2">
                        <li>
                            Five pirates of different ages have a treasure of 100 gold coins. On their ship, they decide to split the coins using this scheme:The oldest pirate proposes how to share the coins and ALL pirates (including the most senior) vote for or against it.
                            If 50% or more of the pirates vote for it, then the coins will be shared that way. Otherwise, the pirate proposing the scheme will be thrown overboard, and the process is repeated with the pirates that remain. As pirates tend to be a bloodthirsty bunch,
                            if a pirate would get the same number of coins if he voted for or against a proposal, he would vote against it so that the pirate who proposed the plan will be thrown overboard.
                            Assuming that all five pirates are intelligent, rational, greedy, and do not wish to die (and are rather good at math for pirates). What will happen?
                        </li>
                    </p>
                    <p className="companydata-text2"><li>We are playing a game where we start at 0 and flip a coin until someone wins. Every head that is flipped adds +1 to the number, and every tail adds -1. If the number reaches -10, I (the interviewer) wins, and if it goes 20, you win. What is the probability I will win?</li></p>
                    <p className="companydata-text2"><li>I am thinking of a ten-digit number. The first digit is the number of 0s in the number; the 2nd is the number of 1s etc. What is the number?  </li></p>
                    <p className="companydata-text2"><li>How much is 15% of 115? </li></p>
                    <p className="companydata-text2"><li>How many commercial aircraft are sold every year in the US?</li></p>
                    <p className="companydata-text2"><li>A has five fair coins, and B has four fair coins. A win if he flips more heads than B does. What is the probability of A winning?  </li></p>
                    <p className="companydata-text2"><li>Five pumpkins, given the sum of weights of every pair of two pumpkins, what's the weight of each pumpkin?  </li></p>
                    <p className="companydata-text2"><li>What is 38 squared?</li></p>
                    <p className="companydata-text2"><li>If I give you a 12-sided die and will pay you whatever the die lands on. If you are unhappy with the roll, you can choose to roll another two 6-sided dice, and I will pay you the sum of the two dice. How much are you willing to pay to play this game?  </li></p>
                    <p className="companydata-text2"><li>Apples cost 27 cents. How many apples can you purchase with $10? (And do this in under 1 minute).  </li></p>
                    <p className="companydata-text2"><li>How much is 52% of 78?</li></p>
                    <p className="companydata-text2"><li>What is the sum of the digits of all the numbers from 1 to 1000000? This is different from the sum of the numbers. For instance, the sum of the numbers from 1 to 10 is 55, whereas the digits' sum is 46</li></p>
                </div>
            );
        case "Assistant Trader":
            return(
                <div>
                    <p className="companydata-text2">Job Title: Assistant Trader</p>
                    <p className="companydata-text2"><li>Can you make me a four-wide market on the sum of four die rolls?</li></p>
                    <p className="companydata-text2"><li>Flip a coin until either HHT or HTT appears. Is one more likely to occur first? If so, which ones and with what probability? </li></p>
                    <p className="companydata-text2"><li>You have a box filled with cash. Cash value is uniformly randomly distributed from 1 to 1000. You are trying to win the box in an auction: you win the box if you bid at least the cash value in the box; you win nothing if you bid less (but you lose nothing). If you win the box, you can resell it for 150% of its value. How much should you bid to maximize your profit's expected value (resale of box minus bid)?</li></p>
                    <p className="companydata-text2"><li>What is the expected number of flips of a coin to simulate a six-sided die? </li></p>
                    <p className="companydata-text2"><li>Ten lightbulbs in a row, on or off, no two adjacent lightbulbs can be on. How many combinations can we have? </li></p>
                    <p className="companydata-text2"><li>Calculate e^5 up to two decimal numbers without a calculator. How many digits are there in 2^50?</li></p>
                    <p className="companydata-text2"><li>What is the last digit in the solution to 3^33? You roll a die until the sum of the integers rolled is greater than 13. What number are you most likely to stop on?</li></p>
                    <p className="companydata-text2"><li>Coin Triplets Problem Denote H for a head, T for tail in a coin flip. Flip a fair coin many times until either a pattern of HHT or HTT occurs. What's the probability that HHT occurs before HTT? Please elaborate on the reasoning.</li></p>
                </div>
            );
    }
};
