import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Indoor Soccer</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" href="#home-section">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact-section">Contact</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#schedule-section">Schedule</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#teams-section">Teams</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
