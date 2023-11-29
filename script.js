let textData = '여인의발을성형수술유행하이힐에맞도록얼굴망치는성형수술얼굴골격성형수술미여성들유방성형수술열풍너무크게불려부작용성형수술성형수술을받고「엘비스프레슬리」와흡사한얼굴을지니게된모조가수1호「데니스와이즈」젊음을재생합니다베티여사수술뒤美에성형붐미용성형수술환자가부쩍늘어병원마다...한국병원후유증환자실태조사부작용많은성형수술佛남성들성형수술성행젊게보여취직하자미용수술성격도바꾼다남자들도코성형수술유행성형외과찾는환자들정신적인문제더많다(눈썹성형수술을받고있는환자)중·고년을위한건강관리성형수술코성형수술18%가심한후유증함기선박사팀10년동안조사결과치아교정·성형수술크게늘어졸업시즌성형수술만원성형수술번져간다여학생들은단체로⋯주부들은계로⋯성형수술"미장원가듯"성행성형수술해볼까日여성「동양미」성형수술붐예뻐지려다평생후회미용성형수술부작용많다여성6%가성형수술성형수술욕심이뒤탈만든다기형턱성형수술위험남성성형수술늘고있다성형수술불만주부자살어린이성형수술유행어린이의성형수술성형수술의패션화시대주걱턱치아교정성형수술함께해야성형수술찬반토론코미디세상만사〈성형수술〉「실리콘성형수술」부작용심각성형수술환자24%가성격상문제성형수술개성시대실리콘성형수술"심한부작용"여성각선미수술열풍성형외과때아닌호황청소년성형수술붐허영들뜬풍조한심중고생성형수술바람건강정보주름제거성형코뚫리고눈안감기는성형수술부작용,그충격실태고교생·대학생70%성형희망휴가다녀오더니예뻐졌네요여대생직장여성성형수술유행신세대멋내기"성형수술도옷사듯가볍게생각"여대생성형수술중숨져내시경수술로주름없앤다40-50대직장남성성형수술부쩍뇌사자연골로얼굴성형성공한국인30%"체중-몸매신경쓴다"성형수술하면누구나예뻐지나취업철대학생성형수술"붐"성형수술로각선미살리기종아리굵기최고7㎝줄여사라진유방,아랫배살로살린다성형수술괜찮다10대여성49%면접시험좋은인상이마확대성형수술보름달미인만들기비너스되는비용부위별수백만원미의첫조건은눈미혼여성성형수술의식조사결과성형수술도구조조정멋내기거품빠지고꼭필요한사람위주로미용성형수술양두병박사의미인만들기어디를,어떻게?실리콘수술단점해소고어텍스이용첨단코성형술아름다움위해몸고치는건전략10명중7명성형수술에긍정적최신의코성형수술과재수술다이어트-성형수술하지맙시다성형수술-털제거전문의책잇달아여성성형수술권장할만하다60.1%흐름성형수술빛과그림자맘에드는얼굴로살고싶다';
let pixelSize = 24;
let pixelInfo = [];

let adjustX;
let adjustY;
let canvasWidth;
let canvasHeight;

//let imgIndex = 0;
let img;
let imgs = [];
let imgURLs = [
  "https://cdn.glitch.global/1b5a1dda-71db-4347-8302-3a763a8029b3/AIFace_01.png?v=1701243663549",
  "https://cdn.glitch.global/1b5a1dda-71db-4347-8302-3a763a8029b3/AIFace_02.png?v=1701247036287"
];

function preload() {
  img0 = loadImage(imgURLs[0]);
  img1 = loadImage(imgURLs[1]);
  imgs = [img0, img1];
  
  img = imgs[0];
}

function setup() {
  canvasHeight = windowHeight;
  canvasWidth = canvasHeight * (img.width / img.height);
  createCanvas(canvasWidth, canvasHeight);

  changeImage(0);
  pixelToText();
}

function pixelToText() {
  document.body.innerHTML = ''; 
  let pageDiv = createDiv();
  pageDiv.id('page');
  
  let textIndex = 0;
  let adjustX = (windowWidth - canvasWidth) / 2; // 이미지의 시작 X 위치
  let adjustY = (windowHeight - canvasHeight) / 2; // 이미지의 시작 Y 위치
  for (let pixel of pixelInfo) {
      let textPixel = textData.charAt(textIndex % textData.length);
      if (pixel.brightness > 240) {
        
        let span = createSpan(" ");
        span.parent('page');
        
      } else {
        
        let span = createSpan(textPixel);
        span.id(textIndex);
        let fontWeight = map(pixel.brightness, 0, 255, 900, 100); // 밝기에 따라 폰트 굵기 조절 (0: 가장 얇게, 255: 가장 굵게)
        span.style("font-weight", fontWeight);
        span.style("font-size", pixelSize + "px");
        //span.style("font-size", Math.floor(Math.random() * (41 - 20) + 20) + "px");
        span.position(pixel.x + adjustX, pixel.y + adjustY); 
        span.parent('page');
        
        textIndex++;
        
      }
  }
}

function changeImage(imageIndex) {
  img = imgs[imageIndex];
  image(img, 0, 0, canvasWidth, canvasHeight);
  // img.willReadFrequently = true;
  // console.log("img:", imgs[0]);
  
  pixelInfo = [];
  for (let y = 0; y < canvasHeight; y += pixelSize) {
    for (let x = 0; x < canvasWidth; x += pixelSize) {
      let pos = get(x,y);
      let r = red(pos);
      let g = green(pos);
      let b = blue(pos);
      let brightness = (r + g + b) / 3;
      
      var pixel = {
        x: x,
        y: y,
        brightness : brightness
      }
      
      pixelInfo.push(pixel);
    }
  } 
}

function windowResized() {
  pixelToText();
}

window.addEventListener('scroll', function() {
  var scrollPosition = window.scrollY;

  if (scrollPosition > 500) {
    changeImage(1); // 스크롤 위치에 따라 이미지 변경
  } else {
    changeImage(0);
  }
  
  console.log("scrollY:", scrollPosition);
});
