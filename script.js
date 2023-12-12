let adjustX;
let adjustY;
let canvasWidth;
let canvasHeight;

let textColor = '222222';
let randomColor = (['8CC5F8', 'FF3D00', 'F8C1E1', 'FA8B00', 'F6CA1F', 'BBAC98', '25A25C']);

let yearDataList = ['main', '1960', '1970', '1980', '1990'];

let textDatas = {
  'main' : '    기사로보는과도한성형수술',
  '1960' : '여인의발을성형수술유행하이힐에맞도록성형수술한다고얼굴에상처입혀무면허의기소보조개만들어치부미국에성형수술붐미용수술성형의학서본올바른안내천연두반흔환자의안면삭피수술로곰보자국을없애는성형수술',
  '1970' : '유방성형수술실패댄서3백만원손배소송얼굴망치는성형수술학계서큰반발“치과의성형수술괜찮다”판결면허없이성형수술을하여검거된범인들지법판결“성형수술은—의료행위아니다”서울형사지법“쌍꺼풀등미용성형수술은무면허의도할수있다”돌팔이성형수술무죄남성성형수술유행「젊음」만드는성형수술미국서남성들에인기성형수술엔최선다하지만“감쪽같이”주문엔늘당황얼굴골격성형수술물리치료와성형수술받도록대법판시무면허의성형수술은의료법위반미여성들유방성형수술열풍너무크게불려부작용시설이좋고권위있는전문의로부터받아야하는각종성형수술성형수술성형수술을받고「엘비스프레슬리」와흡사한얼굴을지니게된모조가수1호「데니스와이즈」“젊음을재생합니다”베티여사수술뒤美에성형붐미국에“성형수술”붐미용성형수술환자가부쩍늘어병원마다...한국병원후유증환자실태조사부작용많은성형수술',
  '1980' : '프랑스남성들성형수술성행젊게보여취직하자미용수술성격도바꾼다두개안면골성형수술성공고대의대팀개가남자들도코성형수술유행쌍꺼풀만들고주름살없애는성형수술이환자...남성성형수술늘어싱가포르눈꺼풀코등중고년을위한건강관리노화현산과성형수술성형외과찾는환자들정신적인문제더많다중·고년을위한건강관리성형수술성형수술에거머리이용코성형수술18%가심한후유증함기선박사팀10년동안조사결과치아교정·성형수술크게늘어졸업시즌성형수술만원성형수술번져간다성형수술은전문의에게받는것이보다안전하다고말하는함기선박사여학생들은단체로…주부들은계로…성형수술“미장원가듯”성행레이저광선을이용한얼굴성형수술행복찾기“성형수술해볼까“담배피우면성형수술흉터남는다일본여성「동양미」성형수술붐예뻐지려다평생후회미용성형수술부작용많다컴퓨터영상이용코성형수술…수요급증여성6%가성형수술성형수술욕심이뒤탈만든다잭슨코·턱만고쳤다얼굴전체성형수술부인중국스포츠스타“서구멋부리기”기형턱성형수술위험남성성형수술늘고있다성형수술불만주부자살어린이성형수술유행기형얼굴“수술로완치된다”',
  '1990' : '어린이의성형수술포장마차서성형수술성형수술의패션화시대주걱턱치아교정성형수술함께해야성형수술겨울방학이용중·고생극성“성형수술잘못됐다”의사협박금품요구성형수술새흉터낳는다성형수술찬반토론코미디세상만사〈성형수술〉「실리콘성형수술」부작용심각성형수술환자24%가성격상문제성형수술로유방망쳐미국인기여배우셰어고백성형수술개성시대실리콘성형수술“심한부작용”얼굴검버섯성형수술유방확대수술「실리콘겔」사용꺼린다여성에남성성기성형수술귓바퀴없는환자귀성형수술각광부족한눈썹머리카락으로이식무허성형수술50억챙겨여성각선미수술열풍성형외과때아닌호황청소년성형수술붐허영들뜬풍조한심중고생성형수술바람성형수술-CT촬영비단일화선천성기형성형수술의보혜택받았으면…건강정보주름제거성형코뚫리고눈안감기는성형수술부작용,그충격실태고교생·대학생70%성형희망“휴가다녀오더니예뻐졌네요”여대생직장여성성형수술유행신세대멋내기“성형수술도옷사듯가볍게생각”연골세포배양성형수술어린이성형수술시기사랑의교육학〈어린이성형수술〉교육방송여대생성형수술중숨져내시경수술로주름없앤다유방성형수술여성집단소송향후30년간42억불보상합의성형수술SW개발비트컴퓨터40-50대직장남성성형수술부쩍“퇴직이냐,승진이냐”의기로에서성형수술을...변성안된목소리성형수술로고쳐뇌사자연골로얼굴성형성공의료병폐함께고쳐나가자돌팔이성형수술내시경이용얼굴주름제거부작용없는수술법개발한국인30%“체중-몸매신경쓴다”아르헨남자들성형수술바람10조각골절술로얼굴기형교정기형얼굴「1회완치수술법」개발성형수술하면누구나예뻐지나면접비중높아진취업…첫인상좋아야유리남학생성형수술붐취업철대학생성형수술“붐”성형수술로각선미살리기종아리굵기최고7㎝줄여사라진유방,아랫배살로살린다언청이수술뒤남는코의추형새교정법으로정상화성공성형수술“할까,말까”행위예술의극치인가“성형수술전과정”을작품으로성형수술정보서비스연예인의「얼굴」콤플렉스주름살제거수술중사망성형외과의사구속“성형수술괜찮다”10대여성49%“한국여성60%유방콤플렉스”확대수술증가세“성형수술실패가족들고통도보상”“첫키스-성형수술감출것있나요”면접시험좋은인상이마확대성형수술보름달미인만들기“비너스”되는비용부위별수백만원성형수술에얽힌에피소드미의첫조건은“눈”미혼여성성형수술의식조사결과성형수술도구조조정멋내기거품빠지고꼭필요한사람위주로실리콘수술단점해소고어텍스이용첨단코성형술미용성형수술양두병박사의미인만들기어디를,어떻게?사람잡은불법성형수술아름다움위해몸고치는건전략10명중7명성형수술에긍정적최신의코성형수술과재수술예쁘게모던하게귀재건성형수술취학직전에하는게좋아성형수술여부알아보는법이경실이성미의진실게임〈성형미인을찾아라〉S저녁7시15분다이어트-성형수술하지맙시다성형수술-털제거전문의책잇달아성형수술책임진다LG,보험서비스여성성형수술권장할만하다60.1%베네수엘라남녀외모가꾸기세계최고성형수술도인터넷경매로겨울방학을이용한성형수술안내흐름성형수술빛과그림자맘에드는얼굴로살고싶다성형의술상상뺨친다'
};


let img;
let imgs = [];
let imgURLs = [
  "https://cdn.glitch.global/1b5a1dda-71db-4347-8302-3a763a8029b3/AIFace_01.png?v=1701243663549",
  "https://cdn.glitch.global/1b5a1dda-71db-4347-8302-3a763a8029b3/AIFace_02.png?v=1701247036287"
];

function preload() {
  let img0 = loadImage(imgURLs[0]);
  let img1 = loadImage(imgURLs[1]);
  imgs = [img0, img1];
  
  // let randomIndex = Math.floor(Math.random() * (imgs.length));
  // img = imgs[randomIndex];
  
  img = imgs[1];  
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
  
  changeImage();
  pixelToText();
}


function windowResized() {
  changeImage(currentYear);
  pixelToText(currentYear);
  titleHighlight(currentYear); 
}


let pixelSize;
let pixelInfo = [];
function changeImage(years='main') {
  textData = textDatas[years];
  
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


let spanDiv;
let textSpans;
function pixelToText(years='main') {
  textData = textDatas[years];
  
  let container = document.getElementById('canvasContainer');
  container.innerHTML = ''; // 초기화
  
  spanDiv = document.createElement('div');
  spanDiv.id = 'spanDiv';
  container.appendChild(spanDiv);
  
  textSpans = [];
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
    
    if (pixel.brightness > 240) {
      
      let span = document.createElement('span');
      span.innerText = ' '; // 텍스트 없는 span 추가
      spanDiv.appendChild(span);

    } else {
      
      textSpans[textIndex] = document.createElement('span');
      textSpans[textIndex].id = textIndex;
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
      spanDiv.appendChild(textSpans[textIndex]);

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
let newsSources = {
  'main': [],
  '1960' : ["", "경향신문 | 1965.05.06"],
  '1970' : ["", "경향신문 | 1972.02.16", "경향신문 | 1980.03.19", "조선일보 | 1981.10.11", "조선일보 | 1981.12.13", "동아일보 | 1982.10.09", "매일경제 | 1983.09.13", "경향신문 | 1983.11.17", "매일경제 | 1984.08.11", "조선일보 | 1985.02.13", "동아일보 | 1985.03.18", "조선일보 | 1985.05.17", "경향신문 | 1985.07.15", "경향신문 | 1986.02.24", "동아일보 | 1987.04.29", "동아일보 | 1987.11.30", "매일경제 | 1988.02.17", "조선일보 | 1988.06.05", "동아일보 | 1988.07.26", "조선일보 | 1989.04.11", "동아일보 | 1989.04.14"],
  '1980' : ["", "경향신문 | 1980.03.19", "조선일보 | 1981.10.11", "조선일보 | 1981.12.13", "동아일보 | 1982.10.09", "매일경제 | 1983.09.13", "경향신문 | 1983.11.17", "매일경제 | 1984.08.11", "조선일보 | 1985.02.13", "동아일보 | 1985.03.18", "조선일보 | 1985.05.17", "경향신문 | 1985.07.15", "경향신문 | 1986.02.24", "동아일보 | 1987.04.29", "동아일보 | 1987.11.30", "매일경제 | 1988.02.17", "조선일보 | 1988.06.05", "동아일보 | 1988.07.26", "조선일보 | 1989.04.11", "동아일보 | 1989.04.14"],
  '1990' : ["", "매일경제 | 1990.01.15", "경향신문 | 1990.06.15", "동아일보 | 1990.11.09", "한겨레 | 1991.04.10", "경향신문 | 1991.05.24", "동아일보 | 1991.12.24", "동아일보 | 1991.12.24", "조선일보 | 1992.04.07", "매일경제 | 1992.07.25", "동아일보 | 1992.07.31", "동아일보 | 1992.08.14", "경향신문 | 1992.12.19", "조선일보 | 1993.03.04", "경향신문 | 1993.04.22", "동아일보 | 1993.07.03", "동아일보 | 1993.08.08", "한겨레 | 1994.01.28", "동아일보 | 1994.11.16", "한겨레 | 1994.11.27", "경향신문 | 1995.01.07", "조선일보 | 1995.06.26", "경향신문 | 1995.09.08", "매일경제 | 1995.11.19", "동아일보 | 1996.01.21", "조선일보 | 1996.04.07", "조선일보 | 1996.12.16", "경향신문 | 1997.11.19", "조선일보 | 1997.12.02", "경향신문 | 1998.02.16", "동아일보 | 1998.03.10", "경향신문 | 1998.03.02", "경향신문 | 1998.04.29", "경향신문 | 1999.03.15", "경향신문 | 1999.03.22", "동아일보 | 1999.07.28", "조선일보 | 1999.08.18", "동아일보 | 1999.10.08", "한겨레 | 1999.12.22"]
}
let newsTexts = {
  'main': [],
  '1960' : ["", '미국성형학회의 보고에 의하면 최근 50여명의 여자들이 발뼈를 톱으로 자르는 성형수술을 받고 아름다운 발을 자랑하게 되었다고.'],
  '1970' : ["", '미인이 되려고 성형수술을 받았던 사람들이 인체에 유해한 파라핀 등 이물주입에 의한 수술로 거의 부작용을 일으켜 수술을 받거나 얼굴까지 망치는 경우가 늘어나고 있다.', '프랑스 파리 포쉬병원의 뽈 뗴시어 박사는 다른 외과의사들이 엄두도 못내는 안면골결을 바로 잡는 과감한 수술로 명성을 떨치고 있다.', '여성의 유방이 모성애의 애틋한 기능을 떠나서 단순한 섹스심벌로 화하자 최근들어 미국여성들은 앞을 다투어 유방성형수술에 열을 올리고 있으며 그 열도는 점차 심각한 문제로 클로스업 되고있다.', '미용수술은 첫번째에 잘 되어야 한다. 두번, 세번 고치는 것은 처음 잘된 것만큼의 효과가 없으니 전문의를 잘 선택할 것.', '미국의 팝송음악계 일각에서는 성형수술을 통해 과거 팝송계를 휩쓸었던 인기 팝송가수의 얼굴을 지닌 모조가수를 만들어내고 있어 화제가 되고있다.', '겉모습으로 젊어지기를 원하는 사람에겐 성형수술은 아주 좋은 선물이 될 수 있다.', '생활에 다소 여유가 생기면서 최근 몇년사이 얼굴과 몸을 아름답게 보이기 위해 미용성형을 하는 사람들이 부쩍 늘어나고 있다.', '아름다와지려는 것은 누구나 갖고있는 욕망, 현대성형의학은 추녀도 미녀로 만들어낼뿐 아니라 연예계 인사들중에서도 크든 작든 성형수술의 신세를 지고있는 사람이 적지않다.'],
  '1980' : ["", '최근 프랑스에서는 석유위기로 취업난이 몰아치자 젊게보이려 일반남성들간에도 성형수술이 크게 성행하고 있다고.', '아름다움을 재는 객관적인 척도는 없다. 따라서 불필요한 수술이나 한차례의 수술결과에 만족치 않는 환자가 끊이지 않고 있다.', '병원마다 한달에 4-5명씩, 남자들도 코 성형수술 유행. "높고 크게 해달라" 주문도 갖가지', '성형외과를 찾는 환자 가운데는 성형수술보다 오히려 정신과의사의 치료를 받아야할 사람이 많다.', '성형외과에서 수술시기는 사실 불분명한 경우가 많지만 적절한 시기를 놓쳐서 돌이키기 어려운 손해를 본다면 성형외과 의사를 안다는 것이 불가근한 일이라고한다면 좀 우스운 이야기라고 할는지.', '우리나라에서 많이 시행되고 있는 미용성형수술의 하나인 코높이기 수술을 받은 사람의 18%가 만성합병증을 경험하고 있다는 사실이 밝혀졌다.', '소득이 늘어나고 생활의 여유가 생기면서 외모에 대한 관심이 높아져 방학과 휴가철을 이용해 치아교정과 성형을 하는 사람들이 늘어나고 있다.', '진학이나 취업 또는 결혼을 앞둔 여고생과 여대생들이 이 시기를 틈타 자기 용모의 결점을 보완하고 이미지를 새롭게 바꿔보기 위해 성형수술을 택하기 때문.', '자기 용모의 결점을 보완하고 이미지를 새롭게 변화시켜주는 미용성형수술이 여성들 사이에서 「해볼만한 것」으로 차차 인식되고 있다.', '얼굴과 몸매를 뜯어고치는 성형수술이 나이와 성별을 가리지않고 무분별하게 번져가고있다.', '여자는 무엇보다 예뻐야하고 딸이 나같이 자존심 상하며 살지않게하려면 수술이라도 해줘야한다고 김여사는 TV앞에 앉은 남편을 보면서 심각하게 다지하는 것이다.', '일본에서 서양식 미녀형보다 자연스런 아름다움에 중점을 둔 미용성형수술이 붐을 일으키고 있다.', '최근 코를 높이거나 유방을 확대하는등 미용이나 성형목적으로 신체에 이물질을 주입한 뒤 부작용으로 고생하는 사람이 늘어나고 있다.', '아름다와지고 싶은 것은 예나 지금이나 모든 여성들의 소망이지만 여성들의 사회참여가 활발해지면서 여성들의 미에 대한 관심도 더욱 높아져가고 있다.', '성형외과 전문의 정중길 박사는 "성형수술이 보편화됐다 하더라도 너무 가볍게 생각하지 말라"며 올바른 이해를 돕기위해 다음과 같이 조언한다.', '구강외과 전문의제가 실시되지 않는 현재로선 종합병원 치과를 찾는 것이 최선', '툭 불거진 광대뼈, 얼굴에 비해 턱없이 작은 턱뼈, 매부리코, 찌그러진 코 등은 당사자의 실력과 관계없이 상대방에게 불쾌한 인상을 주어 취업에 마이너스 요인이 된다는 것.', '성형수술을 받은 뒤 흉터가 남아 보기가 더 흉해지자 이를 고민하며 불면증에 시달려왔고 지난 3월말에도 극약을 먹고 자살을 기도한 적이 있다는 것.', '어린이성형수술이 이제는 미용성형수술로까지 범위가 확대돼 어머니 손에 끌려 병원을 찾는 어린이가 적지 않다.'],
  '1990' : ["", '방학이 되면 어린이의 손을 잡고 성형외과를 찾는 부모들이 늘어난다.', '옷색깔이나 디자인을 고르는 취향이 각기 다르듯 수술결과를 판단하는 기준도 다르다.', '흔히 주걱턱이라도 불리는 안면기형상태를 효과적으로 치료하기 위해서는 성형외과적수술과 치과영역의 영역이 동시에 이루어져야 한다.', '정재환, 박미선, 서승만씨가 토론자로 나와 성형수술에 대한 찬반론을 펼친다.', '미용 등의 목적으로 코나 유방 등에 실리콘액을 주입하는 성형수술이 류머토이드관절염을 일으키는 것으로 밝혀져 실리콘성형수술에 대한 주의가 요망되고 있다.', '여자는 무조건 예쁘게, 남자들은 멋지게를 요구하던 것이 상례였으나 요즘은 각자의 개성과 필요에 따라 전혀 요규사항이 다르다.', '실리콘을 소재로 한 성형수술이 류머토이드관절염 등 각종 부작용을 일으키고 있는 것으로 밝혀졌다.', '눈썹 숱이 극히 적은 사람들을 위해 머리카락 모근을 한개씩 낱개로 옮겨 심는 모근이식수술이 최근 인기를 끌고 있다.', '올여름 초미니패션이 유행하면서 미끈한 다리를 가꾸려는 젊은 여성들이 늘어 다리의 지방질 제거수술을 받으려는 여대생 주부들로 문전성시.', '방학을 맞이하여 청소년들의 성형수술 붐이 일고 있다고 한다.', '병원측에 따르면 미용수술을 받기 위해 병원을 찾는 중고생들의 수가 2~3년전부터  크게 늘기 시작, 방학 때가 되면 손이 모자랄 정도라는 것.', '주름제거성형에 대한 여성들의 관심은 상당히 높다. 잃어버린 젊음을 되찾을 방법이 있다는 데 무심할 수 있는 사람은 극히 드물기 때문이다.', '"코 뚫리고 눈 안 감기는" 성형수술 부작용, 그 충격 실태', '10대 후반에서 20대 초반 사이의 신세대들은 성형수술에 대부분 긍정적인 사고방식을 갖고 있음을 보여주었다.', '휴가철이 시작되고 대학가가 일제히 방학에 들어간  6월말부터 성형외과에는 여대생과 사무직 여성들의 발길이 이어지고 있다.', '"방학만 끝나면 몰라볼 만큼 예뻐져서 학교에 오는 친구들이 많아요. 가만히 있으면 완전히 미운오리새끼가 돼버려요."', '수술중 마취가 깨어나지 않은 채 환자가 숨지는 의료사고가 일어났다.', '내시경을 이용한 수술이 주름살 제거, 유방확대 등 성형외과분야로 확대되고 있다.', '최근 직장에서 승진을 앞둔 40, 50대 남성들 사이에 성형수술이 부쩍 성행하고 있다.', '연골을 이용한 새로운 얼굴 재건성형수술이 거부반응이나 합병증없이 성공적으로 이뤄지고 있다.', '몸치장이나 옷차림에 쓰는 돈이 아깝지 않다는 사람이 13%', '미용을 위한 성형수술에 긍정적인 사람은 16%-성형수술에 대한 기대가 너무 큰 사람, 즉 자신의 조건과는 상관없이 수술후의 모습만을 꿈꾸는 사람은 가급적 받지 않는 것이 좋다고 충고한다.', '취업철을 맞아 종래 여성들만 관심을 가졌던 것으로 간주되던 성형이 남성들에까지 확산되는 추세이다.', '각선미 콤플렉스의 여성이 적지 않다. 이 경우 장딴지 근육 일부를 내시경수술로 제거하는 새로운 성형수술법이 시도되고 있다.', '유방암 수술후 없어진 유방을 재건하는 데는 하복부 조직을 떼어내 이식-성형하는 "하복부 유리피판술"을 시행한 결과 좋은 효과를 거두었다고 최근 발표했다.', '20대 여성의 절반 이상이 매일 옷을 갈아입으면 의상이나 헤어스타일에서 다른 사람의 주목을 받고싶어 한다. 예뻐진다면 성형수술도 마다하지 않는다.', '면접에서의 첫인상을 좌우하는 외모에 대한 관심이 높아지면서 최근에는 좁은 이마로 고민하는 취업준비생들이 이마를 넓히는 수술을 위해 성형외과를 찾고 있다.', '쌍꺼풀 절개법 100만~120만원 매몰법 70만~100만원, 주름살 박피술 300만~400만원 수술 400만~600만원, 코 얼굴과 조화 바람직…100만~200만원 들어', '국내 미혼여성들이 가장 고치고 싶어하는 부위는 눈이며 이미 성형수술을 한 부위 역시 눈이 가장 많다.', '성형수술에도 "멋내기" 거품이 빠지고 꼭 필요한 사람 위주로 구조조정이 이뤄지고 있다.', '양두병 박사의 미인만들기 성형 수술 어디를 어떻게', '새로운 첨단 재료를 이용한 코성형술이 국내데 도입돼 관심을 모으고 있다.', '지금 많은 젊은이들에겐 자기얼굴을 뜯어 고치는 것이 더이상 금기가 아니다. 이들은 오히려 성형과 치장을 일종의 전략으로 여긴다.', '☎상담문의 02)553-7575, 최신의 코성형수술과 재건수술', '미국 최대의 여권운동단체인 전국여성기구가 최근 캘리포니아 로스앤젤레스에서 총회를 열고 "내몸을 사랑하는 날"을 위한 전국 캠페인에 들어가기로 했다.', '면도, 핀셋으로 뽑기, 제모 크림, 왁스, 초음파 제모법 등 집에서 할 수 있는 방법과 함께 전기분해술, 아포지 레이저 제모술, 고바야시 절연침 제모술 등 현재까지 개발된 병원 영구제모시술법을 소개했다.', '연예인이나 하는 것으로 여겨졌던 성형수술을 받는 일반 여성과 남성이 늘고 있다.', '성형수술을 결혼이나 취업을 앞두고 부득이한 선택으로 받아들이지 않는 태도는 성형외과에 가면 금방 확인할 수 있다.']
}


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
      // newsContentDiv.style.backgroundColor = '#FFFFFF00';
      
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
    changeImage(currentYear);
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

