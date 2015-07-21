

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
	"1":Hydrogen,
	"6":Carbon,
	"7":Nitrogen,
	"8":Oxygen
};
var SYMBOLS = {
	"H":Hydrogen,
	"C":Carbon,
	"N":Nitrogen,
	"O":Oxygen
};
//alert(Oxygen.Symbol);


function BySymbol(){
	var getText = (getInput("AtomOrSym"));
	var SymLook = SYMBOLS[getText];
	if (SymLook == null) {
			setHTML("ElemName" , "");
			setHTML("ElemSym" ,"");
			setHTML("AtomNum" , "");
			alert("Hey, that's not a symbol!");
		}
		//clears Symbol, Name, and Number divs so that any letter that is 
		//not defined alerts NaN
		else {
		setHTML("ElemName" , "Name: " + SymLook.Name);
		setHTML("ElemSym" ,"Symbol: " + SymLook.Symbol);
		setHTML("AtomNum" , "Atomic Number: " + SymLook.AtomicNumber);
		//console.log(SymLook.Symbol);
	}
		
		
	
		
};
function ByNumber(){
	var getText = (getInput("AtomOrSym"));
	var NumLook = NUMBERS[getText];
		if (NumLook == null) {
			setHTML("ElemName" , "");
			setHTML("ElemSym" ,"");
			setHTML("AtomNum" , "");
			alert("Hey, that's not a number!");
		}
		//clears Symbol, Name, and Number divs so that any letter that is 
		//not defined alerts NaN
		else {
		setHTML("ElemName" , "Name: " + NumLook.Name);
		setHTML("ElemSym" ,"Symbol: " + NumLook.Symbol);
		setHTML("AtomNum" , "Atomic Number: " + NumLook.AtomicNumber);
		//console.log(NumLook.AtomicNumber);

	}
		
		
	
};