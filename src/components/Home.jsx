import Sidebar from "./Sidebar";
import resumeFile from "../assets/Resume.pdf";


import "./Home.css";

function Home() {
  return (
    <section id="home" className="home">
      <Sidebar />

      <main className="home-main">
        <div className="hero-content">
          <p className="availability">AVAILABLE FOR OPPORTUNITIES</p>

          <h1>
            Hi, I'm Puja Gurung.
            <span>I turn data into clear decisions.</span>
          </h1>

          <div className="hero-btns">
            <a href="#projects" className="btn primary">View Projects</a>
            <a href="https://www.linkedin.com/in/pujagurung/" className="btn secondary">LinkedIn</a>
            <a href={resumeFile} className="btn secondary">View Resume</a>
          </div>
        </div>
      </main>
    </section>
  );
}

export default Home;