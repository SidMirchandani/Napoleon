document.addEventListener("DOMContentLoaded", function () {
  /* ===== Timeline Configuration ===== */
  const timelineConfig = {
    point1: {
      imageUrl: "https://i.postimg.cc/BZ7k2XGP/image.png",
      explanation: "The Holy Roman Empire was a sprawling, decentralized patchwork of states with complex feudal allegiances that had persisted for over a millennium. Internal inefficiencies and competing local interests had long plagued the empire, making unified governance difficult. By the late 18th century, external pressures and the winds of revolutionary change set the stage for transformative upheaval."
    },
    point2: {
      imageUrl: "https://i.postimg.cc/9F4SbCW8/image.png",
      explanation: "Napoleon’s ascent to power, following the French Revolution, introduced a new era of military and political innovation that challenged old-world traditions. His campaigns spread revolutionary ideals such as meritocracy, legal equality, and centralized state power across Europe. These forces began undermining the feudal order that had long defined the Holy Roman Empire."
    },
    point3: {
      imageUrl: "https://i.postimg.cc/wBzG9NDZ/562786fb-fb31-4266-b772-2968153bdd66.webp",
      explanation: "After the decisive victory at Austerlitz, Napoleon dictated terms in the Treaty of Pressburg, dramatically redrawing the map of Central Europe. Austria was forced to cede vast territories, weakening its traditional influence within the empire. This treaty marked a turning point, signaling the beginning of the end for the old imperial order."
    },
    point4: {
      imageUrl: "https://i.postimg.cc/6qZP9f1s/08e2195b-8ae2-41a4-89f4-eb8338c62301.webp",
      explanation: "In 1806, confronted by the reorganization of German territories under French influence, Emperor Francis II officially dissolved the Holy Roman Empire. The dissolution ended a millennium-old institution and its feudal governance, clearing the way for modern nation-states. This pivotal act underscored the irreversible shift from medieval allegiances to centralized state power."
    },
    point5: {
      imageUrl: "https://i.postimg.cc/SQY37mQZ/11dbde3b-de0b-487d-aa78-32255a7f9d1c.webp",
      explanation: "Immediately following the dissolution, Napoleon established the Confederation of the Rhine, a coalition of German states aligned with French strategic interests. This new political entity replaced the decentralized framework of the Holy Roman Empire with a more unified structure. It served as both a buffer against Austrian power and a vehicle for spreading Napoleonic reforms throughout Central Europe."
    },
    point6: {
      imageUrl: "https://i.postimg.cc/9M6xNqXL/1d8471ef-6ccd-4477-b54f-84e6898163b2.webp",
      explanation: "Napoleon introduced the Napoleonic Code to the German states within the Confederation, standardizing laws and creating a more uniform administrative framework. The code abolished many archaic feudal privileges and enshrined principles of equality and rational governance. These legal reforms laid the groundwork for modern civil law systems across Europe."
    },
    point7: {
      imageUrl: "https://i.postimg.cc/3wCJw2Vv/2a3a74a2-e01d-4eac-9815-cc68bb1c4c8f.webp",
      explanation: "Napoleon’s policies led to the secularization of vast church lands, transferring power from ecclesiastical authorities to secular rulers. This process significantly weakened the Catholic Church’s long-held influence in the region. Mediatisation integrated smaller, formerly independent principalities into larger states, further eroding the old feudal order."
    },
    point8: {
      imageUrl: "https://i.postimg.cc/sXTjYsVf/db2fdc5b-f0cd-41d2-8d99-9d70358fc274.webp",
      explanation: "Following Napoleon’s defeat, European powers convened at the Congress of Vienna to restore stability and redraw national boundaries. Despite efforts to reinstate conservative monarchies, the permanent dissolution of the Holy Roman Empire was accepted as the new status quo. The reshaping of Europe at Vienna solidified many Napoleonic reforms, even as it aimed to balance power among the major states."
    },
    point9: {
      imageUrl: "https://i.postimg.cc/Rh8vYd6j/417b2315-991b-4b3f-bc46-e3786a3441bb.webp",
      explanation: "In the wake of Napoleonic reforms, a growing sense of German identity began to emerge among the formerly fragmented states. The shift from feudal divisions to centralized administrative structures inspired liberal and nationalist movements that yearned for unity and self-determination. This ideological transformation laid the ideological groundwork for future efforts toward the unification of Germany."
    },
    point10: {
      imageUrl: "https://i.postimg.cc/3x23LgKc/1786dac5-45fc-4271-9355-0d9828b75c9e.webp",
      explanation: "The transformation initiated by Napoleon’s reorganization ultimately culminated in the unification of Germany in 1871 under Prussian leadership. The gradual evolution from a fragmented collection of states to a cohesive nation was deeply rooted in the political and legal changes triggered by the abolition of the Holy Roman Empire. This unification marked the birth of modern Central European politics and underscored Napoleon’s enduring impact on the continent."
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

  function initializePuzzle(imageUrl, explanationText) {
    // Clear existing board and pieces
    board.innerHTML = "";
    piecesContainer.innerHTML = "";

    // Update the full image display
    document.getElementById("full-image").src = imageUrl;

    // Store the explanation for later use
    currentPuzzleExplanation = explanationText;

    // Configuration variables
    const rows = 4, cols = 4;
    const boardWidth = 250, boardHeight = 250;
    const pieceWidth = boardWidth / cols, pieceHeight = boardHeight / rows;

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

    // Create puzzle pieces
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
    if (lockedPieces.length === 16) { // Adjust if grid size changes
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
