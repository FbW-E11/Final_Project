
import React from 'react';
const Step2 = ({ formData, setFormData, nextStep, prevStep }) => {
  const { gender } = formData;
  const handleChange = (e) => {
    setFormData({ ...formData, gender: e.target.value });
  };
  return (
    <div>
    <h2>Select Gender</h2>
    <label>
      <input
        type="radio"
        name="gender"
        value="male"
        checked={gender === 'male'}
        onChange={handleChange}
        style={{ width: '20px', height: '20px', backgroundColor: 'orange', borderRadius: '50%', marginRight: '5px' }}
      />
      <span style={{ fontSize: '25px', fontFamily: 'Arial', color: 'orange' }}>Male</span>
    </label>
    <label>
      <input
        type="radio"
        name="gender"
        value="female"
        checked={gender === 'female'}
        onChange={handleChange}
        style={{ width: '20px', height: '20px', backgroundColor: 'orange', borderRadius: '50%', marginRight: '5px' }}
      />
      <span style={{ fontSize: '25px', fontFamily: 'Arial', color: 'orange' }}>Female</span>
    </label>
  
  
      <button onClick={prevStep}>Previous</button>
      <button onClick={nextStep}>Characteristic</button>
    </div>
  );
};
export default Step2;