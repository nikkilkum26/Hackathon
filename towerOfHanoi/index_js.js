let main_div= document.createElement('div');

let h1= document.createElement('H2');
h1.setAttribute('id','text');
h1.innerHTML="Towers of Hanoi";
main_div.append(h1);

let h2= document.createElement('H2');
h2.setAttribute('id','text1');
h2.innerHTML="Number of Moves :";
main_div.append(h2);

let h3= document.createElement('H4');
h3.setAttribute('id','score');
h3.innerHTML="0";
main_div.append(h3);

let divA=document.createElement('div');
divA.setAttribute('class',"buttonsForgame");
divA.setAttribute('style',"float: left;");

let linkA=document.createElement("A");
linkA.setAttribute('href',"javascript:showhide('three-disk')");

let inputA=document.createElement("INPUT");
inputA.setAttribute('id',"three-disks");
inputA.setAttribute('type',"button");
inputA.setAttribute('value',"3 disks");

linkA.append(inputA);
divA.append(linkA);

main_div.append(divA);

let divB=document.createElement('div');
divB.setAttribute('class',"buttonsForgame");
divB.setAttribute('style',"float: left;");

let linkB=document.createElement("A");
linkB.setAttribute('href',"javascript:showhide('six-disk')");

let inputB=document.createElement("INPUT");
inputB.setAttribute('id',"six-disks");
inputB.setAttribute('type',"button");
inputB.setAttribute('value',"6 disks");

linkB.append(inputB);
divB.append(linkB);

main_div.append(divB);

let divC=document.createElement('div');
divC.setAttribute('id',"three-disk");
divC.setAttribute('style',"display:none;");
main_div.append(divC);
let divC1=document.createElement('div');
divC1.setAttribute('class',"towers");
divC.append(divC1);
let divC2=document.createElement('div');
divC2.setAttribute('class',"dock");
divC1.append(divC2);

let divC21=document.createElement('div');
divC21.setAttribute('class',"disk disk-1");
divC21.setAttribute('data-size',"1");

let divC22=document.createElement('div');
divC22.setAttribute('class',"disk disk-2");
divC22.setAttribute('data-size',"2");

let divC23=document.createElement('div');
divC23.setAttribute('class',"disk disk-3");
divC23.setAttribute('data-size',"3");

divC2.append(divC21,divC22,divC23);

let divC3=document.createElement('div');
divC3.setAttribute('class',"dock");
let divC4=document.createElement('div');
divC4.setAttribute('class',"dock");

divC1.append(divC3,divC4);


let divD=document.createElement('div');
divD.setAttribute('id',"six-disk");
divD.setAttribute('style',"display:none;");
main_div.append(divD);
let divD1=document.createElement('div');
divD1.setAttribute('class',"towers");
divD.append(divD1);
let divD2=document.createElement('div');
divD2.setAttribute('class',"dock");
divD1.append(divD2);

let divD21=document.createElement('div');
divD21.setAttribute('class',"disk disk-1");
divD21.setAttribute('data-size',"1");

let divD22=document.createElement('div');
divD22.setAttribute('class',"disk disk-2");
divD22.setAttribute('data-size',"2");

let divD23=document.createElement('div');
divD23.setAttribute('class',"disk disk-3");
divD23.setAttribute('data-size',"3");

let divD24=document.createElement('div');
divD24.setAttribute('class',"disk disk-4");
divD24.setAttribute('data-size',"4");

let divD25=document.createElement('div');
divD25.setAttribute('class',"disk disk-5");
divD25.setAttribute('data-size',"5");

let divD26=document.createElement('div');
divD26.setAttribute('class',"disk disk-6");
divD26.setAttribute('data-size',"6");

divD2.append(divD21,divD22,divD23,divD24,divD25,divD26);

let divD3=document.createElement('div');
divD3.setAttribute('class',"dock");
let divD4=document.createElement('div');
divD4.setAttribute('class',"dock");

divD1.append(divD3,divD4);

let divE=document.createElement('div');
divE.setAttribute('class',"buttonsForgame");


let inpA=document.createElement("INPUT");
inpA.setAttribute('id',"start-new-game");
inpA.setAttribute('type',"button" );
inpA.setAttribute('value',"Start game");
inpA.setAttribute('onClick',"start();");


let inpB=document.createElement("INPUT");
inpB.setAttribute('id',"stop-new-game");
inpB.setAttribute('type',"button" );
inpB.setAttribute('value',"End game");
inpB.setAttribute('onClick',"stopT();");

let inpC=document.createElement("INPUT");
inpC.setAttribute('id',"reset-new-game");
inpC.setAttribute('type',"button" );
inpC.setAttribute('value',"Reset game");
inpC.setAttribute('onClick',"history.go(0);");

divE.append(inpA,inpB,inpC);

let sDiv=document.createElement('div');
sDiv.innerHTML="Seconds:";
let span1=document.createElement("SPAN");
span1.setAttribute('id',"time");
span1.innerHTML='0';

sDiv.append(span1);

divE.append(sDiv);

let RDiv=document.createElement('div');
RDiv.innerHTML="Your Rating:";
let span2=document.createElement("SPAN");
span2.setAttribute('id',"ratings");
span2.innerHTML='0';

RDiv.append(span2);

divE.append(RDiv);


let br1= document.createElement("BR");
let br2= document.createElement("BR");
let br3= document.createElement("BR");
let br4= document.createElement("BR");
let br5= document.createElement("BR");
let br6= document.createElement("BR");
let br7= document.createElement("BR");
let br8= document.createElement("BR");
let br9= document.createElement("BR");
let br10= document.createElement("BR");
let br11= document.createElement("BR");
let br12= document.createElement("BR");
let br13= document.createElement("BR");
let br14= document.createElement("BR");
let br15= document.createElement("BR");
let br16= document.createElement("BR");
let br17= document.createElement("BR");

divE.append(br1,br2,br3,br4,br5,br6,br7,br8,br9,br10,br11,br12,br13,br14,br15,br16,br17);


divT=document.createElement('div');
divT.setAttribute('class',"text1");
divT.innerHTML="Instructions: First select the disks and press start game options ...press another time to close disk and to choose for next disk .... ratings varies from 3 to 1 depends on seconds counts more the count less will be ratings ... 0 incase if you exceede more time... 3-star===> PRO 2-Star===> GooD  1-star====>OKaY  0-star====> you lost the game!!!!!!!!!";

divE.append(divT);
main_div.append(divE);
document.body.append(main_div);






