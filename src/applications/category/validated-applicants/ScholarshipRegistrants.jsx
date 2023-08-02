import { useState } from "react";
import InputOption from "../../../registrationPage/eventregistration/components/InputOption/InputOption";

const ScholarshipRegistrants = ({
    setWhyParticipate,
    setTrack,
    track,
    setSixMonthsAvlb,
    sixMonthsAvlb,
    setHaveLaptop,
    haveLaptop,
    setHasParticipate,
    hasParticipate
}) => {
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
                    onChange={(e)=>setWhyParticipate(e.target.value)}
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
                    initialSelection={hasParticipate}
                    updatedSelection={setHasParticipate}
                />
         </div>

         <div className="h-fit w-full">
                <InputOption 
                    descriptionLabelText={'Which track are you interested in?'} 
                    options={
                            [
                                {label:'Frontend', value:'frontend'},
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
                    initialSelection={sixMonthsAvlb}
                    updatedSelection={setSixMonthsAvlb}
                />
         </div>

         <div className="h-fit w-full">
                <InputOption 
                    descriptionLabelText={'Do you have a Laptop?'} 
                    options={[{label:'Yes', value:'Yes'},
                            {label: 'No', value: 'No'}]}
                    initialSelection={haveLaptop}
                    updatedSelection={setHaveLaptop}
                />
        </div>
        </>
     );
}
 
export default ScholarshipRegistrants;