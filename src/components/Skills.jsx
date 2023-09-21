import { useState } from 'react';
import  '../component_styling/Skills.css';

function Skills() {
    return (      
      <section className='skills-page' id='skills'>
      <div className='section-header'><p>My Skills</p></div>
        <div className='center-control'>
          <div className='skill-cards-container'>
              <div className='card'><img src="https://i.ibb.co/bH79fvw/html52.png" alt="html52" width='100px' /><p>HTML5</p></div>
              <div className='card'><img src="https://i.ibb.co/5Y5XM3G/css3.png" alt="css3" width='93px' /><p>CSS3</p></div>
              <div className='card'><img src="https://i.ibb.co/0JFctYg/javascript.png" alt="javascript" width='93px' /><p>JavaScript</p></div>
              <div className='card'><img src="https://i.ibb.co/THB9F7r/react-medium.png" alt="react-medium" width='95px' /><p>React</p></div>
              <div className='card'><img src="https://i.ibb.co/QdfDsLN/photoshop.png" alt="photoshop" width='87px' /><p>PhotoShop</p></div>
              <div className='card'><img src="https://i.ibb.co/ZKKWcZK/git.png" alt="git" width='100px' /><p>GIT</p></div>
              <div className='card'><img src="https://i.ibb.co/hgLDSt5/github.png" alt="github" width='98px' /><p>GITHUB</p></div>
          </div>
          </div>
      </section>
     );
}
    
    export default Skills