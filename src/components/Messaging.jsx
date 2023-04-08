import React, { useState, useEffect } from "react";

const Messaging = ({ title, description, github, live, convo, images }) => {
  const [inputValue, setInputValue] = useState("");
  const [output, setOutput] = useState("");
  const [inputValuesList, setInputValuesList] = useState([]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleButtonClick = () => {
    if (inputValue === "yes") {
      setOutput("It's nice to meet you!");
    }
    setInputValue("");
    setInputValuesList([...inputValuesList, inputValue]);
  };

  const handleClearConversation = () => {
    setInputValuesList([]);
    localStorage.removeItem(`${title}_conversation`); // Remove conversation from local storage using the unique identifier
  };

  useEffect(() => {
    const localStorageKey = `${title}_conversation`;
    const storedConversation =
      JSON.parse(localStorage.getItem(localStorageKey)) || [];
    setInputValuesList(storedConversation); // Set stored conversation to inputValuesList state
  }, [title]);

  useEffect(() => {
    const localStorageKey = `${title}_conversation`;
    localStorage.setItem(localStorageKey, JSON.stringify(inputValuesList));
  }, [inputValuesList, title]);

  return (
    <div className="messaging-container">
      <div className="messaging-content">
        <div className="sticky">
          <p>{title}</p>
          {github ? (
            <a href={github}>
              <img
                className="gh-icon"
                src="https://img.icons8.com/material-outlined/512/github.png"
              />
            </a>
          ) : null}

          {live ? (
            <a href={live}>
              <img
                className="gh-icon"
                src="https://img.icons8.com/ios/512/live-photos.png"
              />
            </a>
          ) : null}
        </div>
        <div>
          {convo.map((item, index) => (
            <p key={index} className="convo-item">
              {item}
            </p>
          ))}
        </div>
        <p>{description}</p>
        {images.map((pic, index) => (
          <p key={index} className="">
            <img src={pic} alt="pic" className="convo-pic" />
          </p>
        ))}
        <div>
          {/* {output && ( */}
          <div>
            {inputValuesList.map((inputValue, index) => (
              <div key={index}>{inputValue}</div>
            ))}

            {output}
          </div>
          {/* )} */}
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
      <button onClick={handleClearConversation}>Clear Conversation</button>{" "}
      {/* Add a button to clear conversation */}
    </div>
  );
};

export default Messaging;
