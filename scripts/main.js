let userinput1 = parseInt(document.getElementById("userInputA").value);
let userinput2 = parseInt(document.getElementById("userInputB").value);
let userinput3 = parseInt(document.getElementById("userInputC").value);
let userinput4 = parseInt(document.getElementById("userInputD").value);
let userinput5 = parseInt(document.getElementById("userInputE").value);
let userinput6 = parseInt(document.getElementById("userInputF").value);

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
            document.getElementById("sunshine").innerHTML = `There are: ${count} that get sunshine. Those buildings are: ${buildArray}`;
        }
    }