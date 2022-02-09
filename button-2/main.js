function toggleFAB(btFale) {
  if (document.querySelector(btFale).classList.contains("show")) {
    document.querySelector(btFale).classList.remove("show");
  } else {
    document.querySelector(btFale).classList.add("show");
  }
}

document.querySelector(".btFale .main").addEventListener("click", function () {
  toggleFAB(".btFale");
});

document.querySelectorAll(".btFale div ").forEach((item) => {
  item.addEventListener("click", function () {
    toggleFAB(".btFale");
  });
});
