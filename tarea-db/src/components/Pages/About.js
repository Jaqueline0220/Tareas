import React from 'react';
import './about.css';
import yo from '../../assets/yo.jpg';
const About = () => {
  return (
    <>
      <div className="aboutheader">
        <div className="aboutimg">
          <img className="aboutinside" src={yo} alt="DB" />
        </div>
        <h1>Jaqueline Diaz Barrientos</h1>

        <a href="https://github.com/Jaqueline0220" target="_blank" rel="noreferrer">
          github
        </a>
        <br></br>
        <a href="mailto:jaky_202_@hotmail.com">jaky_202_@hotmail.com</a>
      </div>
      <div className="aboutbody">
        <p>Me apasiona el desarrollo de sistemas</p>
        <ul>
          En MakeitReal aprendi:
          <li>Reactjs</li>
          <li>Habilidaddes blandas</li>
          <li>Nodejs</li>
        </ul>
      </div>
    </>
  );
};

export default About;
