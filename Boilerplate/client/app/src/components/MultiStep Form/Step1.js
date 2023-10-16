import React from 'react';

const Step1 = ({ formData, setFormData, nextStep }) => {
  const { weight, height, bmi } = formData;
  
  const calculateBMI = () => {
    const heightInMeters = height / 100;
    const bmiValue = weight / (heightInMeters * heightInMeters);
    setFormData({ ...formData, bmi: bmiValue });
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
      
  const validateAndProceed = () => {
    // Check if required fields are filled
    if (weight && height) {
      // If all required fields are filled, proceed to the next step
      nextStep();
    } else {
      // Display an error message or take other appropriate action
      alert('Please fill in all required fields.');
    }
  };

  return (
    <div>
      <h2>Step 1: User Info</h2>
      <input
        type="number"
        name="weight"
        value={weight}
        onChange={handleChange}
        placeholder="Weight (in kg)"
      />
      <input
        type="number"
        name="height"
        value={height}
        onChange={handleChange}
        placeholder="Height (in cm)"
      />
      <button onClick={calculateBMI}>Calculate BMI</button>
      {bmi && (
        <div>
          <p>Your BMI is: {bmi.toFixed(2)}</p>
          <p>BMI Categories:</p>
          <p>Underweight: less than 18.5</p>
          <p>Normal weight: 18.5 - 24.9</p>
          <p>Overweight: 25 - 29.9</p>
          <p>Obese: 30 or greater</p>
        </div>
      )}
      <button onClick={validateAndProceed}>Next</button>
    </div>
  );
};

export default Step1;





