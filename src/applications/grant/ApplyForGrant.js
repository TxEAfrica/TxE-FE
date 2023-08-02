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
import SuccessModal from '../../modals/SuccessModal';
import FailedModal from '../../modals/FailedModal';


const ApplyForGrant = ({ initialUserData }) => {

  const [userData, setUserData] = useState(null)

  const {
    firstName,
    lastName,
    email,
    phoneNumber,
    country,
    state,
    gender,
    // ... other fields from userData
  } = userData || {};

  const [isEmailVerified, setIsEmailVerified] = useState(false);

  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showFailedModal, setShowFailedModal] = useState(false);
  const [failedModalMessage, setFailedModalMessage] = useState('')
  const [failedSecondModalMessage, setFailedSecondModalMessage] = useState('')
  


  const [isBusinessRegistered, setIsBusinessRegistered] = useState('');
  const [cacDocument, setCacDocument] = useState('');
  const [whyNeedGrant, setWhyNeedGrant] = useState('');
  const [videoLink, setVideoLink] = useState('');
  const [whyNotRegistered, setWhyNotRegistered] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [businessLocation, setBusinessLocation] = useState('');
  const [operationMonths, setOperationMonths] = useState('');


  const [errorMessage, setErrorMessage] = useState('');

  const validateFields = () => {
    // Check if email is verified
    if (!isEmailVerified) {
      return false;
    }
  
    // Additional validation based on the "isBusinessRegistered" value
    if (isBusinessRegistered === 'yes') {
      if (
        businessName.trim() === '' ||
        businessLocation.trim() === '' ||
        operationMonths.trim() === '' ||
        cacDocument.trim() === '' ||
        whyNeedGrant.trim() === '' ||
        videoLink.trim() === ''
      ) {
        return false;
      }
    }
  
    if (isBusinessRegistered === 'no') {
      if (
        whyNotRegistered.trim() === '' ||
        businessLocation.trim() === '' ||
        operationMonths.trim() === '' ||
        whyNeedGrant.trim() === '' ||
        videoLink.trim() === ''
      ) {
        return false;
      }
    }
  
    return true;
  };
  
  
  

  const handleEmailVerificationSuccess = () => {
    setIsEmailVerified(true);
  };



  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Data from readOnly input fields (prepopulated data)
    const readOnlyData = {
      firstName: userData?.data?.firstName || '',
      lastName: userData?.data?.lastName || '',
      email: userData?.data?.email || '',
      phoneNumber: userData?.data?.phoneNumber || '',
      country: userData?.data?.country || '',
      state: userData?.data?.state || '',
      gender: userData?.data?.gender || '',
    };
  
    // Data from editable input fields
    const editableData = {
      businessName,
      businessLocation,
      operationMonths,
      isBusinessRegistered,
      cacDocument,
      whyNeedGrant,
      videoLink,
      whyNotRegistered,
    };
  
    // Combine both data sets
    const formData = { ...readOnlyData, ...editableData };
  
    // Check if all visible fields are not empty
    if (!validateFields(editableData)) {
      setErrorMessage('Please fill in all required fields.');
      return;
    }
  
    // Reset error message if validation passes
    setErrorMessage('');
  
    try {
      // Make the POST request to the API
      const response = await fetch('https://txe-africa.onrender.com/api/v1/register/grant', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      console.log(response)
  
      console.log(formData);
  
      if (response.status === 200) {
        setShowSuccessModal(true);
      } else if (response.status === 403) {
        setShowFailedModal(true);
        setFailedModalMessage("Custom message for 403 status");
      } else if (response.status === 400) {
        setShowFailedModal(true);
        setFailedModalMessage("You didn't register for Entrepreneurship");
        setFailedSecondModalMessage("This grant is only available for Entrepreneurship applicants");
      } else {
        setShowFailedModal(true);
        setFailedModalMessage("Default message for other statuses");
      }
    } catch (error) {
      console.error('Error submitting grant form:', error);
      setShowFailedModal(true);
      setFailedModalMessage("Error occurred during form submission");
    }
  };
  
  


  const handleUserData = (data) => {
    setUserData(data);
  };
 

  return (



      <div>

        <Navbar />

        <div
          id='top'
          className={`relative bg-orange-50 h-fit flex flex-col justify-center items-center mx-auto relative py-20 ${ApplyForGrantCSS.heading}`}
          >
            <div className={ApplyForGrantCSS.decor}>
              <FormVector position={'left-10 top-10'} />
              {/* <FormVector position={'top-10'} /> */}
              <FormVector position={'right-10 top-30'} />
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
        {/* Show the form content only if the email is verified */}
        {isEmailVerified ? (
          <form onSubmit={handleSubmit} >
          {/* Non-editable fields */}

          <div className={ApplyForGrantCSS.smallinputholder}>
            <InputFieldNon
                labelText="First Name"
                htmlFor="firstName" // Pass the htmlFor prop for label element
                inputId="firstName" // Pass the inputId prop for input element
                type="firstName" // Pass the type prop for input element
                value={userData.data.firstName}
                // onChange={(e) => setEmail(e.target.value)}
            />
            <InputFieldNon
                labelText="Last Name"
                htmlFor="lastName" // Pass the htmlFor prop for label element
                inputId="lastName" // Pass the inputId prop for input element
                type="lastName" // Pass the type prop for input element
                value={userData.data.lastName}
                // onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          
          <InputFieldNon
              labelText="Email address"
              htmlFor="email" // Pass the htmlFor prop for label element
              inputId="email" // Pass the inputId prop for input element
              type="email" // Pass the type prop for input element
              value={userData.data.email}
              // onChange={(e) => setEmail(e.target.value)}
          />

          <div className={ApplyForGrantCSS.smallinputholder}>
            <InputFieldNon
                labelText="Gender"
                htmlFor="gender" // Pass the htmlFor prop for label element
                inputId="gender" // Pass the inputId prop for input element
                type="gender" // Pass the type prop for input element
                value={userData.data.gender}
                // onChange={(e) => setEmail(e.target.value)}
            />
            <InputFieldNon
                labelText="Phone Number"
                htmlFor="phoneNumber" // Pass the htmlFor prop for label element
                inputId="phoneNumber" // Pass the inputId prop for input element
                type="phoneNumber" // Pass the type prop for input element
                value={userData.data.phoneNumber}
                // onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className={ApplyForGrantCSS.smallinputholder}>
            <InputFieldNon
                labelText="Country"
                htmlFor="country" // Pass the htmlFor prop for label element
                inputId="country" // Pass the inputId prop for input element
                type="country" // Pass the type prop for input element
                value={userData.data.country}
                // onChange={(e) => setEmail(e.target.value)}
            />
            <InputFieldNon
                labelText="State"
                htmlFor="state" // Pass the htmlFor prop for label element
                inputId="state" // Pass the inputId prop for input element
                type="state" // Pass the type prop for input element
                value={userData.data.state}
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
              onChange={(e) => setOperationMonths(e.target.value)}
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
        ) : (
          <div className={ApplyForGrantCSS.mainn}>
            <EmailVerification
              onSuccess={handleEmailVerificationSuccess}
              onUserData={(data) =>
                initialUserData && initialUserData.firstName
                  ? null
                  : setUserData(data)
              }
              />
          </div>
        )}
      </div>

      </div>
                
        

      <div className="bg-gray-200 h-36 w-full"></div>

      <Footer />
      {showSuccessModal && (
      <SuccessModal
        onClose={() => setShowSuccessModal(false)}
        message={"You have successfully applied for a grant"} 
        thirdMessage={"Keep an eye out for our mail"}
        btnFor={"Back to Home"}
        />
    )}
    {showFailedModal && (
      <FailedModal
        onClose={() => setShowFailedModal(false)}
        message={failedModalMessage}
        secondMessage={failedSecondModalMessage}
         />
    )}

                
    </div>
  );
};

export default ApplyForGrant;
