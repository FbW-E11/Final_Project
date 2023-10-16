import React from 'react';

const Step2 = ({ formData, setFormData, nextStep, prevStep }) => {
  const { gender } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, gender: e.target.value });
  };

  const validateAndProceed = () => {
    // Check if the required field (gender) is selected
    if (gender) {
      // If the required field is selected, proceed to the next step
      nextStep();
    } else {
      // Display an error message or take other appropriate action
      alert('Please select a gender.');
    }
  };

  return (
    <div>
      <h2>Step 2: Select Gender</h2>
      <label>
        <input
          type="radio"
          name="gender"
          value="male"
          checked={gender === 'male'}
          onChange={handleChange}
        />
        Male
      </label>
      <label>
        <input
          type="radio"
          name="gender"
          value="female"
          checked={gender === 'female'}
          onChange={handleChange}
        />
        Female
      </label>
      <button onClick={prevStep}>Previous</button>
      <button onClick={validateAndProceed}>Next</button>
    </div>
  );
};

export default Step2;
