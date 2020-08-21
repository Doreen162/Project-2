import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import images from '../img/images.png';
import contact from '../img/contact.png';
import login from '../img/login.png';
import beauty from '../img/beauty.png';
import Lottery from '../img/Lottery.png';
import Footer from '../components/Footer';

const Projects = () => {
  return (
    <div className='condiv projects'>
      <h3> My Projects</h3>
      <ReactTypingEffect
        className='typingeffect'
        text={['GitHub Finder']}
        speed={100}
        eraseDelay={700}
      />
      <br></br>
      <img src={images} className='images'></img>
      <br></br>
      <a href='http://Doreen162.github.io/github-finder-project'>
        <b>Click on this link</b>
      </a>

      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <ReactTypingEffect
        className='typingeffect'
        text={['Contact-Keeper']}
        speed={100}
        eraseDelay={700}
      />
      <br></br>
      <img src={contact} className='contact'></img>
      <a href='http://Doreen162.github.io/contact-keeper-project'>
        <br></br>
        <b>Click on this link</b>
      </a>

      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <ReactTypingEffect
        className='typingeffect'
        text={['I.T Logger']}
        speed={100}
        eraseDelay={700}
      />
      <br></br>
      <img src={login} className='login'></img>
      <a href='http://Doreen162.github.io/it-logger-project'>
        <br></br>
        <b>Click on this link</b>
      </a>

      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <ReactTypingEffect
        className='typingeffect'
        text={['Salon spa']}
        speed={100}
        eraseDelay={700}
      />
      <br></br>
      <img src={beauty} className='beauty'></img>
      <a href='http://Doreen162.github.io/website'>
        <br></br>
        <b>Click on this link</b>
      </a>

      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <ReactTypingEffect
        className='typingeffect'
        text={['Lottery project in Python']}
        speed={100}
        eraseDelay={700}
      />
      <br></br>
      <img src={Lottery} className='Lottery'></img>
      <a href='"http://Doreen162.github.io/lottery-project'>
        <br></br>
        <b>Click on this link</b>
      </a>

      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <Footer />
    </div>
  );
};

export default Projects;
