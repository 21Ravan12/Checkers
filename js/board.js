// js/board.js
const board = document.getElementById("board");

// Tahtayı oluştur
function createBoard() {
    const boardFragment = document.createDocumentFragment(); // Performans için DocumentFragment kullan
    const boardArray = []; // Tahtayı tutmak için dizi

    for (let row = 1; row <= 8; row++) {
        for (let col = 1; col <= 8; col++) {
            const square = document.createElement("div");
            square.dataset.row = row;
            square.dataset.col = col;
            square.classList.add("square"); // Her kare için temel "square" sınıfı

            // Alternatif kare rengi (satır ve sütun toplamına göre siyah/beyaz)
            if ((row + col) % 2 === 0) {
                square.classList.add("white-square");
            } else {
                square.classList.add("black-square");

                // Siyah karelere taşları yerleştir
                if (row < 4) {
                    const piece = document.createElement("div");
                    piece.classList.add("black-piece");
                    square.appendChild(piece);
                } else if (row > 5) {
                    const piece = document.createElement("div");
                    piece.classList.add("white-piece");
                    square.appendChild(piece);
                }
            }

            boardFragment.appendChild(square); // Kareyi fragment'e ekle
            boardArray.push(square); // Kareyi tahtaya ekle
        }
    }

    board.appendChild(boardFragment); // Fragment'i DOM'a tek seferde ekle
    return boardArray;
}

createBoard();
