function colorgenerator() {
  let red = Math.round(Math.random() * 255);
  let green = Math.round(Math.random() * 255);
  let blue = Math.round(Math.random() * 255);
  let randomcolor = `rgb(${red}, ${green}, ${blue})`;
  return randomcolor;
}

//keygenerator
let incrkey = 1;
function keygenerator() {
  return incrkey += 1;
}

export { colorgenerator, keygenerator };