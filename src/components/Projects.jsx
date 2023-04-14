import React, { useState, useEffect } from "react";
import Messaging from "./Messaging";
import Badge from "@mui/material/Badge";

const Projects = () => {
  const [projects, setProjects] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    async function getProjectData() {
      const response = await fetch("./projects.json");
      const data = await response.json();
      setProjects(data);
    }
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
        <h1>Welcome to my landing page</h1>
        <div className="message">Hi!</div>
      </div>
    );
  };

  const loaded = () => {
    return (
      <div className="parent2">
        <div className="proj-scroll">
          <div className="search-bar sticky">


            <h1 className="chats" onClick={handleChatsClick}>Chats</h1>


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
                    <Badge
                      color="success"
                      overlap="circular"
                      badgeContent=" "
                      variant="dot"
                    >
                      <img
                        src={project.images[0]}
                        alt="projectImages"
                        className="project-icon"
                      />
                    </Badge>
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
