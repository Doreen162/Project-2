import React, { Component } from 'react';
import Footer from '../components/Footer';

class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myskills: [
        'HTML - 70%',
        'CSS - 50%',
        'JS - 50%',
        'BOOTSTRAP - 50%',
        'REACT JS - 50%',
        'PYTHON - 60%',
      ],
    };
  }

  render() {
    return (
      <div className='condiv skills'>
        <h1 className='subtopic'>My Skills</h1>
        <ul>
          {this.state.myskills.map((value) => {
            return <li>{value}</li>;
          })}
        </ul>

        <a href='https://docs.google.com/document/d/14j51-qgcxPSGa8BTZL7nEU1dFEkEg6Zexqg1lkRiLjw/edit?usp=sharing'>
          Resume
        </a>

        <br></br>
        <br></br>
        <br></br>
        <br></br>
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

export default Skills;
