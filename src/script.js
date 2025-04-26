let address = function(location, landmarks, time, tasks){
    return{
    location : location,
    landmarks : landmarks,
    time : time,
    tasks : tasks,
    description : function(){
        return `${this.location}, ${this.landmarks}, ${this.time}, ${this.tasks}`;
    }
}
}
const form = document.getElementById("places-form")
const showPlace= document.getElementById("show-places");
form.addEventListener('submit', function(event){
    event.preventDefault();
let location = document.getElementById("location").value
let landmarks = document.getElementById("landmarks").value
let time = document.getElementById("time").value
let tasks = document.getElementById("tasks").value
let newPlace = address(location,landmarks,time,tasks);

const placeDiv = document.createElement('div');
placeDiv.classList.add('place-item');
placeDiv.innerHTML = `
    <h3>${newPlace.location}</h3>
    <p><strong>Landmarks:</strong> ${newPlace.landmarks}</p>
    <p><strong>Time:</strong> ${newPlace.time}</p>
    <p><strong>Tasks:</strong> ${newPlace.tasks}</p>
`;
showPlace.appendChild(placeDiv);
})
