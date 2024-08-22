import "./GridPage.css";
import ViteIcon from "/vite.svg";
import ReactIcon from "../assets/react.svg";
import BlenderIcon from "../assets/blender.svg";
import JsIcon from "../assets/js.svg";
import TsIcon from "../assets/ts.svg";
import FigmaIcon from "../assets/figma.svg";
import UnityIcon from "../assets/unity.svg";
function GridPage() {
  return (
    <div className="grid-page-container">
      <div className="who-am-i">
        <h2 className="question">Who am I?</h2>
        <p className="answer">
          Hello I am Tarek Msolli, I&#39;m a computer science student, a front
          end developer and a 3D modeler based in Tunisia, if you&#39;re looking
          for a project for me to work on, feel free to contact me.
        </p>
      </div>
      <div className="picture"></div>
      <div className="job">
        <p>Student and Frontend developer</p>
      </div>
      <div className="profile">
        <div className="profile-picture"></div>
        <p className="real-name">Tarek Msolli</p>
        <p className="username">aka StressDemon</p>
      </div>
      <div className="quote">
        <p>&#34;The only way to do great work is to love what you do.&#34;</p>
      </div>
      <div className="tech">
        <h3>Thechnologies I prefer to use:</h3>
        <div className="icons">
          <img src={ViteIcon} alt="Vite Icon" />
          <img src={ReactIcon} alt="React Icon" />
          <img src={JsIcon} alt="Javascript Icon" />
          <img src={TsIcon} alt="Typescript Icon" />
          <img src={FigmaIcon} alt="Figma Icon" />
          <img src={UnityIcon} alt="Unity Icon" />
          <img src={BlenderIcon} alt="Blender Icon" />
        </div>
      </div>
      <div className="education">
        <h2>Education:</h2>
        <h5>ISTIC Bordj El Cedria</h5>
        <p>Studied Computer Science at ISTIC Bordj El Cedria.</p>
        <h5>Internship at CNSS</h5>
        <p>
          Developed a computer maintenance training website for CNSS employees
          using <span style={{ color: "crimson" }}>Angular</span>.
        </p>
        <h5>Internship at Tessan Group</h5>
        <p>
          Created an employee management solution for Tessan Group using{" "}
          <span style={{ color: "violet" }}>Blazor,</span>{" "}
          <span style={{ color: "lightblue" }}>ASP .NET</span> and{" "}
          <span style={{ color: "cyan" }}>Flutter</span>.
        </p>
      </div>
    </div>
  );
}

export default GridPage;
