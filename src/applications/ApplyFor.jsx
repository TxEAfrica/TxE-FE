import Navbar from "../landingPage/sections/Navbar";
import FormBtn from "../registrationPage/eventregistration/components/Buttons/FormButton";
import InputField from "../registrationPage/eventregistration/components/InputField/InputField";
import Footer from '../landingPage/sections/Footer'
import FormVector from "./FormVector";
import LaptopRegistrants from "./category/validated-applicants/LaptopRegistrants";
import { useState } from "react";
import ScholarshipRegistrants from "./category/validated-applicants/ScholarshipRegistrants";
import TechSupport from "./tech-support/TechSupport";

const ApplyFor = ({ category, applicantMessage }) => {
    const [showUI, setShowUI] = useState(false);
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [gender, setGender] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [supportInterest, setSupportInterest] = useState('')
    const [track, setTrack] = useState('')
    const [sixMonthsAvlb, setSixMonthsAvlb] = useState('')
    const [haveLaptop, setHaveLaptop] = useState('')
    const [validEmail, setValidEmail] = useState('')
    const [whyLaptop, setWhyLaptop] = useState('')
    const [pictureEvidence, setPictureEvidence] = useState('')
    const [showUp4Intvw, setShowUp4Intvw] = useState('')
    const [aboutYou, setAboutYou] = useState('')
    const handleValidation = (e)=>{
        e.preventDefault()
      }
    const handleTechSupportForm = (e)=>{
        e.preventDefault()

        const ScholarShipApplicantData = {
          firstName:'',
          lastName: '',
          email:'',
          gender:'',
          phoneNumber:'',
          supportInterest:'',
          track:'',
          sixMonthsAvlb:'',
          haveLaptop:''

        }
        const LaptopApplicantData = {
          firstName:'',
          lastName: '',
          email:'',
          gender:'',
          phoneNumber:'',
          supportInterest:'',
          whyLaptop:'',
          pictureEvidence:'',
          showUp4Intvw:'',
          whyNotShowUp4Intvw:'',
          aboutYou:''
        }
        //category === category && fetch

    }
  
    return (
      <>
            <Navbar />
            <div
          id='top'
          className="relative bg-orange-50 h-fit flex flex-col justify-center items-center mx-auto relative" // Add 'relative' positioning
        >
          <FormVector position={'left-10 top-20'} />
          <FormVector position={'top-10'} />
          <FormVector position={'right-10 top-20'} />
          <FormVector position={'left-10'} />
          <FormVector position={'right-10'} />
          <div className={`text-center w-1/2 ${showUI&&'-mb-56'} mt-20 space-y-3`}>
            <h1 className="text-5xl text-orange-500 font-semibold">
              Apply For {category}
            </h1>
            <p>
                        Need it? Go for it!
                    </p>
                    <h3 className="text-xl font-semibold">
                        {applicantMessage}
                    </h3>
                </div>
                {
                    showUI?(
                        <form method="POST" onSubmit={handleValidation}>
                            <InputField 
                            htmlFor={'email'} 
                            labelText={'Email'}
                            type={'email'}
                            onChange={(e)=>setValidEmail(e.target.vaue)} 
                            />
                            <div className="w-1/4 mx-auto">
                            <FormBtn btnFor={'Next'} />
                            </div>
                        </form>
                    ):(
                    <form action="" 
                      method="POST"
                      onSubmit={handleTechSupportForm} 
                      className="mb-10 text-gray-600 mt-10">
                     <TechSupport 
                          supportInterest={supportInterest} 
                          setSupportInterest={setSupportInterest}
                          firstName={setFirstName}
                          lastName={setLastName}
                          email={setEmail}
                          gender={setGender}
                          phoneNumber={setPhoneNumber}
                       />

                      {/* to be conditionally rendered */}
                        {
                          supportInterest.toLocaleLowerCase() === 'scholarship'?(
                      <>
                        <ScholarshipRegistrants />
                        <FormBtn btnFor={'Submit'} />
                      </>
                          ):supportInterest.toLocaleLowerCase() === 'laptop'?(
                      <>
                        <LaptopRegistrants
                          whyLaptop={setWhyLaptop}
                          pictureEvidence={setPictureEvidence}
                          showUp4Intvw={setShowUp4Intvw}
                          aboutYou={setAboutYou}
                        />
                        <FormBtn btnFor={'Submit'} />
                      </>
                          ):''
                        }
                    </form>
                    )
                }
            </div>
            <div className="bg-gray-200 h-36 w-full"></div>
            <Footer />
      </>
    );
  };
  
  export default ApplyFor;
  