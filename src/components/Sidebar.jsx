import "./Sidebar.css";


function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-top">
        <h2 className="sidebar-heading">Puja Gurung</h2>
        <p className="sidebar-role">Data Analyst</p>
        
      </div>

      <nav className="sidebar-nav">
        <a href="#home" >Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#experience">Experience</a>
        <a href="#education">Education</a>
        <a href="#contact">Contact</a>
      </nav>
    </aside>
  );
}

export default Sidebar;