import { motion } from "framer-motion";

function Project({ project }) {
  function handleClick() {
    window.open(project.link, "_blank");
  }

  return (
    <motion.div onClick={handleClick} whileHover={{ scale: 1.06, y: -3 }} className="project">
      <h2 className="project-name">{project.name}</h2>
      <div className="project-tags">
        {project.tags.map((tag) => (
          <div className="project-tag">{tag}</div>
        ))}
      </div>
      <p className="project-description">{project.description}</p>
    </motion.div>
  );
}

export default Project;
