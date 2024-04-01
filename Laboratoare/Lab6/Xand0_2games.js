// Funcție pentru a verifica dacă există o configurație de câștig și returnează simbolul câștigător
function win(board) {
    // Verificăm rândurile
    for (var i = 0; i < 3; i++) {
        if (board[i * 3] !== "?" && board[i * 3] === board[i * 3 + 1] && board[i * 3 + 1] === board[i * 3 + 2]) {
            return board[i * 3];
        }
    }

    // Verificăm coloanele
    for (var i = 0; i < 3; i++) {
        if (board[i] !== "?" && board[i] === board[i + 3] && board[i + 3] === board[i + 6]) {
            return board[i];
        }
    }

    // Verificăm diagonalele
    if ((board[0] !== "?" && board[0] === board[4] && board[4] === board[8]) ||
        (board[2] !== "?" && board[2] === board[4] && board[4] === board[6])) {
        return board[4];
    }

    // Nu există configurație de câștig
    return null;
}

// Funcție pentru a verifica dacă tabla este într-o configurație de remiză
function draw(board) {
    for (var i = 0; i < board.length; i++) {
        if (board[i] === "?") {
            // Dacă există celule goale, jocul nu este într-o configurație de remiză
            return false;
        }
    }
    // Dacă nu există celule goale și nu există un câștigător, jocul este într-o configurație de remiză
    return true;
}

// Funcție pentru a obține mutarea calculatorului
function computerMove(board) {
    var position = Math.floor(Math.random() * 9) + 1;
    if (isValid(position, board)) {
        return position;
    } else {
        return computerMove(board);
    }
}

// Funcție pentru a verifica starea jocului și a afișa mesaje corespunzătoare
function checkGameState(board, playerName) {
    var winner = win(board);
    if (winner) {
        alert("Bravo, " + playerName + ", ai câștigat!");
        return true;
    } else if (draw(board)) {
        alert("Remiză!");
        return true;
    }
    return false;
}

// Jocul propriu-zis
function playGame(playerName, Xsau0) {
    var gameBoard = ["?", "?", "?", "?", "?", "?", "?", "?", "?"];

    while (true) {
        // Afișăm tabla de joc și solicităm următoarea mișcare a jucătorului
        alert("Tabla de joc pentru " + Xsau0 + ":\n" + printtt(gameBoard));

        // Jucătorul face mutarea
        var playerMove = getPlayerMove(gameBoard);
        gameBoard[playerMove - 1] = Xsau0;

        // Verificăm starea jocului după mutarea jucătorului
        if (checkGameState(gameBoard, playerName)) {
            break;
        }

        // Mutarea calculatorului
        var computerMovePosition = computerMove(gameBoard);
        gameBoard[computerMovePosition - 1] = (Xsau0 === "X") ? "0" : "X";

        // Verificăm starea jocului după mutarea calculatorului
        if (checkGameState(gameBoard, playerName)) {
            break;
        }
    }
}

// Prompt pentru a solicita numele jucătorului
var playerName = prompt("Hai să jucăm X și 0. Cum te cheamă?");

// Jucăm două jocuri diferite
playGame(playerName, "X");
playGame(playerName, "0");
