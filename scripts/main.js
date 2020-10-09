
function sunsetHills() {

    let userInput1 = parseInt(document.getElementById("userInput1").value);
    let userInput2 = parseInt(document.getElementById("userInput2").value);
    let userInput3 = parseInt(document.getElementById("userInput3").value);
    let userInput4 = parseInt(document.getElementById("userInput4").value);
    let userInput5 = parseInt(document.getElementById("userInput5").value);
    let userInput6 = parseInt(document.getElementById("userInput6").value);

    let userArray = [userInput1, userInput2, userInput3, userInput4, userInput5, userInput6];
    let buildArray = [];
    let count = 1;
    let currentMax = userArray[0];
    buildArray.push(currentMax);

        for (let i = 0; i < userArray.length; i++) {

            if (userArray[i] > currentMax) {
                count++;
                buildArray.push(userArray[i]) ;
                currentMax = userArray[i];
            }
            document.getElementById("sunshine").innerHTML = `${count} buildings can see the sun. Those are buildings [${buildArray.join()}]`;
        }
    }