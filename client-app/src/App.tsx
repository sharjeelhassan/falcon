import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import { List } from 'semantic-ui-react';

const App = () => {

  const [activities, setActivities] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/activities").then(response => {
      console.log(response);
      setActivities(response.data);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <List>
          {activities.map((activity: any) => (
            <List.Item key={activity.id}>
              {activity.title}
            </List.Item>
          ))}
        </List>
      </header>
    </div>
  );
}

export default App;
