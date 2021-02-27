import "./Status_Check.css";
import React, { Component } from 'react'

export default class Status_Check extends Component {
    constructor(props) {
        super(props);
        this.state = {
        Request_No: '',
        Status:'',
        Comment:'',
        };
        this.handleRequestNoChange = this.handleRequestNoChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

      handleRequestNoChange(event) {
        this.setState({Request_No: event.target.value});
      }
    
      handleSubmit(event) {
        alert('Request Details:'+this.state.Request_No+'  '+this.state.Status+'  '+this.state.Comment);
        event.preventDefault();
      }
    
      render() {
        return (
          <div className="StatusForm">
          <h1 className="statusHeading">Request Status Checking</h1>
          <form onSubmit={this.handleSubmit}>
            <label>
            Request No:
            <input type="text" Request_No={this.state.Request_No} onChange={this.handleRequestNoChange} placeholder="Your Request No...." />
            Status:
            <input type="text"  placeholder="Your Request Status...." readOnly />
            Comment:
            <input type="text"  placeholder="Details...." readOnly />
            </label>
            <input type="submit" value="Get Status" />
          </form>
          </div>
        );
      }
    }