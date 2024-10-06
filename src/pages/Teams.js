import React, { useState } from "react";
import "../styles/teams.css";

const Teams = () => {
  const teams = [
    { name: "Team A", description: "A strong indoor soccer team" },
    { name: "Team B", description: "An experienced team of players" },
    { name: "Team C", description: "An upcoming team with great potential" },
  ];

  const [selectedTeam, setSelectedTeam] = useState(null);

  const handleJoinClick = (team) => {
    setSelectedTeam(team);
  };

  const handleCloseModal = () => {
    setSelectedTeam(null);
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
              data-bs-target="#teamModal"
              onClick={() => handleJoinClick(team)}
            >
              Join
            </button>
          </li>
        ))}
      </ul>

      {/* Modal */}
      {selectedTeam && (
        <div
          className="modal fade show"
          id="teamModal"
          tabIndex="-1"
          style={{ display: "block" }}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{selectedTeam.name}</h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  onClick={handleCloseModal}
                ></button>
              </div>
              <div className="modal-body">
                <p>{selectedTeam.description}</p>
                <p>Do you want to join this team?</p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-success"
                  data-bs-dismiss="modal"
                  onClick={handleCloseModal}
                >
                  Close
                </button>
                <button type="button" className="btn btn-success">
                  Join Team
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
