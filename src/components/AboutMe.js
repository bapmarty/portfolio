import MyHead from '../assets/IMG_0044.jpg';

import '../assets/sass/aboutme.scss';
import FadeIn from "react-fade-in";

const AboutMe = () => {
  return (
    <>
      <section className="aboutme">
        <div className={"myhead-div"}>
          <img src={MyHead} className={"myhead"} width="256px" height="256px" alt={"My head"}/>
        </div>
        <div className={"content"}>
          <FadeIn transitionDuration={1500}>
            <h5 className={"job"}>fullstack developer</h5>
            <div className={"separator bg-purple"} />
            <h1 className="name">Baptiste Martin</h1>
            <p className={"text"}>Hello, I'm a french developer living in Paris and I'm currently working at <a href={"https://fabrick.io/"} target={"_blank"}  rel="noreferrer">Fabrick</a>.
              My current project is to make the new website of <a href={"https://wahis.oie.int/"} target={"_blank"}  rel="noreferrer">OIE</a>, you can read more about it below.
              On the side I'm doing some climbing for my personal training.
            </p>
          </FadeIn>
        </div>
      </section>
    </>
  );
}

export default AboutMe;