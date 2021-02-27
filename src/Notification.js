import React from 'react'
import { render } from "react-dom";
import Accordion from "./Accordion";
import "./Notification.css";
import Hostel_Notice_18_02_21 from "./Hostel-Notice/Hostel_Notice_reg_e_21.pdf";
import NoDues from "./Hostel-Notice/No_Dues.pdf"
import Swift_Transfer from "./Hostel-Notice/Details_for_SWIFT_transfer.pdf"; 
import Refund_Even_2020_21 from "./Hostel-Notice/Refund_Even_Semester_2020-2021.pdf";
import Reopening_College from "./Hostel-Notice/Reopening_College_Notice.pdf"; 
import Tution_Fee_Waiver_MTECH from "./Hostel-Notice/Tution_Fee_Waiver.pdf"; 
import Fee_Dues_2020 from "./Hostel-Notice/Fee_Dues.pdf"; 
import Hostel_Allotment_List from "./Hostel-Notice/2158.pdf"
import Stay_Arrangement from "./Hostel-Notice/Notice_CW_Stay_Arrangements_reg_e_21.pdf"

class Notification extends React.Component { 
    
    constructor(props) {
        super(props);
        this.state = {
          selectedIndex: 0
        };
      }
      
    render() {
        return (
          <div>   
          <Accordion
          className="accordion"
          selectedIndex={this.state.selectedIndex}
          onChange={(index, expanded, selectedIndex) => console.log(`#${index} ${expanded ? 'expanded' : 'collapsed'} (selectedIndex: ${selectedIndex})`)}>
                
          

          
          <div data-header="PG final year students Hostel Allotment list (PG Hostel & Raman Hostel)          26/02/2021" className="accordion-item">
            <p>
              Click <a href={Hostel_Allotment_List} target="_blank" >here</a> to view.
            </p>   
          </div>


          <div data-header="Notice for Stay arrangement of Students          23/02/2021" className="accordion-item">
            <p>
              Click <a href={Stay_Arrangement} target="_blank" >here</a> to view.
            </p>   
          </div>
          
          <div data-header="Hostel Notice          18/02/2021" className="accordion-item">
            <p>
              Click <a href={Hostel_Notice_18_02_21} target="_blank" >here</a> to view.
            </p>   
          </div>

          <div data-header="Notice Regarding Re-opening of the Institute After Unlock          17/02/2021" className="accordion-item">
            <p>
              Click <a href={Reopening_College} target="_blank">here</a> to download notice.
            </p>   
          </div>

          <div data-header="Online Form to be Filled by the Students Returning to the Institute After Unlock          17/02/2021" className="accordion-item">
            <p>
              Click <a href="https://academics.mnnit.ac.in/new" target="_blank">here</a> to fill Google Form.
            </p>   
          </div>

          <div data-header="Notice Regarding Refund Forms          26/01/2021" className="accordion-item">
            <p>
              Click <a href={Refund_Even_2020_21} target="_blank">here</a> to download the notice.
            </p>   
          </div>

          <div data-header="Notice Regarding the Even Semester Registrations          22/12/2020" className="accordion-item">
            <p>
            All the UG, PG and Ph.D. students are hereby informed that they are not required to visit the
            institute campus for even semester registration. All the registration formalities shall be done
            online through student login on <a href="http://academics.mnnit.ac.in/" target="_blank">http://academics.mnnit.ac.in</a>.
            Online registration shall start according to the respective dates mentioned in academic calendar
            available on <a href="http://academics.mnnit.ac.in/" target="_blank">http://academics.mnnit.ac.in</a>.  
            </p>   
          </div>

          
          <div data-header="Fee dues of the final year students graduated in session 2019-2020.          03/12/2020" className="accordion-item">
            <p>
              Click <a href={Fee_Dues_2020} target="_blank">here</a> to download notice.
            </p>   
          </div>

          <div data-header="Tuition fee waiver to the student of SC/ST/PwD category of M. Tech, Programme         19/09/2020" className="accordion-item">
            <p>
              Click <a href={Tution_Fee_Waiver_MTECH} target="_blank">here</a> to download notice.
            </p>   
          </div>

          <div data-header="Notice for SWIFT transfer          26/12/2018" className="accordion-item">
            <p>
              Click <a href={Swift_Transfer} target="_blank">here</a> to view details for SWIFT transfer.
            </p>   
          </div>

          <div data-header="No Dues Form             21/04/2014" className="accordion-item">
            <p>
              Click <a href={NoDues} target="_blank">here</a> To Download.
            </p>   
          </div>

        </Accordion>        
        </div>
        )
    }
}
export default Notification;