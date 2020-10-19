import React, { Component } from "react";

class AddClientPage extends Component {
  state = {
    invalidForm: true,
    formData: {
        name: '',
        img: 'https://i.imgur.com/TNxPyMQ.png',
        nextAppointment: '',
        styleRequested: '',
        Comments: ''
    },
  };

  formRef = React.createRef();

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleAddClient(this.state.formData);
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
        <h1>Add Client</h1>
        <form
          ref={this.formRef}
          autoComplete="off"
          onSubmit={this.handleSubmit}
        >
          <div className="form-group">
            <label>Client's Name (required)</label>
            <input
              className="form-control"
              name="name"
              value={this.state.formData.name}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
                <label >Image Link</label>
                <input
                    className="form-control text-center"
                    type="text"
                    name="img"
                    value={this.state.formData.img}
                    onChange={this.handleChange} />
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
            <label>Style Requested</label>
            <input
              className="form-control"
              name="styleRequested"
              value={this.state.formData.styleRequested}
              onChange={this.handleChange}
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
            className="btn"
            disabled={this.state.invalidForm}
          >
            ADD CLIENT
          </button>
        </form>
      </>
    );
  }
}
export default AddClientPage;