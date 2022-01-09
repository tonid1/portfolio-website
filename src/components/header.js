import React from 'react';
import Github from '../images/github.png';
import LinkedIn from '../images/linkedin.png';
import Email from '../images/email.png';

function Header(){

    const pocetna = () => {
        document.querySelector('.home-page').style.opacity='1';
        document.querySelector('.home-page').style.pointerEvents='all';

        document.querySelector('.aboutme-page').style.opacity='0';
        document.querySelector('.aboutme-page').style.pointerEvents='none';

        document.querySelector('.portfolio-page').style.opacity='0';
        document.querySelector('.portfolio-page').style.pointerEvents='none';
    }

    const zivotopis = () => {
        document.querySelector('.aboutme-page').style.opacity='1';
        document.querySelector('.aboutme-page').style.pointerEvents='all';

        document.querySelector('.home-page').style.opacity='0';
        document.querySelector('.home-page').style.pointerEvents='none';

        document.querySelector('.portfolio-page').style.opacity='0';
        document.querySelector('.portfolio-page').style.pointerEvents='none';
    }

    const portfolio = () => {
        document.querySelector('.portfolio-page').style.opacity='1';
        document.querySelector('.portfolio-page').style.pointerEvents='all';

        document.querySelector('.aboutme-page').style.opacity='0';
        document.querySelector('.aboutme-page').style.pointerEvents='none';

        document.querySelector('.home-page').style.opacity='0';
        document.querySelector('.home-page').style.pointerEvents='none';
    }

    return(
    <div className='top-bar'>
        <h4 onClick={pocetna} >POČETNA</h4>
        <h4 onClick={zivotopis} >ŽIVOTOPIS</h4>
        <h4 onClick={portfolio} >PORTFOLIO</h4>
        <div>
          <a href='https://github.com/tonid1' rel="noreferrer" target='_blank'>
            <img src={Github} className='icon' alt='github'/>
          </a>
          <a href='https://www.linkedin.com/in/toni-dedi%C4%87-4aab89188' rel="noreferrer" target='_blank'>
            <img src={LinkedIn} className='icon' alt='linkedin'/>
          </a>
          <a href='mailto:dedictoni1@gmail.com'>
              <img src={Email} className='icon' alt='mail'/>
          </a>
        </div>
    </div>

    )

}

export default Header