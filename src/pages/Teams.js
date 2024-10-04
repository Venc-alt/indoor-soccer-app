// import React from 'react';
// import '../styles/teams.css';

// const Teams = () => {
//   const teams = [
//     { name: 'Team A', description: 'A strong indoor soccer team' },
//     { name: 'Team B', description: 'An experienced team of players' },
//     { name: 'Team C', description: 'An experienced team of players' },
//     // Add more teams here
//   ];

//   return (
//     <div className="teams-container">
//       <h2>Teams</h2>
//       <ul className="team-list">
//         {teams.map((team, index) => (
//           <li key={index}>
//             <span>{team.name}</span>
//             <button className="btn-join">Join</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Teams;

import React, { useState } from 'react';
import '../styles/teams.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Teams = () => {
  const [selectedTeam, setSelectedTeam] = useState(null);

  const teams = [
    { name: 'Team A', description: 'A strong indoor soccer team' },
    { name: 'Team B', description: 'An experienced team of players' },
    { name: 'Team C', description: 'A fast-growing team of talented players' },
  ];

  const handleJoinClick = (team) => {
    setSelectedTeam(team);
  };

  const handleCloseModal = () => {
    setSelectedTeam(null); // Close modal
  };

  return (
    <div className="teams-container">
      <h2>Teams</h2>
      <ul className="team-list">
        {teams.map((team, index) => (
          <li key={index}>
            <span>{team.name}</span>
            <button
              className="btn-join"
              data-bs-toggle="modal"
              data-bs-target="#joinTeamModal"
              onClick={() => handleJoinClick(team)}
            >
              Join
            </button>
          </li>
        ))}
      </ul>

      {/* Bootstrap Modal */}
      {selectedTeam && (
        <div
          className="modal fade show"
          id="joinTeamModal"
          tabIndex="-1"
          aria-labelledby="joinTeamModalLabel"
          aria-hidden="true"
          style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="joinTeamModalLabel">
                  Join {selectedTeam.name}
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={handleCloseModal}
                ></button>
              </div>
              <div className="modal-body">
                <p>{selectedTeam.description}</p>
                <p>Would you like to join this team?</p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleCloseModal}
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Confirm Join
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Teams;
