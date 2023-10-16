import React, { useState } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
const MultiStepForm = () => {
  const [formData, setFormData] = useState({
    height: '',
    weight: '',
    gender: '',
    muscleType: '',
    dietHabits: '',
    sleepingHabits: '',
  });
  const [currentStep, setCurrentStep] = useState(1);
  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };
  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };
  return (
    <div>
      {currentStep === 1 && (
        <Step1
          formData={formData}
          setFormData={setFormData}
          nextStep={nextStep}
        />
      )}
      {currentStep === 2 && (
        <Step2
          formData={formData}
          setFormData={setFormData}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      )}
      {currentStep === 3 && (
        <Step3
          formData={formData}
          setFormData={setFormData}
          prevStep={prevStep}
        />
      )}
    </div>
  );
};
export default MultiStepForm;