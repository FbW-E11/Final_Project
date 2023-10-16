import React from 'react';
const Step2 = ({ formData, setFormData, nextStep, prevStep }) => {
  const { gender } = formData;
  const handleChange = (e) => {
    setFormData({ ...formData, gender: e.target.value });
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
      <button onClick={nextStep}>Next</button>
    </div>
  );
};
export default Step2;