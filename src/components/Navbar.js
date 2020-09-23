import React, { Component } from 'react';
import Navitem from './Navitem';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      NavItemActive: '',
    };
  }
  activeitem = (x) => {
    if (this.state.NavItemActive.length > 0) {
      document
        .getElementById(this.state.NavItemActive)
        .classList.remove('active');
    }
    this.setState({ NavItemActive: x }, () => {
      document.getElementById(this.state.NavItemActive).classList.add('active');
    });
  };
  render() {
    return (
      <nav>
        <ul>
          <Navitem item='Home' tolink='/' activec={this.activeitem}></Navitem>
          <Navitem
            item='About'
            tolink='/about'
            activec={this.activeitem}
          ></Navitem>
          <Navitem
            item='Education'
            tolink='/education'
            activec={this.activeitem}
          ></Navitem>
          <Navitem
            item='Skills'
            tolink='/skills'
            activec={this.activeitem}
          ></Navitem>
          <Navitem
<<<<<<< HEAD
            item='Work'
            tolink='/work'
            activec={this.activeitem}
          ></Navitem>
          <Navitem
            item='Projects'
            tolink='/projects'
            activec={this.activeitem}
          ></Navitem>
          <Navitem
            item='Testimonial'
            tolink='/testimonial'
            activec={this.activeitem}
          ></Navitem>
          <Navitem
            item='Contact'
            tolink='/contact'
=======
            item='Contact'
            tolink='/contact'
            activec={this.activeitem}
          ></Navitem>
          <Navitem
            item='Testimonial'
            tolink='/testimonial'
            activec={this.activeitem}
          ></Navitem>
          <Navitem
            item='Work'
            tolink='/work'
            activec={this.activeitem}
          ></Navitem>
          <Navitem
            item='Projects'
            tolink='/projects'
>>>>>>> 398cd997c282ab6536ac97ae3a5aa39f3f543188
            activec={this.activeitem}
          ></Navitem>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
