const between = document.querySelector("#between");
const startBtn = document.querySelector("#start");
const hourBox = document.querySelector("#hour");
const secundBox = document.querySelector("#secund");
const stopBtn = document.querySelector("#stop");
const restartBtn = document.querySelector("#restart");

let count = 0;
stopBtn.disabled = "false";

startBtn.addEventListener("click", () => {
  startBtn.disabled = "false";
  // stopBtn.disabled = "false";
  showStopBtn();
  const getSeconds = setInterval(() => {
    secundBox.innerHTML = count;
    count++;
    stopBtn.addEventListener("click", () => {
      clearInterval(getSeconds);
      startBtn.removeAttribute("disabled");
      stopBtn.disabled = "false";
    });
  }, 1000);
});
restartBtn.addEventListener('click', ()=> {
  count = 0;
  startBtn.disabled = "false";
  // stopBtn.disabled = "false";
  showStopBtn();
  const getSeconds = setInterval(() => {
    secundBox.innerHTML = count;
    count++;
    stopBtn.addEventListener("click", () => {
      clearInterval(getSeconds);
      startBtn.removeAttribute("disabled");
      stopBtn.disabled = "false";
    });
  }, 1000);
})
function showStopBtn() {
  stopBtn.removeAttribute("disabled");
}
