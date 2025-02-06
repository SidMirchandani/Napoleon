document.addEventListener("DOMContentLoaded", function () {
  /* ===== Timeline Configuration ===== */
  const timelineConfig = {
    point1: {
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Jacques-Louis_David_-_The_Coronation_of_Napoleon_%281805-1807%29.jpg/435px-Jacques-Louis_David_-_The_Coronation_of_Napoleon_%281805-1807%29.jpg",
      explanation: "Napoleon was crowned in a grand ceremony symbolizing his power."
    },
    point2: {
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDuXRsUi_vW5fZKRvlB41OoexUjhckdOrURQ&s",
      explanation: "Van Gogh's 'Starry Night' is one of the most famous paintings in the world."
    },
    point3: {
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg",
      explanation: "The Mona Lisa, painted by Leonardo da Vinci, is known for its mysterious smile."
    },
    point4: {
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/a/a3/The_Great_Wave_off_Kanagawa.jpg",
      explanation: "Hokusai's 'The Great Wave' is a masterpiece of Japanese woodblock printmaking."
    },
    point5: {
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/e/ec/The_Scream.jpg",
      explanation: "Edvard Munch's 'The Scream' expresses anxiety and existential dread."
    }
  };

  /* ===== Timeline Navigation ===== */
  const timelinePoints = document.querySelectorAll(".timeline-point");
  const timelineGroups = document.querySelectorAll(".timeline-group");
  const board = document.getElementById("puzzle-board");
  const piecesContainer = document.getElementById("puzzle-pieces");
  const popup = document.getElementById("puzzle-popup");
  const popupTitle = document.getElementById("popup-title");
  const popupInfo = document.getElementById("popup-info");
  const closeBtn = popup.querySelector(".close-btn");

  let currentPuzzleExplanation = ""; // Store the current puzzle's explanation

  timelinePoints.forEach((btn) => {
    btn.addEventListener("click", function () {
      // Hide all timeline groups
      timelineGroups.forEach((group) => (group.style.display = "none"));
      // Remove active state from all buttons
      timelinePoints.forEach((b) => b.classList.remove("active"));
      // Show the selected timeline group
      const timelineId = btn.getAttribute("data-timeline");
      document.getElementById(timelineId).style.display = "block";
      btn.classList.add("active");

      // Retrieve the configuration for the selected timeline
      const config = timelineConfig[timelineId];

      // Initialize the puzzle with the selected image
      initializePuzzle(config.imageUrl, config.explanation);
    });
  });

  /* ===== Puzzle Initialization ===== */
  function initializePuzzle(imageUrl, explanationText) {
    // Clear existing board and pieces
    board.innerHTML = "";
    piecesContainer.innerHTML = "";

    // Store the explanation for later use
    currentPuzzleExplanation = explanationText;

    // Configuration variables
    const rows = 3,
      cols = 3;
    const boardWidth = 300;
    const boardHeight = 300;
    const pieceWidth = boardWidth / cols;
    const pieceHeight = boardHeight / rows;

    // Set up the puzzle board (drop zones)
    board.style.width = boardWidth + "px";
    board.style.height = boardHeight + "px";
    board.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${rows}, 1fr)`;

    // Create drop zones for each cell
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const cell = document.createElement("div");
        cell.classList.add("drop-zone");
        cell.style.width = pieceWidth + "px";
        cell.style.height = pieceHeight + "px";
        cell.dataset.correctIndex = r * cols + c;

        cell.addEventListener("dragover", function (e) {
          e.preventDefault();
        });

        cell.addEventListener("drop", function (e) {
          e.preventDefault();
          const pieceId = e.dataTransfer.getData("text/plain");
          const piece = document.getElementById(pieceId);
          const correctIndex = cell.dataset.correctIndex;

          if (piece.dataset.index === correctIndex) {
            cell.appendChild(piece);
            piece.classList.add("locked");
            piece.setAttribute("draggable", "false");
            checkPuzzleCompletion();
          } else {
            cell.style.borderColor = "red";
            setTimeout(() => {
              cell.style.borderColor = "#ccc";
            }, 500);
          }
        });

        board.appendChild(cell);
      }
    }

    // Create puzzle pieces and store them in an array
    let piecesArray = [];
    for (let i = 0; i < rows * cols; i++) {
      const piece = document.createElement("div");
      piece.classList.add("puzzle-piece");
      piece.id = "piece-" + i;
      piece.dataset.index = i;
      piece.style.width = pieceWidth + "px";
      piece.style.height = pieceHeight + "px";
      piece.style.backgroundImage = `url(${imageUrl})`;
      piece.style.backgroundSize = `${boardWidth}px ${boardHeight}px`;

      const row = Math.floor(i / cols);
      const col = i % cols;
      piece.style.backgroundPosition = `-${col * pieceWidth}px -${row * pieceHeight}px`;
      piece.setAttribute("draggable", "true");

      piece.addEventListener("dragstart", function (e) {
        piece.classList.add("dragging");
        e.dataTransfer.setData("text/plain", piece.id);
      });

      piece.addEventListener("dragend", function () {
        piece.classList.remove("dragging");
      });

      piecesArray.push(piece);
    }

    // Shuffle the pieces randomly
    piecesArray.sort(() => Math.random() - 0.5);

    // Append shuffled pieces to the pieces container
    piecesArray.forEach((piece) => {
      piecesContainer.appendChild(piece);
    });
  }

  /* ===== Check if Puzzle is Completed ===== */
  function checkPuzzleCompletion() {
    const lockedPieces = document.querySelectorAll(".puzzle-piece.locked");
    if (lockedPieces.length === 9) { // Adjust if grid size changes
      setTimeout(() => {
        popupInfo.innerText = currentPuzzleExplanation;
        popup.classList.add("visible");
      }, 500);
    }
  }

  /* ===== Close the Puzzle Completion Popup ===== */
  closeBtn.addEventListener("click", function () {
    popup.classList.remove("visible");
  });

  // Initialize the first puzzle on page load
  initializePuzzle(timelineConfig.point1.imageUrl, timelineConfig.point1.explanation);
});
