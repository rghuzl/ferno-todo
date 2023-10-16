import React from "react";

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          ToDo
        </a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{border:"2px solid blue"}}>

          <button
              className="btn btn-outline-error my-2 my-sm-0"
              type="button"
            >
              Register
            </button>

            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="button"
              style={{float:"right"}}
            >
              Login
            </button>
         
        </div>
      </nav>
    </>
  );
}
