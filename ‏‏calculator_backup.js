
function showValueInInput() {
    let id
    let val;
    let X, Y;
    let action = "";
    let currentTextValue;

    document.addEventListener('click', clickListener, false)

    function clickListener(event) {
        id = event.target.id;
        val = event.srcElement.value;
        currentTextValue = document.getElementById('showResult').value;
        event.stopImmediatePropagation();

        if (id == 'clear') {
            val = "";
            document.getElementById('showResult').value = val;

        } else if (id == "plus" || id == "minus" || id == "multi" || id == "devide") {
            action = id;

        } else if (id == "equal") {
            let res = calc();
            
            if (res != undefined) {
                document.getElementById('showResult').value = res;
                X = NaN;
                Y = NaN;
                action = "";
            }

        } else {
            if (action == "") {
                if (currentTextValue == "" || currentTextValue == "0") {
                    document.getElementById('showResult').value = val;
                } else if (currentTextValue !== "") {
                    document.getElementById('showResult').value = currentTextValue + val;
                }

            } else if (action != "" && currentTextValue != "0") {
                document.getElementById('showResult').value = currentTextValue + val;
            }

            if (isNaN(X)) {
                X = parseInt(val);
            } else {
                Y = parseInt(val);
            }
        }
    }

    function calc() {
        let res;
        if (isNaN(X) || isNaN(Y) || action == "") {
            return;
        }

        if (action === "plus") {
            res = X + Y;

        } else if (action === "minus") {
            res = X - Y;

        } else if (action === "multi") {
            res = X * Y;

        } else if (action === "devide") {
            res = X / Y;

        }
        return res;
    }

}
