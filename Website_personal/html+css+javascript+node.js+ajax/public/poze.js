const Poze = [
  { nume: "1", src: "images/poza1.JPG" },
  { nume: "2", src: "images/poza2.JPG" },
  { nume: "3", src: "images/poza3.JPG" },
  { nume: "4", src: "images/poza4.JPG" }
];

let index = 0;
const inaltime = window.innerHeight;
const latime = window.innerWidth;
let Procentaj_Ocupat = 0;
let Marime_Ocupata = 0;

window.onload = function() {
  const Cerinta = document.createElement("div");
  const Instructiuni = document.createElement("div");
  Cerinta.style.fontSize = "30px";
  Cerinta.style.color = "white";
  Cerinta.style.textAlign = "center";
  Cerinta.textContent = "Reuseste sa umpli 80% din pagina pentru a castiga!";
  Instructiuni.style.fontSize = "20px";
  Instructiuni.style.color = "white";
  Instructiuni.style.textAlign = "center";
  Instructiuni.textContent = "Apasa a/b/c/d pe tastatura pentru a vedea pozele si da click pe imagine daca vrei sa creezi una exact la fel";

  const Text_Procentaj = document.createElement("div");
  Text_Procentaj.setAttribute("id", "txtp");
  Text_Procentaj.style.color = "white";
  Text_Procentaj.style.fontSize = "50px";
  Text_Procentaj.style.textAlign = "center";
  Text_Procentaj.textContent = Procentaj_Ocupat + "%";
  document.body.style.overflow = "hidden";
  document.body.appendChild(Cerinta);
  document.body.appendChild(Instructiuni);
  document.body.appendChild(Text_Procentaj);
  window.addEventListener("keyup", apas);
}

function apas(event) {
  let bila = document.createElement("div");
  bila.style.display = "inline-block";
  bila.style.position = "absolute";
  let imagine = document.createElement("img");

  let y_bila = Math.floor(Math.random() * inaltime) + 40;
  let x_bila = Math.floor(Math.random() * latime);
  bila.style.left = x_bila + "px";
  bila.style.top = y_bila + "px";
  let lat = (Math.random() * 150) + 20;
  let inal = (Math.random() * 150) + 20;
  bila.style.width = lat + "px";
  bila.style.height = inal + "px";
  Marime_Ocupata = lat * inal;
  let Valoare = (Marime_Ocupata / (inaltime * latime)) * 100;
  let ans = Math.round(Valoare * 10) / 10;
  Procentaj_Ocupat += ans;
  let Text_Proc = document.getElementById("txtp");
  Text_Proc.textContent = Procentaj_Ocupat + "%";
  if (Procentaj_Ocupat > 80) {
    alert("Felicitari te misti repede!");
    location.reload();
  }
  switch (event.key) {
    case "a":
      bila.style.borderColor = "red";
      bila.style.borderWidth = "5px";
      index = 0;
      break;
    case "b":
      bila.style.borderColor = "green";
      bila.style.borderWidth = "5px";
      index = 1;
      break;
    case "c":
      bila.style.borderColor = "yellow";
      bila.style.borderWidth = "5px";
      index = 2;
      break;
    case "d":
      bila.style.borderColor = "pink";
      bila.style.borderWidth = "5px";
      index = 3;
      break;
    default: return;
  }
  imagine.setAttribute("src", Poze[index].src);
  imagine.style.width = "100%";
  imagine.style.height = "100%";
  bila.appendChild(imagine);
  document.body.appendChild(bila);
  bila.addEventListener("click", clickez);
  let opacity = 1;
  let intervalId = setInterval(() => {
    opacity -= 0.01;
    bila.style.opacity = opacity;
    if (opacity <= 0) {
      let Valoare = (Marime_Ocupata / (inaltime * latime)) * 100;
      let ans = Math.round(Valoare * 10) / 10;
      Procentaj_Ocupat -= ans;
      if (Procentaj_Ocupat < 0)
        Procentaj_Ocupat = 0;
      let Text_Proc = document.getElementById("txtp");
      Text_Proc.textContent = Procentaj_Ocupat + "%";
      clearInterval(intervalId);
      document.body.removeChild(bila);
    }
  }, 50);
}

function clickez(event) {
  let bila = document.createElement("div");
  bila.style.display = "inline-block";
  bila.style.position = "absolute";

  let y_bila = Math.floor(Math.random() * inaltime) + 40;
  let x_bila = Math.floor(Math.random() * latime);
  bila.style.left = x_bila + "px";
  bila.style.top = y_bila + "px";

  let marime = event.target.offsetWidth;
  bila.style.width = marime + "px";
  bila.style.height = marime + "px";
  bila.style.borderColor = getComputedStyle(event.target).borderColor;
  bila.style.borderWidth = "5px";
  let imagine = document.createElement("img");
  imagine.setAttribute("src", Poze[index].src);
  imagine.style.width = "100%";
  imagine.style.height = "100%";
  bila.appendChild(imagine);
  document.body.appendChild(bila);
  let Valoare = (Marime_Ocupata / (inaltime * latime)) * 100;
  let ans = Math.round(Valoare * 10) / 10;
  Procentaj_Ocupat += ans;
  let Text_Proc = document.getElementById("txtp");
  Text_Proc.textContent = Procentaj_Ocupat + "%";
  if (Procentaj_Ocupat > 80) {
    alert("Felicitari te misti repede!");
    location.reload();
  }
  bila.addEventListener("click", clickez);
  let opacity = 1;
  let intervalId = setInterval(() => {
    opacity -= 0.01;
    bila.style.opacity = opacity;
    if (opacity <= 0) {
      let Valoare = (Marime_Ocupata / (inaltime * latime)) * 100;
      let ans = Math.round(Valoare * 10) / 10;
      Procentaj_Ocupat -= ans;
      if (Procentaj_Ocupat < 0)
        Procentaj_Ocupat = 0;
      let Text_Proc = document.getElementById("txtp");
      Text_Proc.textContent = Procentaj_Ocupat + "%";
      if (Procentaj_Ocupat > 50) {
        alert("Felicitari te misti repede!");
        location.reload();
      }
      clearInterval(intervalId);
      document.body.removeChild(bila);
    }
  }, 50);
  event.stopPropagation();
}
