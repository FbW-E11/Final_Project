import React from "react";

const Step3 = ({ formData, setFormData, prevStep }) => {
  const { muscleType, dietHabits, sleepingHabits } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h2>Step 3: Additional Information</h2>
      <form>
        <label htmlFor="muscleType">Muscle Type:</label>
        <select
          id="muscleType"
          name="muscleType"
          value={muscleType}
          onChange={handleChange}
        >
          <option value="">-Select an option-</option> {/* Initially empty */}
          <option value="Endomorph">Endomorph</option>
          <option value="Mesomorph">Mesomorph</option>
          <option value="Ectomorph">Ectomorph</option>
        </select>
        <label htmlFor="dietHabits">Diet Habits:</label>
        <select
          id="dietHabits"
          name="dietHabits"
          value={dietHabits}
          onChange={handleChange}
        >
          <option value="">-Select an option-</option> {/* Initially empty */}
          <option value="Omnivore">Omnivore</option>
          <option value="Vegetarian">Vegetarian</option>
          <option value="Vegan">Vegan</option>
        </select>
        <label htmlFor="sleepingHabits">Sleeping Habits:</label>
        <select
          id="sleepingHabits"
          name="sleepingHabits"
          value={sleepingHabits}
          onChange={handleChange}
        >
          <option value="">-Select an option-</option> {/* Initially empty */}
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