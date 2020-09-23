import React, { Component } from 'react';
import Widecard2 from '../components/Widecard2';
import Footer from '../components/Footer';

class Testimonial extends Component {
  render() {
    return (
      <div className='condiv'>
        <h1 className='subtopic'>Testimonial</h1>
        <Widecard2
          title='Thapelo (Group Lecturer)'
          about='Doreen Ligman is a Life Choices Academy students for 2020. One thing you should know
          about Doreen is having the ability to learn a new programming and good interpersonal skills.'
        />
        <Widecard2
          title='Viata Fredericks (Colleague)'
          about='Doreen Ligman is a hard working , observant and dedicated individual. Doreen has encouraged myself and many others to keep on going no matter the case even though she herself was struggling. Doreen has made it so far despite all her challenges and I truly wish to see her succeed in life. I believe that she would be a great asset to any work place.'
        />
        <Widecard2
          title='Cameron Jude Luyt (Colleague)'
          about='Doreen Ligman is motivate student, who is introvent during her time on the programme and committed to working mostly participating and interacting concerning work related.'
        />
        <Widecard2
          title='Lucinne Julie (Colleague)'
          about='Doreen Ligman is a very dedicated individual she has pay great attention to details during this programme.'
        />
        <Widecard2
          title='Asaph Flank (Colleague)'
          about='Doreen Ligman is very ambitious individual who is always dedicated herself to do best in tasks, projects. She also loves interacting and pushing herself to limit when it comes to her work.I believe she be very great asset in working environment.'
        />

        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <Footer />
      </div>
    );
  }
}

export default Testimonial;
