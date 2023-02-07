import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Rockets() {
  return (
    <div className="container-fluid my-4">
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <svg
              className="bd-placeholder-img img-fluid rounded-start"
              width="100%"
              height="262"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Placeholder: Image"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            >
              <title>Placeholder</title>
              <rect width="100%" height="100%" fill="#868e96" />
              <text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image</text>
            </svg>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Card Title</h5>
              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, id libero magni obcaecati quia reiciendis repellendus repudiandae unde! Earum, sapiente.</p>
              <button type="button" className="btn btn-primary my-5">Reserve Rocket</button>
            </div>
          </div>
        </div>
      </div>
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <svg
              className="bd-placeholder-img img-fluid rounded-start"
              width="100%"
              height="262"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Placeholder: Image"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            >
              <title>Placeholder</title>
              <rect width="100%" height="100%" fill="#868e96" />
              <text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image</text>
            </svg>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Card Title</h5>
              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, id libero magni obcaecati quia reiciendis repellendus repudiandae unde! Earum, sapiente.</p>
              <button type="button" className="btn btn-primary my-5">Reserve Rocket</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rockets;
