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
      
      <br></br>
      <a href='https://github.com/Doreen162/Github-finder-project'>
      <img src={images} className='images'></img>
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
      <a href='https://github.com/Doreen162/contact-keeper'>
      <img src={contact} className='contact'></img>
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
      <a href='https://github.com/Doreen162/it-logger'>
      <img src={login} className='login'></img>
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
      <a href='https://github.com/Doreen162/Beauty-salon'>
      <img src={beauty} className='beauty'></img>
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
      <a href='http://Doreen162.github/lottery-project'>
      <img src={Lottery} className='Lottery'></img>
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
