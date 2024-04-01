// Prompt pentru a solicita numele jucătorului
var playerName = prompt("Hai să jucăm X și 0. Cum te cheamă?");

// Afișăm mesajul de salut și solicităm jucătorului să aleagă cu ce să joace
var Xsau0 = prompt("Bună, " + playerName + ". Cu ce vrei să joci? X sau 0? X începe primul.");

// Inițializăm tabla de joc
var gameBoard = ["?", "?", "?", "?", "?", "?", "?", "?", "?"];

// Funcție pentru a afișa tabla de joc
function printtt(board) {
    var display = "| " + board[0] + " | " + board[1] + " | " + board[2] + " |\n";
    display += "| " + board[3] + " | " + board[4] + " | " + board[5] + " |\n";
    display += "| " + board[6] + " | " + board[7] + " | " + board[8] + " |";
    return display;
}

// Funcție pentru a verifica dacă o poziție este validă
function isValid(position) {
    if (position >= 1 && position <= 9 && gameBoard[position - 1] === "?") {
        return true;
    } else {
        return false;
    }
}

// Funcție pentru a solicita și a valida poziția introdusă de jucător
function getPlayerMove() {
    var position = parseInt(prompt("Unde vrei să pui următorul semn? (Introdu numărul corespunzător poziției)"));
    if (isValid(position)) {
        return position;
    } else {
        alert("Poziția introdusă nu este validă. Te rog să introduci o poziție validă.");
        return getPlayerMove(); // Repetăm pasul dacă poziția nu este validă
    }
}

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
function computerMove() {
    var position = Math.floor(Math.random() * 9) + 1;
    if (isValid(position)) {
        return position;
    } else {
        return computerMove();
    }
}

// Funcție pentru a verifica starea jocului și a afișa mesaje corespunzătoare
function checkGameState() {
    var winner = win(gameBoard);
    if (winner) {
        alert("Bravo, " + playerName + ", ai câștigat!");
        return true;
    } else if (draw(gameBoard)) {
        alert("Remiză!");
        return true;
    }
    return false;
}

// Jocul propriu-zis
while (true) {
    // Afișăm tabla de joc și solicităm următoarea mișcare a jucătorului
    alert(printtt(gameBoard));
    var playerMove = getPlayerMove();
    gameBoard[playerMove - 1] = Xsau0;

    // Verificăm starea jocului după mutarea jucătorului
    if (checkGameState()) {
        break;
    }

    // Mutarea calculatorului
    var computerMovePosition = computerMove();
    gameBoard[computerMovePosition - 1] = (Xsau0 === "X") ? "0" : "X";

    // Verificăm starea jocului după mutarea calculatorului
    if (checkGameState()) {
        break;
    }
}
