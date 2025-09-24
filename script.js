function createTable() {
  // Ask for number of rows
  let rn = prompt("Input number of rows");
  let cn = prompt("Input number of columns");

  // Convert inputs to integers
  rn = parseInt(rn);
  cn = parseInt(cn);

  // Validate input
  if (isNaN(rn) || isNaN(cn)) {
    alert("Please enter valid numeric values.");
    return;
  }
  if (rn <= 0 || cn <= 0) {
    alert("Number of rows and columns must be greater than 0.");
    return;
  }

  // Get reference to table
  const table = document.getElementById("myTable");

  // Clear existing table before creating new one
  table.innerHTML = "";

  // Create rows and columns
  for (let i = 0; i < rn; i++) {
    const row = document.createElement("tr");

    for (let j = 0; j < cn; j++) {
      const cell = document.createElement("td");
      cell.textContent = `Row-${i} Column-${j}`;
      row.appendChild(cell);
    }

    table.appendChild(row);
  }
}
