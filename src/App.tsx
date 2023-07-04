import React, { useEffect, useState } from 'react';
import './App.css';
import ContributionGraph from './components/contribution-graph';
import axios from 'axios';

const url = 'https://dpg.gg/test/calendar.json'

function App() {
  const [calendarData, setCalendarData] = useState<any>()

  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get(url)
      setCalendarData(data.data)
    }
    fetchData()
  }, [])

  return (
    <div className="App">
      {calendarData && <ContributionGraph data={calendarData} />}
    </div>
  );
}

export default App;
