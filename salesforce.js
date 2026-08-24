// Categorized Content Arrays
const agentforceVideos = [
    // Add your agentforce items here
    {
        id: "AZ9ROTPyUAY",
        title: "How to create Agentforce Service Agent | Salesforce Agentforce Service Agent With Demo Use Case"
    },
    {
        id: "eM2rU3lyf_I",
        title: "How to Deploy Agentforce Service Agent into Experience Cloud in 2026 | Step by Step Process"
    },
    {
        id: "pbcHTpgL6Ww",
        title: "How to Escalate Work from Agentforce Service agent to Human agent in 2026 #salesforce  #agentforce"
    },
    {
        id: "zn9BEKJQeaU",
        title: "How to Deploy Salesforce Agent from One Org to Another Using Agentforce DX in 2026"
    }
];

const headless360Videos = [
  // Add headless360Videos items here
    {
        id: "PiZd4tdk0uw",
        title: "How to Connect Claude with Salesforce using MCP Server | What is Salesforce Headless 360"
    }
];

const lwcVideos = [
  // Add LWC items here
];

const dataCloudVideos = [
  // Add Data Cloud items here
];

// Helper function to render cards into target containers
function renderSection(items, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    if (items.length === 0) {
        container.innerHTML = `<p style="text-align: center; color: #777;">Coming soon!</p>`;
        return;
    }

    items.forEach(video => {
        container.innerHTML += `
            <div class="video">
                <a href="https://www.youtube.com/watch?v=${video.id}" target="_blank">
                    <img src="https://img.youtube.com/vi/${video.id}/maxresdefault.jpg" alt="${video.title}">
                </a>
                <div class="video-title">
                    <b>${video.title}</b>
                </div>
            </div>
        `;
    });
}

// Render all sections
renderSection(agentforceVideos, "agentforceContainer");
renderSection(headless360Videos, "headless360Container");
renderSection(lwcVideos, "lwcContainer");
renderSection(dataCloudVideos, "datacloudContainer");

// Search function across all Salesforce video cards
function searchSalesforce() {
    const keyword = document.getElementById("sfSearchInput").value.toLowerCase();
    const cards = document.querySelectorAll(".video");

    cards.forEach(card => {
        const text = card.innerText.toLowerCase();
        card.style.display = text.includes(keyword) ? "" : "none";
    });
}

document.getElementById("sfSearchInput").addEventListener("keyup", searchSalesforce);