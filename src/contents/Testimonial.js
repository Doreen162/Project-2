import React, { Component } from 'react';

class Testimonial extends Component {
  render() {
    return (
      <div className='condiv'>
        <h1 className='subtopic'>Testimonial</h1>
        <Widecard
          title='Thapelo Group Lecture'
          About='Doreen Ligman is a Life Choices Academy students for 2020. One thing you should know
          about Doreen is having the ability to learn a new programming and good interpersonal skills.'
        />

        <Widecard
          title='Viata Fredericks'
          about='Doreen Ligman is a hard working , observant and dedicated individual. Doreen has encouraged myself and many others to keep on going no matter the case even though she herself was struggling. Doreen has made it so far despite all her challenges and I truly wish to see her succeed in life. I believe that she would be a great asset to any work place.'
        />
        <Widecard
          title='Cameron Jude Luyt'
          about='Doreen Ligman is motivate student, who is introvent during her time on the programme and committed to working mostly participating and interacting concerning work related.'
        />
        <Widecard
          title='Lucinne Julie'
          about='Doreen is a very dedicated individual she has pay great attention to details during this programme.'
        />
      </div>
    );
  }
}

export default Testimonial;
