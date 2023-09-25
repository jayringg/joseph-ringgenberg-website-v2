import  '../component_styling/Header.css';

function Header() { 
    return (
        <section id='header'>
            <div className='personal-image'></div>
            <div className='banner-content'> 
              <div className='text-over'>Hi, my name is</div> 
              <div className='text-over-name'>Joseph Ringgenberg</div> 
              <div className='text-over'>Email Developer in Boise, Idaho</div>
              <div className='get-in-touch'><a href="mailto:josephringgenberg@gmail.com">Get In Touch</a></div>
            </div>
        </section>  
     );
}
    
    export default Header