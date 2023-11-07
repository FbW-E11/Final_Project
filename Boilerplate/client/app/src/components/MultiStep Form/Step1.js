
import React from 'react';
const Step1 = ({ formData, setFormData, nextStep }) => {
  const { height, weight, bmi } = formData;
  // Function to calculate BMI
  const calculateBMI = () => {
    const heightInMeters = height / 100;
    const bmiValue = weight / (heightInMeters * heightInMeters);
    setFormData({ ...formData, bmi: bmiValue });
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <h2> Check Your BMI</h2>
      <input
        type="number"
        name="height"
        value={height}
        onChange={handleChange}
        placeholder="Height (in Cm)"
      />
      <input
        type="number"
        name="weight"
        value={weight}
        onChange={handleChange}
        placeholder="Weight (in Kg)"
      />
      <button onClick={calculateBMI}>Calculate BMI</button>
      {bmi && (
        <div>
        <p style={{fontSize:"25px"}} >BMI Categories:</p>
          <p style={{fontSize:"23px"}} >Underweight: less than 18.5</p>
          <p style={{fontSize:"23px"}} >Normal weight: 18.5 - 24.9</p>
          <p style={{fontSize:"23px"}} >Overweight: 25 - 29.9</p>
          <p style={{fontSize:"23px"}} >Obese: 30 or greater</p>
          <p style={{fontSize:"35px" , color:"orange",}} ><strong>Your BMI is: {bmi.toFixed(2)}</strong></p>

        </div>
      )}
      <button onClick={nextStep}>Gender</button>
    </div>
  );
};
export default Step1;