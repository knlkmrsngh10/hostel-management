import "./MainPage.css";
import React, { Component } from 'react'
import Notification from "./Notification.js";
import Complain from "./Complain";
import Permission from "./Permission";
import Status_Check from "./Status_Check";

export default class MainPage extends Component {
    
   state = {
     showcomplain:false,
     showpermission:false,
     showcomplainstatus:false,
     showpermissionstatus:false,
   }

   render() {

      var HandleComplainChange = e =>
      {
        this.setState({showcomplain:!this.state.showcomplain});
      }
      var HandlePermissionChange = e =>
      {
        this.setState({showpermission:!this.state.showpermission});
      }
      var HandleComplainStatusChange = e =>
      {
        this.setState({showcomplainstatus:!this.state.showcomplainstatus});
      }
      var HandlePermissionStatusChange = e =>
      {
        this.setState({showpermissionstatus:!this.state.showpermissionstatus});
      }
      const complainstate=this.state.showcomplain;
      const registrationstate=this.state.showpermission;
      const complainstatusstate=this.state.showcomplainstatus;
      const registrationstatusstate=this.state.showpermissionstatus;
      return (
      <div className="mainPage">
      <h1 className="about_heading"> ABOUT MNNIT HOSTELS</h1>
      <div className="About_Hostels"> There are seven Boys and two Girls hostels at present in the Institute.
       The capacity of boys hostel is 1800 (1044 single seated rooms and 252 triple seated rooms ) and that of
       girls hostel is 145. Room allotment is done in such a way that students from different parts of country 
       freely intermingle with each other depicting national integration.Hostel messes are run no profit no loss
       basis. The messes are managed by nominated representatives of students under the overall supervisions of 
       wardens. The foreign students run their separate mess named as international mess. In this mess non 
       vegetarian food is also served.The newly admitted boys students are kept in separate hostels away from 
       senior students to avoid ragging. The hostel administration grants financial assistance to meet the mess
       bills to many needy students. One new hostel has also been constructed to accommodate additional number of
       students.Several new facilities are being provided in girls hostel viz. washing machines, refrigerators,
       computers, internet connectivity. One PCO booth is also working in the girls hostel campus.
       There is a team of a warden in charge and warden for each of the hostel. They look after the affairs of the 
       room allocation to the individual students and issuing the 'Concession Forms' for the students going home 
       during the Institute vacations. All the student complaints regarding the room maintainence are routed through
       the warden of the hostel to the concerned authorities.</div> 
       <h2 className="notification"> NOTIFICATIONS </h2>
       <Notification/>
       <div className="Button">
       <button class="Button_design" onClick={HandleComplainChange}><span>Click Here To Register Complain  </span></button>
       {
         complainstate&& (<div> <Complain/> </div>)
       }
       <button class="Button_design" onClick={HandlePermissionChange}><span>Click Here To Take Permission For Going Home </span></button>  
       {
         registrationstate&& (<div> <Permission/> </div>)
       }
       <button class="Button_design" onClick={HandleComplainStatusChange}><span>Click Here To View Complain Status  </span></button> 
       {
         complainstatusstate&& (<div> <Status_Check/> </div>)
       }
       <button class="Button_design" onClick={HandlePermissionStatusChange}><span>Click Here To View Permission Status For Going Home </span></button>  
       {
         registrationstatusstate&& (<div> <Status_Check/> </div>)
       }
       
       </div>
       </div>
    )
  }
}
