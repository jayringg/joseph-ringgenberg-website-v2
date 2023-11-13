import { useState } from 'react';
import '../component_styling/Skills.css';

function Skills() {
  return (
    <section className='skills-page' id='skills'>
      <div className='spacer'></div>
      <div className='section-header'><p>My Skills</p></div>
      <div className='center-control'>
        <div className='skill-cards-container'>
          <div className='card'><img src="https://i.ibb.co/bH79fvw/html52.png" alt="html5" /><p>HTML5</p></div>
          <div className='card-aside'><img src="https://i.ibb.co/5Y5XM3G/css3.png" alt="css3" /><p>CSS3</p></div>
          <div className='card'><img src="https://i.ibb.co/0JFctYg/javascript.png" alt="javascript" /><p>JavaScript</p></div>
          <div className='card-aside'><img src="https://i.ibb.co/Rhvd00H/Canva-icon-2021-svg.png" alt="Canva" /><p>Canva</p></div>
          <div className='card'><img src="https://i.ibb.co/QdfDsLN/photoshop.png" alt="Photoshop" /><p>Photoshop</p></div>
          <div className='card-aside'><img src="https://i.ibb.co/3CpQSyy/responsive-design-color.png" alt="Responsive Design" /><p>Responsive<br />Design</p></div>
          <div className='card'><img src="https://i.ibb.co/Xpb3ZZX/mailchimp.png" alt="Mailchimp" /><p>Mailchimp</p></div>
          <div className='card-aside'><img src="https://i.ibb.co/0MpJ4Wp/klaviyo.png" alt="Klaviyo" /><p>Klaviyo</p></div>
          <div className='card'><img src="https://i.ibb.co/7nzRxs4/brevo.png" alt="Brevo" /><p>Brevo</p></div>
          <div className='card-aside'><img src="https://i.ibb.co/8rrPTPT/emailonacid.png" alt="Email On Acid" /><p>Email<br />On Acid</p></div>
          <div className='card'><img src="https://i.ibb.co/S31mCcc/litmus.png" alt="Litmus" /><p>Litmus</p></div>
          <div className='card-aside'><img src="https://i.ibb.co/ZKKWcZK/git.png" alt="git" /><p>GIT</p></div>
          <div className='card'><img src="https://i.ibb.co/hgLDSt5/github.png" alt="github" /><p>GITHUB</p></div>
        </div>
      </div>
    </section>
  );
}

export default Skills