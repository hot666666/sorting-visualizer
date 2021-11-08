async function bubbleSort() {
  const arr = document.querySelectorAll(".bar");
  for (let i = 0; i < arr.length - 1; i++) {
    console.log("In ith loop");
    for (let j = 0; j < arr.length - i - 1; j++) {
      arr[j].style.background = "#1E90FF";
      arr[j + 1].style.background = "#1E90FF";
      if (parseInt(arr[j].style.height) > parseInt(arr[j + 1].style.height)) {
        await sleep(delay);
        arr[j].style.background = "#DC143C";
        arr[j + 1].style.background = "#DC143C";
        swap(arr[j], arr[j + 1]);
      }
      await sleep(delay);
      arr[j].style.background = "cyan";
      arr[j + 1].style.background = "cyan";
    }
    arr[arr.length - 1 - i].style.background = "green";
  }
  arr[0].style.background = "green";
}

bubbleSortBtn.addEventListener("click", async function () {
  const bar_arr = document.querySelectorAll(".bar");
  initializeColor(bar_arr);
  disableButtons();
  await bubbleSort();
  enableButtons();
});
