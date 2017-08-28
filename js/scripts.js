/* Welcome alert
    When you type a name, the word "hello" appears and the entered name
*/

var name = prompt('Enter your name'); //writes in the appearing frame
alert('Hello, ' + name);    /* welcome alert */
console.log('Hello, ' + name); //script to save the result to the console

var a = prompt('podaj liczbę a');
var h = prompt('podaj liczbę h');

triangleArea = a*h/2;

function getTriangleArea(a, h) {
if (a <= 0 || h <= 0) {
	return ('Incorrect data');
	}else
	return a*h/2;
	}
	console.log(getTriangleArea(a, h));
    console.log('Triangle field with base a: ' + a + ' and height h: ' + h + ' is equal to: ' + triangleArea);