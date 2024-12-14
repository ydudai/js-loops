let eqPressed = false;
function setEqualPressed(isPressed) {
    eqPressed = isPressed;
}

function showValueInInput() {
    let val;
    let id
    let X, Y;
    let action = "";
    let currentTextValue;

    document.addEventListener('click', clickListener, false)

    function clickListener(event) {
        let res;
        id = event.target.id;
        val = event.srcElement.value;
        currentTextValue = document.getElementById('showResult').value;
        event.stopImmediatePropagation();

        if (id == 'clear') {
            val = "";
            document.getElementById('showResult').value = val;
            event.stopImmediatePropagation();

        } else if (id == "plus" || id == "minus" || id == "multi" || id == "devide") {
            action = val;
            document.getElementById('showResult').value = currentTextValue + val
            event.stopImmediatePropagation();

        } else if (id == "equal") {
            let expression = document.getElementById('showResult').value;
            res = calc(expression);

            if (res != NaN) {
                document.getElementById('showResult').value = res;
                event.stopImmediatePropagation();
                X = NaN;
                Y = NaN;
                action = "";
                res = null;
            }

        } else {
            if (eqPressed) {
                document.getElementById('showResult').value = val;
            } else {
                document.getElementById('showResult').value = currentTextValue + val
                event.stopImmediatePropagation();               
            }
            eqPressed = false;
        }
    }

    function calc(expression) {
        let res;

        let XY = String(expression).split(action);
        if (XY.length == 2) {
            X = parseInt(XY[0]);
            Y = parseInt(XY[1]);
        }

        if (isNaN(X) || isNaN(Y) || action == "") {
            return;
        }

        if (action === "+") {
            res = X + Y;

        } else if (action === "-") {
            res = X - Y;

        } else if (action === "*") {
            res = X * Y;

        } else if (action === "/") {
            res = X / Y;

        }
        return res;
    }
}
