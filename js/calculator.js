var screenDataBis ='';
var screenData = '';
var datas = 0;
var myScreen = document.querySelector('.input');
var myScreenBis = document.querySelector('.output');

function calcul(e){
  if(screenData[screenData.length-1] === '='){
    screenData = '';
    screenDataBis ='';
  }
   screenData += e.dataset.num;
   screenDataBis += e.dataset.num;
   myScreen.textContent = screenData;
   myScreenBis.textContent = screenDataBis;
}

function calculate(e){
  if(screenData[screenData.length-1] === '='){
    screenData = screenData.substr(0,screenData.length-1);
  }
    screenData += e.dataset.num;
    screenDataBis += e.textContent;
    let objet = screenData.substr(0,screenData.length-1);

  if((e.dataset.num === '-' || e.dataset.num === '+') && (screenData[screenData.length-2] === '+'|| screenData[screenData.length-2] === '-')){
    if(screenData[screenData.length-3] === '*'|| screenData[screenData.length-3] === '/'){
      screenData = screenData.substr(0,screenData.length-1);
      screenDataBis = screenDataBis.substr(0,screenDataBis.length-1);
    return;
  }
    else{
  screenData = screenData.substr(0,screenData.length-2);
  screenDataBis = screenDataBis.substr(0,screenDataBis.length-2) + e.dataset.num;
  objet = screenData.substr(0,screenData.length);
}
}
  if ((e.dataset.num === '-' || e.dataset.num === '+') && (screenData[screenData.length-2] === '*' || screenData[screenData.length-2] === '/')){
  return;
}
  datas = eval(objet);
  myScreen.textContent = datas;
  screenData = datas.toString() + e.dataset.num;
}

function end(){
  if(screenData[screenData.length-1]==='=')
  return;
  datas = eval(screenData);
  myScreen.textContent = datas;
  myScreenBis.textContent = '';
  screenData += '=';
}

function res(){
   screenDataBis ='';
   screenData = '';
   datas = 0;
  myScreen.textContent = datas;
  myScreenBis.textContent = '';
}
function ce(){
    screenData = screenData.substr(0,screenData.length-2);
    screenDataBis = screenData.substr(0,screenData.length-2);
  myScreen.textContent = screenData;
  myScreenBis.textContent = screenDataBis;
  if ( screenData === '')
  myScreen.textContent = '0';
}