let identifyButton = document.getElementById("identify");
let myHeading = document.querySelector("h1");

myHeading.textContent = `Welcome to Jozurf's DS 4200 website, Annonymous`;

function setUserName() {
    let myName = prompt("state thy name");
    if (myName === null) {myName = "Annonymous"}
    myHeading.textContent = `Welcome to Jozurf's DS 4200 website, ${myName}`;
}

identifyButton.onclick = () => {
    setUserName();
};


let showTeamButton = document.getElementById("answer");

showTeamButton.onclick = () => {
    showFavTeam();
};

function showFavTeam() {
    alert("THE CELTICS!")
}
  
  
  