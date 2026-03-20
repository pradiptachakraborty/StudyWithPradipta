function openCard() {
  document.getElementById("infoCard").classList.add("active");
}

function closeCard() {
  document.getElementById("infoCard").classList.remove("active");
  document.getElementById("infoCardcloudcomputing").classList.remove("active");
  document.getElementById("infoCardMachineLearning").classList.remove("active");
  document.getElementById("infoCardInternetOfThings").classList.remove("active");
}

function openCardCloudComputing() {
  document.getElementById("infoCardcloudcomputing").classList.add("active");
}

function openCardMachineLearning(){
  document.getElementById("infoCardMachineLearning").classList.add("active");
}

function openCardInternetOfThings(){
  document.getElementById("infoCardInternetOfThings").classList.add("active");
}
