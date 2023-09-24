import { useState } from 'react';
import  '../component_styling/Workflow.css';

function Workflow() {
    return (
        <section className='workflow-page' id='workflow'>

        <div className='section-header-workflow'><p>Work Process</p></div>
  <div className='center-control'>
  <div className='workflow-page-container'>
    <div className='workflow-card'><img src="https://i.ibb.co/6vcjVtc/group-meeting.png" alt="group-meeting" /><p>Discuss</p></div>
    <div className='workflow-card-up'><img src="https://i.ibb.co/2jb9z40/idea-bulb.png" alt="idea-bulb" /><p>Idea</p></div>
    <div className='workflow-card'><img src="https://i.ibb.co/c6xDMPx/image-pen.png" alt="image-pen" /><p>Design</p></div>
    <div className='workflow-card-up'><img src="https://i.ibb.co/XYnG6XL/web-dev.png" alt="web-dev" /><p>Develop</p></div>
    <div className='workflow-card'><img src="https://i.ibb.co/JmByV3q/exam.png" alt="exam" /><p>Test</p></div>
    <div className='workflow-card-up'><img src="https://i.ibb.co/3yhXFmm/rocket2.png" alt="rocket2" /><p>Launch</p></div>
  </div>
  </div>
  
</section>  
     );
}
    
    export default Workflow