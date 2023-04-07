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
          <h1 className="sticky">About Me</h1>
          <input
            type="text"
            placeholder="Search by title..."
            onChange={handleSearchChange}
          />
          {filteredProjects.map((project, index) => (
            <div key={index}>
              <div onClick={() => handleProjectClick(project)}>
                <img
                  src={project.images[0]}
                  alt="projectImages"
                  className="project-icon"
                />
                <h3 className="proj-title">{project.title}</h3>
                <p>{project.short_description}</p>
              </div>
            </div>
          ))}
        </div>

        <div>
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
      </div>
    );
  };

  return projects ? loaded() : <h1>Loading...</h1>;
};

export default Projects;
