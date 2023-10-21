function showColor() {
	const box = document.getElementById('box');
	// sorteia a cor
  let min = 1;
  let max = 255;
  let red = Math.floor(Math.random() * (max - min + 1)) + min;
	let gren = Math.floor(Math.random() * (max - min + 1)) + min;
	let blue = Math.floor(Math.random() * (max - min + 1)) + min;
	// mudar a cor de fundo
  box.style.backgroundColor = `rgb(${red}, ${gren}, ${blue})`;
}

showColor();

setInterval(function () {
	showColor();
}, 1000);
