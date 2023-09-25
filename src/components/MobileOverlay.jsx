// import  '../component_styling/MobileOverlay.css';

// function MobileOverlay({ isVisible }) {
//     return (
//         <div className={`mobile-overlay ${isVisible ? 'display' : ''}`}>
//                 <ul>
//                     <li><a href='#header'>Home</a></li>
//                     <li><a href='#skills'>Skills</a></li>
//                     <li><a href='#workflow'>Workflow</a></li>
//                     <li><a href='#projects'>Projects</a></li>
//                 </ul>
//             </div>
//      );
// }
    
//     export default MobileOverlay


import React, { useEffect, useState } from 'react';
import  '../component_styling/MobileOverlay.css';
function MobileOverlay({ isVisible, toggleMobileOverlay }) {
  const [isDisplayVisible, setIsDisplayVisible] = useState(!isVisible);

  const handleScroll = () => {
    if (isDisplayVisible) {
      setIsDisplayVisible(false);
      toggleMobileOverlay();
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isDisplayVisible]);

  useEffect(() => {
    setIsDisplayVisible(isVisible);
  }, [isVisible]);

  return (
    <div className={`mobile-overlay ${isDisplayVisible ? 'display' : ''}`}>
        <div className={`nav-cover ${isDisplayVisible ? 'display' : ''}`}>
        <nav>
                <div className='navbar-wrapper'>
                    <div className='socials-logo'>     
                    <div className='linkedin-logo'><a href="https://www.linkedin.com/in/joseph-ringgenberg-653885162/" target='_blank' rel='noopener noreferrer'><img src="https://i.ibb.co/0mkgbZP/linkedin-white.png" alt="linkedin" border="0" /></a></div>
                    <div className='github-logo'><a href="https://github.com/jayringg?tab=repositories" target='_blank' rel='noopener noreferrer'><img src="https://i.ibb.co/0CZ1jW5/github-white.png" alt="github" border="0" /></a></div>      
                    </div>


                    <div className='hamburger-menu' onClick={toggleMobileOverlay}>
                        <div className='line-1'></div>
                        <div className='line-2'></div>   
                    </div>

                    <div className='nav-links'>
                        <ul>
                            <li><a href='#header'>Home</a></li>
                            <li><a href='#skills'>Skills</a></li>
                            <li><a href='#workflow'>Workflow</a></li>
                            <li><a href='#projects'>Projects</a></li>
                        </ul>
                    </div>
                </div>
            
        </nav>
        </div>
        <div className={`mobile-overlay-text ${isDisplayVisible ? 'display' : ''}`}>
            <ul>
                <li><a href='#header'>Home</a></li>
                <li><a href='#skills'>Skills</a></li>
                <li><a href='#workflow'>Workflow</a></li>
                <li><a href='#projects'>Projects</a></li>
            </ul>
        </div>
    </div>
  );
}

export default MobileOverlay;










