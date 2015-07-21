

setClickHandler("symbol" , BySymbol);
setClickHandler("number" , ByNumber);


var Hydrogen = {
	Name: "Hydrogen",
	Symbol: "H" ,
	AtomicNumber:"1"
};
var Carbon = {
	Name:"Carbon",
	Symbol:"C",
	AtomicNumber:"6"
};
var Nitrogen = {
	Name:"Nitrogen",
	Symbol:"N",
	AtomicNumber:"7"
};
var Oxygen = {
	Name:"Oxygen",
	Symbol:"O",
	AtomicNumber:"8"
};
var NUMBERS = {
	"1":"Hydrogen",
	"6":"Carbon",
	"7":"Nitrogen",
	"8":"Oxygen"
};
var SYMBOLS = {
	"H":"Hydrogen",
	"C":"Carbon",
	"N":"Nitrogen",
	"O":"Oxygen"
};
alert(Oxygen.Symbol);


function BySymbol(){
	var getText = (getInput("AtomOrSym"));
	var SymLook = SYMBOLS[getText];
		setHTML("AtomOrSym" , SymLook.Symbol);
		console.log(SymLook.BySymbol);
};
function ByNumber(){
	var getText = (getInput("AtomOrSym"));
	var NumLook = NUMBERS[getText];
		setHTML("AtomOrSym" , NumLook.AtomicNumber);
		console.log(NumLook.AtomicNumber);
};