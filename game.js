let meatPieces = 21;
let gameActive = false;
let playersTurn = true;


function startGame() {
    meatPieces = 21;
    gameActive = true;
    playersTurn = true;
    drawMeat();

    updateStatus("the meat pile has 21 pieces of meat take one or two pieces");
}

function takeStick(amount) {
    if (!gameActive) {
        updateStatus("Click Start Game first");
        return;
    }

    if (!playersTurn) {
        return;
    }

    if (amount > meatPieces) {
        amount = meatPieces;
    }

    meatPieces -= amount;
    drawMeat();

    if (meatPieces <= 0) {
        updateStatus("The other hyena takes the last piece of meat your a loser!");
        gameActive = false;
        return;
    }

    playersTurn = false;
    updateStatus("You ate " + amount + "\n\ " + meatPieces +"remain.");

    setTimeout(computerTurn, 800);
}

function computerTurn() {
    if (!gameActive) return;

    let compTake;

    if (meatPieces > 10) {
        compTake = Math.ceil(Math.random() * 2);
    } else {
        compTake = (meatPieces % 3 === 0) ? 2 : 1;
    }

    if (compTake > meatPieces) {
        compTake = meatPieces;
    }

    meatPieces -= compTake;
    drawMeat();

    if (meatPieces <= 0) {
        updateStatus(" your Hyena took the last piece of meat You win!");
        gameActive = false;
        return;
    }
    updateStatus(
        "Hyena ate " + compTake + 
        "\n\ " + meatPieces + " remain Your turn"
    );
    playersTurn = true;
}
function updateStatus(message) {
    document.getElementById("logtext").innerText = message;
}

function drawMeat(){
    let pile = "";
    
    for(let i=0;i<meatPieces;i++){
        pile += "🍖";
    }

    document.getElementById("meatPile").innerText = pile;
}
