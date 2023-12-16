import React from 'react';

// import { Players } from './players';
// import { SimonGame } from './simonGame';

export function Play(props) {
  return (
    <main>
      <div>
      <p>What are you trying to decide? </p>
      <form method="get" action="javascript:submit()">
        <input type="text" id="count" placeholder="enter decision topic" style="color:black" />
        <button onclick="submit()">Submit</button>
      </form>
      <div id="questionDisplay"></div>
      </div>


      <br />

      <div>
      <form method="get" action="option2">
        <label for="count">option 1:</label>
        <input type="text" id="opt1" placeholder="enter option" style="color:black" />
      </form>
      </div>
      <div>
      <form method="get" action="option3">
        <label for="count">option 2:</label>
        <input type="text" id="opt2" placeholder="enter option" style="color:black" />
      </form>
      </div>
      <div>
        <label for="count">option 3:</label>
        <input type="text" id="opt3" placeholder="enter option" style="color:black" />
      </div>
      <div>
        <label for="count">option 4:</label>
        <input type="text" id="opt4" placeholder="enter option" style="color:black" />
      </div>
      <div>
        <label for="count">option 5:</label>
        <input type="text" id="opt5" placeholder="enter option" style="color:black" />
      </div>

      <br />

      <div>
        <button> Reset</button> <button> <a href="process.html">Start</a></button>
      </div>

      <br />

    </main>
  );
}