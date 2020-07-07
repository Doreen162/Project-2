import React, { Component } from 'react';

class Social extends Component {
  render() {
    return (
      <div class='social'>
        <a href='https://codepen.io/Doreen17' target='_blank'>
          <i class='fab fa-codepen'></i>
        </a>
        <a href='https://github.com/Doreen162' target='_blank'>
          <i class='fab fa-github'></i>
        </a>
        <a
          href='https://www.linkedin.com/in/doreen-rowena-ligman-20a55919b/'
          target='_blank'
        >
          <i class='fab fa-linkedin-in'></i>
        </a>
      </div>
    );
  }
}

export default Social;
