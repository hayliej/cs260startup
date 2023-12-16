import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

export function Login({userName}) {
    const [uName, setUName] = useState(userName);
    const navigate = useNavigate();
    const loggedIn = (
        <div id="playControls">
          <div id="playerName"></div>
          <button type="button" className="btn btn-primary" onClick={play}>Play</button>
          <button type="button" className="btn btn-secondary" onClick={logout}>Logout</button>
        </div>
      )
    const loggedOut = (
        <div id="loginControls">
        <div className="input-group mb-3">
          <span className="input-group-text">@</span>
          <input className="form-control" type="text" id="userName" placeholder="your@email.com" text={uName}>
            </input>
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text">🔒</span>
          <input className="form-control" type="password" id="userPassword" placeholder="password" />
        </div>
        <button type="button" className="btn btn-primary" onClick={loginUser}>Login</button>
        <button type="button" className="btn btn-primary" onClick={createUser}>Create</button>
      </div>
      )

    function authorized(){
        console.log("running")
        if (uName){
            return loggedIn;
        } else {
            return loggedOut;
        }
    }
    const [youIn, setYouIn] = useState(authorized);

      async function loginUser() {
        loginOrCreate(`/api/auth/login`);
      }
      
      async function createUser() {
        loginOrCreate(`/api/auth/create`);
      }
      
      async function loginOrCreate(endpoint) {
        const userName = document.querySelector('#userName')?.value;
        const password = document.querySelector('#userPassword')?.value;
        const response = await fetch(endpoint, {
          method: 'post',
          body: JSON.stringify({ email: userName, password: password }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        });
      
        if (response.ok) {
          localStorage.setItem('userName', userName);
          window.location.href = 'play.html';
        } else {
          const body = await response.json();
          const modalEl = document.querySelector('#msgModal');
          modalEl.querySelector('.modal-body').textContent = `⚠ Error: ${body.msg}`;
          const msgModal = new bootstrap.Modal(modalEl, {});
          msgModal.show();
        }
      }
      
      function play() {
        window.location.href = 'play.html';
      }
      
      function logout() {
        localStorage.removeItem('userName');
        setUName(null);
        setYouIn(loggedOut);
        fetch(`/api/auth/logout`, {
          method: 'delete',
        }).then(() => navigate('/'));
      }
      
      async function getUser(email) {
        let scores = [];
        // See if we have a user with the given email.
        const response = await fetch(`/api/user/${email}`);
        if (response.status === 200) {
          return response.json();
        }
      
        return null;
      }
      
      function setDisplay(controlId, display) {
        const playControlEl = document.getElementById(controlId);
        console.log(controlId);
        if (playControlEl) {
          playControlEl.style.display = display;
        }
      }
    return (
    <main className='container-fluid bg-secondary text-center'>
      <p>Login to choose</p>
      {/* {!userName && (
        <div id="loginControls">
        <div className="input-group mb-3">
          <span className="input-group-text">@</span>
          <input className="form-control" type="text" id="userName" placeholder="your@email.com" text={uName}>
            </input>
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text">🔒</span>
          <input className="form-control" type="password" id="userPassword" placeholder="password" />
        </div>
        <button type="button" className="btn btn-primary" onClick={loginUser}>Login</button>
        <button type="button" className="btn btn-primary" onClick={createUser}>Create</button>
      </div>
      )} */}

    {/* {userName && (
      <div id="playControls">
        <div id="playerName"></div>
        <button type="button" className="btn btn-primary" onClick={play}>Play</button>
        <button type="button" className="btn btn-secondary" onClick={logout}>Logout</button>
      </div>
    )} */}
    <div>{youIn}</div>
      <div className="modal fade" id="msgModal" tabIndex="-1">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content text-dark">
      <div className="modal-body">error message here</div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>


    </main>
  );
}