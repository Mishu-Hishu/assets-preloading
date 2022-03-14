var p = document.createElement("P");
p.innerHTML = "0/100";
document.body.appendChild(p);
var imgDone = 0;
var images = ['data/images/1.png','data/images/2.jpg','data/images/3.png','data/images/4.jpg',
			  'data/images/5.jpg','data/images/6.jpg','data/images/7.jpg','data/images/8.jpg',
			  'data/images/9.jpg','data/images/10.jpg','data/images/11.jpg',
			  'data/images/12.jpg','data/images/13.jpg'];
var audio = ['data/audio/1.mp3','data/audio/2.mp3','data/audio/3.mp3'];
var img = new Image();
var aud = new Audio();
var i = 0;
img.src = images[i];
img.addEventListener("load", loadImage);
aud.addEventListener("canplaythrough", loadAudio);

if(i === images.length) {
	i = 0;
	aud.src = audio[i];
}

function loadImage() {
	i++;
	if(i < images.length) {
		img.src = images[i];
		p.innerHTML = i/(images.length + audio.length) + "/100";
	}
	else {
		p.innerHTML = i/(images.length + audio.length) + "00/100";
	}
}

function loadAudio() {
	i++;
	if(i < audio.length) {
		aud.src = audio[i];
		p.innerHTML = i/(images.length + audio.length) + "/100";
	}
	else {
		p.innerHTML = i/(images.length + audio.length) + "00/100";
		var element;
		var j;
		for(j = 0; j < images.length; j++) {
			element = document.createElement("IMG");
			element.src = images[j];
			document.body.appendChild(element);
		}
		for(j = 0; j < audio.length; j++) {
			element = document.createElement("AUDIO");
			element.src = audio[j];
			document.body.appendChild(element);
		}
	}
}