let adjustX;
let adjustY;
let canvasWidth;
let canvasHeight;

let yearDataList = ['main', '1960', '1970', '1980', '1990'];
let textDatas = {
  'main' : '    기사로보는과도한성형수술',
  '1960' : '여인의발을성형수술유행하이힐에맞도록성형수술한다고얼굴에상처입혀무면허의기소보조개만들어치부미국에성형수술붐미용수술성형의학서본올바른안내천연두반흔환자의안면삭피수술로곰보자국을없애는성형수술',
  '1970' : '유방성형수술실패댄서3백만원손배소송얼굴망치는성형수술학계서큰반발“치과의성형수술괜찮다”판결면허없이성형수술을하여검거된범인들지법판결“성형수술은—의료행위아니다”서울형사지법“쌍꺼풀등미용성형수술은무면허의도할수있다”돌팔이성형수술무죄남성성형수술유행「젊음」만드는성형수술미국서남성들에인기성형수술엔최선다하지만“감쪽같이”주문엔늘당황얼굴골격성형수술물리치료와성형수술받도록대법판시무면허의성형수술은의료법위반미여성들유방성형수술열풍너무크게불려부작용시설이좋고권위있는전문의로부터받아야하는각종성형수술성형수술성형수술을받고「엘비스프레슬리」와흡사한얼굴을지니게된모조가수1호「데니스와이즈」“젊음을재생합니다”베티여사수술뒤美에성형붐미국에“성형수술”붐미용성형수술환자가부쩍늘어병원마다...한국병원후유증환자실태조사부작용많은성형수술',
  '1980' : '프랑스남성들성형수술성행젊게보여취직하자미용수술성격도바꾼다두개안면골성형수술성공고대의대팀개가남자들도코성형수술유행쌍꺼풀만들고주름살없애는성형수술이환자...남성성형수술늘어싱가포르눈꺼풀코등중고년을위한건강관리노화현산과성형수술성형외과찾는환자들정신적인문제더많다중·고년을위한건강관리성형수술성형수술에거머리이용코성형수술18%가심한후유증함기선박사팀10년동안조사결과치아교정·성형수술크게늘어졸업시즌성형수술만원성형수술번져간다성형수술은전문의에게받는것이보다안전하다고말하는함기선박사여학생들은단체로…주부들은계로…성형수술“미장원가듯”성행레이저광선을이용한얼굴성형수술행복찾기“성형수술해볼까“담배피우면성형수술흉터남는다일본여성「동양미」성형수술붐예뻐지려다평생후회미용성형수술부작용많다컴퓨터영상이용코성형수술…수요급증여성6%가성형수술성형수술욕심이뒤탈만든다잭슨코·턱만고쳤다얼굴전체성형수술부인중국스포츠스타“서구멋부리기”기형턱성형수술위험남성성형수술늘고있다성형수술불만주부자살어린이성형수술유행기형얼굴“수술로완치된다”',
  '1990' : '어린이의성형수술포장마차서성형수술성형수술의패션화시대주걱턱치아교정성형수술함께해야성형수술겨울방학이용중·고생극성“성형수술잘못됐다”의사협박금품요구성형수술새흉터낳는다성형수술찬반토론코미디세상만사〈성형수술〉「실리콘성형수술」부작용심각성형수술환자24%가성격상문제성형수술로유방망쳐미국인기여배우셰어고백성형수술개성시대실리콘성형수술“심한부작용”얼굴검버섯성형수술유방확대수술「실리콘겔」사용꺼린다여성에남성성기성형수술귓바퀴없는환자귀성형수술각광부족한눈썹머리카락으로이식무허성형수술50억챙겨여성각선미수술열풍성형외과때아닌호황청소년성형수술붐허영들뜬풍조한심중고생성형수술바람성형수술-CT촬영비단일화선천성기형성형수술의보혜택받았으면…건강정보주름제거성형코뚫리고눈안감기는성형수술부작용,그충격실태고교생·대학생70%성형희망“휴가다녀오더니예뻐졌네요”여대생직장여성성형수술유행신세대멋내기“성형수술도옷사듯가볍게생각”연골세포배양성형수술어린이성형수술시기사랑의교육학〈어린이성형수술〉교육방송여대생성형수술중숨져내시경수술로주름없앤다유방성형수술여성집단소송향후30년간42억불보상합의성형수술SW개발비트컴퓨터40-50대직장남성성형수술부쩍“퇴직이냐,승진이냐”의기로에서성형수술을...변성안된목소리성형수술로고쳐뇌사자연골로얼굴성형성공의료병폐함께고쳐나가자돌팔이성형수술내시경이용얼굴주름제거부작용없는수술법개발한국인30%“체중-몸매신경쓴다”아르헨남자들성형수술바람10조각골절술로얼굴기형교정기형얼굴「1회완치수술법」개발성형수술하면누구나예뻐지나면접비중높아진취업…첫인상좋아야유리남학생성형수술붐취업철대학생성형수술“붐”성형수술로각선미살리기종아리굵기최고7㎝줄여사라진유방,아랫배살로살린다언청이수술뒤남는코의추형새교정법으로정상화성공성형수술“할까,말까”행위예술의극치인가“성형수술전과정”을작품으로성형수술정보서비스연예인의「얼굴」콤플렉스주름살제거수술중사망성형외과의사구속“성형수술괜찮다”10대여성49%“한국여성60%유방콤플렉스”확대수술증가세“성형수술실패가족들고통도보상”“첫키스-성형수술감출것있나요”면접시험좋은인상이마확대성형수술보름달미인만들기“비너스”되는비용부위별수백만원성형수술에얽힌에피소드미의첫조건은“눈”미혼여성성형수술의식조사결과성형수술도구조조정멋내기거품빠지고꼭필요한사람위주로실리콘수술단점해소고어텍스이용첨단코성형술미용성형수술양두병박사의미인만들기어디를,어떻게?사람잡은불법성형수술아름다움위해몸고치는건전략10명중7명성형수술에긍정적최신의코성형수술과재수술예쁘게모던하게귀재건성형수술취학직전에하는게좋아성형수술여부알아보는법이경실이성미의진실게임〈성형미인을찾아라〉S저녁7시15분다이어트-성형수술하지맙시다성형수술-털제거전문의책잇달아성형수술책임진다LG,보험서비스여성성형수술권장할만하다60.1%베네수엘라남녀외모가꾸기세계최고성형수술도인터넷경매로겨울방학을이용한성형수술안내흐름성형수술빛과그림자맘에드는얼굴로살고싶다성형의술상상뺨친다'
};
let textColor = '222222';
let randomColor = (['8CC5F8', 'FF3D00', 'F8C1E1', 'FA8B00', 'F6CA1F', 'BBAC98', '25A25C']);

let img;
function preload() {
  img = loadImage("https://cdn.glitch.global/1b5a1dda-71db-4347-8302-3a763a8029b3/AIFace_02.png?v=1701247036287");
}

function setup() {
  scrollY = 0;
  window.scrollTo(0, 0);
  
  canvasHeight = windowHeight;
  canvasWidth = canvasHeight * (img.width / img.height);
  let canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.id('canvas');
  canvas.parent('canvasContainer');
  
  image(img, 0, 0, canvasWidth, canvasHeight);

  setupSpans();

  imageToPixel();
  pixelToText();
}


function windowResized() {
  imageToPixel(currentYear);
  pixelToText(currentYear);
  titleHighlight(currentYear); 
}


let spanDiv;
let textSpans = [];
function setupSpans() {
  let container = document.getElementById('canvasContainer');
  container.innerHTML = ''; // 초기화
  
  spanDiv = document.createElement('div');
  spanDiv.id = 'spanDiv';
  container.appendChild(spanDiv);
  
  for (let i = 0; i < 1500; i++) {
    let span = document.createElement('span');
    span.id = i;
    textSpans.push(span); // span을 배열에 추가
    spanDiv.appendChild(textSpans[i]);
  }
}


let pixelSize;
let pixelInfo = [];
function imageToPixel(years='main') {
  let textData = textDatas[years];
  
  let textLen = textData.length;
  
  if (textLen <= 16) {
    pixelSize = 118;
  } else if (textLen <= 96) {
    pixelSize = 40;
  } else if (textLen <= 375) {
    pixelSize = 30;
  } else if (textLen <= 477) {
    pixelSize = 28;
  } else if (textLen <= 1330) {
    pixelSize = 17;
  }
  
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


function pixelToText(years='main') {
  let textData = textDatas[years];
  
  textSpans.forEach(span => {
    span.innerText = '';
    span.style.color = '#FDFDFD00';
  });
  
  let textIndex = 0;
  let adjustX = (windowWidth - canvasWidth) / 2;
  let adjustY = (windowHeight - canvasHeight) / 2;
  let paddingH = map(pixelSize, 118, 17, 10, 1);

  pixelInfo.forEach((pixel, i) => {
    
    let textPixel;
    if (years === 'main') {
      textPixel = textData.charAt(textIndex);
    } else {
      textPixel = textData.charAt(textIndex % textData.length);
    }
    
    let fontWeight = map(pixel.brightness, 0, 255, 850, 100); // 밝기에 따라 폰트 굵기 조절 (0: 가장 얇게, 255: 가장 굵게)
    
    if (pixel.brightness <= 240) {
      
      textSpans[textIndex].innerText = textPixel; // 텍스트가 있는 span 추가
      textSpans[textIndex].style.fontVariationSettings = "'wght' " + fontWeight;
      textSpans[textIndex].style.fontSize = (pixelSize - 2) + "px";
      textSpans[textIndex].style.width = pixelSize + "px";
      textSpans[textIndex].style.height = (pixelSize - paddingH) + "px";
      textSpans[textIndex].style.paddingBottom = paddingH + "px";
      textSpans[textIndex].style.position = 'absolute';
      textSpans[textIndex].style.left = pixel.x + adjustX + 'px';
      textSpans[textIndex].style.top = pixel.y + adjustY + 'px';
      textSpans[textIndex].style.backgroundColor = '#FDFDFD00';
      textSpans[textIndex].style.color = '#1E1E20';

      textIndex++;
    }
  }); 
}

let emptySpan = document.createElement('span');
let lenDatas = {
  'main' : [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  '1960' : [18, 20, 16, 15, 27],
  '1970' : [18, 9, 20, 17, 19, 28, 9, 8, 20, 23, 8, 12, 18, 21, 26, 4, 41, 22, 10, 20, 22],
  '1980' : [20, 10, 18, 11, 22, 17, 19, 18, 15, 10, 29, 13, 10, 8, 29, 29, 15, 13, 14, 14, 20, 17, 9, 12, 19, 15, 9, 10, 10, 9, 13],
  '1990' : [8, 9, 10, 15, 16, 18, 10, 21, 14, 15, 20, 8, 14, 9, 17, 11, 14, 13, 11, 18, 16, 9, 13, 18, 10, 22, 14, 27, 21, 10, 28, 10, 11, 26, 13, 16, 24, 14, 12, 18, 21, 17, 12, 14, 15, 13, 26, 13, 22, 14, 23, 11, 23, 9, 12, 18, 17, 22, 16, 16, 24, 16, 11, 23, 26, 21, 25, 10, 27, 12, 24, 40, 14, 15, 16, 17, 16, 11, 14, 22, 9]
};
let trueDatas = {
  'main' : [0, 0, 0, 0].concat(Array.from({ length: 12 }, () => Math.floor(Math.random() * 2))),
  '1960' : [1, 0, 0, 0, 0],
  '1970' : [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0, 1, 1],
  '1980' : [1, 1, 0, 1, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0],
  '1990' : [1, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 0, 0, 0, 1, 0]
};
let trueSpans = {
  'main' : [],
  '1960' : [[emptySpan]],
  '1970' : [[emptySpan]],
  '1980' : [[emptySpan]],
  '1990' : [[emptySpan]]
  };
let yearTitles = {
  'main' : [],
  '1960' : ['', '1965'],
  '1970' : ['', '1972', '1974', '1975', '1977', '1978', '1978', '1979', '1979'],
  '1980' : ['', '1980', '1981', '1981', '1982', '1983', '1983', '1984', '1985', '1985', '1985', '1985', '1986', '1987', '1987', '1988', '1988', '1988', '1989', '1989'],
  '1990' : ['', '1990', '1990', '1990', '1991', '1991', '1991', '1992', '1992', '1992', '1992', '1992', '1992', '1993', '1993', '1993', '1993', '1994', '1994', '1994', '1995', '1995', '1995', '1995', '1996', '1996', '1996', '1997', '1997', '1998', '1998', '1998', '1998', '1999', '1999', '1999', '1999', '1999', '1999']
  };
let newsImgs = {
  'main' : [],
  '1960' : ['', '0'],
  '1970' : ['', '1', '2', '3', '4', '5', '6', '7', '8'],
  '1980' : ['', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27'],
  '1990' : ['', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65']
}
let newsSources;
let newsTexts;

let newsImgDiv = document.getElementById('newsImg');
let newsContentDiv = document.getElementById('newsContent');
let newsSourceDiv = document.getElementById('newsSource');
let newsTextDiv = document.getElementById('newsText');

function titleHighlight(years='main') {
  
  trueSpans[years] = [[emptySpan]];
  let spanByLen = [];
  
  let textData = textDatas[years];
  let lenData = lenDatas[years];
  let trueData = trueDatas[years];
  
  let start = 1;
  for (let i = 0; i < lenData.length; i++) {
    let end = start + (lenData[i]);
    spanByLen.push(textSpans.slice(start-1, end-1));
    start += lenData[i];
  }
  
  for (let i = 0; i < spanByLen.length; i++) { 
    if(trueData[i]) {
      if(trueSpans[years].length - 1 < trueData.filter(e => 1 === e).length) {
        trueSpans[years].push(spanByLen[i]);   
      }
    }  
  }
  
  oneSection = window.innerHeight * 3;
  yearSection = (scrollY % oneSection);
  titleSection = oneSection / (trueSpans[years].length);
  let currentTitle = Math.floor(yearSection / titleSection);
  
  prevSpans.forEach(prevSpanGroup => {
    prevSpanGroup.forEach(span => {
      span.style.backgroundColor = 'initial';
      span.style.color = 'initial';
    });
  });

  
  for (let i = 0; i < currentTitle + 1; i++) {
    yearTitle.textContent = yearTitles[years][i];
    trueSpans[years][i].forEach(span => {
      let colorIndex = i % randomColor.length;
      span.style.backgroundColor = '#' + randomColor[colorIndex];
      span.style.color = '#FDFDFD';
      
      newsImgDiv.innerHTML = ' ';
      newsImgDiv.style.border = '0px solid';
      
      newsContentDiv.innerHTML = ' ';
      
      if(newsImgs[years] && newsImgs[years][i]) {
        newsImgDiv.style.display = 'inline-block';
        newsContentDiv.style.display = 'block';
        newsContentDiv.appendChild(newsSourceDiv);
        newsContentDiv.appendChild(newsTextDiv);
        
        newsImgDiv.innerHTML = `<img src="${"newsImage/" + newsImgs[years][i] + ".png"}" >`;
        newsImgDiv.style.border = '2.2px solid #' + randomColor[colorIndex] + '90';
        newsImgDiv.style.opacity = 100;
        
        newsSourceDiv.innerHTML = newsSources[years][i];
        newsTextDiv.innerHTML = newsTexts[years][i];
        newsSourceDiv.style.backgroundColor = '#' + randomColor[colorIndex];
        newsTextDiv.style.backgroundColor = '#' + randomColor[colorIndex];
      }
    }); 
  }
  
  prevSpans = trueSpans[years].slice(0, currentTitle + 1);
}


let scrollY = window.scrollY;
let yearIndex;
let prevSpans = [];
let oneSection = window.innerHeight * 3;
let yearSection;
let titleSection;

let prevYear = 'main';
let currentYear = 'main';
let yearTitle = document.getElementById('year');

window.addEventListener('scroll', function() {
  scrollY = window.scrollY;
  
  let yearIndex = Math.min(Math.floor(scrollY / oneSection), 4);
  currentYear = yearDataList[yearIndex];  
  
  if (currentYear !== prevYear) {
    imageToPixel(currentYear);
    pixelToText(currentYear); 
    prevYear = currentYear;
  }
  
  titleHighlight(currentYear); 
  
  if (scrollY > 0) {
    document.getElementById('scroll_down').style.opacity = '0';
  } else {
    document.getElementById('scroll_down').style.opacity = '100';
  }

});


window.addEventListener('mousemove', function(event) {
  let x = event.clientX;
  let y = event.clientY;

  let newx = x - 20;
  let newy = y - 20;

  let circle = document.getElementById('circle');
  circle.style.left = `${newx}px`;
  circle.style.top = `${newy}px`;
  circle.style.mixBlendMode = 'difference';
});


document.addEventListener('DOMContentLoaded', (event) => {
  fetch('newsSources.json')
    .then(response => response.json())
    .then(data => {
       newsSources= data;
    })
    .catch(error => {
      console.error('파일 로딩 중 오류 발생:', error);
    });


  fetch('newsTexts.json')
    .then(response => response.json())
    .then(data => {
       newsTexts= data;
    })
    .catch(error => {
      console.error('파일 로딩 중 오류 발생:', error);
    });
  // console.log("완료");
});

