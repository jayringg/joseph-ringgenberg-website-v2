import { useState } from 'react';
import  '../component_styling/Workflow.css';

function Workflow() {
    return (
        <section className='workflow-page' id='workflow'>

        <div className='section-header-workflow'><p>Work Process</p></div>
  <div className='center-control'>
  <div className='workflow-page-container'>
    <div className='workflow-card'><img src="https://i.ibb.co/6vcjVtc/group-meeting.png" alt="group-meeting" width='50px' /><p>Discuss</p></div>
    <div className='workflow-card'><img src="https://i.ibb.co/2jb9z40/idea-bulb.png" alt="idea-bulb" width='50px' /><p>Idea</p></div>
    <div className='workflow-card'><img src="https://i.ibb.co/c6xDMPx/image-pen.png" alt="image-pen" width='50px' /><p>Design</p></div>
    <div className='workflow-card'><img src="https://i.ibb.co/XYnG6XL/web-dev.png" alt="web-dev" width='50px' /><p>Develop</p></div>
    <div className='workflow-card'><img src="https://i.ibb.co/JmByV3q/exam.png" alt="exam" width='50px' /><p>Test</p></div>
    <div className='workflow-card'><img src="https://i.ibb.co/3yhXFmm/rocket2.png" alt="rocket2" width='50px' /><p>Launch</p></div>
  </div>
  </div>
  
</section> 
     );
}
    
    export default Workflow