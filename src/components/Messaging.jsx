import React, { useState, useEffect } from "react";

const Messaging = ({ title, description, github, live, convo, images }) => {
  const [inputValue, setInputValue] = useState("");
  const [output, setOutput] = useState("");
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleButtonClick = () => {
    if (inputValue === "yes") {
      setOutput("Okay! Here they are!");
    } else {
      setOutput("");
    }
    setInputValue(""); // Clear the input value
  };

  return (
    <div className="messaging">
      <div className="sticky">
        <p>{title}</p>
        <p>{github}</p>
        <p>{live}</p>
      </div>
      <div>
        {convo.map((item, index) => (
          <p key={index} className="convo-item">
            {item}
          </p>
        ))}
      </div>
      <p>{description}</p>
      <div>
        {output && (
          <div>
            {output}
            {images.map((pic, index) => (
              <p key={index} className="">
                <img src={pic} alt="pic" className="convo-pic" />
              </p>
            ))}
          </div>
        )}
      </div>
      <div className="mess-in">
        <input type="text" value={inputValue} onChange={handleInputChange} />
        <button onClick={handleButtonClick}>Submit</button>
      </div>
    </div>
  );
};

export default Messaging;
