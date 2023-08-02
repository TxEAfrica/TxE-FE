import React, { useState, useEffect} from 'react';
import EventRegCSS from './EventRegForm.module.css';
import InputField from './components/InputField/InputField';
import InputSelect from './components/InputSelect/InputSelect';
import InputOption from './components/InputOption/InputOption';
import decor from '../../assets/decor.svg';
import FormBtn from './components/Buttons/FormButton';
import Navbar from '../../landingPage/sections/Navbar';
import Footer from '../../landingPage/sections/Footer';
import FormVector from '../../applications/FormVector';
import SuccessModal from '../../modals/SuccessModal';
import FailedModal from '../../modals/FailedModal'


const EventRegForm = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [gender, setGender] = useState('');
    const [country, setCountry] = useState('');
    const [state, setState] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [bestDescription, setBestDescription] = useState('');
    const [trackInterest, setTrackInterest] = useState('');
    const [attended2022, setAttended2022] = useState('');
    const [joiningMode, setJoiningMode] = useState('');
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [showFailedModal, setShowFailedModal] = useState(false);

    const [countryOptions, setCountryOptions] = useState([]);


    useEffect(() => {
      // Function to fetch country data from API
      const fetchCountries = async () => {
        try {

          const response = await fetch('https://restcountries.com/v3.1/all');
          const data = await response.json();

          const countries = data.map(country => ({
            label: country.name.common, 
            value: country.name.common, 
          }));

          const defaultOption = { label: 'Select your country', value: '' };
          countries.sort((a, b) => a.label.localeCompare(b.label));
          setCountryOptions([defaultOption, ...countries]);
        } catch (error) {

          console.error('Error fetching country data:', error);
        }
      };
  
      fetchCountries();
    }, []);

    const EventReg = {
        firstName,
        lastName,
        country,
        state,
        gender,
        phoneNumber,
        email,
        bestDescription,
        attended2022,
        joiningMode,
        trackInterest,
    };

    const checkEmailAvailability = async () => {
      try {
        const response = await fetch('https://txe-africa.onrender.com/api/v1/register/event', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email }),
        });
    
        const data = await response.json();
    
        // Check if the API response indicates that the email already exists
        if (data.status === 'fail' && data.message === 'email already exist') {
          return true; // Email already exists
        }
    
        return false; // Email does not exist
      } catch (error) {
        // console.log('Error checking email availability:', error);
        return false;
      }
    };
    

    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        // Check if the email exists in the database
        const emailExists = await checkEmailAvailability();
  
        if (emailExists) {
          setShowFailedModal(true);
          // console.log('Email already exists in the database.');
          // Show appropriate message or handle as per your requirement
          return;
        }
  
        // Prepare the data to be sent in the POST request
        const EventRegistration = {
          firstName,
          lastName,
          country,
          state,
          gender,
          phoneNumber,
          email,
          bestDescription,
          attended2022,
          joiningMode,
          trackInterest,
        };
  
        const response = await fetch('https://txe-africa.onrender.com/api/v1/register/event', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(EventRegistration),
        });
  
        // console.log(EventRegistration)

        if (response.ok) {
          // console.log('Form data submitted successfully!');
          setShowSuccessModal(true);
        } else {
          // console.log('Failed to submit form data');
          setShowFailedModal(true);
        }
      } catch (error) {
        // console.error('Error submitting form data:', error);
        setShowFailedModal(true);
      }

      
    };


      
  
    // Radio button options for "Which of the following best describes you?"
    const bestDescriptionOptions = [
      { label: 'Student', value: 'student' },
      { label: 'Developer', value: 'developer' },
      { label: 'Entrepreneur', value: 'entrepreneur' },
      { label: 'Others', value: 'others' },
    ];
    // Radio button options for "Did you attend last year?"
    const attendedOptions = [
      { label: 'Yes', value: 'Yes' },
      { label: 'No', value: 'No' },
    ];
    const joiningModeOptions = [
      { label: 'Virtual', value: 'Virtual' },
      { label: 'Physical', value: 'Physical' },
    ];
  
    // Radio button options for "Which trackInterest are you interested in?"
    const trackInterestOptions = [
      { label: 'Entrepreneurship', value: 'entrepreneurship' },
      { label: 'Technology', value: 'technology' },
    ];

    // Dropdown button options for "Gender"
      const genderOptions = [
        { label: 'Select your gender', value: '' },
        { label: 'Male', value: 'male' },
        { label: 'Female', value: 'female' },
        { label: 'Other', value: 'Other' },
      ];

      

  return (

    <div>
    <Navbar />
    <div className={EventRegCSS.main}>

      <div className={EventRegCSS.decor}>
          <FormVector position={'left-10 top-100'} />
          <FormVector position={'left-10 bottom-100'} />
          <FormVector position={'left-20 top-40'} />
          <FormVector position={'top-6'} />
          {/* <FormVector position={'bottom-3'} /> */}
          <FormVector position={'right-10 top-100'} />
          <FormVector position={'right-10 bottom-100'} />
          <FormVector position={'right-20 top-10'} />
      </div>

         

      <div className={EventRegCSS.formtitle}>
        <h1>Register Now!</h1>
        <small>Reserve your Spot</small>
        <p>Fill the form carefully and correctly</p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className={EventRegCSS.smallinputholder}>
            <InputField
                // className={"className"}
                placeholder={"Enter your first name"}
                labelText="First Name"
                htmlFor="firstName" 
                inputId="firstName" 
                type="text" 
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
            />
            <InputField
                placeholder={"Enter your last name"}
                labelText="Last Name"
                htmlFor="lastName" 
                inputId="lastName" 
                type="text" 
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
            />
        </div>
        
        
        <div className={EventRegCSS.smallinputholder}>
            <InputSelect
              labelText={"Gender"}
              htmlFor={"gender"}
              selectId="gender"
              value={gender}
              // onChange={(selectedOption) => setGender(selectedOption.value)}
              onChange={(e) => setGender(e.target.value)}
              options={genderOptions}
            />

            
            <InputField
                labelText="Phone Number"
                placeholder={"Enter your phone number"}
                htmlFor="phoneNumber" 
                inputId="phoneNumber" 
                type="text" 
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
            />
        </div>
        <div className={EventRegCSS.smallinputholder}>
            <InputSelect
                labelText="Country"
                htmlFor="country" 
                selectId="country" 
                value={country}
                // onChange={(selectedOption) => setCountry(selectedOption.value)} // Pass the handleGenderChange function
                onChange={(e) => setCountry(e.target.value)}
                options={countryOptions} 
              />

            <InputField
                labelText="State"
                placeholder={"Enter your state"}
                htmlFor="state" 
                inputId="state" 
                type="text" 
                value={state}
                onChange={(e) => setState(e.target.value)}
            />
        </div>

        <InputField
            labelText="Email"
            placeholder={"Enter your email address"}
            htmlFor="email" 
            inputId="email" 
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
        />
        

        <InputOption
        descriptionLabelText="Which of the following best describes you?"
        options={bestDescriptionOptions}
        initialSelection={bestDescription}
        updatedSelection={setBestDescription}
        />

        <InputOption
        descriptionLabelText="Did you attend TxE 2022?"
        options={attendedOptions}
        initialSelection={attended2022}
        updatedSelection={setAttended2022}
        />

        <InputOption
        descriptionLabelText="How will you be joining us this year?"
        options={joiningModeOptions}
        initialSelection={joiningMode}
        updatedSelection={setJoiningMode}
        />

        <InputOption
        descriptionLabelText="Which trackInterest are you interested in?"
        options={trackInterestOptions}
        initialSelection={trackInterest}
        updatedSelection={setTrackInterest}
        />

    

        <div>
            <FormBtn btnFor={'Register'} />
        </div>


      </form>
    </div>
    <div className="bg-gray-200 h-36 w-full"></div>
    <Footer />


    {showSuccessModal && (
      <SuccessModal
        onClose={() => setShowSuccessModal(false)}
        message={"You have successfully registered for"}
        thirdMessage={"TxE Summit 2023"}
        btnFor={"Back to Homepage"}
        />
    )}
    {showFailedModal && (
      <FailedModal
        onClose={() => setShowFailedModal(false)}
        message={"Looks like you have already registered for this event"}
        secondMessage={"Check your email for your ticket."}
         />
    )}
    </div>
  );
};

export default EventRegForm;
