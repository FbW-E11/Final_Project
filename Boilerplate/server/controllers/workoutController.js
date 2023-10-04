import axios from 'axios';
import { Workout } from '../model/workout.js';

const FITBIT_API_URL = 'https://api.fitbit.com/2.0';

// Fitbit API credentials
const FITBIT_CLIENT_ID = 'your-fitbit-client-id';
const FITBIT_CLIENT_SECRET = 'your-fitbit-client-secret';
const FITBIT_ACCESS_TOKEN = 'your-fitbit-access-token'; // You'll get this after the user authenticates

const getFitbitData = async (path, accessToken) => {
  const url = `${FITBIT_API_URL}${path}`;
  const headers = {
    Authorization: `Bearer ${accessToken}`,
  };

  try {
    const response = await axios.get(url, { headers });
    return response.data;
  } catch (error) {
    console.error('Error fetching Fitbit data:', error);
    throw error;
  }
};

const getWorkouts = async (req, res) => {
  try {
    // Assuming you have Fitbit access token for the user
    const accessToken = 'user-fitbit-access-token';

    /// Here we can fetch workouts from Fitbit API
    const fitbitWorkouts = await getFitbitData('/activities/list.json', accessToken);

    ///  We can handle and transform Fitbit data as needed
    
    res.json({ fitbitWorkouts });
  } catch (error) {
    console.error('Error fetching workouts:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const createWorkout = async (req, res) => {
  try {
    const { name, description, exercises } = req.body;

    /// Here is where we can  save a custom workout in your local database
    const newWorkout = new Workout({ name, description, exercises });
    await newWorkout.save();

    res.json({ message: 'Workout created successfully', workout: newWorkout });
  } catch (error) {
    console.error('Error creating workout:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export { getWorkouts, createWorkout };

//changes checking
