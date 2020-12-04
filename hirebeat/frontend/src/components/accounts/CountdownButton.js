import React, { useState, useEffect } from 'react';

let timeChange;

export const CountdownButton = (props) => {
  const [time, setTime] = useState(60);
  const [btnDisabled, setBtnDisabled] = useState(false);
  const [btnContent, setBtnContent] = useState('Send Confirm Email');

  useEffect(() => {
    clearInterval(timeChange);
  }, []);

  useEffect(() => {
    if (time > 0 && time < 60) {
      setBtnContent(`${time}s Resend Email`);
    } else {
      clearInterval(timeChange);
      setBtnDisabled(false);
      setTime(60);
      setBtnContent('Send Confirm Email');
    }
  }, [time]);

  const resendEmail = () => {
    props.resendEmail();
    timeChange = setInterval(() => setTime(t => --t), 1000);
    setBtnDisabled(true);
  };

  return (
    <button
      disabled={btnDisabled}
      onClick={resendEmail}
      className="default-btn"
      style={{color:"white", backgroundColor:"#090D3A", paddingLeft: "1.5625rem", marginRight: "3rem"}}
    >
      {btnContent}
      <span></span>
    </button>
  );
};
