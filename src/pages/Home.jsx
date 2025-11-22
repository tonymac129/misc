import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { projectData } from "../assets/assets";
import Hero from "../components/Hero";
import Project from "../components/Project";

function Home() {
  const [displayed, setDisplayed] = useState(projectData.projects);
  const [search, setSearch] = useState("");

  useEffect(() => {
    let query = search.trim().toLowerCase();
    setDisplayed(
      projectData.projects.filter(
        (project) => project.name.toLowerCase().includes(query) || project.description.toLowerCase().includes(query)
      )
    );
  }, [search]);

  return (
    <motion.div initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
      <Hero
        title="Welcome to TonyMac129 Misc!"
        description="You can find all my small learning projects, demos, tests, and other miscellaneous stuff here!"
      />
      <input
        type="text"
        placeholder="Search projects"
        className="projects-search"
        value={search}
        onInput={(e) => setSearch(e.target.value)}
      />
      <div className="projects">
        {displayed.length > 0 ? (
          displayed.map((project) => {
            return <Project project={project} />;
          })
        ) : (
          <div className="message">
            No projects found! Maybe try{" "}
            <a href="https://tonymac129.github.io/#/projects" target="_blank">
              here
            </a>
            ?
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default Home;
