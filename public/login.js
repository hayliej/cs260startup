function login() {
    const nameEl = document.getElementById("namthing");
    localStorage.setItem("userName", nameEl.value);
    console.log(nameEl);
    window.location.href = "play.html";
  }

  function displayName() {
    const nameEl = document.querySelector("#name");
    const storedName = localStorage.getItem("userName");
    if (storedName) {
      nameEl.textContent = storedName; //don't think this is working, not sure why yet
    } else {
      nameEl.textContent = "Login";
    }
  }
  window.onload = displayName;