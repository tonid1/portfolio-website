import React from 'react';
import Photo from '../images/rsz_ai (1).jpg';

function About(){
    return(
        <div className='aboutme-page'>
            <div className='main-page'>
                <div className='about-image'>
                    <img src={Photo} className='photo' alt='ToniDedic' />
                </div>
                <div className='cv'>
                    <p>I live in Zagreb, Croatia, and my passion is making web apps and websites using React.
                        I gained fundamental knowledge through Faculty and specialization, which i used to 
                        learn further programming languages.
                    </p>
                    <p>
                        I think of myself as an ambitious, highly goal-driven person with big emphasis on self-development.
                        I am always thinking one step forward and looking to improve in any area of my expertise.
                    </p>
                    <p>
                        I have been working in web development since February 2021. when i joined Aplikacije.hr
                        as Wordpress web developer working mostly with PHP and jQuery.
                    </p>
                </div>         
            </div>
        </div>
    )
}

export default About