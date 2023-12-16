let Dollars = 0
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        Dollars = Dollars + 1
        basic.showNumber(Dollars)
    } else if (input.buttonIsPressed(Button.B)) {
        Dollars = 0
        basic.showNumber(Dollars)
    } else {
    	
    }
})
