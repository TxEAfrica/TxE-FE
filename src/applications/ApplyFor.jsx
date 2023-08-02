import Navbar from "../landingPage/sections/Navbar";
import FormBtn from "../registrationPage/eventregistration/components/Buttons/FormButton";
import InputField from "../registrationPage/eventregistration/components/InputField/InputField";
import Footer from '../landingPage/sections/Footer'
import FormVector from "./FormVector";
import LaptopRegistrants from "./category/validated-applicants/LaptopRegistrants";
import { useEffect, useState } from "react";
import ScholarshipRegistrants from "./category/validated-applicants/ScholarshipRegistrants";
import TechSupport from "./tech-support/TechSupport";

const ApplyFor = ({ category, applicantMessage }) => {

  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState('')
  const [error, setError] = useState('')

    const [showUI, setShowUI] = useState(true);

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [gender, setGender] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [supportInterest, setSupportInterest] = useState('')
    const [track, setTrack] = useState('')
    const [sixMonthsAvlb, setSixMonthsAvlb] = useState('')
    const [haveLaptop, setHaveLaptop] = useState('')
    const [whyParticipate, setWhyParticipate] = useState('')
    const [hasParticipate, setHasParticipate] = useState('')
    const [validEmail, setValidEmail] = useState('')
    const [whyLaptop, setWhyLaptop] = useState('')
    const [pictureEvidence, setPictureEvidence] = useState('')
    const [showUp4Intvw, setShowUp4Intvw] = useState('')
    const [whyNotShowUp4Intvw, setWhyNotShowUp4Intvw] = useState('')
    const [aboutYou, setAboutYou] = useState('')
    // impliment validation here
    const handleValidEmail = (e)=>{
      setValidEmail(e.target.value);
    }
    const handleValidation = (e)=>{
        e.preventDefault()
        console.log(validEmail)
        fetchValidEmail()
      }
      const fetchValidEmail = async ()=>{
        try {
          const response = await fetch(`https://txe-africa.onrender.com/api/v1/${validEmail}`);
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
  
          const responseData = await response.json();
          console.log(responseData)
          setData(responseData);
        } catch (err) {
          // console.log(schApplicantData)
          console.log(err)
          setError(err);
        } finally {
          setIsLoading(false);
        }
      }
    // console.log(firstName)
    const handleTechSupportForm = (e)=>{
        e.preventDefault()
        const schApplicantData =  {
          "firstName":firstName,
          "lastName":lastName,
          "gender":gender,
          "phoneNumber":phoneNumber,
          "email":email,
          "country":"Zimbabwe",
          "state":"Lakare",
          "supportInterest":supportInterest,
          "track":track,
          "sixMonthsAvailable":sixMonthsAvlb,
          "haveALaptop":haveLaptop,
          "whyParticipateInScholarship":whyParticipate,
          "didParticipateInFirstScholarship":hasParticipate,
          "whyLaptop":whyLaptop,
          "pictureEvidence":pictureEvidence,
          "showUpForInterview":showUp4Intvw,
          "whyNotShowUpForInterview":whyNotShowUp4Intvw,
          "aboutYou":aboutYou
        }

        const laptpApplicantData = {
          "firstName":firstName,
          "lastName":lastName,
          "gender":"male",
          "phoneNumber":phoneNumber,
          "email":email,
          "country":"Zimbabwe",
          "state":"Lakare",
          "supportInterest":supportInterest,
          "track":track,
          "sixMonthsAvailable":sixMonthsAvlb,
          "haveALaptop":haveLaptop,
          "whyParticipateInScholarship":whyParticipate,
          "didParticipateInFirstScholarship":hasParticipate,
          "whyLaptop":whyLaptop,
          "pictureEvidence":pictureEvidence,
          "showUpForInterview":showUp4Intvw,
          "whyNotShowUpForInterview":whyNotShowUp4Intvw,
          "aboutYou":aboutYou
        }

        console.log(schApplicantData)
        fetchTechSupportData(schApplicantData)
      }
          const fetchTechSupportData = async (schApplicantData)=>{
            try {
              const response = await fetch('https://txe-africa.onrender.com/api/v1/register/tech', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body:JSON.stringify(schApplicantData)
              });
      
              if (!response.ok) {
                throw new Error('Network response was not ok');
              }
      
              const responseData = await response.json();
              console.log(responseData)
              setData(responseData);
            } catch (err) {
              // console.log(schApplicantData)
              console.log(err)
              setError(err);
            } finally {
              setIsLoading(false);
            }
          } 
  
    return (
      <>
            <Navbar />
            <div
          id='top'
          className="relative bg-orange-50 h-fit flex flex-col justify-center items-center mx-auto relative" // Add 'relative' positioning
        >
          <FormVector position={'left-10 top-60'} />
          <FormVector position={'top-3'} />
          <FormVector position={'right-10 top-60'} />
          {/* <FormVector position={'left-10'} /> */}
          {/* <FormVector position={'right-10'} /> */}
          <div className={`text-center w-1/2 ${showUI&&'-mb-56'} mt-20 space-y-3`}>
                    <h1 
                      className="text-5xl text-orange-500 font-semibold">
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
                        <form method="POST" onSubmit={handleValidation} className="mt-56 mb-10">
                            <InputField
                            placeholder={"Verify Email"} 
                            htmlFor={'email'} 
                            labelText={'Email'}
                            type={'email'}
                            onChange={handleValidEmail} 
                            />
                            <div className="w-full mx-auto">
                            <FormBtn btnFor={'Next'} />
                            </div>
                        </form>
                    ):(
                    <form action="api/v1/register/tech" 
                      method="POST"
                      onSubmit={handleTechSupportForm} 
                      className="mb-10 text-gray-600 mt-10">
                     <TechSupport 
                          supportInterest={supportInterest} 
                          setSupportInterest={setSupportInterest}
                          firstName={setFirstName}
                          lastName={setLastName}
                          email={setEmail}
                          setGender={setGender}
                          phoneNumber={setPhoneNumber}
                          setImageChange={setPictureEvidence}
                       />

                      {/* to be conditionally rendered */}
                        {
                          supportInterest.toLocaleLowerCase() === 'scholarship'?(
                      <>
                        <ScholarshipRegistrants
                          whyParticipate={whyParticipate}
                          setWhyParticipate={setWhyParticipate}
                          setHasParticipate={setHasParticipate}
                          hasParticipate={hasParticipate}
                          track={track}
                          setTrack={setTrack}
                          sixMonthsAvlb={sixMonthsAvlb}
                          setSixMonthsAvlb={setSixMonthsAvlb}
                          haveLaptop={haveLaptop} 
                          setHaveLaptop={setHaveLaptop}
                        />
                        <FormBtn btnFor={'Submit'} />
                      </>
                          ):supportInterest.toLocaleLowerCase() === 'laptop'?(
                      <>
                        <LaptopRegistrants
                          whyLaptop={setWhyLaptop}
                          pictureEvidence={setPictureEvidence}
                          setShowUp4Intvw={setShowUp4Intvw}
                          showUp4Intvw={showUp4Intvw}
                          setWhyNotShowUp4Intvw={setWhyNotShowUp4Intvw}
                          setAboutYou={setAboutYou}
                          haveLaptop={haveLaptop} 
                          setHaveLaptop={setHaveLaptop}
                          setImageChange={setPictureEvidence}
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
  