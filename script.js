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
