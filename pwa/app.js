document.getElementById("btn").addEventListener("click", () => {
  alert("PWA fungerar!");
});


if ("serviceWorker" in navigator) {

  navigator.serviceWorker.register("service-worker.js")
  .then(() => {
    console.log("Service worker registrerad");
  });

}
window.addEventListener("deviceorientation", event => {

  document.getElementById("alpha").textContent = event.alpha.toFixed(2);
  document.getElementById("beta").textContent = event.beta.toFixed(2);
  document.getElementById("gamma").textContent = event.gamma.toFixed(2);

});

 document.getElementById("test").addEventListener("click", () => {
  window.addEventListener("deviceorientation", handleOrientation);
});