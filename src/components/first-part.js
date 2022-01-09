import React from 'react';
import desktop from '../images/desktop-image.png';

function First(){

    return(
        <div className='home-page'>
            <div className='main-page'>
                <div className="title-front">
                    <p className="heading-front">Junior web developer test2</p>
                    <p className="heading-name">Toni Dedić</p>
                </div>
                <div className='title-image-div'>
                    <div className='title-image-inner'>
                        <img src={desktop} className='title-image'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default First;