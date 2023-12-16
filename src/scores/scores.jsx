import React from 'react';

// import './scores.css';

export function Scores() {
    // function win() {
    //     res = document.getElementById("result");
    //     w = localStorage.getItem("winner");
    //     res.textContent = "Your latest result is: " + w;
    
    //     table = document.getElementById("tbody");
    //     let results = getResults()
    //     console.log(results[0])
    // }
    
    // async function getResults() {
    //   // let results = [];
    //     const response = await fetch('/api/resultsList', {
    //     method: 'GET'});
    //   results = await response.json()
    //   console.log(results);
    //   // Save the scores in case we go offline in the future
    //   //localStorage.setItem('results', JSON.stringify(results));
    
    //   for (let i = 0; i<results.length; i++){
    //     row = table.insertRow(0);
    //     cell1 = row.insertCell(0);
    //     cell2 = row.insertCell(1);
    //     cell3 = row.insertCell(2);
    
    //     cell1.innerHTML = results[i].question;
    //     cell2.innerHTML = results[i].winner;
    //     cell3.innerHTML = results[i].name;
    // }
    // }
    
    return (
<main>
      <h3 id = "result"></h3>
      <table id="table-data">
        <thead>
          <tr>
            <th>Most Recent Questions</th>
            <th>Result</th>
            <th>User</th>
          </tr>
        </thead>
        <tbody id = "tbody">
            {win}
        </tbody>
      </table>
    </main>
    );
}