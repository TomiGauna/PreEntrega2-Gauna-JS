class Cap{
    constructor(colour, price){
        this.colour = colour;
        this.price = price;
    }
}

const caps = [
    new Cap("green", 5200),
    new Cap("red", 4800),
    new Cap("black", 6100),
    new Cap("white", 5900),
    new Cap("blue", 5500),
    new Cap("yellow", 5000),
    new Cap("violet", 5700),
];


function getChosenProduct(){

    let chosenColour = prompt("Enter the colour of the cap you want to buy (green, red, black, white, blue, yellow or violet)");
    const chosenCap = caps.find(cap => cap.colour === chosenColour);
    
       if (chosenColour == "green" ||
       chosenColour == "red" ||
       chosenColour == "black" ||
       chosenColour == "white" ||
       chosenColour == "blue" ||
       chosenColour == "yellow" ||
       chosenColour == "violet") {   
            alert ("You have chosen the " + chosenCap["colour"] + " gap. It has a value of $" + chosenCap.price);
            return chosenCap

       } else {
            alert("You have to enter a valid colour")
            return getChosenProduct()
       }

}

const chosenProduct = getChosenProduct();

let userFees;

function getUserFees() {

    userFees = Number(prompt("Select the number of fees that be more suitable to you to pay (1, 3, 6, 8, 12)"))
    if (userFees != 1 && userFees != 3 && userFees != 6 && userFees != 8 && userFees != 12) {
            alert("Select an appropiate quantity of fees")
            return getUserFees()
    }

   
}



let eachFeeValue;
let oneFeeInterest = chosenProduct.price;
let threeFeesInterest = chosenProduct.price * 1.1;
let sixFeesInterest = chosenProduct.price * 1.3;
let eightFeesInterest = chosenProduct.price * 1.5;
let twelveFeesInterest = chosenProduct.price * 1.8;




/*const eachFeeValue = calcFees()*/

function calculateFees() {
    if (userFees == 1) {
        eachFeeValue = oneFeeInterest;
        return alert("You have to pay " + userFees + " fee of $" + eachFeeValue + " on a total price of $" + oneFeeInterest)
    }

    if (userFees == 3) {
        eachFeeValue = threeFeesInterest / userFees;
        return alert("You have to pay " + userFees + " fees of $" + eachFeeValue + " on a total price of $" + threeFeesInterest)
    }

    if (userFees == 6) {
        eachFeeValue = sixFeesInterest / userFees;
        return alert("You have to pay " + userFees + " fees of $" + eachFeeValue + " on a total price of $" + sixFeesInterest)
    }

    if (userFees == 8) {
        eachFeeValue = eightFeesInterest / userFees;
        return alert("You have to pay " + userFees + " fees of $" + eachFeeValue + " on a total price of $" + eightFeesInterest)
    }

    if (userFees == 12) {
        eachFeeValue = twelveFeesInterest / userFees;
        return alert("You have to pay " + userFees + " fees of $" + eachFeeValue + " on a total price of $" + twelveFeesInterest)
    }

}

getUserFees();

calculateFees();

/*alert (userFees + " fees of " + eachFeeValue)

function calcFees(userFees) {
    if (userFees == 1) {
        return (oneFeeInterest) => oneFeeInterest / userFees
    } 
    
    if (userFees == 3) {
        return (threeFeesInterest) => threeFeesInterest / userFees
    } 

    if (userFees == 6) {
        return (sixFeesInterest) => sixFeesInterest / userFees
    } 

    if (userFees == 8) {
        return (eightFeesInterest) => eightFeesInterest / userFees
    } 

    if (userFees == 12) {
        return (twelveFeesInterest) => twelveFeesInterest / userFees
    } 

    
}*/