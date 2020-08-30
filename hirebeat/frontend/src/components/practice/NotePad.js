import React, { useState, useEffect } from "react";

export function NotePad(props) {
  const [value, setValue] = useState("");
  const [status, setStatus] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    if (status != props.status) {
      setStatus(props.status);
      if (props.status == "Preparation") {
        setValue("");
      }
    }
  });

  return (
    <div className="video-recorder-row">
      <div className="col-8">
        <textarea
          style={{
            width: (props.isAudio) ? 400 : window.innerWidth / 2.4,
            height: "90px",
            borderColor: "lightgrey",
            borderWidth: "3px",
            borderRadius: "8px",
          }}
          placeholder=" Notes here ..."
          onChange={handleChange}
          value={value}
        />
      </div>
      <div className="col-3"></div>
    </div>
  );
}

export default NotePad;
