document.addEventListener("DOMContentLoaded", async () => {
  const tableBody = document.getElementById("casinoTable");

  try {
    const response = await fetch("bonuses.json");
    const casinos = await response.json();

    casinos.forEach((casino) => {
      const row = document.createElement("tr");

      row.innerHTML = `
        <td>${casino.casino}</td>
        <td>${casino.welcome_bonus}</td>
        <td>${casino.wagering_requirement}x</td>
        <td>${casino.minimum_deposit}</td>
        <td>
          <a href="${casino.source_url}" target="_blank" rel="noopener noreferrer">
            View Source
          </a>
        </td>
      `;

      tableBody.appendChild(row);
    });
  } catch (error) {
    console.error("Error loading casino data:", error);

    tableBody.innerHTML = `
      <tr>
        <td colspan="5">Unable to load casino bonus data.</td>
      </tr>
    `;
  }
});
