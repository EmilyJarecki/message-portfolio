import React, { useState, useEffect } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const About = () => {
  const [about, setAbout] = useState(null);

  useEffect(() => {
    async function getAboutData() {
      const response = await fetch("./about.json");
      const data = await response.json();
      setAbout(data);
    }
    getAboutData();
  }, []);

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
            <div>
              <Accordion
                sx={{
                  backgroundColor: "transparent",
                  border: "none",
                  boxShadow: "none",
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography
                    sx={{ color: "white", fontWeight: "bold", fontWeight: 300 }}
                  >
                    About
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ backgroundColor: "transparent" }}>
                  <Typography sx={{ color: "white", fontWeight: 300 }}>
                    {desc.about}
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                sx={{
                  backgroundColor: "transparent",
                  border: "none",
                  boxShadow: "none",
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography
                    sx={{ color: "white", fontWeight: "bold", fontWeight: 300 }}
                  >
                    Resume
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ backgroundColor: "transparent" }}>
                  <Typography sx={{ color: "white", fontWeight: 300 }}>
                    <a
                      className="download-button"
                      target="_blank"
                      href="https://drive.google.com/file/d/1J0nQfA7mHHTgftLOruim18z0ADKrGBhI/view?usp=share_link"
                    >
                      Download Resume
                    </a>
                  </Typography>
                </AccordionDetails>
              </Accordion>{" "}
              <Accordion
                sx={{
                  backgroundColor: "transparent",
                  border: "none",
                  boxShadow: "none",
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography
                    sx={{ color: "white", fontWeight: "bold", fontWeight: 300 }}
                  >
                    Contact
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ backgroundColor: "transparent" }}>
                  <Typography sx={{ color: "white", fontWeight: 300 }}>
                    <p>
                      <a className="" href={desc.linkedIn} target="_blank">
                        LinkedIn
                      </a>
                    </p>
                    <p>
                      {" "}
                      <a className="" href={desc.github} target="_blank">
                        GitHub
                      </a>
                    </p>
                    <p>
                      <a className="email" href="mailto:jareckiemily@yahoo.com">
                        jareckiemily@yahoo.com
                      </a>
                    </p>
                  </Typography>
                </AccordionDetails>
              </Accordion>
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
