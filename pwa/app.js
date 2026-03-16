document.getElementById("btn").addEventListener("click", () => {
  alert("PWA fungerar!");
});


if ("serviceWorker" in navigator) {

  navigator.serviceWorker.register("service-worker.js")
  .then(() => {
    console.log("Service worker registrerad");
  });

}
