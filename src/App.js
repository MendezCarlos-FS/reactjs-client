import { useEffect, useState } from 'react';
import './App.css';
import TrainerForm from './components/TrainerForm';
import TrainersDisplay from './components/TrainersDisplay';
import { getTrainers, deleteTrainer, createTrainer } from './services/trainerService';

function App() {
  const [trainers, setTrainers] = useState([]);

  useEffect(() => {
    getTrainers().then(resTrainers => {
      setTrainers(resTrainers);
    });
  }, []);

  function dltTrainer(name) {
    deleteTrainer(name).then(success => {
      if (success) {  
        getTrainers().then(resTrainers => {
          setTrainers(resTrainers);
        });
      }
    });
  }

  function saveTrainer(trainer) {
    createTrainer(trainer).then(success => {
      if (success) {
        getTrainers().then(resTrainers => {
          setTrainers(resTrainers);
        })
      }
    })
  }

  return (
    <main className="App">
      <TrainerForm saveTrainer={saveTrainer}/>
      <TrainersDisplay trainers={trainers} dltTrainer={dltTrainer}/>
    </main>
  );
}

export default App;
