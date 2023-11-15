let img;
let pixelation_level = 10;

function preload() {
  img = loadImage("https://cdn.glitch.global/323cb2ef-d05a-41b9-a4a1-2927c51cefbf/MonaLisa.png?v=1700027376384");
}

function setup() {
  createCanvas(300, 300);
  pixelDensity(1);
  image(img, 0, 0, width, height);
  loadPixels();
  noStroke();
  
  
  for (let x = 0; x < width; x += pixelation_level) {
    for (let y = 0; y < height; y += pixelation_level) {
      
      let i = (x + y * width) * 4;

      let r = pixels[i + 0];
      let g = pixels[i + 1];
      let b = pixels[i + 2];
      let a = pixels[i + 3];

      fill(r, g, b, a);
      square(x, y, pixelation_level);
    }
  }
}