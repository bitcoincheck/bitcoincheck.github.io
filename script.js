var pricern;
var oldprice;
var first = true;
function GetNewPrice()
{
xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function(){
	if(xhttp.readyState === 4 && xhttp.status === 200){
		var output = xhttp.responseText;
		var json = JSON.parse(output);
		pricern = json.last;
   
	}
}
xhttp.open("GET", "https://jsonp.afeld.me/?url=https://www.bitstamp.net/api/v2/ticker/btcusd/", true);
xhttp.setRequestHeader('Content-Type', 'application/json');
xhttp.send();
}
setInterval(function(){
	oldprice = pricern;
	GetNewPrice();
setTimeout(function(){     
for (ii = 1; ii < 7; ii++) {
    for (i = 1; i < 16; i++)	{
		document.getElementsByName(ii+"-"+i)[0].style = "background: #eee;";
	} 
}
TurnOn(pricern[0], 1);
TurnOn(pricern[1], 2);
TurnOn(pricern[2], 3);
TurnOn(pricern[4], 5);
if(first === true) { first = false } else {
if(pricern >= oldprice){ TurnOn("up", 6) } else {
	TurnOn("down", 6);
	 
}	  
	
} }, 100); },5000);
function DoThing()
{
	GetNewPrice();
setTimeout(function(){     
for (ii = 1; ii < 7; ii++) {
    for (i = 1; i < 16; i++)	{
		document.getElementsByName(ii+"-"+i)[0].style = "background: #eee;";
	} 
}
TurnOn(pricern[0], 1);
TurnOn(pricern[1], 2);
TurnOn(pricern[2], 3);
TurnOn(pricern[4], 5); }, 500);
}

function TurnOn(number, group)
{

document.getElementsByName("4-14")[0].style = "background: #000;";
if(number == "up") {
document.getElementsByName(group+"-2")[0].style = "background: #0a0;";
document.getElementsByName(group+"-4")[0].style = "background: #0a0;";
document.getElementsByName(group+"-6")[0].style = "background: #0a0;";	
}
if(number == "down") {
document.getElementsByName(group+"-10")[0].style = "background: #a00;";
document.getElementsByName(group+"-12")[0].style = "background: #a00;";
document.getElementsByName(group+"-14")[0].style = "background: #a00;";	
}
if(number == "0") {
document.getElementsByName(group+"-1")[0].style = "background: #000;";
document.getElementsByName(group+"-2")[0].style = "background: #000;";
document.getElementsByName(group+"-3")[0].style = "background: #000;";
document.getElementsByName(group+"-4")[0].style = "background: #000;";
document.getElementsByName(group+"-6")[0].style = "background: #000;";
document.getElementsByName(group+"-7")[0].style = "background: #000;"; 
document.getElementsByName(group+"-9")[0].style = "background: #000;"; 
document.getElementsByName(group+"-10")[0].style = "background: #000;";
document.getElementsByName(group+"-12")[0].style = "background: #000;";
document.getElementsByName(group+"-13")[0].style = "background: #000;";
document.getElementsByName(group+"-14")[0].style = "background: #000;";
document.getElementsByName(group+"-15")[0].style = "background: #000;";
}
if(number == "1") {
document.getElementsByName(group+"-2")[0].style = "background: #000;";
document.getElementsByName(group+"-5")[0].style = "background: #000;";
document.getElementsByName(group+"-8")[0].style = "background: #000;";
document.getElementsByName(group+"-11")[0].style = "background: #000;";
document.getElementsByName(group+"-14")[0].style = "background: #000;";
}
if(number == "2") {
document.getElementsByName(group+"-1")[0].style = "background: #000;";
document.getElementsByName(group+"-2")[0].style = "background: #000;";
document.getElementsByName(group+"-3")[0].style = "background: #000;";
document.getElementsByName(group+"-6")[0].style = "background: #000;";
document.getElementsByName(group+"-7")[0].style = "background: #000;";
document.getElementsByName(group+"-8")[0].style = "background: #000;";
document.getElementsByName(group+"-9")[0].style = "background: #000;";
document.getElementsByName(group+"-10")[0].style = "background: #000;";
document.getElementsByName(group+"-13")[0].style = "background: #000;";
document.getElementsByName(group+"-14")[0].style = "background: #000;";
document.getElementsByName(group+"-15")[0].style = "background: #000;";
}
if(number == "3"){
document.getElementsByName(group+"-1")[0].style = "background: #000;";
document.getElementsByName(group+"-2")[0].style = "background: #000;";
document.getElementsByName(group+"-3")[0].style = "background: #000;";
document.getElementsByName(group+"-6")[0].style = "background: #000;";
document.getElementsByName(group+"-8")[0].style = "background: #000;";
document.getElementsByName(group+"-9")[0].style = "background: #000;";
document.getElementsByName(group+"-12")[0].style = "background: #000;";
document.getElementsByName(group+"-13")[0].style = "background: #000;";
document.getElementsByName(group+"-14")[0].style = "background: #000;";
document.getElementsByName(group+"-15")[0].style = "background: #000;";
}
if(number == "4"){
document.getElementsByName(group+"-1")[0].style = "background: #000;";
document.getElementsByName(group+"-3")[0].style = "background: #000;";
document.getElementsByName(group+"-4")[0].style = "background: #000;";
document.getElementsByName(group+"-6")[0].style = "background: #000;";
document.getElementsByName(group+"-7")[0].style = "background: #000;";
document.getElementsByName(group+"-8")[0].style = "background: #000;";
document.getElementsByName(group+"-9")[0].style = "background: #000;";
document.getElementsByName(group+"-12")[0].style = "background: #000;";
document.getElementsByName(group+"-15")[0].style = "background: #000;";
}
if(number == "5"){
document.getElementsByName(group+"-1")[0].style = "background: #000;";
document.getElementsByName(group+"-2")[0].style = "background: #000;";
document.getElementsByName(group+"-3")[0].style = "background: #000;";
document.getElementsByName(group+"-4")[0].style = "background: #000;";
document.getElementsByName(group+"-7")[0].style = "background: #000;";
document.getElementsByName(group+"-8")[0].style = "background: #000;";
document.getElementsByName(group+"-9")[0].style = "background: #000;";
document.getElementsByName(group+"-12")[0].style = "background: #000;";
document.getElementsByName(group+"-13")[0].style = "background: #000;";
document.getElementsByName(group+"-14")[0].style = "background: #000;";
document.getElementsByName(group+"-15")[0].style = "background: #000;";
}
if(number == "6"){
document.getElementsByName(group+"-1")[0].style = "background: #000;";
document.getElementsByName(group+"-2")[0].style = "background: #000;";
document.getElementsByName(group+"-3")[0].style = "background: #000;";
document.getElementsByName(group+"-4")[0].style = "background: #000;";
document.getElementsByName(group+"-7")[0].style = "background: #000;";
document.getElementsByName(group+"-8")[0].style = "background: #000;";
document.getElementsByName(group+"-9")[0].style = "background: #000;";
document.getElementsByName(group+"-10")[0].style = "background: #000;";
document.getElementsByName(group+"-12")[0].style = "background: #000;";
document.getElementsByName(group+"-13")[0].style = "background: #000;";
document.getElementsByName(group+"-14")[0].style = "background: #000;";
document.getElementsByName(group+"-15")[0].style = "background: #000;";
}
if(number == "7"){
document.getElementsByName(group+"-1")[0].style = "background: #000;";
document.getElementsByName(group+"-2")[0].style = "background: #000;";
document.getElementsByName(group+"-3")[0].style = "background: #000;";
document.getElementsByName(group+"-6")[0].style = "background: #000;";
document.getElementsByName(group+"-9")[0].style = "background: #000;";
document.getElementsByName(group+"-12")[0].style = "background: #000;";
document.getElementsByName(group+"-15")[0].style = "background: #000;";
}
if(number == "8"){
document.getElementsByName(group+"-1")[0].style = "background: #000;";
document.getElementsByName(group+"-2")[0].style = "background: #000;";
document.getElementsByName(group+"-3")[0].style = "background: #000;";
document.getElementsByName(group+"-4")[0].style = "background: #000;";
document.getElementsByName(group+"-6")[0].style = "background: #000;";
document.getElementsByName(group+"-7")[0].style = "background: #000;";
document.getElementsByName(group+"-8")[0].style = "background: #000;";
document.getElementsByName(group+"-9")[0].style = "background: #000;";
document.getElementsByName(group+"-10")[0].style = "background: #000;";
document.getElementsByName(group+"-12")[0].style = "background: #000;";
document.getElementsByName(group+"-13")[0].style = "background: #000;";
document.getElementsByName(group+"-14")[0].style = "background: #000;";
document.getElementsByName(group+"-15")[0].style = "background: #000;";
}
if(number == "9")
{
document.getElementsByName(group+"-1")[0].style = "background: #000;";
document.getElementsByName(group+"-2")[0].style = "background: #000;";
document.getElementsByName(group+"-3")[0].style = "background: #000;";
document.getElementsByName(group+"-4")[0].style = "background: #000;";
document.getElementsByName(group+"-6")[0].style = "background: #000;";
document.getElementsByName(group+"-7")[0].style = "background: #000;";
document.getElementsByName(group+"-8")[0].style = "background: #000;";
document.getElementsByName(group+"-9")[0].style = "background: #000;";
document.getElementsByName(group+"-12")[0].style = "background: #000;";
document.getElementsByName(group+"-15")[0].style = "background: #000;";
}
}
