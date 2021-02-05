import React from 'react';
import { render } from 'react-dom';

import ContactForm from '../form/form';
import SuccessMsg from '../success/success';


import '../form/form.css';
import '../input/input.css';
import '../success/success.css';

const contactFields = [
  {
    label: 'Your full name',
    id: 'fullname',
    placeholder: 'Name & Surname',
    type: 'text',
    options: {
      required: true
    }
  },
  {
    label: 'Your email',
    id: 'email',
    placeholder: 'example@gmail.com',
    type: 'email',
    options: {
      required: true,
      email: true
    }
  },
  {
    label: 'Subject',
    id: 'subject',
    placeholder: 'I am enquiring about...',
    type: 'text',
    options: {
      required: true
    }
  },
  {
    label: 'Enquiry',
    id: 'content',
    placeholder: 'Tell us more about your enquiry, feedback or issues.',
    type: 'textarea',
    options: {
      required: true
    }
  }
];


const Contact = () => (
  
    <div className='condiv contact'>
      <h1> Contact Me</h1>
    
    <div className="contact-form">
     <ContactForm fields={contactFields} submitText='contact' />
    </div>
    <div className="contact-form">
      <SuccessMsg email='doreenligman17@gmail.com' />
    </div>
    
  </div>
);

render(<Contact />, document.getElementById('root'));

export default Contact;