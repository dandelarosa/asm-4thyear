// List these in alphabetical order
var splashScreenImage = document.createElement("img");

var loadingScreenImagesToLoad = [
  { 
    imgPointer: splashScreenImage, 
    path: 'assets/splash_screen.png'
  },
];
var loadingScreenImagesLoaded = 0;

function onLoadingScreenImageLoad() {
  loadingScreenImagesLoaded++;
}

function loadLoadingScreenImage(imgPointer, path) {
  imgPointer.onload = onLoadingScreenImageLoad;
  imgPointer.src = path;
}

function loadLoadingScreenImages() {
  for (var i = 0; i < loadingScreenImagesToLoad.length; i++) {
    imageToLoad = loadingScreenImagesToLoad[i];
    loadLoadingScreenImage(imageToLoad.imgPointer, imageToLoad.path);
  }
}
