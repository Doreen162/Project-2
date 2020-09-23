import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import images from '../img/images.png';
import contact from '../img/contact.png';
import login from '../img/login.png';
import beauty from '../img/beauty.png';
<<<<<<< HEAD
=======
import Lottery from '../img/Lottery.png';
>>>>>>> 398cd997c282ab6536ac97ae3a5aa39f3f543188
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
<<<<<<< HEAD
      <a href='https://github.com/Doreen162/Github-finder-project'>
      <img src={images} className='images'></img>
=======
      <img src={images} className='images'></img>
      <br></br>
      <a href='http://Doreen162.github.io/github-finder-project'>
        <b>Click on this link</b>
>>>>>>> 398cd997c282ab6536ac97ae3a5aa39f3f543188
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
<<<<<<< HEAD
      <a href='https://github.com/Doreen162/contact-keeper'>
      <img src={contact} className='contact'></img>
=======
      <img src={contact} className='contact'></img>
      <a href='http://Doreen162.github/contact-keeper-project'>
        <br></br>
        <b>Click on this link</b>
>>>>>>> 398cd997c282ab6536ac97ae3a5aa39f3f543188
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
<<<<<<< HEAD
      <a href='https://github.com/Doreen162/it-logger'>
      <img src={login} className='login'></img>
=======
      <img src={login} className='login'></img>
      <a href='http://Doreen162.github/it-logger-project'>
        <br></br>
        <b>Click on this link</b>
>>>>>>> 398cd997c282ab6536ac97ae3a5aa39f3f543188
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
<<<<<<< HEAD
      <a href='https://github.com/Doreen162/Beauty-salon' target="_blank">
      <img src={beauty} className='beauty'/>
=======
      <img src={beauty} className='beauty'></img>
      <a href='http://Doreen162.github/website'>
        <br></br>
        <b>Click on this link</b>
>>>>>>> 398cd997c282ab6536ac97ae3a5aa39f3f543188
      </a>

      <br></br>
      <br></br>
      <br></br>
      <br></br>

<<<<<<< HEAD
    
=======
      <ReactTypingEffect
        className='typingeffect'
        text={['Lottery project in Python']}
        speed={100}
        eraseDelay={700}
      />
      <br></br>
      <img src={Lottery} className='Lottery'></img>
      <a href='"http://Doreen162.github/lottery-project'>
        <br></br>
        <b>Click on this link</b>
      </a>
>>>>>>> 398cd997c282ab6536ac97ae3a5aa39f3f543188

      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <Footer />
    </div>
  );
};

export default Projects;
