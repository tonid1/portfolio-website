import React, {useEffect} from 'react';

function Portfolio(){

    useEffect(() => {

        var titles = document.querySelectorAll('.portfolio-heading');
        var descriptions = document.querySelectorAll('.portfolio-description-inner');

        for(let i = 0; i < titles.length; i++){

            titles[i].addEventListener('mouseover', function(){
                descriptions[i].style.opacity = '1';
            })

            titles[i].addEventListener('mouseout', function(){
                descriptions[i].style.opacity = '0';
            })

        }

    });

  

    return(
        <div className='portfolio-page'>
            <div className='main-page'>
                <div className="portfolio-front">
                    <div className='portfolio-inner'>
                        <a href='https://optimistic-goldberg-9b0452.netlify.app/' className="portfolio-heading">Simple React Apps</a>
                    </div>
                    <div className='portfolio-inner'>
                        <a href='https://affectionate-carson-c48153.netlify.app/' className="portfolio-heading">AI Image detection</a>
                    </div>
                    <div className='portfolio-inner'>
                        <a href='https://thirsty-carson-15e8f1.netlify.app/' className="portfolio-heading">IMDB Clone using API</a>
                    </div>
                    <div className='portfolio-inner'>
                        <a className="portfolio-heading">MERN stack website</a>
                    </div>
                </div>
                <div className="portfolio-description">
                    <div className='portfolio-description-inner'>
                        <h4 className="portfolio-description-content">Basic React apps for begginers divided into sections. Not optimized for phones.</h4>
                    </div>
                    <div className='portfolio-description-inner'>
                        <h4 className="portfolio-description-content">AI image detection using Microsoft AI API. Choose between object detection and celebrity recognising. Not optimized for phones.</h4>
                    </div>
                    <div className='portfolio-description-inner'>
                        <h4 className="portfolio-description-content">Website that uses public API to get information about movies. Contains option to search and to scroll through movies, actors and categories. Not optimized for phones.</h4>
                    </div>
                    <div className='portfolio-description-inner'>
                        <h4 className="portfolio-description-content">MERN stack app - comming soon</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;