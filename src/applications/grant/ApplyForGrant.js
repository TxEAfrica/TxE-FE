// MainForm.js
import React, { useState } from 'react';
import EmailVerification from './EmailVerification';
import InputOption from '../../registrationPage/eventregistration/components/InputOption/InputOption';
import InputField from '../../registrationPage/eventregistration/components/InputField/InputField';
import InputFieldNon from '../../registrationPage/eventregistration/components/InputFieldNon/InputFieldNon';
import TextArea from '../../registrationPage/eventregistration/components/TextArea/TextArea';
import FormBtn from '../../registrationPage/eventregistration/components/Buttons/FormButton';
import FormVector from '../FormVector';
import ApplyFor from '../ApplyFor';
import Navbar from '../../landingPage/sections/Navbar';
import Footer from '../../landingPage/sections/Footer';
import ApplyForGrantCSS from '../grant/ApplyForGrant.module.css'
// import ButtonsCSS from './components/InputCSS.module.css'

const MainForm = () => {

  // pre-populated data fetched from the API
  const firstName = 'w'
  const lastName = 'w'
  const email = 'w'
  const gender = 'w'
  const phoneNumber ='w'
  const country = 'w'
  const state = 'w'


  const [isBusinessRegistered, setIsBusinessRegistered] = useState('');
  const [cacDocument, setCacDocument] = useState('');
  const [whyNeedGrant, setWhyNeedGrant] = useState('');
  const [videoLink, setVideoLink] = useState('');
  const [whyNotRegistered, setWhyNotRegistered] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [businessLocation, setBusinessLocation] = useState('');
  const [operationMonths, setOperatioMonths] = useState('');


  const [errorMessage, setErrorMessage] = useState('');

  const validateFields = () => {
    // Non-editable fields are always visible and should not be empty
    if (
      !isBusinessRegistered ||
      cacDocument.trim() === '' ||
      whyNeedGrant.trim() === '' ||
      videoLink.trim() === ''
    ) {
      return false;
    }

    // Additional validation based on the "isBusinessRegistered" value
    if (isBusinessRegistered === 'yes' && cacDocument.trim() === '') {
      return false;
    }

    if (isBusinessRegistered === 'no' && whyNotRegistered.trim() === '') {
      return false;
    }

    return true;
  };



  const handleSubmit = (e) => {
    e.preventDefault();

      const grantForm = {
        firstName,
        lastName,
        email,
        phoneNumber,
        country,
        state,
        gender,
        businessName,
        businessLocation,
        operationMonths,
        isBusinessRegistered,
        cacDocument,
        whyNeedGrant,
        videoLink,
        whyNotRegistered,
    };

    // Check if all visible fields are not empty
    if (!validateFields()) {
      setErrorMessage('Please fill in all required fields.');
      return;
    }

    // Reset error message if validation passes
    setErrorMessage('');

     console.log(grantForm)
  }

  return (
      <div>

        <Navbar />

        <div
          id='top'
          className={`relative bg-orange-50 h-fit flex flex-col justify-center items-center mx-auto relative py-20 ${ApplyForGrantCSS.heading}`}
          >
            <div className={ApplyForGrantCSS.decor}>
              <FormVector position={'left-10 top-20'} />
              <FormVector position={'top-10'} />
              <FormVector position={'right-10 top-20'} />
              {/* <FormVector position={'left-10'} /> */}
              {/* <FormVector position={'right-10'} /> */}
            </div>
            
            <div className={`text-center w-1/2 mt-20 space-y-3 ${ApplyForGrantCSS.title}`}>
              <h1 className="text-5xl text-orange-500 font-semibold">
                Apply For {"Grant"}
              </h1>
              <p>Need it? Go for it!</p>
              <h3 className="text-xl font-semibold">
                  {"Only available for Grant Applicants"}
              </h3>
            </div>

            <div className={ApplyForGrantCSS.main}>
          
              <EmailVerification  />

              
              {/* Main Form Content */}
              <form >
                {/* Non-editable fields */}

                <div className={ApplyForGrantCSS.smallinputholder}>
                  <InputFieldNon
                      labelText="First Name"
                      htmlFor="firstName" // Pass the htmlFor prop for label element
                      inputId="firstName" // Pass the inputId prop for input element
                      type="firstName" // Pass the type prop for input element
                      value={firstName}
                      // onChange={(e) => setEmail(e.target.value)}
                  />
                  <InputFieldNon
                      labelText="Last Name"
                      htmlFor="lastName" // Pass the htmlFor prop for label element
                      inputId="lastName" // Pass the inputId prop for input element
                      type="lastName" // Pass the type prop for input element
                      value={lastName}
                      // onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                
                <InputFieldNon
                    labelText="Email address"
                    htmlFor="email" // Pass the htmlFor prop for label element
                    inputId="email" // Pass the inputId prop for input element
                    type="email" // Pass the type prop for input element
                    value={email}
                    // onChange={(e) => setEmail(e.target.value)}
                />

                <div className={ApplyForGrantCSS.smallinputholder}>
                  <InputFieldNon
                      labelText="Gender"
                      htmlFor="gender" // Pass the htmlFor prop for label element
                      inputId="gender" // Pass the inputId prop for input element
                      type="gender" // Pass the type prop for input element
                      value={gender}
                      // onChange={(e) => setEmail(e.target.value)}
                  />
                  <InputFieldNon
                      labelText="Phone Number"
                      htmlFor="phoneNumber" // Pass the htmlFor prop for label element
                      inputId="phoneNumber" // Pass the inputId prop for input element
                      type="phoneNumber" // Pass the type prop for input element
                      value={phoneNumber}
                      // onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className={ApplyForGrantCSS.smallinputholder}>
                  <InputFieldNon
                      labelText="Country"
                      htmlFor="country" // Pass the htmlFor prop for label element
                      inputId="country" // Pass the inputId prop for input element
                      type="country" // Pass the type prop for input element
                      value={country}
                      // onChange={(e) => setEmail(e.target.value)}
                  />
                  <InputFieldNon
                      labelText="State"
                      htmlFor="state" // Pass the htmlFor prop for label element
                      inputId="state" // Pass the inputId prop for input element
                      type="state" // Pass the type prop for input element
                      value={state}
                      // onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                {/* Editable fields */}

                <InputField
                    labelText="Business Name"
                    placeholder={"Enter Business Name"}
                    htmlFor="businessName" // Pass the htmlFor prop for label element
                    inputId="businessName" // Pass the inputId prop for input element
                    type="businessName" // Pass the type prop for input element
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                />
                <InputField
                    labelText="Business Location"
                    placeholder={"Enter Business Location"}
                    htmlFor="businessLocation" // Pass the htmlFor prop for label element
                    inputId="businessLocation" // Pass the inputId prop for input element
                    type="businessLocation" // Pass the type prop for input element
                    value={businessLocation}
                    onChange={(e) => setBusinessLocation(e.target.value)}
                />
                <InputField
                    labelText="How many month has your business been in operation?"
                    placeholder={"Enter here"}
                    htmlFor="operationMonths" // Pass the htmlFor prop for label element
                    inputId="operationMonths" // Pass the inputId prop for input element
                    type="operationMonths" // Pass the type prop for input element
                    value={operationMonths}
                    onChange={(e) => setOperatioMonths(e.target.value)}
                />

                {/* Radio buttons for "Is your business registered?" */}
                <div>
                  <label>
                    
                    <InputOption
                      descriptionLabelText="Is your business registered?"
                      options={[{label:"Yes", value:'yes'},{label:"No", value: 'no'}]}
                      initialSelection={isBusinessRegistered}
                      updatedSelection={setIsBusinessRegistered}
                    />
          
                  </label>
                </div>

                {/* Conditional Form */}
                {isBusinessRegistered && (
                  <div>
                    {/* Common input field for both "Yes" and "No" choices */}
                  

                    {/* Input fields for "Yes" choice */}
                    {isBusinessRegistered === 'yes' && (
                      <div className={ApplyForGrantCSS.inputt}>
                        <InputField
                            labelText="if yes, Paste a link to your CAC document"
                            placeholder={"Paste link here"}
                            htmlFor="cacDocument" // Pass the htmlFor prop for label element
                            inputId="cacDocument" // Pass the inputId prop for input element
                            type="text" // Pass the type prop for input element
                            value={cacDocument}
                            onChange={(e) => setCacDocument(e.target.value)}
                          />

                          <TextArea
                            labelText="Why do you need a grant?"
                            placeholder={"Tell us why"}
                            htmlFor="whyNeedGrant" // Pass the htmlFor prop for label element
                            inputId="whyNeedGrant" // Pass the inputId prop for input element
                            type="text" // Pass the type prop for input element
                            value={whyNeedGrant}
                            onChange={(e) => setWhyNeedGrant(e.target.value)}
                          /> 

                          <InputField
                            labelText="Paste a link to a 1-minute video explaining why you need a grant"
                            placeholder={"Paste link here"}
                            htmlFor="videoLink" // Pass the htmlFor prop for label element
                            inputId="videoLink" // Pass the inputId prop for input element
                            type="text" // Pass the type prop for input element
                            value={videoLink}
                            onChange={(e) => setVideoLink(e.target.value)}
                          />
                      </div>
                    )}

                    {/* Input fields for "No" choice */}
                    {isBusinessRegistered === 'no' && (
                      <div className={ApplyForGrantCSS.inputt}>
                        <TextArea
                            labelText="if No, why?"
                            placeholder={"Write here"}
                            htmlFor="whyNotRegistered" // Pass the htmlFor prop for label element
                            inputId="whyNotRegistered" // Pass the inputId prop for input element
                            type="text" // Pass the type prop for input element
                            value={whyNotRegistered}
                            onChange={(e) => setWhyNotRegistered(e.target.value)}
                          /> 
                        <TextArea
                            labelText="Why do you need a grant?"
                            placeholder={"Tell us why"}
                            htmlFor="whyNeedGrant" // Pass the htmlFor prop for label element
                            inputId="whyNeedGrant" // Pass the inputId prop for input element
                            type="text" // Pass the type prop for input element
                            value={whyNeedGrant}
                            onChange={(e) => setWhyNeedGrant(e.target.value)}
                          /> 

                          <InputField
                            labelText="Paste a link to a 1-minute video explaining why you need a grant"
                            placeholder={"Paste link here"}
                            htmlFor="videoLink" // Pass the htmlFor prop for label element
                            inputId="videoLink" // Pass the inputId prop for input element
                            type="text" // Pass the type prop for input element
                            value={videoLink}
                            onChange={(e) => setVideoLink(e.target.value)}
                          />
                        {/* <textarea placeholder="Why do you need a grant" />
                        <input
                          type="text"
                          placeholder="Enter a link to a 1-minute video explaining why you need this grant"
                        /> */}
                      </div>
                    )}
                  </div>
                )}


                {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

                {/* Submit button */}
              
                <FormBtn btnFor={"Submit"} />

              </form>
            </div>

      </div>
                
        

      <div className="bg-gray-200 h-36 w-full"></div>

      <Footer />
                
    </div>
  );
};

export default MainForm;
