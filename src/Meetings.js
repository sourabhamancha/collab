import React, { Component } from 'react';
import { FaPlus } from 'react-icons/fa';
import firebase from './Firebase';
import { navigate } from '@reach/router';
import MeetingList from './MeetingList';

class Meetings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      meetingName: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addMeeting(this.state.meetingName);
    this.setState({ meetingName: '' });
  }

  handleChange(e) {
    const itemName = e.target.name;
    const itemValue = e.target.value;

    this.setState({ [itemName]: itemValue });
  }

  render() {
    return (
      <div className="container mt-4">
        <div className="row justify-content-center">
          <div className="col-md-8 text-center">
            <form
              className="formgroup rounded"
              onSubmit={this.handleSubmit}
            >
              <div className="input-group input-group-lg">
              <div className="input-group-append">
              <button
                  type="submit"
                  className="btn btn-outline-success"
                  id="buttonAdd"
               >
              <FaPlus />
              </button>
              </div>
              <input
                type="text"
                className="form-control"
                name="meetingName"
                placeholder="Add a Meeting"
                  aria-describedby="buttonAdd"
                  value={this.state.meetingName}
                  onChange={this.handleChange}
              />
            </div>
            </form>
          </div>
          <div className="col-11 col-md-6 text-center mt-3">

            <div className="card border-top-1 rounded-0">
              {this.props.meetings && this.props.meetings.length ? (
                <div className="card-body py-2">
                  <h4 className="card-title font-weight-light m-1">Your Meetings</h4>
              </div>
              ) : null}
              {this.props.meetings && (
                <div className="list-group list-group-flush">
                  <MeetingList userID={this.props.userID} meetings={this.props.meetings} />
                </div>
              )}

            </div>

          </div>
        </div>
      </div>
    );
  }
}
export default Meetings;