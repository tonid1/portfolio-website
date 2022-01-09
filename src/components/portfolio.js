import React from 'react';

function Portfolio(){

    return(
        <div className='portfolio-page'>
            <div className='main-page'>
                <div className="portfolio-front">
                    <div className='portfolio-inner'>
                        <a className="portfolio-heading">Simple React Apps</a>
                    </div>
                    <div className='portfolio-inner'>
                        <a className="portfolio-heading">Full React website</a>
                    </div>
                    <div className='portfolio-inner'>
                        <a className="portfolio-heading">IMDB Clone using API</a>
                    </div>
                    <div className='portfolio-inner'>
                        <a className="portfolio-heading">MERN stack website</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;