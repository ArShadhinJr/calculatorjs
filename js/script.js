let one = document.querySelector( '.one' );
let two = document.querySelector( '.two' );
let three = document.querySelector( '.three' );
let four = document.querySelector( '.four' );
let five = document.querySelector( '.five' );
let six = document.querySelector( '.six' );
let seven = document.querySelector( '.seven' );
let eight = document.querySelector( '.eight' );
let nine = document.querySelector( '.nine' );
let zero = document.querySelector( '.zero' );
let plus = document.querySelector( '.plus' );
let minus = document.querySelector( '.minus' );
let multi = document.querySelector( '.multi' );
let devition = document.querySelector( '.devition' );
let modulas = document.querySelector( '.modulas' );
let equal = document.querySelector( '.equal' );
let deleteDisplay = document.querySelector( '.delete' );
let mainDisplay = document.querySelector( '.main-display' );
let checkDisplay = document.querySelector( '.check-display' );
let ans = document.querySelector( '.ans' );

one.addEventListener( 'click', function () {
    mainDisplay.innerHTML = mainDisplay.innerHTML + one.value; 
})
ans.addEventListener( 'click', function () {
    mainDisplay.innerHTML = checkDisplay.innerHTML; 
})
two.addEventListener( 'click', function () {
    mainDisplay.innerHTML = mainDisplay.innerHTML + two.value; 
})
three.addEventListener( 'click', function () {
    mainDisplay.innerHTML = mainDisplay.innerHTML + three.value; 
})
four.addEventListener( 'click', function () {
    mainDisplay.innerHTML = mainDisplay.innerHTML + four.value; 
})
five.addEventListener( 'click', function () {
    mainDisplay.innerHTML = mainDisplay.innerHTML + five.value; 
})
six.addEventListener( 'click', function () {
    mainDisplay.innerHTML = mainDisplay.innerHTML + six.value; 
})
seven.addEventListener( 'click', function () {
    mainDisplay.innerHTML = mainDisplay.innerHTML + seven.value; 
})
eight.addEventListener( 'click', function () {
    mainDisplay.innerHTML = mainDisplay.innerHTML + eight.value; 
})
nine.addEventListener( 'click', function () {
    mainDisplay.innerHTML = mainDisplay.innerHTML + nine.value; 
})
zero.addEventListener( 'click', function () {
    mainDisplay.innerHTML = mainDisplay.innerHTML + zero.value; 
})
plus.addEventListener( 'click', function () {
    mainDisplay.innerHTML = mainDisplay.innerHTML + plus.value; 
})
minus.addEventListener( 'click', function () {
    mainDisplay.innerHTML = mainDisplay.innerHTML + minus.value; 
})
multi.addEventListener( 'click', function () {
    mainDisplay.innerHTML = mainDisplay.innerHTML + multi.value; 
})
equal.addEventListener( 'click', function () {
    checkDisplay.innerHTML = eval( mainDisplay.innerHTML );
    mainDisplay.innerHTML = '';
})
devition.addEventListener( 'click', function () {
    mainDisplay.innerHTML = mainDisplay.innerHTML + devition.value; 
})
deleteDisplay.addEventListener( 'click', function () {
    mainDisplay.innerHTML = '';
    checkDisplay.innerHTML = '';

})