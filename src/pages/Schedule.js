import React, { useState } from 'react';
import '../styles/schedule.css';

const Schedule = () => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Game scheduled for:', date, time);
  };

  return (
    <div className="schedule-container"> {/* Bootstrap container */}
      <div className="row justify-content-center"> {/* Center content */}
        <div className="col-md-8"> {/* Center the form with a max width */}
          <h2>Schedule a Game</h2>
          <form className="schedule-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="date">Select Date:</label>
              <input 
                type="date" 
                id="date" 
                value={date} 
                className="form-control" 
                onChange={(e) => setDate(e.target.value)} 
                required 
              />
            </div>

            <div className="form-group">
              <label htmlFor="time">Select Time:</label>
              <input 
                type="time" 
                id="time" 
                value={time} 
                className="form-control" 
                onChange={(e) => setTime(e.target.value)} 
                required 
              />
            </div>

            <button type="submit" className="btn-primary btn-schedule">Confirm</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
