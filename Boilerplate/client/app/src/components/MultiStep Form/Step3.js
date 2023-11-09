import React from 'react';

const Step3 = ({ formData, setFormData, prevStep }) => {
  const { muscleType, dietHabits, sleepingHabits } = formData;
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <h2> Additional Required Information</h2>
      <form>
        <label className='muscle-container' htmlFor="muscleType">Muscle Type:</label>
        <select
          id="muscleType"
          name="muscleType"
          value={muscleType}
          onChange={handleChange}
        >
          <option value="Endomorph">Endomorph</option>
          <option value="Mesomorph">Mesomorph</option>
          <option value="Ectomorph">Ectomorph</option>
        </select>
        <label className='muscle-container' htmlFor="dietHabits">Diet Habits:</label>
        <select
          id="muscleType"
          name="Diet Habits"
          value={dietHabits}
          onChange={handleChange}
        >
          <option value="Omnivore">Omnivore</option>
          <option value="Vegetarian">Vegetarian</option>
          <option value="Vegan">Vegan</option>
        </select>
        <label className='muscle-container' htmlFor="sleepingHabits">Sleeping Habits:</label>
        <select
          id="muscleType"
          name="sleepingHabits"
          value={sleepingHabits}
          onChange={handleChange}
        >
          <option value="normal">Normal</option>
          <option value="midday break">Midday break</option>
          <option value="irregular">Irregular</option>
        </select>
      </form>
      <button onClick={prevStep}>Previous</button>
    </div>
  );
};
export default Step3;