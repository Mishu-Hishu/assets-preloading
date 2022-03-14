var p = document.querySelector('.loading-text');
var bar = document.querySelector('.loading-bar');
var assets = [
	{ type: 'img', name: 'miniSakura', url: 'data/images/1.png' },
	{ type: 'img', name: 'name2', url: 'data/images/2.jpg' },
	{ type: 'img', name: 'name3', url: 'data/images/3.png' },
	{ type: 'img', name: 'name4', url: 'data/images/4.jpg' },
	{ type: 'img', name: 'name5', url: 'data/images/5.jpg' },
	{ type: 'img', name: 'name6', url: 'data/images/6.jpg' },
	{ type: 'img', name: 'name7', url: 'data/images/7.jpg' },
	{ type: 'img', name: 'name8', url: 'data/images/8.jpg' },
	{ type: 'img', name: 'name9', url: 'data/images/9.jpg' },
	{ type: 'img', name: 'name10', url: 'data/images/10.jpg' },
	{ type: 'img', name: 'name11', url: 'data/images/11.jpg' },
	{ type: 'img', name: 'name12', url: 'data/images/12.jpg' },
	{ type: 'img', name: 'name13', url: 'data/images/13.jpg' },
	{ type: 'audio', name: 'name1', url: 'data/audio/1.mp3', volume: 0.3 },
	{ type: 'audio', name: 'name2', url: 'data/audio/2.mp3', volume: 0.2 },
	{ type: 'audio', name: 'name3', url: 'data/audio/3.mp3', volume: 0.3 },
];

function preload(assets) {
	//create image and audio objects
	var img = new Image();
	var aud = new Audio();
	
	//keeps track of pregression
	var i = 0;

	//add listeners to the objects
	img.addEventListener("load", loadAsset);
	aud.addEventListener("canplaythrough", loadAsset);
	
	//load first asset
	loadAsset();

	function loadAsset() {
		//when all assets are loaded
		if(i >= assets.length) {
			p.textContent = "100%/100%";
			bar.style.width = '100%';
			addElementsToPage();
			return;
		}

		//name the asset for convinience
		var asset = assets[i]

		//show progress on screen (this will not not be part of the final function)
		p.textContent = Math.floor(i/(assets.length)*100) +"%" + "/100%";
		bar.style.width = Math.floor(i/(assets.length)*100) + '%';
		
		//increment i as we're done with it for the remainder of this function run
		i++;

		//differentiate between the loading of different resources
		if(asset.type === 'img') {
			img.src = asset.url
		} else if(asset.type === 'audio') {
			aud.src = asset.url
		}
	}
}

function addElementsToPage() {
	var element;
	var j;
	for(j = 0; j < assets.length; j++) {
		var asset = assets[j];

		if(asset.type === 'img') {
			element = document.createElement("IMG");
			element.src = asset.url;
			document.body.appendChild(element);	
		}
		
		if(asset.type === 'audio') {
			element = document.createElement("AUDIO");
			element.src = asset.url;
			document.body.appendChild(element);	
		}
	}
}

preload(assets);