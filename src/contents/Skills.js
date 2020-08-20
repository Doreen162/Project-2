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
        'REACT JS - 50%',
        'BOOTSTRAP - 50%',
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
