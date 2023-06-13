import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Badge from "@mui/material/Badge";

const Messaging = ({
  title,
  description,
  github,
  live,
  convo,
  images,
  starred,
}) => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    // width: "60vw",
    bgcolor: "black",
    boxShadow: 24,
    p: 4,
    display: "flex", // Add display: "flex" to center the items
    alignItems: "center",
    justifyContent: "center",
  };

  const [inputValue, setInputValue] = useState("");
  const [output, setOutput] = useState("");
  const [inputValuesList, setInputValuesList] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState();

  const handleOpen = (imageSrc) => {
    setOpen(true);
    setSelectedImage(imageSrc); // Set the clicked image URL as the selected image in state
  };

  const handleClose = () => setOpen(false);

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
      <div className="sticky mess-title">
        <div className="proj-sum">
          <p className="mess-icon">
            <img src={images[0]} alt="pic" className="project-icon" />
          </p>
          <p className="head-title">{title}</p>
          <div className="star-div">
            {starred ? (
              <img
                className="star-icon"
                src="https://img.icons8.com/color/512/filled-star.png"
              />
            ) : null}
          </div>
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
      <div className="messaging-content">
        <div className="messaging-convo">
          <div className="convo-map">
            {convo.map((item, index) => (
              <div key={index} className="convo-item">
                <img src={images[0]} alt="pic" className="convo-icon" />
                <div className="message">{item}</div>
              </div>
            ))}
          </div>

          {images.map((pic, index) => (
            <div key={index} className="m-pic">
              <img
                src={pic}
                alt="pic"
                className="convo-pic"
                onClick={() => handleOpen(pic)}
              />
            </div>
          ))}
          {inputValuesList.map((inputValue, index) => (
            <div className="input" key={index}>
              <p className="input-value input">{inputValue}</p>
            </div>
          ))}
          <div className="output">{output}</div>
        </div>
      </div>
      <div className="mess-in">
        <div className="submitting">
          <div className="message-icon">
            <img
              onClick={handleClearConversation}
              className="gh-icon"
              src="https://img.icons8.com/ios/512/broom.png"
            />
          </div>
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            className="input-field"
            placeholder="Send a message..."
          />
          <div className="message-icon">
            <img
              onClick={handleButtonClick}
              className="gh-icon"
              src="https://img.icons8.com/external-prettycons-lineal-prettycons/512/external-send-social-media-prettycons-lineal-prettycons.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messaging;
