"use strict";
(function(){
var cardsQuantity=16;
var roundDash=document.querySelector(".rounds");
var pointDash=document.querySelector(".points");
var roundscounter = 1;
var pointscounter = 0;
var numArray = [];
var mainCount = 0;
var currentCount=0;

//creating tiles
function createTemplate(tagName,clName){
    var template=document.createElement(tagName);
    clName && (template.className=clName);
    return template;
    };
	
function chooseClass(){
	  currentCount++;
            if(currentCount == 3 || currentCount==4){
				mainCount=2;
			if(currentCount==4){
				currentCount =0;
					  }
				 } 
			 else if(currentCount == 1 || currentCount==2){
				mainCount=1;
					 }
			return mainCount;
}

function createBackside(tagName,firstClassName,secondClassName){
 var template=document.createElement(tagName);
 var first= chooseClass();
   if(first==1){template.className=firstClassName;}
   else{template.className=secondClassName;}
     return template;
	 }
	
function printResult(){
   var result = document.getElementById('result');
   var contain =  createTemplate('section','container');
   var cards = createTemplate('div','card');
   var backSide = createBackside('div','backRed','backBlue');

     var res=+result.appendChild(contain);
              contain.appendChild(cards);
              cards.appendChild(backSide);
          };

function run(){
for(var i=0;i<cardsQuantity;i++){
printResult();
  }
}
run();
//

//creating counters
function roundCounter(){
roundscounter++;
roundDash.innerHTML=roundscounter;
}

function pointsCounter(){
pointscounter++;
pointDash.innerHTML=pointscounter;
}


//manipulation of the tales
function checkIsDouble(elem){
if(!elem.hasAttribute("data-id"))
return true;
}

function addElem(arr,elem){
if(checkIsDouble(elem)){
arr.push(elem);		
return arr;
  }
}

function setAttr(elem){
return elem.setAttribute("data-id", "selectedCard");
}

function flipMe(){
for(var b=0; b<arguments.length; b++){	
arguments[b].className+=' flipped';
}
return arguments;
}

function deleteMe(){
for(var d=0; d<arguments.length; d++){
arguments[d].parentNode.removeChild(arguments[d]);
  }
return arguments;
}

function flipOrDelete(argFirst,argSecond,arrayList){
if(argFirst===argSecond){
deleteMe(arrayList);
pointsCounter();
}else{
flipMe(arrayList);
}
return arrayList;
}

function setEmptyArray(arr){
return arr.length=0;		
}

function hide(e){
var node=e.currentTarget;
addElem(numArray,node);
setAttr(node);
for(var k=0;k<numArray.length;k++){
	 if(numArray.length===2){
  for(var j=0;j<numArray.length;j++){	
    var comp=numArray[0].childNodes[0].className;	
    var comp2=numArray[1].childNodes[0].className;
  flipOrDelete(comp,comp2,numArray[j])
    }
roundCounter();
setEmptyArray(numArray);
     }
  }
}

// setting event handler
var ps = document.getElementsByClassName('card');
for(var i = 0; i < ps.length; i++){
  ps[i].addEventListener("click", hide);
}

}())


