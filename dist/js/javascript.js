function toggle_visibility(id) {
var e = document.getElementById(id);
if(e.style.display == 'flex')
e.style.display = 'none';
else
e.style.display = 'flex';
}

function gotoMain() {
var e = document.getElementById("main-section");
var f = document.getElementById("valkommen");
var g = document.getElementById("offer-bg");
var h = document.getElementById("kontakt");

e.style.display = 'flex';
f.style.display = 'none';
g.style.display = 'none';
h.style.display = 'none';

}
function validate(){
var mq = window.matchMedia( "(min-width: 800px)" );
    
if (mq.matches) {
// window width is at least 800px
document.getElementById("toggle2").checked = false;
document.getElementById("toggle3").checked = false;
}
else {
	// window width is less than 800px
document.getElementById("toggle").checked = false;
document.getElementById("toggle2").checked = false;
document.getElementById("toggle3").checked = false;
}
  }

function showHide(id, id2, id3, id4) {
var e = document.getElementById(id2);
var f = document.getElementById(id3);
var h = document.getElementById(id4);
var g = document.getElementById(id);

e.style.display = 'none';
f.style.display = 'none';
g.style.display = 'flex';
h.style.display = 'none';

validate();   
    
}

function dagensDatum(){

datum = new Date();
dag = datum.getDate();
maanad = datum.getMonth()+1;
aar =datum.getYear();
if(aar<1000){aar=aar+1900}; 
 
var dagens = dag +"/"+ maanad +"/" + aar;
return dagens;
}

function minVerif() {
var frm = document.Premium; 
var falt1 = document.Premium.field1.value;
var falt2 = document.Premium.field2.value; 
var falt3 = document.Premium.field3.value; 
var falt4 = document.Premium.field4.value; 
var falt5 = document.Premium.field5.value; 
var faltorg = document.Premium.fieldorg.value; 
var number = document.Premium.nbr.value;

//Kontrollera om längden är 0, d.v.s. fält tomt
if( falt1.length == 0 ){
    alert("Du måste fylla i förnamn");
    return false;
}
else if( falt2.length == 0 ){ 
    alert("Du måste fylla i efternamn");
    return false;
}
else if( falt3.length == 0 ){ 
    alert("Du måste fylla i din email");
    return false;
}
else if(faltorg.length <10){
    alert("Du kvalifierar dig inte för detta erbjudande. Var god skriv in din information i kontaktformuläret så återkommer vi till dig snarast.");
    showHide('kontakt', 'main-section', 'valkommen', 'skickat');
    return false;
}
else{ 
    var datum = dagensDatum();
    alert(falt1 + " " + falt2 + ", har valt " + falt4 + ". \nDitt företags org. nr är " + faltorg +". Det har varit aktivt i\n"  + number + " månader. \nEmailen vi kommer att kontakta dig på är " + falt3 +". \n\nDitt meddelande: " + falt5 + "\n\n Bekräftat av Elis Designbyrå " + datum);
    showHide('skickat', 'main-section', 'valkommen', 'kontakt');
    return false;
} 
}
 
function minVeriff() {
var frm = document.Privat; 
var falt1 = document.Privat.field1.value;
var falt2 = document.Privat.field2.value; 
var falt3 = document.Privat.field3.value; 
var falt5 = document.Privat.field5.value; 

//Kontrollera om längden är 0, d.v.s. fält tomt
if( falt1.length == 0 ){
    alert("Du måste fylla i förnamn");
    return false;
}
else if( falt2.length == 0 ){ 
    alert("Du måste fylla i efternamn");
    return false;
}
else if( falt3.length == 0 ){ 
    alert("Du måste fylla i din email");
    return false;
}
else{ 
    var datum = dagensDatum();
    alert(falt1 + " " + falt2 + "\nEmailen vi kommer att kontakta dig på är " + falt3 +". \n\nDitt meddelande: " + falt5 + "\n\n Bekräftat av Elis Designbyrå " + datum);
    showHide('valkommen', 'main-section', 'skickat', 'kontakt');
    return false;
} 
}
  


