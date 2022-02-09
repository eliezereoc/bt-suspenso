function toggleFAB(btFale) {
  if (document.querySelector(btFale).classList.contains("show")) {
    document.querySelector(btFale).classList.remove("show");
  } else {
    document.querySelector(btFale).classList.add("show");
  }
}

document.querySelector(".btFale .main").addEventListener("click", () => {
  toggleFAB(".btFale");
});

document.querySelectorAll(".btFale ul li button").forEach((item) => {
  item.addEventListener("click", function () {
    toggleFAB(".btFale");
  });
});

function closeDiv() {
  document.querySelector(".btFale").classList.remove("show");
}
