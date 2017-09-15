var html = '';
var rgbColor;

function randomColor() {
	return Math.floor(Math.random() * 256);
}

for (i = 0; i <= 200; i += 1) {
	rgbColor = 'rgb(' + randomColor() + ',' + randomColor() + ',' + randomColor() + ')';
	html += '<div style="background-color:' + rgbColor + '"></div>';	
}

document.write(html);