const box = document.querySelector("main");
const button = document.querySelector("button");
const randomWords = [
  "apple", "sunshine", "keyboard", "mountain", "river", "planet", "javascript", "rocket", "mirror", "galaxy", "energy", "forest", "diamond", "ocean", "camera"
];


button.addEventListener("click", () => {
  let a = Math.floor(Math.random() * 16);
  let b = Math.floor(Math.random() * 100);
  let c = Math.floor(Math.random() * 100);
  let d = Math.floor(Math.random() * 360);
  let e = Math.floor(Math.random() * 360);
  let f = Math.floor(Math.random() * 360);
  let g = Math.floor(Math.random() * 360);

button.style.background = `rgb(${e},${f},${g})`;
  let h3 = document.createElement("h1");
  h3.style.color = "white";
  h3.style.position = "absolute";
  h3.style.top = b + "%";
  h3.style.left = c + "%";
  h3.style.rotate = d + "deg";
  h3.innerHTML = randomWords[a];
  h3.style.color = `rgb(${e},${f},${g})`;
  setTimeout(() => {
    box.appendChild(h3);
  }, 800)
  setTimeout(() => {
    h3.style.display = "none";
  }, b + "000")
})
