const mondayTasks = [
  {
    name: 'Daily standup',
    duration: 30, // ! specified in minutes
  },
  {
    name: 'Feature discussion',
    duration: 120,
  },
  {
    name: 'Development time',
    duration: 240,
  },
  {
    name: 'Talk to different members from the product team',
    duration: 60,
  },
];

const hourlyRate = 25; // ! Specified in €


function computeEarnings(tasks, rate) {
  
  const totalEarnings = tasks
                        .map(tasks => (tasks.duration * rate) /60)
                        .reduce((a, b) => a + b)

  return console.log(`€${totalEarnings.toFixed(2)}`);
}

computeEarnings(mondayTasks, hourlyRate);


// ! Tested for another array !
const tuesdayTasks = [
  {
    name: 'Daily standup',
    duration: 20, 
  },
  {
    name: 'Feature discussion',
    duration: 150,
  },
  {
    name: 'Development time',
    duration: 120,
  },
  {
    name: 'Talk to different members from the product team',
    duration: 45,
  },
];

computeEarnings(tuesdayTasks, hourlyRate);