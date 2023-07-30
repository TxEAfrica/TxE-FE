import { useState } from "react";
import InputOption from "../../../registrationPage/eventregistration/components/InputOption/InputOption";
import ImageUploader from '../validated-applicants/uploader/ImageUploader'

const LaptopRegistrants = () => {
    const [hasLaptop, setHasLaptop] = useState('')
    const [comeForInterview, setComeForInterview] = useState('')
    const [onImageChange, setImageChange] = useState('')
    console.log('imeje',onImageChange)
    return ( 
        <>
           <div className=" space-y-8 text-gray-600">
                <div className="h-fit w-full">
                <InputOption 
                    descriptionLabelText={'Do you have a Laptop?'} 
                    options={[{label:'Yes', value:'Yes'},
                            {label: 'No', value: 'No'}]}
                    initialSelection={hasLaptop}
                    updatedSelection={setHasLaptop}
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
                    initialSelection={comeForInterview}
                    updatedSelection={setComeForInterview}
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
                    />
                    </div>
                    </label>
                </div>
           </div>
        </>
     );
}
 
export default LaptopRegistrants;