/* Welcome alert
    When you type a name, the word "hello" appears and the entered name
*/

var name = prompt('Enter your name'); //writes in the appearing frame
alert('Hello, ' + name);    /* welcome alert */
console.log('Hello, ' + name); //script to save the result to the console

var a = prompt('give me a number a');
var h = prompt('give me a number h');

triangleArea = a*h/2;

function getTriangleArea(a, h) {
if (a <= 0 || h <= 0) {
	return ('Incorrect data');
	}else
	return a*h/2;
	}
	console.log(getTriangleArea(a, h));
    console.log('Triangle field with base a: ' + a + ' and height h: ' + h + ' is equal to: ' + triangleArea);

    alert('Triangle field with base a: ' + a + ' and height h: ' + h + ' is equal to: ' + triangleArea);


    var x = prompt('give me a number x');
    var y = prompt('give me a number y');
    var value = (x * x) + (2 * x * y) - (y * y);

    switch (true) {
        case (value > 0) :
            alert('Number ' + value + ' is positive');
            console.log('Number ' + value + ' is positive');
            break;
        case (value < 0) :
            alert('Number ' + value + ' is negative');
            console.log('Number ' + value + ' is negative');
            break;
        case (value === 0) :
            alert('Your result is ' + value);
            console.log('Your result is ' + value);
            break;
        default:
            console.log('You have not entered a number. Refresh the page and try again');
    };