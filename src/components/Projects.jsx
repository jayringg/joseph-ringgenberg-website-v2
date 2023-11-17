import { useState } from 'react';
import '../component_styling/Projects.css';

function Projects() {
    return (
        <section className='project-page' id='projects'>
            <div className='section-header'><p>My Projects</p></div>
            <div className='project1-color'>
                <div className='project-space-container'>
                    <div className='project-left'>
                        <div className='project-title'><h3>DoorDash <br />Promotional Email</h3></div>
                        <div className='project-text'><p>A well designed email with light and dark mode capability. This email accomplishes its mobile friendly design with the use of media queries.</p></div>
                        <div className='project-tools-title'><p>Tools -</p></div>
                        <div className='project-tools'>
                            <ul className='arrow-list'>
                                <li>Tables</li>
                                <li>Media Queries</li>
                                <li>Light and Dark Mode</li>
                                <li>Email On Acid</li>
                            </ul>
                        </div>
                        <div className='view-project'><a href={`${process.env.PUBLIC_URL}/doordash-promotional/doordash.html`} target='_blank' rel='noopener noreferrer'>View Project</a></div>
                    </div>
                    <div className='project-right'>
                        <div className='project1-showcase'></div>
                    </div>
                </div>
            </div>
            <div className='project2-color'>
                <div className='project-space-container'>
                    <div className='project-left-opposite'>
                        <div className='project-title-opposite'><h3>Mattress Firm<br /> Transactional Email</h3></div>
                        <div className='project-text-opposite'><p>This is a transactional email from Mattress firm that confirms a recent purchase. It uses fluid hybrid design to achive the correct sizing on all devices.</p></div>
                        <div className='project-tools-title-opposite'></div>
                        <div className='project-tools'>
                            <ul className='arrow-list-opposite'>
                                <li>Tables</li>
                                <li>Fluid Hybrid Design</li>
                                <li>Inline CSS</li>
                                <li>Email On Acid</li>
                            </ul>
                        </div>
                        <div className='view-project-opposite'><a href={`${process.env.PUBLIC_URL}/mattressfirm-transactional/mattressfirm.html`} target='_blank' rel='noopener noreferrer'>View Project</a></div>
                    </div>
                    <div className='project-right'>
                        <div className='project2-showcase'></div>
                    </div>
                </div>
            </div>
            <div className='project3-color'>
                <div className='project-space-container'>
                    <div className='project-left'>
                        <div className='project-title'><h3>Teachable<br /> Newsletter Email</h3></div>
                        <div className='project-text'><p>This email features a colorful design and is my personal favorite. I also appreciate how every call to action is linked to the appropriate place, this made navigation very easy.</p></div>
                        <div className='project-tools-title'></div>
                        <div className='project-tools'>
                            <ul className='arrow-list'>
                                <li>Tables</li>
                                <li>Fluid Hybrid Design</li>
                                <li>Inline CSS</li>
                                <li>Email On Acid</li>
                            </ul>
                        </div>
                        <div className='view-project'><a href={`${process.env.PUBLIC_URL}/teachable-newsletter/teachable.html`} target='_blank' rel='noopener noreferrer'>View Project</a></div>
                    </div>
                    <div className='project-right'>
                        <div className='project3-showcase'></div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Projects