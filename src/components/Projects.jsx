import React, { useState, useEffect } from "react";
import Messaging from "./Messaging";

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

  const filteredProjects = projects
    ? projects.filter((project) =>
        project.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  const loaded = () => {
    return (
      <div className="parent2">
        <div className="proj-scroll">
          <div className="search-bar sticky">
            <h1 className="chats">Chats</h1>
            <input
              className="search"
              type="text"
              placeholder="Search by title..."
              onChange={handleSearchChange}
            />
          </div>

          {filteredProjects.map((project, index) => (
            <div key={index} className="">
              <div
                className="project-group"
                onClick={() => handleProjectClick(project)}
              >
                <img
                  src={project.images[0]}
                  alt="projectImages"
                  className="project-icon"
                />
                <div className="project-context">
                  <p className="proj-title">{project.title}</p>
                  <p>{project.short_description}</p>
                </div>
              </div>
            </div>
          ))}
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
              />
            )}
          </div>
        ) : (
          <p>nothing selected</p>
        )}
      </div>
    );
  };

  return projects ? loaded() : <h1>Loading...</h1>;
};

export default Projects;
