function showColor() {
	const box = document.getElementById('box');
	// sorteia a cor
  let min = 1;
  let max = 255;
  let color = Math.floor(Math.random() * (max - min + 1)) + min;
	
	// mudar a cor de fundo
  box.style.backgroundColor = `rgb(${color}, ${color}, ${color})`;
}

showColor();

setInterval(function () {
	showColor();
}, 1000);
