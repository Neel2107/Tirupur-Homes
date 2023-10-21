let enqCard = document.getElementsByClassName("btn1")[0];
let theWrapper = document.getElementsByClassName("enqWrapper")[0];
let theCard = document.getElementsByClassName("enquiryCard")[0];


enqCard.addEventListener("click", () => {
  if (theWrapper) {
theWrapper.style.display="block"

    theWrapper.style.top = "0%";
    theWrapper.style.left = "0%";

    theWrapper.style.display = "flex" 
    theWrapper.style.justifyContent = "center" 

    // theWrapper.style.backgroundColor ="rgba(0,0,0,0.2)"
  } else {
    console.error("enqWrapper not found");
  }
});

window.addEventListener("click", (event) => {
  if (!theCard.contains(event.target) && !enqCard.contains(event.target)) {
    theWrapper.style.display = "none";
  }
});
