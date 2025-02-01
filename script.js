// Add this to your script.js file
const datasets = [
    {
        name: "Form A",
        description: "Application for Case Filing",
        link: "forms/form_a.pdf"
    },
    {
        name: "Form B",
        description: "Affidavit Template",
        link: "forms/form_b.pdf"
    },
    {
        name: "Document 1",
        description: "Court Rules and Regulations",
        link: "documents/rules.pdf"
    },
    {
        name: "Document 2",
        description: "Judicial Guidelines",
        link: "documents/guidelines.pdf"
    }
];

// Function to load datasets into the table
function loadDatasets(filter = "") {
    const tableBody = document.querySelector("#datasetTable tbody");
    tableBody.innerHTML = ""; // Clear existing rows

    datasets.forEach((item) => {
        if (item.name.toLowerCase().includes(filter.toLowerCase()) || 
            item.description.toLowerCase().includes(filter.toLowerCase())) {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${item.name}</td>
                <td>${item.description}</td>
                <td><a href="${item.link}" download>Download</a></td>
            `;
            tableBody.appendChild(row);
        }
    });
}

// Function to handle search
function searchDatasets() {
    const searchInput = document.getElementById("searchInput").value;
    loadDatasets(searchInput);
}

// Load datasets on page load
document.addEventListener("DOMContentLoaded", () => {
    loadDatasets();
});