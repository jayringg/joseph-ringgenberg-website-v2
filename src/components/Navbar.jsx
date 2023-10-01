import { useEffect, useState } from 'react';
import  '../component_styling/Navbar.css';


function Navbar({ toggleMobileOverlay }) {
    const [isScrolledDown, setIsScrolledDown] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollThreshold = 1;
            if (window.scrollY > scrollThreshold) {
                setIsScrolledDown(true);
            } else {
                setIsScrolledDown(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav>
            <div className={`navbar-control ${isScrolledDown ? 'change' : ''}`}></div> 
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
    );
}

export default Navbar

