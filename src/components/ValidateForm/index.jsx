import React,{useState} from "react";
import { Component } from "react";
import "./styles.css"
class ValidateForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Name: '',
      email: '',
      message: '',
      formErrors: {}
    };
  }
  onFormValidation() {
    const { Name, email, message } = this.state;
    let formErrors = {};
    let formIsValid = true;
    if (!Name) {
      formIsValid = false;
      formErrors["Name"] = "Name is required.";
    }
    if (!email) {
      formIsValid = false;
      formErrors["email"] = "email is required.";
    }
    if (!message) {
      formIsValid = false;
      formErrors["message"] = "message is required.";
    }
    this.setState({ formErrors: formErrors });
    return formIsValid;
  }
  onChange = (e) => {
    if (this.onFormValidation()) {
      this.setState()
    }
    const { name, value } = e.target;
    this.setState({ [name]: value });

  }
  onSubmit = (e) => {
    e.preventDefault();
    if (this.onFormValidation()) {
      alert("Success!")
    }
  }
  render() {
    const { Name, email, message } = this.state.formErrors;
    return (
      <>
        <form onSubmit={this.onSubmit} className={"center"}>
          <input type="text" name="Name" onChange={this.onChange} placeholder="name" className={Name ? ' showError' : ''} />
          {Name && <div className="red">{Name}</div>}
          <input type="text" name="email" onChange={this.onChange} placeholder="email" className={email ? ' showError' : ''} />
          {email && <div className="red">{email}</div>}
          <textarea type="text" name="message" onChange={this.onChange} className={message ? ' showError' : ''} defaultValue="" placeholder="message"></textarea>
          {message && <div className="red">{message}</div>}
          <input type="submit" value="Send" className="btn" />
        </form>
      </>
    )
  }
}
export default ValidateForm;
