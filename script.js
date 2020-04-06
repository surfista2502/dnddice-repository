var rollFour = document.getElementById("D4");
var rollSix = document.getElementById("D6")
var rollEight = document.getElementById("D8")
var rollTen = document.getElementById("D10")
var rollTwelve = document.getElementById("D12")
var rollFourteen = document.getElementById("D14")
var rollSixteen = document.getElementById("D16")
var rollEighteen = document.getElementById("D18")
var rollTwenty = document.getElementById("D20")


function DiceFour () {
const rollDiceFour = Math.floor (Math.random() *4) + 1;	
rollFour.innerHTML = `${rollDiceFour}`;
}

function DiceSix () {
const rollDiceSix = Math.floor (Math.random() *6) + 1;	
rollSix.innerHTML = `${rollDiceSix}`;
}

function DiceEight () {
const rollDiceEight = Math.floor (Math.random() *8) + 1;	
rollEight.innerHTML = `${rollDiceEight}`;
}

function DiceTen () {
const rollDiceTen = Math.floor (Math.random() *10) + 1;	
rollTen.innerHTML = `${rollDiceTen}`;
}

function DiceTwelve () {
const rollDiceTwelve = Math.floor (Math.random() *12) + 1;	
rollTwelve.innerHTML = `${rollDiceTwelve}`;
}

function DiceFourteen () {
const rollDiceFourteen = Math.floor (Math.random() *14) + 1;	
rollFourteen.innerHTML = `${rollDiceFourteen}`;
}

function DiceSixteen () {
const rollDiceSixteen = Math.floor (Math.random() *16) + 1;	
rollSixteen.innerHTML = `${rollDiceSixteen}`;
}

function DiceEighteen () {
const rollDiceEighteen = Math.floor (Math.random() *18) + 1;	
rollEighteen.innerHTML = `${rollDiceEighteen}`;
}

function DiceTwenty () {
const rollDiceTwenty = Math.floor (Math.random() *20) + 1;	
rollTwenty.innerHTML = `${rollDiceTwenty}`;
}




