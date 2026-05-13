import "./Skills.css";

const skills = [
  {
    icon: "📊",
    title: "Data Analysis",
    description: "Working with datasets, cleaning data, identifying patterns, and preparing insights for business decisions.",
    tags: ["Advanced Excel", "Pivot Tables", "VLOOKUP", "Power Query", "SQL"],
  },
  {
    icon: "💻",
    title: "Programming",
    description: "Using Python for data analysis, data cleaning, and basic machine learning workflows.",
    tags: ["Python", "Pandas", "NumPy", "scikit-learn"],
  },
  {
    icon: "📈",
    title: "Data Visualization",
    description: "Building dashboards and visual reports that make complex data easier to understand.",
    tags: ["Power BI", "DAX", "Tableau", "Looker Studio"],
  },
  {
    icon: "🛠️",
    title: "Tools & Technologies",
    description: "Using common development and analytics tools for project work and documentation.",
    tags: ["VS Code", "Jupyter Notebook", "Git"],
  },
];

function Skills() {
  return (
    <section id="skills" className="skills-section">
        <div className="skills-left">

      <p className="section-intro">EXPERTISE</p>
      <h2 className="section-title">Skills</h2>
        </div>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <div className="skill-icon">{skill.icon}</div>
            <h3>{skill.title}</h3>
            <p>{skill.description}</p>

            <div className="skill-tags">
              {skill.tags.map((tag, i) => (
                <span key={i}>{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;