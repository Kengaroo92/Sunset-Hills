let userInput1 = parseInt(document.getElementById("userInputA").value);
let userInput2 = parseInt(document.getElementById("userInputB").value);
let userInput3 = parseInt(document.getElementById("userInputC").value);
let userInput4 = parseInt(document.getElementById("userInputD").value);
let userInput5 = parseInt(document.getElementById("userInputE").value);
let userInput6 = parseInt(document.getElementById("userInputF").value);

    let userArray = [userInput1, userInput2, userInput3, userInput4, userInput5, userInput6];
    let buildArray = [];
    let count = 1;
    let currentMax = userArray[0];
        buildArray.push(currentMax);

    function sunsetHills() {
        for (let i = 0; i < userArray.length; i++) {

            if (userArray[i] > currentMax) {
                count++;
                buildArray += userArray[i];
                currentMax = userArray[i];
            }
            document.getElementById("sunshine").innerHTML = count + buildArray;
        }
    }