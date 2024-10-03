import React, { useState } from 'react';
import '../styles/schedule.css';

const Schedule = () => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Game scheduled for:', date, time);
    // Handle game scheduling logic here
  };

  return (
    <div className="schedule-container">
      <h2>Schedule a Game</h2>
      <form className="schedule-form" onSubmit={handleSubmit}>
        <label htmlFor="date">Select Date:</label>
        <input 
          type="date" 
          id="date" 
          value={date} 
          onChange={(e) => setDate(e.target.value)} 
          required 
        />

        <label htmlFor="time">Select Time:</label>
        <input 
          type="time" 
          id="time" 
          value={time} 
          onChange={(e) => setTime(e.target.value)} 
          required 
        />

        <button type="submit" className="btn-schedule">Confirm</button>
      </form>
    </div>
  );
};

export default Schedule;
