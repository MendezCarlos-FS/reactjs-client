import { useEffect, useState } from 'react';
import './App.css';
import TrainerForm from './components/TrainerForm';
import TrainersDisplay from './components/TrainersDisplay';
import { getTrainers, deleteTrainer, createTrainer } from './services/trainerService';
import Notification from './components/Notification';

function App() {
  const [trainers, setTrainers] = useState([]);
  const [notification, setNotification] = useState("");

  useEffect(() => {
    getTrainers().then(data => {
      setTrainers(data.trainers);
    });
  }, []);

  function dltTrainer(name) {
    deleteTrainer(name).then(data => {
      showNotification(data.message);
      if (data.success) {  
        getTrainers().then(getData => {
          setTrainers(getData.trainers);
        });
      }
    }).catch(err => {
      if (err.response) {
          if (err.response.data) {
              if (err.response.data.message) {
                  console.error(err.response.data.message);
                  showNotification(err.response.data.message);
              }
              else {
                  console.error(err.response.data);
                  showNotification(err.response.data);
              }
          }
          else {
              console.error(err.response);
              showNotification(err.response);
            }
      }
      else {
          console.error(err.message);
          showNotification(err.message);
      }
    });
  }

  function saveTrainer(trainer) {
    createTrainer(trainer).then(data => {
      showNotification(data.message);
      if (data.success) {
        getTrainers().then(getData => {
          setTrainers(getData.trainers);
        })
      }
    }).catch(err => {
      if (err.response) {
          if (err.response.data) {
              if (err.response.data.message) {
                  console.error(err.response.data.message);
                  showNotification(err.response.data.message);
              }
              else {
                  console.error(err.response.data);
                  showNotification(err.response.data);
              }
          }
          else {
              console.error(err.response);
              showNotification(err.response);
            }
      }
      else {
          console.error(err.message);
          showNotification(err.message);
      }
    });
  }

  function showNotification(notification) {
    setNotification(notification);
    setTimeout(() => setNotification(""), 5000);
  }

  return (
    <main className="App">
      <Notification message={notification}/>
      <TrainerForm saveTrainer={saveTrainer}/>
      <TrainersDisplay trainers={trainers} dltTrainer={dltTrainer}/>
    </main>
  );
}

export default App;
