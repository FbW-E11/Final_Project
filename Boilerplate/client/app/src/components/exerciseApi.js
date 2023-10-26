// api.js

const exercises = [
    {
      time: {
        n: 20,
        // required: true,
      },
      equipment: 'dumbbells',
      muscle: 'triceps',
      fitness_level: 'beginner',
      fitness_goals: 'strength',
      image: 'https://wger.de/api/v2/exerciseimage',
      link: 'https://youtu.be/ztE3o4TFLeU?si=U714_iDmGchcMWzK'
    },
    {
      time: {
        n: 30,
        // required: true,
      },
      equipment: 'bars',
      muscle: 'biceps',
      fitness_level: 'intermediate',
      fitness_goals: 'weight-loss',
    },
    {
      time: {
        n: 45,
        // required: true,
      },
      equipment: 'barbell',
      muscle: 'quadriceps',
      fitness_level: 'advanced',
      fitness_goals: 'building muscles',
    },
    {
      time: {
        n: 60,
        // required: true,
      },
      equipment: 'kettlebell',
      muscle: 'abs',
      fitness_level: 'pro',
      fitness_goals: 'athletic',
    },
    {
      time: {
        n: 75,
        // required: true,
      },
      equipment: 'ropes',
      muscle: 'hamstring',
      fitness_level: 'expert',
      fitness_goals: 'custom',
    },
  ];
  
  export const getExercises = () => exercises;
  