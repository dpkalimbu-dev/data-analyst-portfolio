import "./About.css";
import profilePic from "../assets/profile-pic.jpeg";

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-left">
        <p className="section-intro">INTRODUCTION</p>
        <h2 className="section-title">About Me</h2>
      </div>
      
      <div className="about-right">
        <div className="profile-image">
        <img src={profilePic} alt="Puja" />
      </div>
        <p>
          I am a Data Analyst with a background in Data Analytics and Cybersecurity, currently based in Calgary. 
          I have experience working with operational and analytical data to identify trends, 
          improve reporting processes, and support data-driven decision-making.
        </p>

        <p>
         My work includes building dashboards, analyzing large datasets, 
         and creating KPI reports using tools such as Power BI, SQL, Python, and Excel. 
         I have worked on projects involving Alberta oil & gas production analytics and community equity analysis,
          where I focused on turning complex data into clear business insights.
        </p>

        <p>
          I am focused on continuously developing my technical and analytical skills while contributing to meaningful,
           data-driven business solutions.

        </p>
      </div>
       
    </section>
  );
}

export default About;