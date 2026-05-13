import screenshot1 from "../assets/project-1.jpeg";
import screenshot2 from "../assets/project-2.jpeg";
import "./Projects.css";

const projects = [
  {
    title: "Alberta Oil & Gas Well Longevity Analysis",
    image: screenshot1,
    tools: ["SQL", "Python", "Power BI"],
    problem:
      "Identify the key factors that influence well lifespan and detect early signs of well failure.",
    approach: [
      "Collected and combined datasets from Alberta Energy Regulator (AER) and Petrinex.",
      "Cleaned and transformed data using SQL and Python.",
      "Engineered features such as decline rates and cumulative production.",
      "Built interactive dashboards in Power BI aligned with business questions.",
    ],
    insights: [
      "Wells showing early production decline are more likely to have shorter lifespans.",
      "Certain well types consistently outperform others in terms of production duration.",
    ],
    repo: "https://github.com/pgurung-infosec/alberta-well-performance-risk-analysis"
  },
  {
    title: "Calgary Equity Index Analysis",
    image: screenshot2,
    tools: ["Excel", "Power BI"],
    problem:
      "Identify high-risk communities and analyze the drivers of inequity across Calgary.",
    approach: [
      "Analyzed the Calgary Equity Index dataset.",
      "Built Power BI dashboards with maps, quadrant analysis, and domain comparisons.",
      "Evaluated relationships between social, economic, and environmental factors.",
    ],
    insights: [
      "Certain communities consistently show higher levels of inequity across multiple domains.",
      "Economic and accessibility factors are major drivers of overall equity scores.",
    ],
    repo: "https://github.com/pgurung-infosec/calgary-equity-index-analysis-"
  },
];

function Projects() {
  return (
    <section id="projects" className="projects-section">
        <div className="project-left">

      <p className="section-intro">WORK</p>
      <h2 className="section-title">Projects</h2>
        </div>

      <p className="projects-subtitle">
        Real-world problems solved through data analysis, dashboards, and
        business intelligence.
      </p>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <article className="project-card" key={index}>
            <img src={project.image} alt={project.title} />

            <div className="project-content">
              <div className="project-tags">
                {project.tools.map((tool, i) => (
                  <span key={i}>{tool}</span>
                ))}
              </div>

              <h3>{project.title}</h3>

              <h4>Problem</h4>
              <p>{project.problem}</p>

              <h4>Approach</h4>
              <ul>
                {project.approach.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>

              <h4>Key Insights</h4>
              <ul>
                {project.insights.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
                <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="repo-btn"
                >
                OPEN REPO
                </a>
            </div>
          </article>
        ))}
                      
      </div>
    </section>
  );
}

export default Projects;