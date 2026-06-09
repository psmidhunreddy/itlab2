AFRAME.registerComponent('desk', {
init:function(){

var desk=document.createElement('a-entity');

var top=document.createElement('a-box');
top.setAttribute('width',2.4);
top.setAttribute('depth',1);
top.setAttribute('height',0.08);
top.setAttribute('color','#c68642');
top.setAttribute('position','0 1 0');

var leftPanel=document.createElement('a-box');
leftPanel.setAttribute('width',0.08);
leftPanel.setAttribute('depth',1);
leftPanel.setAttribute('height',1);
leftPanel.setAttribute('color','#c68642');
leftPanel.setAttribute('position','-1.16 0.5 0');

var rightSide=document.createElement('a-box');
rightSide.setAttribute('width',0.08);
rightSide.setAttribute('depth',1);
rightSide.setAttribute('height',1);
rightSide.setAttribute('color','#c68642');
rightSide.setAttribute('position','1.16 0.5 0');

var leftSide=document.createElement('a-box');
leftSide.setAttribute('width',0.08);
leftSide.setAttribute('depth',1);
leftSide.setAttribute('height',1);
leftSide.setAttribute('color','#c68642');
leftSide.setAttribute('position','0.44 0.5 0');

var backSide=document.createElement('a-box');
backSide.setAttribute('width',0.08);
backSide.setAttribute('depth',0.8);
backSide.setAttribute('height',1);
backSide.setAttribute('color','#c68642');
backSide.setAttribute('position','0.8 0.5 -0.46'); 
backSide.setAttribute('rotation','0 90 0');

var cabinetBottom=document.createElement('a-box');
cabinetBottom.setAttribute('width',0.8);
cabinetBottom.setAttribute('depth',1);
cabinetBottom.setAttribute('height',0.05);
cabinetBottom.setAttribute('color','#c68642');
cabinetBottom.setAttribute('position','0.8 0.02 0');

var cabinetTop=document.createElement('a-box');
cabinetTop.setAttribute('width',0.8);
cabinetTop.setAttribute('depth',1);
cabinetTop.setAttribute('height',0.05);
cabinetTop.setAttribute('color','#c68642');
cabinetTop.setAttribute('position','0.8 0.75 0');

var drawerEntity=document.createElement('a-entity');
drawerEntity.setAttribute('position','0.8 0.85 0.45');

var drawer=document.createElement('a-box');
drawer.setAttribute('width',0.7);
drawer.setAttribute('depth',0.15);
drawer.setAttribute('height',0.25);
drawer.setAttribute('color','#d9a066');

var drawerHandle=document.createElement('a-cylinder');
drawerHandle.setAttribute('radius',0.02);
drawerHandle.setAttribute('height',0.05);
drawerHandle.setAttribute('rotation','90 0 0');
drawerHandle.setAttribute('color','silver');
drawerHandle.setAttribute('position','0 0 0.1');

drawerEntity.appendChild(drawer);
drawerEntity.appendChild(drawerHandle);

let drawerOpen=false;

drawerEntity.addEventListener('click',function(){

if(!drawerOpen){
drawerEntity.setAttribute('position','0.8 0.85 0.75');
drawerOpen=true;
}
else{
drawerEntity.setAttribute('position','0.8 0.85 0.45');
drawerOpen=false;
}

});

var doorEntity=document.createElement('a-entity');
doorEntity.setAttribute('position','0.8 0.38 0.5'); //0.8 0.85 0.45

var door=document.createElement('a-box');
door.setAttribute('width',0.7);
door.setAttribute('depth',0.05);
door.setAttribute('height',0.64);
door.setAttribute('color','#d9a066');

var doorHandle=document.createElement('a-cylinder');
doorHandle.setAttribute('radius',0.02);
doorHandle.setAttribute('height',0.05);
doorHandle.setAttribute('rotation','90 0 0');
doorHandle.setAttribute('color','silver');
doorHandle.setAttribute('position','0.3 0 0.01');

doorEntity.appendChild(door);
doorEntity.appendChild(doorHandle);

let doorOpen=false;

doorEntity.addEventListener('click',function(){

if(!doorOpen){
doorEntity.setAttribute('rotation','0 -90 0');
doorEntity.setAttribute('position','0.44 0.4 0.5')//0.44 0.5 0'
doorOpen=true;
}
else{
doorEntity.setAttribute('rotation','0 0 0');
doorEntity.setAttribute('position','0.8 0.38 0.5')//0.8 0.38 0.5
doorOpen=false;
}

});

var shelf=document.createElement('a-box');
shelf.setAttribute('width',1.6);
shelf.setAttribute('depth',0.7);
shelf.setAttribute('height',0.05);
shelf.setAttribute('color','#c68642');
shelf.setAttribute('position','-0.4 0.55 -0.1');

desk.appendChild(top);
desk.appendChild(leftPanel);
desk.appendChild(rightSide);
desk.appendChild(leftSide);
desk.appendChild(backSide);
desk.appendChild(cabinetBottom);
desk.appendChild(cabinetTop);
desk.appendChild(drawerEntity);
desk.appendChild(doorEntity);
desk.appendChild(shelf);

this.el.appendChild(desk);

}
});

AFRAME.registerPrimitive('a-desk',{
defaultComponents:{desk:{}}
});

AFRAME.registerComponent('chair',{
 schema:{
  chairPosition:{type:'vec3',default:{x:0,y:0,z:0}},
  chairRotation:{type:'vec3',default:{x:0,y:0,z:0}}
 },

 init:function(){

  var pos=this.data.chairPosition;
  var rot=this.data.chairRotation;

  var chair=document.createElement('a-entity');

  var seat=document.createElement('a-box');
  seat.setAttribute('width',0.6);
  seat.setAttribute('depth',0.6);
  seat.setAttribute('height',0.08);
  seat.setAttribute('color','#eeeeee');
  seat.setAttribute('position','0 0.6 0');

  chair.appendChild(seat);

  var topFrame=document.createElement('a-box');
  topFrame.setAttribute('width',0.6);
  topFrame.setAttribute('height',0.05);
  topFrame.setAttribute('depth',0.05);
  topFrame.setAttribute('color','#5a3e2b');
  topFrame.setAttribute('position','0 1.15 -0.25');

  var bottomFrame=document.createElement('a-box');
  bottomFrame.setAttribute('width',0.6);
  bottomFrame.setAttribute('height',0.05);
  bottomFrame.setAttribute('depth',0.05);
  bottomFrame.setAttribute('color','#5a3e2b');
  bottomFrame.setAttribute('position','0 0.75 -0.25');

  var leftFrame=document.createElement('a-box');
  leftFrame.setAttribute('width',0.05);
  leftFrame.setAttribute('height',0.55);
  leftFrame.setAttribute('depth',0.05);
  leftFrame.setAttribute('color','#5a3e2b');
    leftFrame.setAttribute('position','-0.27 0.85 -0.25');

  var rightFrame=document.createElement('a-box');
  rightFrame.setAttribute('width',0.05);
  rightFrame.setAttribute('height',0.55);
  rightFrame.setAttribute('depth',0.05);
  rightFrame.setAttribute('color','#5a3e2b');
rightFrame.setAttribute('position','0.27 0.85 -0.25');

  chair.appendChild(topFrame);
  chair.appendChild(bottomFrame);
  chair.appendChild(leftFrame);
  chair.appendChild(rightFrame);

  function slat(x){
   var s=document.createElement('a-box');
   s.setAttribute('width',0.02);
   s.setAttribute('height',0.35);
   s.setAttribute('depth',0.02);
   s.setAttribute('color','#5a3e2b');
   s.setAttribute('position',x+' 0.95 -0.25');
   return s;
  }

  chair.appendChild(slat(-0.18));
  chair.appendChild(slat(-0.09));
  chair.appendChild(slat(0));
  chair.appendChild(slat(0.09));
  chair.appendChild(slat(0.18));

  function leg(x,z){
   var l=document.createElement('a-cylinder');
   l.setAttribute('radius',0.04);
   l.setAttribute('height',0.6);
   l.setAttribute('color','#5a3e2b');
   l.setAttribute('position',x+' 0.3 '+z);
   return l;
  }

  chair.appendChild(leg(-0.25,0.25));
  chair.appendChild(leg(0.25,0.25));
  chair.appendChild(leg(-0.25,-0.25));
  chair.appendChild(leg(0.25,-0.25));

  chair.setAttribute('position',pos);
  chair.setAttribute('rotation',rot);

  this.el.appendChild(chair);
 }
});

AFRAME.registerPrimitive('a-chair',{
 defaultComponents:{chair:{}},

 mappings:{
  position:'chair.chairPosition',
  rotate:'chair.chairRotation'
 }
});