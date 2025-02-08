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

// Game Variables
let gold = 40;
let army = 30;
let morale = 1.0; // New parameter: 1.0 is neutral morale.
let turn = 0;
let year = 1792;
let monthIndex = 3;

// Countries (each starts as neutral with a given starting army)
let countries = [
  { name: "Austria", strength: 50, status: "Neutral", army: 40 },
  { name: "Prussia", strength: 40, status: "Neutral", army: 30 },
  { name: "Britain", strength: 60, status: "Neutral", army: 50 },
  { name: "Spain", strength: 45, status: "Neutral", army: 35 },
  { name: "Russia", strength: 70, status: "Neutral", army: 60 },
  { name: "Portugal", strength: 30, status: "Neutral", army: 20 },
  { name: "Piedmont-Sardinia", strength: 35, status: "Neutral", army: 25 }
];

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const goldPerTurn = 10;
const recruitCost = 10;
const attackCost = 0;
const enemyRecruitRate = 5;
const enemyCountryConflictChance = 0.1; // NEW: 10% chance each turn for an enemy to initiate conflict against another enemy

// Per-turn action records (using country names as keys)
let warDeclaredThisTurn = {};   // For "Declare War"
let attackUsedThisTurn = {};      // For "Attack"
let peaceOfferedThisTurn = {};    // For "Make Peace"

// UI Update: updates stats on screen and checks game status
function updateStats() {
  document.getElementById('gold').innerText = gold;
  document.getElementById('army').innerText = army;
  document.getElementById('morale').innerText = morale.toFixed(2);
  document.getElementById('turn').innerText = turn;
  document.getElementById('date').innerText = `${months[monthIndex]} ${year}`;

  let conqueredList = countries
  .filter(c => c.status === "Conquered")
  .map(c => `${c.name} (Army: ${c.army})`)
  .join(", ") || "None";
  let warList = countries
  .filter(c => c.status === "At War")
  .map(c => `${c.name} (Army: ${c.army})`)
  .join(", ") || "None";
  let remainingList = countries
  .filter(c => c.status === "Neutral")
  .map(c => `${c.name} (Army: ${c.army})`)
  .join(", ") || "None";

  document.getElementById('conquered-countries').innerText = conqueredList;
  document.getElementById('countries-at-war').innerText = warList;
  document.getElementById('remaining-countries').innerText = remainingList;

  checkGameStatus();
}

// Check Win/Loss Conditions (do not reload; just log and disable actions)
function checkGameStatus() {
  if (army <= 0) {
    logMessage("❌ Game Over! Your army has been destroyed.");
    disableAllActions();
  }
  if (countries.every(c => c.status === "Conquered")) {
    logMessage("🎉 Victory! You have conquered all nations!");
    disableAllActions();
  }
}

// Disable all actions when the game ends
function disableAllActions() {
  document.querySelectorAll("button").forEach(button => {
    button.disabled = true;
  });
}

// Clear the event log (so that only the current turn’s events are shown)
function clearLog() {
  document.getElementById("event-log").innerHTML = "";
}

// Log message: prepends new messages so the most recent appears at the top
function logMessage(message) {
  let logElement = document.getElementById("event-log");
  logElement.innerHTML = `<p>${message}</p>` + logElement.innerHTML;
}

// Recruit Soldiers
function recruitSoldiers() {
  if (gold >= recruitCost) {
    army += 5;
    gold -= recruitCost;
    logMessage("You recruited 5 soldiers! ⚔️ (-10 Gold)");
  } else {
    logMessage("Not enough gold to recruit! ❌");
  }
  updateStats();
}

// Show Declare War Menu & hide other submenus
function showDeclareWarMenu() {
  document.getElementById("attack-menu").style.visibility = "hidden";
  document.getElementById("peace-menu").style.visibility = "hidden";

  let declareWarMenu = document.getElementById("declare-war-menu");
  declareWarMenu.innerHTML = "";
  declareWarMenu.style.visibility = "visible";

  let neutralCountries = countries.filter(c => c.status === "Neutral");
  if (neutralCountries.length === 0) {
    declareWarMenu.innerHTML = "<p>No available targets.</p>";
  } else {
    neutralCountries.forEach(country => {
      let btn = document.createElement("button");
      // Display country name along with current army info
      btn.innerText = `${country.name} (Army: ${country.army})`;
      btn.onclick = () => declareWar(country.name);
      declareWarMenu.appendChild(btn);
    });
  }
}

// Declare War on a country
function declareWar(countryName) {
  if (warDeclaredThisTurn[countryName]) {
    logMessage(`You have already declared war on ${countryName} this turn.`);
    return;
  }
  let country = countries.find(c => c.name === countryName);
  if (!country) return;
  country.status = "At War";
  warDeclaredThisTurn[countryName] = true;
  logMessage(`You have declared war on ${country.name} (Army: ${country.army})! ⚔️`);
  updateStats();
}

// Show Attack Menu & hide other submenus
function showAttackMenu() {
  document.getElementById("declare-war-menu").style.visibility = "hidden";
  document.getElementById("peace-menu").style.visibility = "hidden";

  let attackMenu = document.getElementById("attack-menu");
  attackMenu.innerHTML = "";
  attackMenu.style.visibility = "visible";

  let warCountries = countries.filter(c => c.status === "At War");
  if (warCountries.length === 0) {
    attackMenu.innerHTML = "<p>No available targets.</p>";
  } else {
    warCountries.forEach(country => {
      let btn = document.createElement("button");
      btn.innerText = `${country.name} (Army: ${country.army})`;
      btn.onclick = () => attackCountry(country.name);
      attackMenu.appendChild(btn);
    });
  }
}

// Attack a country (using diminishing returns and morale)
// Cannot attack the same country on the same turn that you declared war on it.
function attackCountry(countryName) {
  if (attackUsedThisTurn[countryName]) {
    logMessage(`You have already attacked ${countryName} this turn.`);
    return;
  }
  if (warDeclaredThisTurn[countryName]) {
    logMessage(`You cannot attack ${countryName} on the same turn you declared war on it.`);
    return;
  }
  let country = countries.find(c => c.name === countryName);
  if (!country) return;
  if (gold < attackCost || army <= 0) {
    logMessage("Not enough gold or troops to attack! ❌");
    return;
  }
  gold -= attackCost;

  // Calculate effective power using diminishing returns and morale.
  let playerPower = (1 + morale * 0.001) * (Math.sqrt(army) * 10 + Math.random() * 30);
  let enemyPower = (Math.sqrt(country.army) * 10 + Math.random() * 30);

  if (playerPower > enemyPower) {
    // Victory: enemy loses 10 soldiers, you gain 20 soldiers.
    country.army -= 10;
    gold += 20;
    morale = Math.min(morale + 0.1, 2.0);
    logMessage(`Victory in battle! ${country.name} (Army: ${country.army}) lost 10 soldiers. (+20 Gold, Morale increased) ⚔️`);
    if (country.army <= 0) {
      country.status = "Conquered";
      gold += 400;
      logMessage(`You have fully conquered ${country.name} (Army: 0)! (+400 Gold)`);
    }
  } else {
    // Loss: you lose 10 soldiers and morale decreases.
    army -= 10;
    morale = Math.max(morale - 0.1, 0.5);
    logMessage(`Attack on ${country.name} (Army: ${country.army}) failed! You lost 10 soldiers. (Morale decreased)`);
  }
  attackUsedThisTurn[countryName] = true;
  updateStats();
}

// Show Make Peace Menu & hide other submenus
function showPeaceMenu() {
  document.getElementById("declare-war-menu").style.visibility = "hidden";
  document.getElementById("attack-menu").style.visibility = "hidden";

  let peaceMenu = document.getElementById("peace-menu");
  peaceMenu.innerHTML = "";
  peaceMenu.style.visibility = "visible";

  let warCountries = countries.filter(c => c.status === "At War");
  if (warCountries.length === 0) {
    peaceMenu.innerHTML = "<p>No ongoing wars.</p>";
  } else {
    warCountries.forEach(country => {
      let btn = document.createElement("button");
      btn.innerText = `${country.name} (Army: ${country.army})`;
      btn.onclick = () => makePeace(country.name);
      peaceMenu.appendChild(btn);
    });
  }
}

// Attempt to make peace with a country (only one attempt per country per turn)
function makePeace(countryName) {
  if (peaceOfferedThisTurn[countryName]) {
    logMessage(`You have already attempted peace with ${countryName} this turn.`);
    return;
  }
  peaceOfferedThisTurn[countryName] = true;
  let country = countries.find(c => c.name === countryName);
  if (country && country.status === "At War") {
    if (Math.random() < 1/3) {
      logMessage(`${country.name} (Army: ${country.army}) declined your peace offer!`);
    } else {
      country.status = "Neutral";
      logMessage(`Peace treaty signed with ${country.name} (Army: ${country.army}). ✌️`);
    }
  }
  updateStats();
}

// AI Enemy Actions: simulate enemy recruiting, occasional war declarations on you, enemy attacks,
// and now also enemy countries attacking each other.
function simulateEnemyActions() {
  // Process each enemy country's actions against you
  countries.forEach(country => {
    if (country.status !== "Conquered") {
      // Recruitment: add a base amount with a small chance for a bonus.
      if (Math.random() < 0.05) {
        country.army += 10;
      } else {
        country.army += enemyRecruitRate;
      }
      // A neutral country may declare war on you (1 in 15 chance)
      if (country.status === "Neutral" && Math.random() < (1/15)) {
        country.status = "At War";
        logMessage(`${country.name} (Army: ${country.army}) has declared war on you! ⚔️`);
      }
      // If a country is at war, it may attack you.
      if (country.status === "At War" && Math.random() < 0.5) {
        let enemyPower = Math.sqrt(country.army) * 10 + Math.random() * 30;
        let playerPower = morale * (Math.sqrt(army) * 10 + Math.random() * 30);
        if (playerPower > enemyPower) {
          country.army -= 10;
          army += 20;
          morale = Math.min(morale + 0.1, 2.0);
          logMessage(`${country.name} (Army: ${country.army}) attacked you but lost the battle! They lost 10 soldiers. (+20 Army, Morale increased) ⚔️`);
          if (country.army <= 0) {
            country.status = "Conquered";
            gold += 400;
            logMessage(`You have fully conquered ${country.name} (Army: 0)! (+400 Gold)`);
          }
        } else {
          army -= 10;
          morale = Math.max(morale - 0.1, 0.5);
          logMessage(`${country.name} (Army: ${country.army}) attacked you and won the battle. You lost 10 soldiers. (Morale decreased)`);
        }
      }
    }
  });

  // NEW: Simulate enemy countries attacking each other.
  // We'll ensure each country can participate in at most one enemy conflict per turn.
  let enemyConflictThisTurn = {};
  countries.forEach(attacker => {
    if (attacker.status !== "Conquered" && !enemyConflictThisTurn[attacker.name] && Math.random() < enemyCountryConflictChance) {
      // Choose a target among other non-conquered enemy countries not yet involved in conflict this turn.
      let potentialTargets = countries.filter(target => target.name !== attacker.name && target.status !== "Conquered" && !enemyConflictThisTurn[target.name]);
      if (potentialTargets.length > 0) {
        let target = potentialTargets[Math.floor(Math.random() * potentialTargets.length)];
        // Calculate battle strengths for attacker and target.
        let attackerPower = Math.sqrt(attacker.army) * 10 + Math.random() * 30;
        let defenderPower = Math.sqrt(target.army) * 10 + Math.random() * 30;
        if (attackerPower > defenderPower) {
          target.army -= 10;
          logMessage(`${attacker.name} attacked ${target.name} and won! ${target.name} lost 10 soldiers.`);
          if (target.army <= 0) {
            target.status = "Conquered";
            logMessage(`${target.name} has been conquered by ${attacker.name}!`);
          }
        } else {
          attacker.army -= 10;
          logMessage(`${attacker.name} attacked ${target.name} but lost! ${attacker.name} lost 10 soldiers.`);
          if (attacker.army <= 0) {
            attacker.status = "Conquered";
            logMessage(`${attacker.name} has been conquered by ${target.name}!`);
          }
        }
        // Mark both as having participated in enemy conflict this turn.
        enemyConflictThisTurn[attacker.name] = true;
        enemyConflictThisTurn[target.name] = true;
      }
    }
  });
}

// End Turn: clear log (so only current turn events show), simulate enemy actions, update turn info, reset per-turn records, and hide all submenus.
function endTurn() {
  clearLog();
  simulateEnemyActions();

  turn++;
  gold += goldPerTurn;
  monthIndex++;
  if (monthIndex >= 12) {
    monthIndex = 0;
    year++;
  }

  logMessage(`Turn ${turn} ended. Income received. (+${goldPerTurn} Gold)`);

  // Reset per-turn records
  warDeclaredThisTurn = {};
  attackUsedThisTurn = {};
  peaceOfferedThisTurn = {};

  // Hide all submenus
  document.getElementById("declare-war-menu").style.visibility = "hidden";
  document.getElementById("attack-menu").style.visibility = "hidden";
  document.getElementById("peace-menu").style.visibility = "hidden";

  updateStats();
}

// Initialize UI: clear the log and update stats initially.
clearLog();
updateStats();
