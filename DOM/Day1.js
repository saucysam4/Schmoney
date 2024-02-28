// // Ex 1
//   // Retrieve the div with id "container"
//   const containerDiv = document.getElementById('container');

//   // Log the div to the console
//   console.log(containerDiv);













// // Daily Challenge
const planets = [

    { name: "Mercury", color: "#999999" },
    { name: "Venus", color: "#ffeecc"},
    { name: "Earth", color: "#66ccff"},
    { name: "Mars", color: "#ff3300"},
    { name: "Jupiter", color: "#ffcc66"},
    { name: "Saturn", color: "#ffcc00"},
    { name: "Uranus", color: "#66ffff"},
    { name: "Neptune", color: "#3366ff"}

    
]

document.addEventListener("DOMContentLoaded",function() 
{
    const listPlanets = document.querySelector(".list-Planets");

    function createPlanetDiv(planet){
        const planetDiv = document.createElement("div");
        planetDiv.className = "planet";
        planetDiv.style.backgroundColor = planet.color;
        planetDiv.textContent = planet.name;

        return planetDiv;
    }

    planets.forEach(planet => {
        const planetDiv = createPlanetDiv(planet);
        listPlanets.appendChild(planetDiv);
    })


})