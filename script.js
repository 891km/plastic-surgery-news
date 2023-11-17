// $(document).ready(function(){
//   // 제이쿼리 - 변수
//     var zoom = $(".zoom");
// }

let img;
let pixelSizeW; // random
let pixelSizeH;
let pixelatedImg; // 픽셀 화된 이미지 변수

function preload() {
  // img = loadImage('https://cdn.glitch.global/323cb2ef-d05a-41b9-a4a1-2927c51cefbf/face.png?v=1700037781248');
  // img = loadImage('https://cdn.glitch.global/323cb2ef-d05a-41b9-a4a1-2927c51cefbf/MonaLisa_resize.png?v=1700030059878');
  img = loadImage('https://cdn.glitch.global/323cb2ef-d05a-41b9-a4a1-2927c51cefbf/MonaLisa_grey.png?v=1700041989788');
}

function setup() {
  frameRate(30);
  
  // let canvasWidth = windowWidth > img.width ? windowWidth : img.width;
  // let canvasHeight = canvasWidth * (img.height / img.width);
  let canvasHeight = windowHeight > img.height ? img.height : windowHeight;
  let canvasWidth = canvasHeight  * (img.width / img.height);
  
  
  createCanvas(canvasWidth, canvasHeight);

  targetImg = createImage(img.width, img.height); // 원본 이미지와 동일한 크기의 픽셀 화된 이미지 생성
  targetImg.loadPixels();
  
  pixelateImage(img, pixelSizeW, pixelSizeH, targetImg); // 픽셀 화된 이미지 생성
  targetImg.updatePixels();

  image(targetImg, 0, 0, width, height); // 픽셀 화된 이미지를 캔버스에 그림
}

function randomValue(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function pixelateImage(img, pixelSizeW, pixelSizeH, targetImg) {
  img.loadPixels();
  
  for (let y = 0; y < img.height; y += pixelSizeH) {

    pixelSizeW = randomValue(100, 120);
    pixelSizeH = randomValue(pixelSizeW, pixelSizeW * 2);
    
    for (let x = 0; x < img.width; x += pixelSizeW) {
      let index = (x + y * img.width) * 4;
      let r = img.pixels[index];
      let g = img.pixels[index + 1];
      let b = img.pixels[index + 2];

      for (let i = 0; i < pixelSizeW; i++) {
        for (let j = 0; j < pixelSizeH; j++) {
          let pixelIndex = ((x + i) + (y + j) * img.width) * 4;
          targetImg.pixels[pixelIndex] = r;
          targetImg.pixels[pixelIndex + 1] = g;
          targetImg.pixels[pixelIndex + 2] = b;
          targetImg.pixels[pixelIndex + 3] = 255; // 투명도 설정
        }
      }
    }
  }
}

function windowResized() {
  setup();
}