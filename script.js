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

