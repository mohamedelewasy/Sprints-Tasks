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
    const songDiv = document.createElement("div");
    songDiv.innerHTML = `<div><span>#${i + 1}</span><span>${
      song.title
    }</span></div>`;
    songDiv.classList.add("song-item");
    section.appendChild(songDiv);

    songDiv.addEventListener("click", () => {
      if (iframe.className == song.title) {
        iframe.className = "";
        iframe.src = "";
      } else {
        iframe.src = song.src;
        iframe.className = song.title;
      }
    });
  });

  section.classList.toggle("show-me-clicked");
});
