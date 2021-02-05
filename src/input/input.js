import React, { Component } from 'react';
import debounce from 'lodash.debounce';



export class ControlledInput extends Component {
  constructor(props) {
    super(props);
    this.state = { input: props.input };

    this._onChange = this._onChange.bind(this);
    this._onChangeComplete = debounce(this._onChangeComplete.bind(this), 500);
  }

  _onChange(e) {
    // console.log(e.target.value);
    const input = e.target.value
    this.setState(() => ({ input }));
    this._onChangeComplete();
  }

  _onChangeComplete() {
    this.props.onChangeComplete(this.props.options.id, this.state.input);
  }

  render() {
    const opt = this.props.options;
    const cn = `text__input ${!this.props.valid ? 'invalid__value' : ''}`;
    if (opt.type === 'textarea') return (
      <textarea
        className={cn}
        id={opt.id}
        name={opt.name}
        placeholder={opt.placeholder}
        required={opt.options.required ? true : false}
        value={this.state.input}
        onChange={this._onChange}
        onBlur={this.props.onBlur}
        onClick={this.props.onClick}
      />
    );
    
    return (
      <input 
        className={cn}
        type={opt.type}
        id={opt.id}
        name={opt.name}
        placeholder={opt.placeholder}
        required={opt.options.required ? true : false}
        value={this.state.input} 
        onChange={this._onChange}
        onBlur={this.props.onBlur}
        onClick={this.props.onClick}
      />
    );
  }
}
