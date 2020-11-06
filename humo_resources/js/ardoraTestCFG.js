//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=4; attempts=0; attemptsMax=2;
var score=0; scoreMax=4; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=true;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=true;
var tiScore=false;
var startTime;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fResp="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="¡Muy bien!"; messageTime="¡Se acabó el tiempo!"; messageError="¡Inténtalo de nuevo!"; messageErrorG="¡Inténtalo de nuevo!"; messageAttempts="¡Inténtalo de nuevo!"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="aHVtbw"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var tags=["¿Qué es la combustión?","¿Cuáles son los 3 componentes que se encuentran presentes en la combustión?","¿Qué efectos causa la inhalación de humo de incendio en la salud de las personas?","¿Cómo está compuesto el humo de un incendio?"];
var answers1=["MUVzIHVuIHByb2Nlc28gcXXtbWljby4","MEVzIHVuIHByb2Nlc28gZu1zaWNvLg","MEVzIHVuIHByb2Nlc28gb3BlcmF0aXZvLg"];
var answers2=["MUNvbWJ1c3RpYmxlLg","MUNvbWJ1cmVudGUu","MUZ1ZW50ZSBkZSBpZ25pY2nzbi4","MEhlbGlvLg","MEhpZHLzZ2Vuby4","MEFyZ/NuLg"];
var answers3=["MVByb2JsZW1hIGRlIGlycml0YWNp824gZW4gbGEgdHLhcXVlYS4","MURlcPNzaXRvIGRlIGNpZXJ0YSBzdXN0YW5jaWFzIHTzeGljYXMgYWwgbml2ZWwgZGUgbG9zIGFsdulvbG9zLg","MVJlZHVjY2nzbiBkZWwgcHJvY2VzbyBkZSBoZW1hdG9zaXMu","MU11ZXJ0ZSBwcmVtYXR1cmEu","MERvbG9yZXMgZXN0b21hY2FsZXMu","MFByb2JsZW1hcyBlbiBlbCBjZXJlYnJvLg","MFByb2JsZW1hcyBlbiBsYSBwaWVsLg"];
var answers4=["MUVzdOEgaGVjaG8gZGUgIHVuYSBtZXpjbGEgZGUgZ2FzZXMgeSBwYXJ07WN1bGFzIGZpbmFzLg","MEVzdOEgaGVjaG8gZGUgdW5hIG1lemNsYSBkZSBnYXNlcy4","MEVzdOEgaGVjaG8gZGUgdW5hIG1lemNsYSBkZSAgcGFydGljdWxhcyBmaW5hcy4"];
var ans=[answers1,answers2,answers3,answers4];
var err=["¡Inténtalo de nuevo!","¡Inténtalo de nuevo!","¡Inténtalo de nuevo!","¡Inténtalo de nuevo!"];
var ima=["Combustion-2.jpg","Combustion-2.jpg","incendio.jpg","incendio.jpg"];
var mp4=["","","",""];
var ogv=["","","",""];
var indexTag=0; actualAnswers=[]; dirMedia="humo_resources/media/";
var tiRandOrder=false;
var iT=0;var r_order=[];
