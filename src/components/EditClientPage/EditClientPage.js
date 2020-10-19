import React, { Component } from "react";
import { Link } from "react-router-dom";

class EditClientPage extends Component {
  state = {
    invalidForm: false,
    formData: this.props.location.state.client,
  };

  formRef = React.createRef();

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleUpdateClient(this.state.formData);
  };

  handleChange = e => {
    const formData = {
      ...this.state.formData,
      [e.target.name]: e.target.value,
    };
    this.setState({
      formData,
      invalidForm: !this.formRef.current.checkValidity(),
    });
  };

  render() {
    return (
      <>
        <h1>Edit Client</h1>
        <form
          ref={this.formRef}
          autoComplete="off"
          onSubmit={this.handleSubmit}
        >
          <div className="form-group">
            <label>Client Name (required)</label>
            <input
              className="form-control"
              name="name"
              value={this.state.formData.name}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Next Appointment (required)</label>
            <input
              className="form-control"
              name="nextAppointment"
              value={this.state.formData.nextAppointment}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Style Requested (required)</label>
            <input
              className="form-control"
              name="styleRequested"
              value={this.state.formData.styleRequested}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Comments</label>
            <input
              className="form-control"
              name="comments"
              value={this.state.formData.comments}
              onChange={this.handleChange}
            />
          </div>
          <button
            type="submit"
            className="btn btn-xs"
            disabled={this.state.invalidForm}
          >
            SAVE CLIENT
          </button>
          &nbsp;&nbsp;
          <Link to="/">CANCEL</Link>
        </form>
      </>
    );
  }
}
export default EditClientPage;