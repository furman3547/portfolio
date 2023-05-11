import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import '../index.css';

function Portfolio() {
  return (
    <div className="card">
      <header>
        <h1>ALYSSA FURMAN</h1>
        <h2>Teacher turned Software Developer with
            a passion for digital accessibility.
            
            
            </h2>

      </header>
      <main>
       <section>
       <br></br>
       <div className="skillicon">
            <img style={{height:"56px"}}
                src="https://i.imgur.com/iUrnNlm.png"
                alt="Node"
                />

            <img style={{height:"56px"}}
                src="https://i.imgur.com/Rn1fsHC.png"
                alt="React"
                />

            <img style={{height:"56px"}}
                src="https://i.imgur.com/SMA7g0V.png"
                alt="HTML"
                />

            <img style={{height:"56px"}}
                src="https://i.imgur.com/G8eV9f0.png"
                alt="CSS"
                />

<img style={{height:"56px"}}
                src="https://i.imgur.com/iHsoEbL.png"
                alt="PostgreS"
                />
</div>


          <h3>Featured Projects</h3>
          <div className="project">
            <a href="https://github.com/furman3547/classSchedule">
              <img style={{height:"100px"}}
                src="https://i.imgur.com/Su8d6AY.png"
                alt="ClassDash Image"
              />
              <h4>ClassDash</h4>
            </a>
            <p>An all-in-one app designed to help students with special needs access class materials.</p>
          </div>
          <div className="project">
            <a href="https://github.com/furman3547/SpeechTiles">
              <img style={{height:"150px", width:"150px"}}
                src="https://i.imgur.com/Z3NQ8Jr_d.jpg?maxwidth=520&shape=thumb&fidelity=high"
                alt="Text To Speech"
              />
              <h4>Speech Tiles</h4>
            </a>
            <p>A text to speech app with drag-and-drop icons and visual aid support for accessibility. </p>
          </div>
          <div className="project">
            <a href="https://github.com/furman3547?tab=repositories">
              <img style={{height:"150px"}}
                src="https://i.imgur.com/3Ul518I.png"
                alt="Notes App "
              />
              <h4>Notes App</h4>
            </a>
            <p>A simple note-taking application that allows students to use recorded material to log notes.</p>
          </div>
        </section>
        <section>
          <h3>Contact Me</h3>
          
          <ul>
            <li>
              <a href="https://www.linkedin.com/in/alyssafurman/">
                <LinkedInIcon /> LinkedIn
              </a>
            </li>
            <li>
              <a href="https://github.com/furman3547">
                <GitHubIcon /> GitHub
              </a>
            </li>
            <li>
              <a href="mailto:furman3547@gmail.com">
                <EmailIcon /> Email
              </a>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default Portfolio;
