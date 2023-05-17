const button = document.querySelector('button');
const header = document.querySelector('header');
const mainContainer = header.firstElementChild;
const section = document.querySelector('section')

const songs = [
  "Time to Pretend",
  "O-o-oh Child",
  "Wish You Were Here",
  "Heroes",
  "I Put a Spell on You",
  "Call Me",
  "Paper Planes",
  "Jolene",
  "You Don't Own Me",
  "Fast Car",
  "Run the World (Girls)",
  "Superstition"
  ];

button.addEventListener('click', ()=>{
  header.classList.toggle('show-me-clicked')
  mainContainer.classList.toggle('show-me-clicked')
  button.classList.toggle('show-me-clicked')

  songs.map((song, i) => {
    const songDiv = document.createElement('div');
    songDiv.innerHTML = `<div><span>#${i+1}</span><span>${song}</span></div>`
    songDiv.classList.add('song-item')
    section.appendChild(songDiv)
  })

  section.classList.toggle('show-me-clicked')
})