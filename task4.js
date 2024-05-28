
// Sum of all numbers in an array //
const array = [1, 2, 3, 4];
let sum = 0;

for (let i = 0; i < array.length; i++) {
    sum += array[i];
}
console.log(sum);
// Sum of all numbers in an array Ends hear//




// Return all the prime numbers in an array starts hear //

const lowerNumber = parseInt(prompt('Enter lower number: '));
const higherNumber = parseInt(prompt('Enter higher number: '));

console.log(`The prime numbers between ${lowerNumber} and ${higherNumber} are:`);

for (let i = lowerNumber; i <= higherNumber; i++) {
    let flag = 0;
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            flag = 1;
            break;
        }
    }

    if (i > 1 && flag == 0) {
        console.log(i);
    }
}
// Return all the prime numbers in an array Ends hear //


// Rotate an array by k times starts hear //

	function leftRotate(arr , d , n) {
		for (i = 0; i < d; i++)
			leftRotatebyOne(arr, n);
	}

	function leftRotatebyOne(arr , n) {
		var i, temp;
		temp = arr[0];
		for (i = 0; i < n - 1; i++)
			arr[i] = arr[i + 1];
		arr[n - 1] = temp;
	}

	
	function printArray(arr , n) {
		for (i = 0; i < n; i++)
			document.write(arr[i] + " ");
	}
		var arr = [ 1, 2, 3, 4, 5, 6, 7 ];
		leftRotate(arr, 2, 7);
		printArray(arr, 7);

// Rotate an array by k times Ends hear //


// Remove duplicates from an array Starts hear//
var removeDuplicatesInPlace = function (arr) {
    var i, j, cur, found;
    for (i = arr.length - 1; i >= 0; i--) {
        cur = arr[i];
        found = false;
        for (j = i - 1; !found && j >= 0; j--) {
            if (cur === arr[j]) {
                if (i !== j) {
                    arr.splice(i, 1);
                }
                found = true;
            }
        }
    }
    return arr;
};

var removeDuplicatesGetCopy = function (arr) {
    var ret, len, i, j, cur, found;
    ret = [];
    len = arr.length;
    for (i = 0; i < len; i++) {
        cur = arr[i];
        found = false;
        for (j = 0; !found && (j < len); j++) {
            if (cur === arr[j]) {
                if (i === j) {
                    ret.push(cur);
                }
                found = true;
            }
        }
    }
    return ret;
};
// Remove duplicates from an array Ends hear//


// Return median of two sorted arrays of same size Starts hear//
function getMedian(ar1, ar2, n)
{
	var i = 0; 
	var j = 0; 
	var count;
	var m1 = -1, m2 = -1;

	for (count = 0; count <= n; count++)
	{
		
		if (i == n)
		{
			m1 = m2;
			m2 = ar2[0];
			break;
		}

		else if (j == n)
		{
			m1 = m2;
			m2 = ar1[0];
			break;
		}
		
		if (ar1[i] <= ar2[j])
		{
			m1 = m2; 
			m2 = ar1[i];
			i++;
		}
		else
		{
			m1 = m2; 
			m2 = ar2[j];
			j++;
		}
	}

	return (m1 + m2)/2;
}


var ar1 = [1, 12, 15, 26, 38];
var ar2 = [2, 13, 17, 30, 45];
var n1 = ar1.length;
var n2 = ar2.length;
if (n1 == n2)
	document.write("Median is "+ getMedian(ar1, ar2, n1));
else
	document.write("Doesn't work for arrays of unequal size");


// Return median of two sorted arrays of same size Ends hear//


// Return all the palindromes in an array Starts hear //
let palindromeArray = (arr) => {
     let isPalindrome = true;
     for(let i = 0; i < arr.length / 2; i++) {
         if(arr[i] !== arr[arr.length - i - 1]){
           isPalindrome = false; 
           break;
         }
     }
     
     return isPalindrome;
} 
console.log(palindromeArray([1,2,2,1]));
console.log(palindromeArray([1,2,2,2]));
const lowerNumber1 = parseInt(prompt('Enter lower number: '));
const higherNumber1 = parseInt(prompt('Enter higher number: '));

console.log(`The prime numbers between ${lowerNumber1} and ${higherNumber1} are:`);
for (let i = lowerNumber1; i <= higherNumber1; i++) {
    let flag = 0;
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            flag = 1;
            break;
        }
    }
    if (i > 1 && flag == 0) {
        console.log(i);
    }
}
// Return all the palindromes in an array Ends hear //

// Print odd numbers in an array Starts hear //
for (i = 10; i <= 20; i++) {
    if (i % 2 != 0) {
        console.log(i);
    }
}
// Print odd numbers in an array ends hear //