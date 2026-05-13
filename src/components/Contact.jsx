import "./Contact.css";
import linkedinIcon from "../assets/linkedin.png";
import githubIcon from "../assets/github.png";
import emailIcon from "../assets/email.png";

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-header">
        <p className="section-intro">GET IN TOUCH</p>
        <h2 className="section-title">Contact</h2>
      </div>

      <div className="contact-right">
        <div className="contact-card">
          <p className="contact-text">
            Currently seeking entry-level Data Analyst and Business Intelligence
            opportunities in Calgary. I welcome opportunities to connect
            regarding roles, collaborations, or data-focused initiatives.
          </p>
        </div>

        <div className="contact-info-upper-container">
          <div className="contact-info-container">
            <img src={linkedinIcon} alt="linkedin icon" className="icon contact-icon" />
            <p><a href="https://www.linkedin.com/in/pujagurung/">LinkedIn</a></p>
          </div>

          <div className="contact-info-container">
            <img src={githubIcon} alt="github icon" className="icon contact-icon" />
            <p><a href="https://github.com/pgurung-infosec">GitHub</a></p>
          </div>

          <div className="contact-info-container">
            <img src={emailIcon} alt="Email icon" className="icon contact-icon email-icon" />
            <p><a href="mailto:puja.j.gurung@gmail.com">puja.j.gurung@gmail.com</a></p>
          </div>
        </div>
      </div>

      <footer className="contact-footer">
        <ul className="footer-links">
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </footer>
    </section>
  );
}

export default Contact;