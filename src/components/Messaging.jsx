import React, { useState, useEffect } from "react";

const Messaging = ({ title, description, github, live, convo, images }) => {
  const [inputValue, setInputValue] = useState("");
  const [output, setOutput] = useState("");
  const [inputValuesList, setInputValuesList] = useState(
    () => JSON.parse(localStorage.getItem("conversation")) || [] // Load conversation from local storage on component mount
  );

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleButtonClick = () => {
    if (inputValue === "yes") {
      setOutput("Okay! Here they are!");
    }
    setInputValue("");
    setInputValuesList([...inputValuesList, inputValue]);
  };

  const handleClearConversation = () => {
    setInputValuesList([]); // Clear input values list
    localStorage.removeItem("conversation"); // Remove conversation from local storage
    setOutput(""); // Clear output
  };

  useEffect(() => {
    localStorage.setItem("conversation", JSON.stringify(inputValuesList)); // Save conversation to local storage on input values list update
  }, [inputValuesList]);

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
            <div>        <div>
          {inputValuesList.map((inputValue, index) => (
            <div key={index}>{inputValue}</div>
          ))}
        </div>
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
      <button onClick={handleClearConversation}>Clear Conversation</button>{" "}
      {/* Add a button to clear conversation */}
    </div>
  );
};

export default Messaging;