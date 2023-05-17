const button = document.querySelector("button");
const header = document.querySelector("header");
const mainContainer = header.firstElementChild;
const section = document.querySelector("section");
const iframe = document.querySelector("iframe");

const songs = [
  { title: "Time to Pretend", src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/878916046&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true" },
  { title: "O-o-oh Child", src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/99941211&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true" },
  { title: "Wish You Were Here", src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1363986139&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true" },
  { title: "Heroes", src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/17086720&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true" },
  { title: "I Put a Spell on You", src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/185657776&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true" },
  { title: "Call Me", src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/332881554&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true" },
  { title: "Paper Planes", src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/6466553&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true" },
  { title: "Jolene", src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/544636806&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true" },
  { title: "You Don't Own Me", src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/270823310&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true" },
  { title: "Fast Car", src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1498687795&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true" },
  { title: "Run the World (Girls)", src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/13964439&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true" },
  { title: "Superstition", src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1306623154&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true" },
];

button.addEventListener("click", () => {
  header.classList.toggle("show-me-clicked");
  mainContainer.classList.toggle("show-me-clicked");
  button.classList.toggle("show-me-clicked");

  songs.map((song, i) => {
    // div contain 2 spans for index & title
    const songDiv = document.createElement("div");
    // set 2 spans
    songDiv.innerHTML = `<div><span>#${i + 1}</span><span class="song-title">${
      song.title
    }</span></div>`;
    songDiv.classList.add("song-item");
    // add div to main section
    section.appendChild(songDiv);

    songDiv.addEventListener("click", () => {
      if (iframe.className == song.title) {
        iframe.className = "";
        iframe.src = "";
        // change title color to white for all title spans if music stopped
        document.querySelectorAll('.song-title').forEach((el)=>el.style.color = "#fff")
      } else {
        // change title color to white for all title spans before music run
        document.querySelectorAll('.song-title').forEach((el)=>el.style.color = "#fff")
        // run music iframe
        iframe.src = song.src;
        iframe.className = song.title;

        // change color for the song title
        const titleSpan = songDiv.querySelectorAll('span')[1];
        titleSpan.style.color = "#bb07fc"
      }
    });
  });

  section.classList.toggle("show-me-clicked");
});
