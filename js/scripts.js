//function

function getTriangleArea(a, h) {

        if (a <= 0 || h <= 0) {
            return ('Incorrect data');
        }

        return (a * h / 2);
    }

    function countShortMultiplicationFormulas(x, y) {
        var result = (x * x) + (2 * x * y) - (y * y);

        /*Check if the result is positive */
        if (result > 0) {
            alert('Number ' + result + ' is positive');
            console.log('Number ' + result + ' is positive');

            return;
        }

        /*Check if the result is negative */
        if (result < 0) {
            alert('Number ' + result + ' is negative');
            console.log('Number ' + result + ' is negative');

            return;
        }

        //alert if function takes a result of 0
        alert('Your result is ' + result);
        console.log('Your result is ' + result);
    }

    var name = prompt('Enter your name'); //writes in the appearing frame
    alert('Hello, ' + name);    /* welcome alert */
    console.log('Hello, ' + name); //script to save the result to the console

    var a = prompt('give me a number a');
    var h = prompt('give me a number h');

    var triangleArea = a * h / 2;

    console.log(getTriangleArea(a, h));

    console.log('Triangle field with base a: ' + a + ' and height h: ' + h + ' is equal to: ' + triangleArea);
    alert('Triangle field with base a: ' + a + ' and height h: ' + h + ' is equal to: ' + triangleArea);

    var x = prompt(' give me a number x');
    var y = prompt(' give me a number y');

    console.log(countShortMultiplicationFormulas(x, y));