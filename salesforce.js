function openCard() {
  closeCard();
  document.getElementById("infoCard").classList.add("active");
}

function closeCard() {
  document.getElementById("infoCard").classList.remove("active");
  document.getElementById("infoCardcloudcomputing").classList.remove("active");
  document.getElementById("infoCardMachineLearning").classList.remove("active");
  document.getElementById("infoCardInternetOfThings").classList.remove("active");
}

function openCardCloudComputing() {
  closeCard();
  document.getElementById("infoCardcloudcomputing").classList.add("active");
}

function openCardMachineLearning(){
  closeCard();
  document.getElementById("infoCardMachineLearning").classList.add("active");
}

function openCardInternetOfThings(){
  closeCard();
  document.getElementById("infoCardInternetOfThings").classList.add("active");
}

const playlists = [
  //Add new Playlist here
  {
        id: "PLY_Tm8wxSnLE",
        thumbnail: "MCPC4XZCXH4",
        title: "Programming in Java July - Nov 2026 NPTEL Assignment Answers"
  },
  {
        id: "PLqRJbI_zl_SgYA7QK3oKbY8zADrhM7aPt",
        thumbnail: "oMbdvQFxZ7w",
        title: "DBMS NPTEL July-Nov 2026 Assignment Answers"
  },
  {
        id: "PLBI3ssHC4qVE",
        thumbnail: "jZb3fsNCDiE",
        title: "Introduction to Machine Learning Numericals Questions"
  },
  {
        id: "PLN52t0P3dmh8",
        thumbnail: "_1qszf4-Dmg",
        title: "Cloud Computing Assignment Questions and Answers NPTEL July-Nov 2026"
  },
  {
        id: "PLqRJbI_zl_Shy_ALn9WxwDTFsDOpSQp-T",
        thumbnail: "OgbtrfKBZ98",
        title: "Programming in Java Jan 2026 Assignment & Programming Assignment Answers"
  },
  {
        id: "PLqRJbI_zl_ShP9LcRebOG70FRUG0BH2Z_",
        thumbnail: "f9PgUnJKC8I",
        title: "Cloud Computing assignment Jan 2026 Assignement Answers Playlist"
  },
  {
        id: "PLqRJbI_zl_Sjjkrela3PPEBmEBU0Sx6JI",
        thumbnail: "Ir8eYze_syw",
        title: "Introduction to Machine Learning Jan 2026 Assignment Answers"
  },
  {
        id: "PLqRJbI_zl_SgIpICsPG6X2TSgbNVcaTxE",
        thumbnail: "AZ9ROTPyUAY",
        title: "Salesforce Agentforce Agents | Service Agents | How to Deploy Service Agent"
  },
  {
      id: "PLqRJbI_zl_Sjf6HUe_iSjn7mpC14j-1Kh",
      thumbnail: "Y7Kc6fhZj8k",
      title: "Introduction to Machine Learning Exam Preparation"
  },
  {
      id: "PLqRJbI_zl_SgYA7QK3oKbY8zADrhM7aPt",
      thumbnail: "mcH2SIdsglo",
      title: "Database Management System Jan 2026 Assignment Answers"
  },
  {
      id: "PLqRJbI_zl_Sgypw48-WfAFigfcD5afDHl",
      thumbnail: "84wMLjTKAZg",
      title: "Introduction to Internet of Things Jan 2026"
  },  
  {
        id: "PLqRJbI_zl_SjlpaeUbpUNGGmJewt3Es-i",
        thumbnail: "kQkcXhME1co",
        title: "Database Management System (DBMS) Jan 2025"
  }
];

const playlistContainer = document.getElementById("playlistContainer");

playlists.forEach(playlist => {

    playlistContainer.innerHTML += `
        <div class="video">

            <a href="https://www.youtube.com/playlist?list=${playlist.id}" target="_blank">

                <img src="https://img.youtube.com/vi/${playlist.thumbnail}/maxresdefault.jpg"
                     alt="${playlist.title}">

            </a>

            <div class="video-title">
                <b>${playlist.title}</b>
            </div>

        </div>
    `;

});

const videos = [
  //Add new Video here
  {
    id: "Y7Kc6fhZj8k",
    title: "Machine Learning NPTEL Exam Preparation 2025 | How to Prepare for Introduction to Machine Learning"
  },
  {
    id: "E7oJN_JMFVU",
    title: "How to prepare for Programming in Java Proctored exam(final exam) | NPTEL | October 25 2025"
  },
  {
    id: "OgbtrfKBZ98",
    title: "Programming in Java week 12 Programming assignment 1 to 5 Answers Solutions nptel | Jan 2026"
  },
  {
    id: "01vMcu5_VZs",
    title: "Introduction to Machine Learning NPTEL Exam Preparation 2024 & 2025 | Important questions Part 4"
  },
  {
    id: "HGgz8lwlhiM",
    title: "How to Prepare for Programming in Java NPTEL Exam (Proctored Exam) 2025 | May 4 2025"
  },
  {
    id: "f9PgUnJKC8I",
    title: "Cloud Computing Week 12 Assignment 12 Answers NPTEL Jan 2026 l #nptel  #cloudcomputing"
  },
  {
    id: "Uz6pSRdtU9M",
    title: "Programming in Java week 12 assignment Answers Solutions nptel assignment 12 | Jan 2026"
  },
  {
    id: "84wMLjTKAZg",
    title: "NPTEL Introduction to IoT (Internet of Things) Week 12 Assignment 12 Quiz Answers | 2026 Jan"
  },
  {
    id: "mcH2SIdsglo",
    title: "Data Base Management System Week 8 Assignment answers NPTELJan 2026 DBMS week 8 solutions | IITKGP"
  },
  {
    id: "PiZd4tdk0uw",
    title: "How to Connect Claude with Salesforce using MCP Server | What is Salesforce Headless 360"
  },
  {
    id: "AZ9ROTPyUAY",
    title: "How to create Agentforce Service Agent | Salesforce Agentforce Service Agent With Demo Use Case"
  },
  {
    id: "IFHvPBLWf3I",
    title: "Introduction to Machine Learning Week 10 Assignment 10 answer solution Jan 2026 NPTEL Swayam"
  },
  {
    id: "Da50AGESxYY",
    title: "FREE AICTE Online Internship 2025 for ALL students | With Certificate | Shell x Edunet AI Internship"
  },
  {
    id: "FyhFVtb9-1Y",
    title: "Week 0 Assignment | Introduction to Internet of Things NPTEL | All Answers Explained | IoT July 2025"
  },
  {
    id: "31jslPcUPsE",
    title: "Programming in Java week 0 assignment 0 Answers Solutions nptel assignment 0 | July 2025"
  },
  {
    id: "DS_Yy7bk8pc",
    title: "FREE Microsoft Online Internship 2025 for ALL students"
  }
];

const container = document.getElementById("videoContainer");

videos.forEach(video => {

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

//for top bar search functionality
function searchContent(){

    const keyword =
        document.getElementById("searchInput")
        .value
        .toLowerCase();

    const cards=document.querySelectorAll(".video");

    cards.forEach(card=>{

        const text=card.innerText.toLowerCase();

        if (text.includes(keyword))
            card.style.display = "";
        else
            card.style.display = "none";

    });

}

document
    .getElementById("searchInput")
    .addEventListener("keyup", searchContent);
