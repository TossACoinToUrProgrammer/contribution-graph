import React, { useEffect, useState } from 'react';
import './App.css';
import ContributionGraph from './components/contribution-graph';
import { fetchCalendarData } from './utils/requests';

function App() {
  const [calendarData, setCalendarData] = useState<{ [k: string]: number }>()
  const [error, setError] = useState<string | undefined>()

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchCalendarData()
      if (data) {
        setCalendarData(data)
      } else {
        setError("Something went wrong while fetching data")
      }
    }
    fetchData()
  }, [])

  return (
    <div className="App">
      {calendarData && <ContributionGraph data={calendarData} />}
      {error && <div>{error}</div>}
    </div>
  );
}

export default App;
