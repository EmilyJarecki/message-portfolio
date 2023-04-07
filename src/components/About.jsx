import React, { useState, useEffect } from "react";

const About = () => {
  const [about, setAbout] = useState(null);
  const [isOpenAbout, setIsOpenAbout] = useState(false);
  const [isOpenContact, setIsOpenContact] = useState(false);
  const [isOpenResume, setIsOpenResume] = useState(false); // New state for resume

  useEffect(() => {
    async function getAboutData() {
      const response = await fetch("./about.json");
      const data = await response.json();
      setAbout(data);
    }
    getAboutData();
  }, []);

  const handleToggleAbout = () => {
    setIsOpenAbout(!isOpenAbout);
  };

  const handleToggleContact = () => {
    setIsOpenContact(!isOpenContact);
  };

  const handleToggleResume = () => {
    // Function to toggle resume
    setIsOpenResume(!isOpenResume);
  };

  const loaded = () => {
    return (
      <div>
        {about.map((desc, index) => (
          <div key={index}>
            <p>{desc.image}</p>
            <p>{desc.name}</p>
            <p>{desc.title}</p>
            <div onClick={handleToggleAbout}>
              <h2>About</h2>
              {isOpenAbout && <p>{desc.about}</p>}
            </div>
            <div onClick={handleToggleResume}>
              <h2>Resume</h2>
              {isOpenResume && (
                <a
                  className="download-button"
                  target="_blank"
                  href="https://drive.google.com/file/d/1J0nQfA7mHHTgftLOruim18z0ADKrGBhI/view?usp=share_link"
                >
                  Download Resume
                </a>
              )}
            </div>
            <div onClick={handleToggleContact}>
              <h2>Contact</h2>
              {isOpenContact && (
                <div>
                  <p>{desc.linkedIn}</p>
                  <p>{desc.github}</p>
                  <p>{desc.email}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    );
  };

  return about ? loaded() : <h1>Loading...</h1>;
};

export default About;
