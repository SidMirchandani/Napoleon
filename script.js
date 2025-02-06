document.addEventListener("DOMContentLoaded", function () {
  /* ===== Timeline Configuration ===== */
  const timelineConfig = {
    point1: {
      imageUrl: "https://files.oaiusercontent.com/file-53CBQxg3thBaNbZYkqcFMw?se=2025-02-06T15%3A35%3A14Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D92418d3b-4220-48bc-9dea-522b757b6242.webp&sig=OkOdZ1fRz3MzHSBqgcvdRIzmWiCmuH0eQTI%2BzeTveJM%3D",
      explanation: "The Holy Roman Empire was a sprawling, decentralized patchwork of states with complex feudal allegiances that had persisted for over a millennium. Internal inefficiencies and competing local interests had long plagued the empire, making unified governance difficult. By the late 18th century, external pressures and the winds of revolutionary change set the stage for transformative upheaval."
    },
    point2: {
      imageUrl: "https://files.oaiusercontent.com/file-3UWDWUuPWnqJSQNusPfYqp?se=2025-02-06T15%3A36%3A10Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Dbce5592a-1a9e-4c76-8d68-0eef4158b2e1.webp&sig=iHp1Pom/BCJ5ww2QOMhjCVKbJ39KwzWxedNxUii%2BmiM%3D",
      explanation: "Napoleon’s ascent to power, following the French Revolution, introduced a new era of military and political innovation that challenged old-world traditions. His campaigns spread revolutionary ideals such as meritocracy, legal equality, and centralized state power across Europe. These forces began undermining the feudal order that had long defined the Holy Roman Empire."
    },
    point3: {
      imageUrl: "https://files.oaiusercontent.com/file-ScPKro4TgKghZq4hq6QYdd?se=2025-02-06T15%3A36%3A55Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D6fece7df-1adf-421f-9842-17398a22739e.webp&sig=TFS44%2BcsNHKuE57ZOqcTMCQhObpUIUWvCYu3HW6DIjE%3D",
      explanation: "After the decisive victory at Austerlitz, Napoleon dictated terms in the Treaty of Pressburg, dramatically redrawing the map of Central Europe. Austria was forced to cede vast territories, weakening its traditional influence within the empire. This treaty marked a turning point, signaling the beginning of the end for the old imperial order."
    },
    point4: {
      imageUrl: "https://files.oaiusercontent.com/file-FnPmQarnBwcvp7EMwZgxCa?se=2025-02-06T15%3A37%3A32Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D524241f2-791b-4161-bcd7-d21622fd48f8.webp&sig=8hkDmwJpjihe0jye1BfqvCnwAU7eM1gfaLntZuuqgYY%3D",
      explanation: "In 1806, confronted by the reorganization of German territories under French influence, Emperor Francis II officially dissolved the Holy Roman Empire. The dissolution ended a millennium-old institution and its feudal governance, clearing the way for modern nation-states. This pivotal act underscored the irreversible shift from medieval allegiances to centralized state power."
    },
    point5: {
      imageUrl: "https://files.oaiusercontent.com/file-Ts7uZLjx4TdZ7qc9GvVAwM?se=2025-02-06T15%3A38%3A45Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Dd9226548-8069-43e5-ae24-14a225fff08e.webp&sig=w9EtIdLsiXHXE6Owjcfbt9q%2B5u1tiHsFxC46gZjqJDs%3D",
      explanation: "Immediately following the dissolution, Napoleon established the Confederation of the Rhine, a coalition of German states aligned with French strategic interests. This new political entity replaced the decentralized framework of the Holy Roman Empire with a more unified structure. It served as both a buffer against Austrian power and a vehicle for spreading Napoleonic reforms throughout Central Europe."
    },
    point6: {
      imageUrl: "https://files.oaiusercontent.com/file-Nd3rovJfUYVZZP2DPH41W3?se=2025-02-06T15%3A39%3A21Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D5b847fef-c21c-451d-bb7d-04d129404d4f.webp&sig=FIb7zHOnRNBDSmYDfIJqYymPmnJ43ALWV7rtFhnBnvc%3D",
      explanation: "Napoleon introduced the Napoleonic Code to the German states within the Confederation, standardizing laws and creating a more uniform administrative framework. The code abolished many archaic feudal privileges and enshrined principles of equality and rational governance. These legal reforms laid the groundwork for modern civil law systems across Europe."
    },
    point7: {
      imageUrl: "https://files.oaiusercontent.com/file-Wej7ohD8VJohgxFLshPUhd?se=2025-02-06T15%3A42%3A15Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Df899546e-eddf-4ddc-9ff6-7957c9fc4f77.webp&sig=pifl0GQvkhIMRfs9oi1Q4ZfOXa/uLc%2BFf0YDTQfVLzk%3D",
      explanation: "Napoleon’s policies led to the secularization of vast church lands, transferring power from ecclesiastical authorities to secular rulers. This process significantly weakened the Catholic Church’s long-held influence in the region. Mediatisation integrated smaller, formerly independent principalities into larger states, further eroding the old feudal order."
    },
    point8: {
      imageUrl: "https://files.oaiusercontent.com/file-J8BCGPbTyeqLTWwrQwRS4Z?se=2025-02-06T15%3A43%3A02Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Dc046b66c-9612-41cc-a06c-de8dc2486e23.webp&sig=bIsW%2B40656MYrEZC2TQb2pDPC6tozewJH97U5AodaNY%3D",
      explanation: "Following Napoleon’s defeat, European powers convened at the Congress of Vienna to restore stability and redraw national boundaries. Despite efforts to reinstate conservative monarchies, the permanent dissolution of the Holy Roman Empire was accepted as the new status quo. The reshaping of Europe at Vienna solidified many Napoleonic reforms, even as it aimed to balance power among the major states."
    },
    point9: {
      imageUrl: "https://files.oaiusercontent.com/file-236RFVkMVpe4pjnsfwd5sp?se=2025-02-06T15%3A43%3A43Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D889a607f-ca70-43c0-b300-31fe21bf4225.webp&sig=XQZyGHiEmPEVHRYl7lhD8YS3O8CLaKe46DmYicdJY98%3D",
      explanation: "In the wake of Napoleonic reforms, a growing sense of German identity began to emerge among the formerly fragmented states. The shift from feudal divisions to centralized administrative structures inspired liberal and nationalist movements that yearned for unity and self-determination. This ideological transformation laid the ideological groundwork for future efforts toward the unification of Germany."
    },
    point10: {
      imageUrl: "https://files.oaiusercontent.com/file-5GjtoRdZ38PKWpgnJnBywj?se=2025-02-06T15%3A44%3A32Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D855d2d2e-3bc5-41fb-b9c8-62f9529af7d5.webp&sig=Kab19aNk0YrJ8H8AT/i3xVtaTduDvHKlLZ7iS/lc7sM%3D",
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

  /* ===== Puzzle Initialization ===== */
  function initializePuzzle(imageUrl, explanationText) {
    // Clear existing board and pieces
    board.innerHTML = "";
    piecesContainer.innerHTML = "";

    // Store the explanation for later use
    currentPuzzleExplanation = explanationText;

    // Configuration variables
    const rows = 4,
      cols = 4;
    const boardWidth = 250;
    const boardHeight = 250;
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
