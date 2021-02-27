import "./Permission.css";
import React, { Component } from 'react'

export default class Permission extends Component {
    
  
     constructor(props) {
        super(props);
        this.state = {
          Hostel_Name: 'K.N. Girls Hostel',
          Room_No: '',
          Registration_No:'',
          Permission_Type:'Permission for Going Home',
          Comment:'',
          };
          this.handleHostelChange = this.handleHostelChange.bind(this);
          this.handleRoomChange = this.handleRoomChange.bind(this);
          this.handleRegistrationChange = this.handleRegistrationChange.bind(this);
          this.handlePermissionChange = this.handlePermissionChange.bind(this);
          this.handleCommentChange = this.handleCommentChange.bind(this);
          this.handleSubmit = this.handleSubmit.bind(this);
        }
    
        handleHostelChange(event) {
          this.setState({Hostel_Name: event.target.value});
        }
        handleRoomChange(event) {
          this.setState({Room_No: event.target.value});
        }
        handleRegistrationChange(event) {
          this.setState({Registration_No: event.target.value});
        }
        handlePermissionChange(event) { 
        this.setState({Complain_Type: event.target.value});
        }
        handleCommentChange(event) {
          this.setState({Comment: event.target.value});
        }
    
      handleSubmit(event) {
        alert('Registration for Permission is Successful!!!!'+this.state.Hostel_Name+'  '+this.state.Room_No+'  '+this.state.Registration_No+'  '+'  '+this.state.Permission_Type+'  '+this.state.Comment);
        event.preventDefault();
      }

      render() {
        return (
          <div className="PermissionForm">
          <h1 className="permissionHeading">Registration for Permission</h1>
          <form onSubmit={this.handleSubmit}>
            <label>
            Hostel Name:
            <select Hostel_Name={this.state.Hostel_Name} onChange={this.handleHostelChange}>
            <option value="K.N. Girls Hostel">K.N. Girls Hostel</option>
            <option value="P.G. Girls Hostel">P.G. Girls Hostel</option>
            <option value="S.V. Patel Hostel">S.V. Patel Hostel</option>
            <option value="P.D. Tandon Hostel">P.D. Tandon Hostel</option>
            <option value="B.G. Tilak Hostel">B.G. Tilak Hostel</option>
            <option value="R.N. Tagore Hostel">R.N. Tagore Hostel</option>
            <option value="C.V. Raman Hostel">C.V. Raman Hostel</option>
            <option value="M.M. Malviya Hostel">M.M. Malviya Hostel</option>
            <option value="P.G. Boys Hostel">P.G. Boys Hostel</option>
            <option value="S.V. Boys Hostel">S.V. Boys Hostel</option>
            </select>
            Room No:
            <input type="text" Room_No={this.state.Room_No} onChange={this.handleRoomChange} placeholder="Your Room No...." />
            Registration No:
            <input type="text" Registration_No={this.state.Registration_No} onChange={this.handleRegistrationChange} placeholder="Your Registration No...."/>
            Permission Type:
            <select Permission_Type={this.state.Permission_Type} onChange={this.handlePermissionChange}>
            <option value="Permission for Going Home">Permission for Going Home</option>
            <option value="Late Entry In The Hostel">Late Entry In The Hostel</option>
            </select>
            Comment:
            <input type="text" Comment={this.state.Comment} onChange={this.handleCommentChange} placeholder="Permission Details...."/>
            </label>
            <input type="submit" value="Submit" />
          </form>
          </div>
        );
      }
    }