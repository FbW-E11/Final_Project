import React from "react";
import { useNavigate } from "react-router-dom";
import MultiStepForm from "../MultiStep Form/MultiStepForm.js";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import DumbbellIcon from "@mui/icons-material/FitnessCenter";
import {
  CheckCircleOutline,
  DirectionsRun,
  FitnessCenter,
  Group,
  Fastfood,
  BookOnline,
  Elderly,
  Speed,
  SportsMma,
  SportsMotorsports,
  HolidayVillage,
  Nightlife,
  QueueMusic,
  SelfImprovement,
  EmojiPeople,
} from "@mui/icons-material";
const orangeIconStyle = {
  color: 'orange',
};

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
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
        <DumbbellIcon
          fontSize="large"
          className="gym-icon"
          style={{ fontSize: 50 }}
        />

        <h1 className="header-title">Welcome to BeFit</h1>
        <p className="header-description">
          Your one-stop destination for fitness and wellness.
        </p>
      </header>
      <main>
        <div className="content-container">
          <h2>Our Services</h2>
          <p>
          <strong style={{ fontSize: '1.3em' }}>
            Explore a wide range of fitness services, including:
          </strong>
        </p>
          <ul>
    <li>
      <DirectionsRun style={orangeIconStyle} /> Cardio exercises
    </li>
    <li>
      <SportsMma style={orangeIconStyle} /> Strength training
    </li>
    <li>
      <Group style={orangeIconStyle} /> Group fitness classes
    </li>
    <li>
      <Fastfood style={orangeIconStyle} /> Nutrition Guidance
    </li>
    <li>
      <BookOnline style={orangeIconStyle} /> Online Workouts
    </li>
    <li>
      <EmojiPeople style={orangeIconStyle} /> Body Transformation Challenges
    </li>
    <li>
      <Elderly style={orangeIconStyle} /> Senior Fitness Programs
    </li>
    <li>
      <DumbbellIcon style={orangeIconStyle} /> Weightlifting
    </li>
    <li>
      <Speed style={orangeIconStyle} /> High-Intensity Interval Training (HIIT)
    </li>
    <li>
      <SelfImprovement style={orangeIconStyle} /> Yoga and flexibility exercises
    </li>
    <li>
      <QueueMusic style={orangeIconStyle} /> Zumba
    </li>
    <li>
      <SportsMotorsports style={orangeIconStyle} /> Kickboxing
    </li>
    <li>
      <HolidayVillage style={orangeIconStyle} /> Boot Camp Workouts
    </li>
  </ul>
        </div>
        <div className="testimonial-container">
          <MultiStepForm />
          <br />

          <h2 id="about">About Us</h2>
          <br />

          <p>
            <strong>
              We are a dedicated team of fitness enthusiasts who are passionate
              about helping you achieve your fitness goals. Our mission is to
              provide you with the tools and knowledge you need to live a
              healthy and active lifestyle.
            </strong>
          </p>
          <ul>
            <li>
              <strong>Nutrition Guidance:</strong> We believe that what you eat
              is just as important as how you train. Our nutrition experts can
              help you make informed dietary choices tailored to your goals.
            </li>
            <br />
            <li>
              <strong>Mental Health Support:</strong> Achieving your fitness
              goals isn't just about your body; it's about your mind as well. We
              offer resources and support to help you manage stress, build
              resilience, and maintain a positive outlook.
            </li>
            <br />
            <li>
            <strong>Community:</strong> Joining BeFit means becoming a part of a supportive fitness community. You'll connect with fellow members who share your passion and motivation.
            </li>
            <br />
            <li>
              <strong>Inspiration and Motivation:</strong> We understand that
              maintaining a fitness routine can be challenging. That's why we
              regularly share success stories and inspiration to keep you
              motivated on your journey.
            </li>
            <br />
          </ul>

          <h3>Our Team</h3>
          <p>
            <strong>
              Our team consists of highly qualified fitness trainers,
              nutritionists, and mental health experts. They bring a wealth of
              experience to help you achieve your fitness goals. We believe in
              continuous learning and staying up-to-date with the latest trends
              in fitness and wellness. Our trainers are passionate about guiding
              you to success, no matter your starting point.
            </strong>
          </p>

          <h3>Your Fitness Journey</h3>
          <p>
          <strong> Whether you're looking to lose weight, build muscle, increase flexibility, or just lead a healthier lifestyle, BeFit is here for you. We tailor our programs to fit your unique needs. No two fitness journeys are the same, and we celebrate your individuality. </strong>
          </p>
          
          <p>
            <strong>
              With years of experience in the fitness industry, our trainers and
              experts are here to guide you on your fitness journey. We offer a
              variety of programs and services to cater to all fitness levels
              and goals.
            </strong>
          </p>
          <p>
            <strong>
              At BeFit, we believe that everyone deserves the
              opportunity to live a healthier life. Whether you are just
              starting your fitness journey or looking to take your training to
              the next level, we are here to support you every step of the way.
            </strong>
          </p>
          <p>
            <strong>
              Join us and be a part of our fitness community. Let's work
              together to transform your health and well-being. Your success is
              our success.
            </strong>
          </p>
        </div>
        <button
          className="next-button"
          onClick={onSubmit} // Use the onSubmit function from the workout object
        >
          Next
        </button>
        <div className="contact-container" id="contact">
          <h2>Contact Us</h2>
          <p>Address: Von-Lernen Straße, 99, Dortmund, 42558</p>
          <p>Phone: +1-123-456-7890</p>
          <p>Email: info@myfitnesswebsite.com</p>
          {/* You can add additional contact information or a contact form here. */}
        </div>
      </main>
      <footer className="footer">
        <div className="social-icons">
          <a href="https://www.facebook.com/your-facebook-profile">
            <FaFacebook />
          </a>
          <a href="https://twitter.com/your-twitter-profile">
            <FaTwitter />
          </a>
          <a href="https://www.instagram.com/your-instagram-profile">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/in/your-linkedin-profile">
            <FaLinkedin />
          </a>
          <a href="https://www.youtube.com/your-youtube-channel">
            <FaYoutube />
          </a>
        </div>

<<<<<<< HEAD
        <p>&copy; 2023 BeFit </p>
=======
        <p>&copy; 2023 BeFit</p>

>>>>>>> 78f8c1df2cfcdbfb4f6ec28629e584d12b7b1df9
      </footer>
    </div>
  );
}

export default Workout;
