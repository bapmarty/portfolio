import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGithub, faInstagram, faTwitch} from "@fortawesome/free-brands-svg-icons";
import {faPaperPlane, faHome, faSignature, faSun, faMoon} from "@fortawesome/free-solid-svg-icons";
import {useEffect, useState} from "react";
import {Link} from "react-scroll";

const Navbar = () => {

  const [color, setColor] = useState("dark");
  const [background, setBackground] = useState("");

  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const onScroll = e => {
      console.log(e.target.documentElement.scrollTop);
      if (e.target.documentElement.scrollTop < 820) {
        setColor("dark");
        setBackground("");
      }
      else if (e.target.documentElement.scrollTop >= 820) {
        setColor("white");
        setBackground("bg-purple");
      }
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [color, background]);
  return (
    <>
      <section className={"navbar-header " + background}>
        <ul className={"left-nav"}>
        </ul>
        <ul className={color + " right-nav"}>
          <li><Link smooth={true} duration={400} to={"home"}><FontAwesomeIcon icon={faHome}/> Home</Link></li>
          <li><Link smooth={true} duration={500} to={"about"}><FontAwesomeIcon icon={faSignature} /> About Me</Link></li>
          <li><a href="https://github.com/baptistemrt/"><FontAwesomeIcon icon={faGithub}/> Github</a></li>
          <li><a href="https://instagram.com/bapmarty"><FontAwesomeIcon icon={faInstagram} /> Instagram</a></li>
          <li><a href="https://twitch.tv/bapmarty"><FontAwesomeIcon icon={faTwitch} /> Twitch</a></li>
          <li><Link smooth={true} duration={500} to={"#contact-me"}><FontAwesomeIcon icon={faPaperPlane} /> Contact me</Link></li>

          <li onClick={console.log("click")} ><FontAwesomeIcon icon={theme === "light" ? faSun : faMoon}/></li>
        </ul>
      </section>
    </>
  );
}

export default Navbar;