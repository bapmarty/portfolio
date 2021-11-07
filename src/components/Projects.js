import {faAngular, faDocker, faGit, faJava, faNodeJs, faPhp, faReact, faVuejs} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import "../assets/sass/projects.scss";
import Wave from "../assets/wave_purple.svg";
import Me from '../assets/IMG_0296.jpg';
import {faSignature} from "@fortawesome/free-solid-svg-icons";

const Projects = () => {

  const languages = [
    {name: "Angular", icon: faAngular},
    {name: "React", icon: faReact},
    {name: "Vue", icon: faVuejs},
    {name: "Java", icon: faJava},
    {name: "NodeJs", icon: faNodeJs},
    {name: "Php", icon: faPhp},
    {name: "Docker", icon: faDocker},
    {name: "Git", icon: faGit},
  ]
  return (
    <>
      <section className="projects">
        <img className={"bottom-wave"} src={Wave} alt={"wave"} />
        <section className="content" id={"about"}>
          <section className={"aboutmylife"}>
            <div className={"block"}>
              <div className="text">
                <h3><FontAwesomeIcon icon={faSignature}/> What about me ?</h3>
                <div className={"separator bg-pink"} />
                <p className={"content-text"}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. A autem corporis, debitis dolorem dolores esse et eveniet facere illum in, maxime molestiae pariatur perspiciatis porro, ratione recusandae reiciendis sequi voluptatibus?
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. A autem corporis, debitis dolorem dolores esse et eveniet facere illum in, maxime molestiae pariatur perspiciatis porro, ratione recusandae reiciendis sequi voluptatibus?
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. A autem corporis, debitis dolorem dolores esse et eveniet facere illum in, maxime molestiae pariatur perspiciatis porro, ratione recusandae reiciendis sequi voluptatibus?
                </p>
              </div>
              <div className={"skills"}>
                {languages.map(lang => {
                  return (
                    <div className={"language"}>
                      <div><FontAwesomeIcon icon={lang.icon}/></div>
                      <h6>{lang.name}</h6>
                    </div>
                  )
                })}
              </div>
            </div>
            <div>
              <img className={"picture"} src={Me} width={512} alt={"My back"} />
            </div>
          </section>
        </section>
      </section>
    </>
  );
}

export default Projects;