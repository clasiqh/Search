const input = document.getElementById("query");
const suggestions = document.getElementById("suggestions");

input.addEventListener("keyup", (e) => {
  suggestions.innerHTML = "";
  const text = input.value;
  if (text == "") {
    suggestions.style.display = "none";
  } else {
    for (var i = 0; i < 4; i++) {
      let div = document.createElement("div");
      div.innerHTML = text;
      div.className = "box";
      suggestions.appendChild(div);
    }
    suggestions.style.display = "flex";
    suggestions.style.width = "500px";
    suggestions.style.opacity = 100;
  }
});

document.body.addEventListener("click", (e) => {
  suggestions.style.opacity = 0;
  suggestions.style.width = "360px";
  setTimeout(() => {
    suggestions.style.display = "none";
  }, 200);
});
