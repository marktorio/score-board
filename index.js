let score1El = document.getElementById("score1-el")
let score2El = document.getElementById("score2-el")
/*let quarterEl = document.getElementById("quarter-el")*/
let count1 = 0
let count2 = 0
//Score Board Team A
function plus1() {
    count1 = count1 + 1
    score1El.textContent = count1
}
function plus2() {
    count1 = count1 + 2
    score1El.textContent = count1
}
function plus3() {
    count1 = count1 + 3
    score1El.textContent = count1
}


//Score Board Team B
function add1() {
    count2 = count2 + 1
    score2El.textContent = count2
}
function add2() {
    count2 = count2 + 2
    score2El.textContent = count2
}
function add3() {
    count2 = count2 + 3
    score2El.textContent = count2
}

//Score Board reset button
function reset() {
    let reset = 0
    score1El.textContent = reset
    score2El.textContent = reset
    count1 = 0
    count2 = 0
}

//Quarter Button
/*
function quarter1() {
    quarter1 = "1st Quarter"
    quarterEl.textContent += quarter1
}
function quarter2() {
    quarter2 = "2nd Quarter"
    quarterEl.textContent += quarter2
}
function quarter3() {
    quarter3 = "3rd Quarter"
    quarterEl.textContent += quarter3
}
function quarter4() {
    quarter4 = "4th Quarter"
    quarterEl.textContent += quarter4
}
*/