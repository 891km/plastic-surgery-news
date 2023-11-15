// $(document).ready(function(){
//   // 제이쿼리 - 변수
//     var zoom = $(".zoom");
// }

let img;
let pixelSize;

function preload() {
  img = loadImage('https://cdn.glitch.global/323cb2ef-d05a-41b9-a4a1-2927c51cefbf/MonaLisa.png?v=1700027376384');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  pixelSizeW = 20;
  pixelateImage(img, pixelSize); // Pixelate 함수 호출 (이미지, 픽셀 크기)
}

function pixelateImage(img, pixelSize) {
  img.loadPixels();
  for (let y = 0; y < img.height; y += pixelSize) {
    for (let x = 0; x < img.width; x += pixelSize) {
      let index = (x + y * img.width) * 4;
      let r = img.pixels[index];
      let g = img.pixels[index + 1];
      let b = img.pixels[index + 2];
      for (let i = 0; i < pixelSize; i++) {
        for (let j = 0; j < pixelSize; j++) {
          let pixelIndex = ((x + i) + (y + j) * img.width) * 4;
          img.pixels[pixelIndex] = r;
          img.pixels[pixelIndex + 1] = g;
          img.pixels[pixelIndex + 2] = b;
        }
      }
    }
  }
  img.updatePixels();
  image(img, 0, 0);
}

// let img;
// let pixelation_level = 10;

// function preload() {
//   img = loadImage("https://cdn.glitch.global/323cb2ef-d05a-41b9-a4a1-2927c51cefbf/MonaLisa.png?v=1700027376384");
// }

// function setup() {
//   createCanvas(window.width, window.height);
//   pixelDensity(1);
//   image(img, 0, 0, window.width, window.height);
//   loadPixels();
//   noStroke();
  
  
//   for (let x = 0; x < window.width; x += pixelation_level) {
//     for (let y = 0; y < window.height; y += pixelation_level) {
      
//       let i = (x + y * width) * 4;

//       let r = pixels[i + 0];
//       let g = pixels[i + 1];
//       let b = pixels[i + 2];
//       let a = pixels[i + 3];

//       fill(r, g, b, a);
//       square(x, y, pixelation_level);
//     }
//   }
// }