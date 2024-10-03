import React from 'react';
import '../styles/teams.css';

const Teams = () => {
  const teams = [
    { name: 'Team A', description: 'A strong indoor soccer team' },
    { name: 'Team B', description: 'An experienced team of players' },
    { name: 'Team C', description: 'An experienced team of players' },
    // Add more teams here
  ];

  return (
    <div className="teams-container">
      <h2>Teams</h2>
      <ul className="team-list">
        {teams.map((team, index) => (
          <li key={index}>
            <span>{team.name}</span>
            <button className="btn-join">Join</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Teams;
