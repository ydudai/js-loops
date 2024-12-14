// --------------- Ex 1 -----------
// --------------------------------
function checkID(id) {
    let isId = true;
    let sId = String(id);
    if (sId.length != 9) {
        return false;
    }

    let ch = "";
    let num = 0;
    for (let index = 0; index < sId.length; index++) {
        ch = sId.charAt(index);
        num = parseInt(ch);
        if (isNaN(num)) {
            isId = false;
            break;
        }
    }
    return isId;
}

// Call the check function when pressing "Enter"
const inputElem = document.getElementById("inputNumber").addEventListener("keyup", function (event) {
    let val = this.value;
    if (event.key === "Enter") {
        let isId = checkID(val);
        console.log("isId = " + isId);
    }
});
// ------------------------------------------

// --------------- Ex 2 -----------
// --------------------------------
function isPrime(num) {
    let isPrime = true;

    if (num % 2 == 0 || num % 5 == 0 || num % 10 == 0) {
        isPrime = false;
    } else {
        for (let i = 2; i < num - 1; i++) {
            if (num % i == 0) {
                isPrime = false;
                break;
            }
        }
    }

    return isPrime;
}

let num = 9;
let bIsPrime = isPrime(num);
console.log("isprime = " + bIsPrime);
// ------------------------------------------

// --------------- Ex 3 -----------
// --------------------------------
function setSpcaces(inStr) {
    let outStr = "";
    let charCode;;
    let ch;

    for (let i = 0; i < String(inStr).length; i++) {
        ch = String(inStr).charAt(i);
        charCode = String(inStr).charCodeAt(i)
        if (charCode >= 65 && charCode <= 90) {
            outStr = outStr + " " + ch;
        } else if (charCode >= 97 && charCode <= 122) {
            outStr = outStr + ch;
        }
    }
    return outStr;
}
let outStr = setSpcaces("abCdEf");
console.log("outStr = " + outStr);
// ------------------------------------------

// ------------------ Ex 4 ------------------
// ------------------------------------------
function findStrings(s1, s2) {
    let strs = String(s1).split(s2);
    let numStrs = strs.length - 1;
    return numStrs;

}

let nStrs = findStrings("YoxxssiDxxudxxai", "xx");
console.log("num substrings = " + nStrs);

nStrs = findStrings("YoxxssiDxxudaixx", "xx");
console.log("num substrings = " + nStrs);

nStrs = findStrings("xxYoxxssiDxxudai", "xx");
console.log("num substrings = " + nStrs);
// ------------------------------------------

// ------------------ Ex 5 ------------------
// ------------------------------------------
function mySort(s1) {
    let n = String(s1).length;
    let strArr = String(s1).split('');

    let i, j, temp;
    let swapped;
    for (i = 0; i < n - 1; i++) {
        swapped = false;
        for (j = 0; j < n - i - 1; j++) {
            if (strArr[j] > strArr[j + 1]) {
                // Swap arr[j] and arr[j+1]
                temp = strArr[j];
                strArr[j] = strArr[j + 1];
                strArr[j + 1] = temp;
                swapped = true;
            }
        }

        // IF no two elements were 
        // swapped by inner loop, then break
        if (swapped == false)
            break;
    }

    var newStr = strArr.join('');
    return newStr;
}

let origString = "fcab";
let sortedStr = mySort("fcab");
console.log("Orig string:" + origString + " Sorted string: " + sortedStr);
// ------------------------------------------
