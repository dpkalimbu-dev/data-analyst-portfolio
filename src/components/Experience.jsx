import "./Experience.css";

const experiences = [
  {
    role: "Inventory Manager",
    company: "Country Wide Auto Group",
    location: "Calgary, AB",
    date: "Nov 2024 – Nov 2025",
    bullets: [
      "Manage and maintain 1,000+ inventory and operational records across CRM and internal systems, ensuring high data accuracy and consistency.",
      "Generate weekly KPI and inventory performance reports, analyzing trends to support operational planning and improve inventory decision-making.",
      "Identify and resolve data discrepancies, improving reporting accuracy and operational efficiency by 20%.",
      "Support inventory coordination and daily operations in a fast-paced automotive recycling environment.",
      "Utilize Excel, CRM platforms, and reporting tools for data validation, workflow tracking, reporting, and operational support tasks."
    ],
  },

  {
    role: "Radio Presenter ",
    company: " Red FM 106.7",
    location: "Calgary, AB",
    date: "Jan 2025 – Present",
    bullets: [
      "Hosted live radio programs and conducted engaging interviews with guests from diverse backgrounds.",
      "Researched topics, prepared discussion points, and delivered content in a clear and professional manner.",
      "Strengthened communication and public speaking skills through live broadcasting and audience interaction.",
      "Collaborated with team members to coordinate show schedules, promotions, and segment planning.",
      "Managed live discussions in a fast-paced environment while adapting quickly to schedule or topic changes."
    ],
  }
];

function Experience() {
  return (
    <section id="experience" className="experience-section">
      <div className="experience-header">
        <p className="section-intro">PROFESSIONAL JOURNEY</p>
        <h2 className="section-title">Experience</h2>
      </div>

      <div className="timeline">
        {experiences.map((experience, index) => (
          <article className="timeline-item" key={index}>
            <div className="timeline-content">
              <h3>
                {experience.role} <span> | {experience.company}</span>
              </h3>

              <div className="experience-meta">
                <span>{experience.location}</span>
                <span>{experience.date}</span>
              </div>

              <ul>
                {experience.bullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Experience;