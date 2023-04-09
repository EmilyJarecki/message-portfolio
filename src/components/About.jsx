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
            <div className="about-cover">
              <p className="desc-img">{desc.image}</p>
              <p className="desc-name">{desc.name}</p>
              <p className="desc-title">{desc.title}</p>
            </div>

            <div className="accordion" onClick={handleToggleAbout}>
              <h2 className="">About</h2>
              <div className="acc-body">
                              {isOpenAbout && <p className="">{desc.about}</p>}

              </div>
            </div>



            <div className="accordion" onClick={handleToggleResume}>
              <h2 className="">Resume</h2>
              {isOpenResume && (
                <div className="acc-body">
                                  <a
                  className="download-button"
                  target="_blank"
                  href="https://drive.google.com/file/d/1J0nQfA7mHHTgftLOruim18z0ADKrGBhI/view?usp=share_link"
                >
                  Download Resume
                </a>
                </div>

              )}
            </div>



            <div className="accordion" onClick={handleToggleContact}>
              <h2 className="">Contact</h2>
              {isOpenContact && (
                <div className="contact-info acc-body">
                  <a className="" href={desc.linkedIn} target="_blank">
                    LinkedIn
                  </a>
                  <a className="" href={desc.github} target="_blank">
                    GitHub
                  </a>
                  <a className="email" href="mailto:jareckiemily@yahoo.com">
                    jareckiemily@yahoo.com
                  </a>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    );
  };

  return about ? (
    loaded()
  ) : (
    <div class="newtons-cradle">
      <div class="newtons-cradle__dot"></div>
      <div class="newtons-cradle__dot"></div>
      <div class="newtons-cradle__dot"></div>
      <div class="newtons-cradle__dot"></div>
    </div>
  );
};

export default About;
