let GreenCapPrice = 5200
let RedCapPrice = 4800
let BlackCapPrice = 6100
let WhiteCapPrice = 5900
let BlueCapPrice = 5500
let YellowCapPrice = 5000
let VioletCapPrice = 5700
let price

function getProduct(){
    let product = prompt("Enter the product you want to buy (green cap, red cap, black cap, white cap, black cap, yellow cap, violet cap");
    switch (product) {
        case "green cap":
            alert("You have chosen the green cap. It costs $" + GreenCapPrice)
            price = GreenCapPrice
            break;
        
        case "red cap":
            alert("You have chosen the red cap. It costs $" + RedCapPrice)
            price = RedCapPrice
            break;
    
        case "black cap":
            alert("You have chosen the black cap. It costs $" + BlackCapPrice)
            price = BlackCapPrice
            break;

        case "white cap":
            alert("You have chosen the white cap. It costs $" + WhiteCapPrice)
            price = WhiteCapPrice
            break;
        
        case "yellow cap":
            alert("You have chosen the yellow cap. It costs $" + YellowCapPrice)
            price = YellowCapPrice
            break;

        case "violet cap":
            alert("You have chosen the violet cap. It costs $" + VioletCapPrice)
            price = VioletCapPrice
            break;
        
        case "blue cap":
            alert("You have chosen the blue cap. It costs $" + BlueCapPrice)
            price = BlueCapPrice
            break;

        default:
            alert("You have to choose an existent item")
            break;
    }
return price;
}

function getNumberOfFees() {
    let NumberOfFees = Number(prompt("Enter the number of monthly fees in what you want to pay: 1, 3, 6, 8, or 12"))
    if ((NumberOfFees != 1 ) || (NumberOfFees != 3) || (NumberOfFees != 6) || (NumberOfFees != 8) || (NumberOfFees = 12)) {
        alert("Enter a valid number of fees");
        //getNumberOfFees()
    
    let feeValue
    let interestOneFee = price
    let interestThreeFees = price * 1.1 //10%
    let interestSixFees = price * 1.3 //30%
    let interestEightFees = price * 1.5 //50%
    let interestTwelveFees = price * 1.8//80%
  
    
    if (NumberOfFees == 1) {

        feeValue = interestOneFee / NumberOfFees
        alert("You have to pay " + NumberOfFees + " fee of $" + feeValue + " on a total price of $" + interestOneFee)
    }

    if (NumberOfFees == 3) {

        feeValue = interestThreeFees / NumberOfFees
        alert("You have to pay " + NumberOfFees + " fees of $" + feeValue + " on a total price of $" + interestThreeFees + " charging 10% of interests")
    }

    if (NumberOfFees == 6) {

        feeValue = interestSixFees / NumberOfFees
        alert("You have to pay " + NumberOfFees + " fees of $" + feeValue + " on a total price of $" + interestSixFees + " charging 30% of interests")
    }

    if (NumberOfFees == 8) {

        feeValue = interestEightFees / NumberOfFees
        alert("You have to pay " + NumberOfFees + " fees of $" + feeValue + " on a total price of $" + interestEightFees + " charging 50% of interests")
    }

    if (NumberOfFees == 12) {

        feeValue = interestTwelveFees / NumberOfFees
        alert("You have to pay " + NumberOfFees + " fees of $" + feeValue + " on a total price of $" + interestTwelveFees + " charging 80% of interests")
    }

}
}
getProduct()

getNumberOfFees()

