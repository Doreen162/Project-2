import React, { Component } from 'react';
import { ControlledInput } from './../input/input';
import '../form/form.css'


const validate = (value, options) => {
  if (options.required) {
    if (!value || value === '') return false;
  }
  if (options.length) {
    if (value.length > 120) return false;
  }
  if (options.email) {
    if (!/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(value)) return false;
  }
  if (options.url) {
    if (!/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(value)) return false;
  }
  return true;
};


export default class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this._onChangeComplete = this._onChangeComplete.bind(this);
    this._onBlur = this._onBlur.bind(this);
    this._resetValidation = this._resetValidation.bind(this);
    this._submit = this._submit.bind(this);
    props.fields.map(n => {
      this.state[n.id] = { value: '', valid: true, options: n.options };
    });
  }

  _onChangeComplete(id, value) {
    // console.log(id, value);
    this.setState(state => { state[id].value = value; return state });
  }

  _onBlur(e) {
    // console.log(e.target.id, e.target.value);
    const { id, value } = e.target;
    const valid = validate(value, this.state[id].options);
    this.setState(state => {state[id].valid = valid; return state });
  }

  _resetValidation(e) {
    const { id } = e.target;
    this.setState(state => {state[id].valid = true; return state });
  }

  _submit(e) {
    e.preventDefault();
    // loop through all keys
    const keys = Object.keys(this.state);
    const valid = keys.reduce((memo, n) => {
      if (!memo) return memo;
      if (!this.state[n].value) memo = false;
      return memo;
    }, true);

    if (!valid) keys.map(n => this.setState(state => { 
      if (!state[n].value) {
        state[n].valid = false;
      }
      return state 
    }));
    else {
      console.log('submitting', this.state);
    }
  }

  render() {
    return (
      <form noValidate className="contact-me">
        <fieldset>
          { this.props.fields.map(n =>
            <div key={n.id} className='form-row'>
              <label htmlFor={n.id}>{n.label}</label> 
              <ControlledInput
                options={n}
                input={this.state[n.id].value}
                valid={this.state[n.id].valid}
                onBlur={this._onBlur}
                onClick={this._resetValidation}
                onChangeComplete={this._onChangeComplete}
              />
            </div>)
          }
        </fieldset>
        <div className='submit-row'>
          <input type='submit' value={this.props.submitText} onClick={this._submit} className='form-submit' />
        </div>
      </form>
    );
  }
}