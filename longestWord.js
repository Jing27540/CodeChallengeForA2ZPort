
function findLongest (str) {

    // empty str
    if (str == null || str === "") {
        console.error("Invalid inputs");
        return;
    }

    // splits a string into an array of substrings by space.
    arr = str.split(' ');
    // console.log(arr);

    // find the longest length
    lengthest = 0;
    longest = [];

    // loop each elements in arr
    for(var i = 0; i < arr.length; i++) {
        if (arr[i].replace(/[^\w\s]|\d+/gi, '') !== null && arr[i].length > lengthest) {
            longest = [];
            lengthest = arr[i].length;
            longest.push(arr[i].replace(/[^\w\s]|\d+/gi, ''));
        }else if (arr[i] !== null && arr[i].length === lengthest) {
            longest.push(arr[i].replace(/[^\w\s]|\d+/gi, ''));
        }
    }

    console.log(longest);

    // If there are multiple words of the same length, choose one that has the highest number of vowels.
    if (longest.length > 1) {
        numOfVowels = 0;
        for (var a = 0; a < longest.length; a++){
            count = (longest[a].match(/[aeiou]/gi)).length;
            if (count !== null && count > numOfVowels) {
                longest[0] = longest[a];
            }
        }
    }

    console.log(longest[0]);
    return longest[0];
}

// test case 1: the code with given valid input value
findLongest ("Smart people learn from everything and everyone, average people from their experience, stupid people already, have all the answers");

// test case 2: the code with same length words
// cherry: e [1] orange: o, a, e [3]
findLongest ("cherry is cherry not orange");

// test case 3: the code with empty input or empty string
findLongest ();
findLongest ("");

// // test the code with not an English letter
// findLongest ("@C2D\ CAfe C,GEE ABCS)("); // sth. error 

