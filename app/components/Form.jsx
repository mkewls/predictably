import React, { Component } from 'react';

export default class Form extends Component {

  constructor(props) {
    super(props);
    this.state = {
      id: 0
    };
    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.props = props;
  }

  onChange(evt) {
    this.setState({
      id: evt.target.value
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.getVoter(this.state.id);
  }

  render() {

    return (
      <div className="form-group pad-bottom">
        <form className="form-inline" onSubmit={this.handleSubmit}>
          <label>Voter Id: </label>
          <span>  </span>
          <input type="text" onChange={this.onChange} className="form-control" id="name-input" value={this.state.id} />
          <span>  </span>
          <button type="submit" className="btn btn-primary">Find</button>
        </form>
      </div>
    )
  }

}
