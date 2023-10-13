import React from 'react'
import  { useState } from 'react';
import "../Workout/style.css";

const FitnessQuestionnaireForm = () => {
  const [formData, setFormData] = useState({
    fitnessGoals: [],
    targetWeight: {
      current: '',
      target: '',
    },
    fitnessLevel: '',
    exercisePreferences: [],
    workoutDuration: '',
    dailyActivityLevel: '',
    dietaryPreferences: [],
    medicalHistory: '',
    medications: '',
    allergies: '',
  });

  const handleCheckboxChange = (field, value) => {
    const updatedArray = formData[field].includes(value)
      ? formData[field].filter(item => item !== value)
      : [...formData[field], value];

    setFormData({
      ...formData,
      [field]: updatedArray,
    });
  };

  const handleInputChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const handleTargetWeightChange = (field, value) => {
    setFormData({
      ...formData,
      targetWeight: {
        ...formData.targetWeight,
        [field]: value,
      },
    });
  };

  const handleSubmit = () => {
    // Implement logic to handle form submission
    console.log('Form Data:', formData);
    // You can send the data to a server, perform validation, etc.
  };

  return (
    <div className='container'>
      <h2>Fitness Questionnaire</h2>
      <form>
        <label>
          What are your primary fitness goals? (Select all that apply)
          <div>
            <label>
              <input
                type="checkbox"
                value="Weight Loss"
                checked={formData.fitnessGoals.includes('Weight Loss')}
                onChange={() => handleCheckboxChange('fitnessGoals', 'Weight Loss')}
              />
              Weight Loss
            </label>
            {/* Add similar checkboxes for other fitness goals */}
          </div>
        </label>

        <label>
          Target Weight (if applicable):
          <div>
            <label>
              Current Weight:
              <input
                type="text"
                value={formData.targetWeight.current}
                onChange={(e) => handleTargetWeightChange('current', e.target.value)}
              />
            </label>
            <label>
              Target Weight:
              <input
                type="text"
                value={formData.targetWeight.target}
                onChange={(e) => handleTargetWeightChange('target', e.target.value)}
              />
            </label>
          </div>
        </label>

        <label>
          Fitness Level:
          <select
            value={formData.fitnessLevel}
            onChange={(e) => handleInputChange('fitnessLevel', e.target.value)}
          >
            <option value="">Select Fitness Level</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>
        </label>

        {/* Add more form fields based on the questionnaire structure */}
        
        <button type="button" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default FitnessQuestionnaireForm;
