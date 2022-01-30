const input = document.getElementById("query");
const suggestions = document.getElementById("suggestions");

input.addEventListener("keyup", (e) => {
  suggestions.innerHTML = "";
  const text = input.value;
  if (text == "") {
    suggestions.style.display = "none";
  } else {
    suggestions.style.display = "block";

    for (var i = 0; i < 4; i++) {
      let div = document.createElement("div");
      div.innerHTML = text;
      div.className = "box";
      suggestions.appendChild(div);
    }
  }
});
