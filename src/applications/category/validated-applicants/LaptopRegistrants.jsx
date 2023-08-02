import { useState } from "react";
import InputOption from "../../../registrationPage/eventregistration/components/InputOption/InputOption";
import ImageUploader from '../validated-applicants/uploader/ImageUploader'

const LaptopRegistrants = ({
    setHaveLaptop,
    haveLaptop,
    whyLaptop,
    showUp4Intvw,
    setShowUp4Intvw,
    setWhyNotShowUp4Intvw,
    setImageChange,
    setAboutYou
}) => {
    return ( 
        <>
           <div className=" space-y-8 text-gray-600">
                <div className="h-fit w-full">
                <InputOption 
                    descriptionLabelText={'Do you have a Laptop?'} 
                    options={[{label:'Yes', value:'Yes'},
                            {label: 'No', value: 'No'}]}
                    initialSelection={haveLaptop}
                    updatedSelection={setHaveLaptop}
                />
                </div>
          <div>
          <label htmlFor="textarea">
                If no, why do you need one? <span className="text-red-500">*</span>
                <div>
                <textarea 
                    rows='5' 
                    className="focus:outline-none focus:border-orange-300 p-2 w-full"
                    placeholder="Write here.." 
                    onChange={(e)=>whyLaptop(e.target.value)}
                    required
                />
                </div>
           </label>
          </div>
          <div>
            <label htmlFor="uploader">
            Upload picture evidence of what you have been learning and why it relates to your computer need. <span className="text-red-500">*</span>
            <ImageUploader onImageChange={setImageChange} /> 
            </label>
          </div>

          <div className="h-fit w-full">
                <InputOption 
                    descriptionLabelText={'Would you show up for an interview if called?'} 
                    options={[{label:'Yes', value:'Yes'},
                            {label: 'No', value: 'No'}]}
                    initialSelection={showUp4Intvw}
                    updatedSelection={setShowUp4Intvw}
                />
                </div>
                <div>
                    <label htmlFor="demand">
                    If no, why? <span className="text-red-500">*</span>
                    <div>
                    <textarea 
                        rows='5' 
                        className="focus:outline-none focus:border-orange-300 p-2 w-full"
                        placeholder="Write here.." 
                        onChange={(e)=>setWhyNotShowUp4Intvw(e.target.value)}
                        required
                    />
                    </div>
                    </label>
                </div>
                <div>
                    <label htmlFor="extraPersonalDetail">
                    Is there any other thing you will like us to know?
                    <div>
                    <textarea 
                        rows='5' 
                        className="focus:outline-none focus:border-orange-300 p-2 w-full"
                        placeholder="Write here.."
                        onChange={(e)=>setAboutYou(e.target.value)}
                    />
                    </div>
                    </label>
                </div>
           </div>
        </>
     );
}
 
export default LaptopRegistrants;