var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');

btn = document.querySelector('button');
var overlay = document.querySelector('.overlay');

// var imagesArray = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];

/* Looping through images */

  for(var i=1; i<6; i++) {
    var xxx = 'images/pic' + i + '.jpg';
	var newImage = document.createElement('img');
  	newImage.setAttribute('src', xxx);
  	newImage.setAttribute('class', 'thumbnail');
  	thumbBar.appendChild(newImage);

  	newImage.addEventListener('click', setMainImage);
    
  	function setMainImage(src) {
        src = src.target.getAttribute('src');
        return displayedImage.setAttribute('src', src);
  	}

  }

/* Wiring up the Darken/Lighten button */



btn.addEventListener('click', changeOpacity);

function changeOpacity() {

var btnClass = btn.getAttribute('class');

	if(btnClass === 'dark') {
		btn.setAttribute('class', 'light');
		btn.innerHTML = "Lighten";
		overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
		
	}
	else{
		btn.setAttribute('class', 'dark');
		btn.innerHTML = "Darken";
		overlay.style.backgroundColor = 'rgba(0,0,0,0)';
		
	}
}

