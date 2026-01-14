function unlock() {
  const ans = document.getElementById("ans").value;
  if (ans == 7) {
    document.getElementById("puzzle").classList.add("hidden");
    document.getElementById("letter").classList.remove("hidden");
    document.getElementById("music").play();
  } else {
    alert("Wrong answer 😅 Try again!");
  }
}

function goCake() {
  window.location.href = "cake.html";
}

function cutCake() {
  const layers = document.querySelectorAll(".layer");
  layers.forEach(layer => {
    layer.classList.add("cut");
  });
}
