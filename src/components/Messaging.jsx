import React, { useState, useEffect } from "react";

const Messaging = ({ title, description, github, live, convo, images }) => {
  const [inputValue, setInputValue] = useState("");
  const [output, setOutput] = useState("");
  const [inputValuesList, setInputValuesList] = useState([]); // New state to store entered input values

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
    setInputValuesList([...inputValuesList, inputValue]); // Add entered input value to the list
  };

  return (
    <div className="messaging-container">
      <div className="messaging-content">
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
            <div>              {inputValuesList.map((inputValue, index) => (
                <div key={index}>{inputValue}</div>
              ))}
              {output}
              {images.map((pic, index) => (
                <p key={index} className="">
                  <img src={pic} alt="pic" className="convo-pic" />
                </p>
              ))}

            </div>
          )}
        </div>
      </div>
      <div className="mess-in">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          className="input-field"
        />
        <button onClick={handleButtonClick}>Submit</button>
      </div>
      {/* Render the entered input values as div elements */}
      <div></div>
    </div>
  );
};

export default Messaging;
