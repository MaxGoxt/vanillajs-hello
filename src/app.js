import "./style.css";

let excusas = () => {
  let who = ["El perro", "Mi abuela", "Su tortuga", "Mi pájaro"];
  let action = ["comió", "orinó", "aplastó", "rompió"];
  let what = ["mi tarea", "la llave", "el auto"];
  let when = [
    "antes de clase",
    "hace un momento",
    "cuando terminé",
    "durante mi almuerzo",
    "mientras yo estaba orando"
  ];

  let whoIndice = Math.floor(Math.random() * who.length);
  let actionIndice = Math.floor(Math.random() * action.length);
  let whatIndice = Math.floor(Math.random() * what.length);
  let whenIndice = Math.floor(Math.random() * when.length);

  return (
    who[whoIndice] +
    " " +
    action[actionIndice] +
    " " +
    what[whatIndice] +
    " " +
    when[whenIndice] +
    "."
  );
};

window.onload = () => {
  document.querySelector("#excuse").innerHTML = excusas();
};
