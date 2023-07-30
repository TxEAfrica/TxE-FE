import React, { useState, useEffect} from 'react';
import EventRegCSS from './EventRegForm.module.css';
import InputField from './components/InputField/InputField';
import InputSelect from './components/InputSelect/InputSelect';
import InputOption from './components/InputOption/InputOption';
import decor from '../../assets/decor.svg';
import RegButton from './components/Buttons/RegButton';

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
    const [attended, setAttended] = useState('');
    const [joiningMode, setJoiningMode] = useState('');

    const [countryOptions, setCountryOptions] = useState([]);


    useEffect(() => {
      // Function to fetch country data from API
      const fetchCountries = async () => {
        try {
          // Replace 'YOUR_COUNTRY_API_ENDPOINT' with the actual API endpoint to fetch countries
          const response = await fetch('https://restcountries.com/v3.1/all');
          const data = await response.json();
          // Assuming the API response is an array of objects with 'label' and 'value' properties
          // Modify the 'label' and 'value' properties according to your API response structure
          const countries = data.map(country => ({
            label: country.name.common, // Modify this according to your API response structure
            value: country.name.common, // Modify this according to your API response structure
          }));
          // Prepend the default option at the beginning of the array
          const defaultOption = { label: 'Select your country', value: '' };
          countries.sort((a, b) => a.label.localeCompare(b.label));
          setCountryOptions([defaultOption, ...countries]);
        } catch (error) {
          // Handle errors if any
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
        attended,
        joiningMode,
        trackInterest,
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(EventReg) 
    }
      
  
    // Radio button options for "Which of the following best describes you?"
    const bestDescriptionOptions = [
      { label: 'Student', value: 'student' },
      { label: 'Developer', value: 'developer' },
      { label: 'Entreprenuer', value: 'entreprenuer' },
      { label: 'Others', value: 'others' },
    ];
    // Radio button options for "Did you attend last year?"
    const attendedOptions = [
      { label: 'Yes', value: 'yes' },
      { label: 'No', value: 'no' },
    ];
    const joiningModeOptions = [
      { label: 'Virtual', value: 'virtual' },
      { label: 'Physical', value: 'physical' },
    ];
  
    // Radio button options for "Which track are you interested in?"
    const trackInterestOptions = [
      { label: 'Entrepreneurship', value: 'entrepreneurship' },
      { label: 'Technology', value: 'technology' },
    ];

    // Dropdown button options for "Gender"
      const genderOptions = [
        { label: 'Select your gender', value: '' },
        { label: 'Male', value: 'male' },
        { label: 'Female', value: 'female' },
        { label: 'Other', value: 'other' },
      ];

  return (
    <div className={EventRegCSS.main}>

      <img src={decor} alt='' className={EventRegCSS.decor1} />
      <img src={decor} alt='' className={EventRegCSS.decor2} />
      <img src={decor} alt='' className={EventRegCSS.decor3} />

      <div className={EventRegCSS.formtitle}>
        <h1>Register Now!</h1>
        <small>Reserve your Spot</small>
        <p>Fill the form carefully and correctly</p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className={EventRegCSS.smallinputholder}>
            <InputField
                // className={"className"}
                labelText="First Name"
                htmlFor="firstName" // Pass the htmlFor prop for label element
                inputId="firstName" // Pass the inputId prop for input element
                type="text" // Pass the type prop for input element
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
            />
            <InputField
                labelText="Last Name"
                htmlFor="lastName" // Pass the htmlFor prop for label element
                inputId="lastName" // Pass the inputId prop for input element
                type="text" // Pass the type prop for input element
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
            />
        </div>
        
        
        <div className={EventRegCSS.smallinputholder}>
            <InputSelect
                labelText="Gender"
                htmlFor="gender" // Pass the htmlFor prop for label element
                selectId="gender" // Pass the selectId prop for select element
                value={gender}
                onChange={(e) => setGender(e.target.value)} // Pass the handleGenderChange function
                options={genderOptions} // Pass the options array for select element
                />

            
            <InputField
                labelText="Phone Number"
                htmlFor="phoneNumber" // Pass the htmlFor prop for label element
                inputId="phoneNumber" // Pass the inputId prop for input element
                type="text" // Pass the type prop for input element
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
            />
        </div>
        <div className={EventRegCSS.smallinputholder}>
            <InputSelect
                labelText="Country"
                htmlFor="country" // Pass the htmlFor prop for label element
                selectId="country" // Pass the selectId prop for select element
                value={country}
                onChange={(e) => setCountry(e.target.value)} // Pass the handleGenderChange function
                options={countryOptions} // Pass the options array for select element
              />

            <InputField
                labelText="State"
                htmlFor="state" // Pass the htmlFor prop for label element
                inputId="state" // Pass the inputId prop for input element
                type="text" // Pass the type prop for input element
                value={state}
                onChange={(e) => setState(e.target.value)}
            />
        </div>

        <InputField
            labelText="Email"
            htmlFor="email" // Pass the htmlFor prop for label element
            inputId="email" // Pass the inputId prop for input element
            type="email" // Pass the type prop for input element
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
        initialSelection={attended}
        updatedSelection={setAttended}
        />

        <InputOption
        descriptionLabelText="How will you be joining us this year?"
        options={joiningModeOptions}
        initialSelection={joiningMode}
        updatedSelection={setJoiningMode}
        />

        <InputOption
        descriptionLabelText="Which track are you interested in?"
        options={trackInterestOptions}
        initialSelection={trackInterest}
        updatedSelection={setTrackInterest}
        />

    

        <div>
            <RegButton  />
        </div>


      </form>
    </div>
  );
};

export default EventRegForm;
