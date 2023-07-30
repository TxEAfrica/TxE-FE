import { useState } from "react";
import InputOption from "../../../registrationPage/eventregistration/components/InputOption/InputOption";

const ScholarshipRegistrants = () => {
    const [hasAttended, setHasAttended] = useState('')
    const [track, setTrack] = useState('')
    const [availableFor6Months, setAvailableFor6Months] = useState('')
    const [hasLaptop, setHasLaptop] = useState('')
    return ( 
        <>
            <div>
          <label htmlFor="textarea">
          Why do you want to participate in the scholarship programme? <span className="text-red-500">*</span>
                <div>
                <textarea 
                    rows='5' 
                    className="focus:outline-orange-200 focus:border-orange-300 p-2 w-full"
                    placeholder="Write here.." 
                    required 
                />
                </div>
           </label>
          </div>

          <div className="h-fit w-full">
                <InputOption 
                    descriptionLabelText={'Did you participate in the first scholarship programme?'} 
                    options={[{label:'Yes', value:'Yes'},
                            {label: 'No', value: 'No'}]}
                    initialSelection={hasAttended}
                    updatedSelection={setHasAttended}
                />
         </div>

         <div className="h-fit w-full">
                <InputOption 
                    descriptionLabelText={'Which track are you interested in?'} 
                    options={
                            [
                                {label:'Frontend', value:'Fronted'},
                                {label: 'Backend', value: 'Backend'},
                                {label: 'Product Design', value: 'Product Design'},
                                {label: 'Others', value: 'Others'},
                            ]}
                    initialSelection={track}
                    updatedSelection={setTrack}
                />
         </div>

         <div>
            <label htmlFor="others">
            Others please specify <br />
            <input type="text" className="focus:outline-orange-200 p-2 w-full" />
            </label>
         </div>

         <div className="h-fit w-full">
                <InputOption 
                    descriptionLabelText={'Are you available for the period of 6 months?'} 
                    options={[{label:'Yes', value:'Yes'},
                            {label: 'No', value: 'No'}]}
                    initialSelection={availableFor6Months}
                    updatedSelection={setAvailableFor6Months}
                />
         </div>

         <div className="h-fit w-full">
                <InputOption 
                    descriptionLabelText={'Do you have a Laptop?'} 
                    options={[{label:'Yes', value:'Yes'},
                            {label: 'No', value: 'No'}]}
                    initialSelection={hasLaptop}
                    updatedSelection={setHasLaptop}
                />
        </div>
        </>
     );
}
 
export default ScholarshipRegistrants;