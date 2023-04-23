import React, { useState, useEffect } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Avatar from "@mui/material/Avatar";
import { pink } from "@mui/material/colors";

const About = () => {
  const [about, setAbout] = useState(null);
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

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
          <div className = "mapped" key={index}>
            <div className="about-cover">
              <div className="desc-img">
                <Avatar sx={{ bgcolor: pink[500] }}>EJ</Avatar>
              </div>
              <p className="desc-name">{desc.name}</p>
              <p className="desc-title">{desc.title}</p>
            </div>
            <div>
              <div className="accordian">
                <Accordion
                  className="each-accor"
                  expanded={expanded === "panel1"}
                  onChange={handleChange("panel1")}
                  sx={{
                    backgroundColor: "transparent",
                    border: "none",
                    boxShadow: "none",
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ color: "white"}} />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                  >
                    <Typography
                    className="acc-title"
                      sx={{
                        color: "white",
                        fontWeight: "bold",
                        fontWeight: 300,
                      }}
                    >
                      About
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={{ backgroundColor: "rgba(82, 88, 97, 0.28)" }}>
                    <Typography
                      sx={{
                        color: "white",
                        fontWeight: 300,
                        fontSize: "14px",
                        marginLeft: "20px",
                      }}
                    >
                      {desc.about}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                className="each-accor"
                  expanded={expanded === "panel2"}
                  onChange={handleChange("panel2")}
                  sx={{
                    backgroundColor: "transparent",
                    border: "none",
                    boxShadow: "none",
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                  >
                    <Typography
                      sx={{
                        color: "white",
                        fontWeight: "bold",
                        fontWeight: 300,
                      }}
                    >
                      Resume
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={{ backgroundColor: "rgba(82, 88, 97, 0.28)"  }}>
                    <Typography
                      sx={{
                        color: "white",
                        fontWeight: 300,
                        fontSize: "14px",
                        marginLeft: "20px",
                      }}
                    >
                      <a
                        className="download-button"
                        target="_blank"
                        href="https://drive.google.com/file/d/1J0nQfA7mHHTgftLOruim18z0ADKrGBhI/view?usp=share_link"
                      >
                        Download Resume
                      </a>
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                className="each-accor"
                  expanded={expanded === "panel3"}
                  onChange={handleChange("panel3")}
                  sx={{
                    backgroundColor: "transparent",
                    border: "none",
                    boxShadow: "none",
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                    aria-controls="panel3bh-content"
                    id="panel3bh-header"
                  >
                    <Typography
                      sx={{
                        color: "white",
                        fontWeight: "bold",
                        fontWeight: 300,
                      }}
                    >
                      Contact
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={{ backgroundColor: "rgba(82, 88, 97, 0.28)"  }}>
                    <Typography
                      sx={{
                        color: "white",
                        fontWeight: 300,
                        fontSize: "14px",
                        marginLeft: "20px",
                      }}
                    >
                      <p>
                        <a className="" href={desc.linkedIn} target="_blank">
                          LinkedIn
                        </a>
                      </p>
                      <p>
                        <a className="" href={desc.github} target="_blank">
                          GitHub
                        </a>
                      </p>
                      <p>
                        <a
                          className="email"
                          href="mailto:jareckiemily@yahoo.com"
                        >
                          jareckiemily@yahoo.com
                        </a>
                      </p>
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </div>
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
