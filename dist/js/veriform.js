function verForm(){

var frm = document.forms[0];
var frm = document.Premium; 
   
var falt = document.Premium.elements[0];
var falt = document.Premium.field1;  

var str; //Deklarera en variabel

    //Hämta innehållet i textfältet
  str = document.forms[0].elements[0].value;

    // Visa innehållet i textfältet.
  alert("Textfältet innehåller följande:\n\n" + str);

    //Returnera falskt så att formuläret inte skickas
  return false;    
}