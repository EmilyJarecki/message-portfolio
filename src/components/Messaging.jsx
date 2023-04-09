import React, { useState, useEffect } from "react";

const Messaging = ({ title, description, github, live, convo, images }) => {
  const [inputValue, setInputValue] = useState("");
  const [output, setOutput] = useState("");
  const [inputValuesList, setInputValuesList] = useState([]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleButtonClick = () => {
    // if (inputValue) {
    //   setOutput("Hi! It's nice to meet you!");
    // }
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
        <div className="sticky mess-title">
          <div className="proj-sum">
            <p className="mess-icon">
              <img src={images[0]} alt="pic" className="project-icon" />
            </p>
            <p className="mess-title">{title}</p>
          </div>

          <div className="proj-icons">
            {github ? (
              <a className="mess-gh" href={github}>
                <img
                  className="gh-icon"
                  src="https://img.icons8.com/material-outlined/512/github.png"
                />
              </a>
            ) : null}
            {live ? (
              <a className="mess-live" href={live}>
                <img
                  className="gh-icon"
                  src="https://img.icons8.com/ios/512/live-photos.png"
                />
              </a>
            ) : null}
          </div>
        </div>
        <div className="">
          {convo.map((item, index) => (
            <p key={index} className="convo-item">
              {item}
            </p>
          ))}
        </div>
        {images.map((pic, index) => (
          <p key={index} className="">
            <img src={pic} alt="pic" className="convo-pic" />
          </p>
        ))}
        <div>
          <div>
            {inputValuesList.map((inputValue, index) => (
              <div className="input" key={index}>
                {inputValue}
              </div>
            ))}
            <div className="output">{output}</div>
          </div>
        </div>
      </div>
      <div className="mess-in">
        <button className="clear" onClick={handleClearConversation}>
          Clear Conversation
        </button>
        <div className="submitting">
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            className="input-field"
          />
          <button className="" onClick={handleButtonClick}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Messaging;
