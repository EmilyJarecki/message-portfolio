import React, { useState, useEffect } from "react";
import Messaging from "./Messaging";

const Projects = () => {
  const [projects, setProjects] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [about, setAbout] = useState(null);

  useEffect(() => {
    async function getProjectData() {
      const response = await fetch("./projects.json");
      const data = await response.json();
      setProjects(data);
    }
    async function getAboutData() {
      const response = await fetch("./about.json");
      const data = await response.json();
      setAbout(data);
    }
    getAboutData();
    getProjectData();
  }, []);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleChatsClick = () => {
    setSelectedProject(null); // Set selectedProject to null when "Chats" is clicked
  };

  const filteredProjects = projects
    ? projects.filter((project) =>
        project.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  const landing = () => {
    return (
      <div className="messaging-container">
        <div className="sticky mess-title">
          <div className="proj-sum">
            <p className="mess-icon">
EJ
            </p>
            <p className="head-title">Emily Jarecki</p>
          </div>
        </div>

        <div className="messaging-content">
          <div className="messaging-convo">
            <div className="convo-map">
              <img
                className="convo-pic gradution"
                src="https://i.imgur.com/Ig1fCNV.jpg"
              />
              {about &&
                about[0] &&
                about[0].landing &&
                about[0].landing.map((item, index) => (
                  <div key={index} className="convo-item">
EJ
                    <div className="message">{item}</div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const loaded = () => {
    return (
      <div className="parent2">
        <div className="proj-scroll">
          <div className="search-bar sticky">
            <h1 className="chats" onClick={handleChatsClick}>
              Projects
            </h1>

            <input
              className="search"
              type="text"
              placeholder="Search by title..."
              onChange={handleSearchChange}
            />
          </div>

          <div className="proj-map">
            {filteredProjects.map((project, index) => (
              <div key={index} className="">
                <div
                  className="project-group"
                  onClick={() => handleProjectClick(project)}
                >
                  <div className="project-mess-info">
                    {/* <Stack direction="row"> */}

                      <img
                        src={project.images[0]}
                        alt="projectImages"
                        className="project-icon"
                      />

                    {/* </Stack> */}

                    <div className="project-context">
                      <p className="proj-title">{project.title}</p>
                      <p className="proj-desc">{project.short_description}</p>
                    </div>
                  </div>

                  <div className="star-div">
                    {project.starred ? (
                      <img
                        className="star-icon"
                        src="https://img.icons8.com/color/512/filled-star.png"
                      />
                    ) : null}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {selectedProject ? (
          <div className="">
            {selectedProject && (
              <Messaging
                title={selectedProject.title}
                description={selectedProject.description}
                github={selectedProject.GHurl}
                live={selectedProject.url}
                convo={selectedProject.convo}
                images={selectedProject.images}
                starred={selectedProject.starred}
              />
            )}
          </div>
        ) : (
          landing()
        )}
      </div>
    );
  };

  return projects ? loaded() : <h1>Loading...</h1>;
};

export default Projects;
