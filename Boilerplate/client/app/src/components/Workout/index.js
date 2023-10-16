import React from "react";
import "../Workout/style.css";
import { useNavigate } from "react-router-dom";
import MultiStepForm from "../MultiStep Form/MultiStepForm.js";

function Workout() {
  const navigate = useNavigate();

  const onSubmit = () => {
    navigate("/home");
  };

  return (
    <div className="app-container">
      <header className="header">
        <nav className="navbar">
          <ul className="nav-list">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/services">Services</a>
            </li>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </nav>
        <h1 className="header-title">Welcome to My Fitness Website</h1>
        <p className="header-description">
          Your one-stop destination for fitness and wellness.
        </p>
      </header>
      <main>
        <div className="content-container">
          <h2>Our Services</h2>
          <p>Explore a wide range of fitness services, including:</p>
          <ul>
            <li>Cardio exercises</li>
            <li>Strength training</li>
            <li>Yoga and flexibility exercises</li>
            <li>Track your progress</li>
          </ul>
        </div>
        <div className="testimonial-container">
           
          <MultiStepForm />
          
          <h2>Testimonials</h2>
          <p>
            See what our satisfied customers have to say about their fitness
            journey.
          </p>
          <div className="testimonial">
          
          <p>
              "I've never felt better since I started using this website. It's
              truly life-changing!"
            </p>
          </div>
          <div className="testimonial">
            <p>
              "The workouts are amazing, and the progress tracking is a
              game-changer!"
            </p>
            
          </div>
          <div className="testimonial">
            
            
          </div>
          <div className="testimonial">
            <p>
              "The workouts are amazing, and the progress tracking is a
              game-changer!"
            </p>
            
          </div>
          
          <button
            className="next-button"
            onClick={onSubmit} // Use the onSubmit function from the workout object
          >
            
            Next
          </button>
        </div>
      </main>
      <footer className="footer">
        <p>&copy; 2023 My Fitness Website</p>
      </footer>
    </div>
  );
}
export default Workout;
