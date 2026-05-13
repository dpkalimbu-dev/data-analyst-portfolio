import saitLogo from "../assets/sait-logo.jpg";
import uniLogo from "../assets/murdoch-university-logo.png";
import certificateLogo from "../assets/google-certificate.jpg";
import "./Education.css";


function Education(){

    return(

       <section id="education" className="education-section">
  <div className="education-left">
    <p className="section-intro">ACADEMIC BACKGROUND</p>
    <h2 className="section-title">Education</h2>
  </div>

  <div className="education-right">

    <div className="education-card">
        <div className="logo-box">

      <img src={saitLogo} alt="SAIT" className="education-logo" />
        </div>

      <div className="education-content">
        <h3>SAIT, Calgary</h3>
        <p>Post-Graduate Certificate in Cybersecurity & Data Analytics</p>
        <p>Focus: Data Analysis, SQL, Python, Cybersecurity</p>
        <span>2024 – 2026</span>
      </div>
    </div>

    <div className="education-card">
        <div className="logo-box">

      <img src={uniLogo} alt="University" className="education-logo" />
        </div>

      <div className="education-content">
                <h3>Murdoch University</h3>

        <p>Bachelor’s in Business Information Systems & Management</p>
        <p>Focus: Business Analysis, Information Systems</p>
        <span>2021 – 2024</span>
      </div>
    </div>
    <div className="education-card">
        <div className="logo-box">

      <img src={certificateLogo} alt="University" className="education-logo" />
        </div>

      <div className="education-content">
                <h3>Google Data Analytics</h3>

        <p>Certificate focused on data cleaning, analysis, and visualization.</p>
        <p>Focus: SQL, Excel, and Tableau</p>
        <span>2026</span>
      </div>
    </div>

  </div>
</section>
)
}

export default Education;